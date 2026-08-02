<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

interface TaskItem {
  id: string;
  lf: string;
  text: string;
}

interface DayEntry {
  dayName: string;
  dateStr: string;
  hours: number;
  status: string; // 'work' | 'school' | '(URLAUB)' | '(FEIERTAG)' | '(KRANK)' | '(FREI)'
  tasks: TaskItem[];
  isWeekend: boolean;
  holidayName?: string;
}

interface BuildingBlock {
  label: string;
  text: string;
  isCustom?: boolean;
  isJs?: boolean;
}

const selectedDate = ref<string>('');
const includeHours = ref<boolean>(false);
const includeWeekend = ref<boolean>(false);
const defaultHours = ref<number>(8);
const showToast = ref<boolean>(false);
const toastMessage = ref<string>('✅ Text in die Zwischenablage kopiert!');

const daysOfWeekGerman = ['MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG', 'SONNTAG'];

const lernfelder = [
  { code: '', title: 'Kein LF' },
  { code: 'LF1', title: 'LF1: Unternehmen & Rolle' },
  { code: 'LF2', title: 'LF2: Arbeitsplätze ausstatten' },
  { code: 'LF3', title: 'LF3: Clients in Netzwerke' },
  { code: 'LF4', title: 'LF4: Schutzbedarfsanalyse' },
  { code: 'LF5', title: 'LF5: Software & Daten' },
  { code: 'LF6', title: 'LF6: Serviceanfragen' },
  { code: 'LF7', title: 'LF7: Cyber-physische Systeme' },
  { code: 'LF8', title: 'LF8: Daten bereitstellen' },
  { code: 'LF9', title: 'LF9: Netzwerke & Dienste' },
  { code: 'LF10c', title: 'LF10c: Maschinelles Lernen' },
  { code: 'LF11c', title: 'LF11c: Prozesse analysieren' },
  { code: 'LF12c', title: 'LF12c: Kundenspez. Datenanalyse' },
];

/* Helper to compute ISO Calendar Week (KW) */
function getCalendarWeek(dateStrDE: string): number {
  const parts = dateStrDE.split('.');
  if (parts.length !== 3) return 1;
  const date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  return 1 + Math.round((firstThursday - target.valueOf()) / 604800000);
}

/* JSDoc Template Snippet for VS Code Typehinting */
const jsdocTemplateSnippet = `/**
 * Advanced Berichtsheft Textbaustein (Skript)
 * 
 * @param {string} ticket - Ticket-Nummer oder ID (Benutzerabfrage)
 * @param {string} modul - Modulname oder Komponente (Benutzerabfrage)
 * @param {string} date - Automatisch: Tagesdatum (z. B. "27.07.2026")
 * @param {string} day - Automatisch: Wochentag (z. B. "MONTAG")
 * @param {number} hours - Automatisch: Tagesstunden (z. B. 8)
 * @param {number} kw - Automatisch: Kalenderwoche (z. B. 31)
 * @param {string} year - Automatisch: Jahr (z. B. "2026")
 * @param {string} month - Automatisch: Monat (z. B. "07")
 * @param {string} status - Automatisch: Tagesstatus ("work" | "school" | "(URLAUB)")
 * @param {string} holiday - Automatisch: Feiertag Name oder ""
 * @param {boolean} isweekend - Automatisch: Ist Wochenende (true / false)
 * @param {Object} entry - Automatisch: Vollständiges Tages-Objekt
 * @returns {Promise<string> | string} Formatisierter Text für das Berichtsheft
 */
async function(ticket, modul, date, day, hours, kw, year, month, status, holiday, isweekend, entry) {
  // Beispiel 1: HTTP-Abfrage per REST-API
  // const res = await fetch(\`https://api.github.com/repos/\${modul}/commits/\${ticket}\`);
  // const data = await res.json();
  
  return \`KW\${kw}: Modul-Entwicklung [\${modul}] für Ticket #\${ticket} (\${hours}h)\`;
}`;

/* Default Building Blocks tailored to Fachinformatiker:in Daten- & Prozessanalyse */
const defaultBuildingBlocks: BuildingBlock[] = [
  { label: '📊 Datenanalyse & ETL (mit Thema)', text: 'Datenanalyse und ETL-Prozess für {{thema}}' },
  { label: '🎫 Ticket-Bearbeitung #{{ticket_nr}}', text: 'Bearbeitung von Ticket #{{ticket_nr}} ({{beschreibung}})' },
  { label: '📈 Dashboards & Visualisierung', text: 'Erstellung und Pflege von Dashboards in {{tool}}' },
  { label: '🐍 Python-Skriptentwicklung', text: 'Entwicklung von Python-Skript zur {{aufgabe}}' },
  { label: '🗄️ SQL-Abfragen & Datenbanken', text: 'Erstellung von SQL-Abfragen für {{datenbank}}' },
  { label: '⚙️ Prozessanalyse (BPMN)', text: 'Analyse und BPMN-Modellierung des Prozesses {{prozess}}' },
  { label: '👥 Daily Standup / Team-Meeting', text: 'Teilnahme am Daily Standup & Team-Meeting' },
  { label: '📖 Fachdokumentation', text: 'Erstellung der Fachdokumentation für {{thema}}' },
  { label: '💬 Abstimmung mit Ausbilder', text: 'Abstimmungsgespräch mit Ausbilder bezüglich {{thema}}' },
  { label: '📝 Berichtsheftführung', text: 'Pflege und Dokumentation des Berichtshefts' },
  { 
    label: '⚡ [JS] Ticket Formatierer', 
    text: 'function(ticket, modul, hours, kw) { return "KW" + kw + ": Entwicklung am Modul [" + modul + "] für Ticket #" + ticket + " (" + hours + "h)"; }',
    isJs: true 
  },
  { 
    label: '🌐 [JS-API] GitHub Commit Abfragen', 
    text: 'async function(repo, commit_hash) { const res = await fetch("https://api.github.com/repos/" + repo + "/commits/" + commit_hash); const d = await res.json(); return "GitHub Commit [" + commit_hash.substring(0,7) + "]: " + (d.commit ? d.commit.message.split("\\n")[0] : "Commit geladen"); }',
    isJs: true 
  },
  { 
    label: '🌐 [JS-API] External Ticket Data', 
    text: 'async function(ticket_id) { const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + ticket_id); const d = await res.json(); return "Ticket #" + ticket_id + " (" + d.title + ")"; }',
    isJs: true 
  }
];

const customBuildingBlocks = ref<BuildingBlock[]>([]);
const dayEntries = ref<DayEntry[]>([]);
const nationalHolidaysMap = ref<Record<string, string>>({});
let isRestoringDraft = false;

function createTaskId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function getMonday(d: Date): Date {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

function formatDateDE(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

function formatDateISO(d: Date): string {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function initDate() {
  const today = new Date();
  const monday = getMonday(today);
  selectedDate.value = monday.toISOString().split('T')[0];
  loadWeekDraftOrInit();
}

function changeWeek(offsetDays: number) {
  if (!selectedDate.value) return;
  const current = new Date(selectedDate.value);
  current.setDate(current.getDate() + offsetDays);
  selectedDate.value = current.toISOString().split('T')[0];
}

/* Fetch German nationwide public holidays from Nager.Date API */
async function fetchGermanNationwideHolidays(year: number) {
  const cacheKey = `fidup_bh_holidays_${year}`;
  if (typeof window !== 'undefined' && window.localStorage) {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        nationalHolidaysMap.value = { ...nationalHolidaysMap.value, ...JSON.parse(cached) };
        return;
      } catch (e) {
        console.error(e);
      }
    }
  }

  try {
    const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/DE`);
    if (res.ok) {
      const data = await res.json();
      const map: Record<string, string> = {};
      if (Array.isArray(data)) {
        data.forEach((item: any) => {
          if (item.global === true || !item.counties || item.counties.length === 0) {
            map[item.date] = item.localName;
          }
        });
      }
      nationalHolidaysMap.value = { ...nationalHolidaysMap.value, ...map };
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(cacheKey, JSON.stringify(map));
      }
    }
  } catch (err) {
    console.warn('Feiertage konnten nicht geladen werden:', err);
  }
}

function applyHolidaysToWeek() {
  let foundHoliday = false;
  dayEntries.value.forEach((entry) => {
    const parts = entry.dateStr.split('.');
    if (parts.length === 3) {
      const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const holiday = nationalHolidaysMap.value[isoDate];
      if (holiday) {
        entry.holidayName = holiday;
        if (entry.status === 'work' && (entry.tasks.length === 0 || (entry.tasks.length === 1 && !entry.tasks[0].text.trim()))) {
          entry.status = '(FEIERTAG)';
          entry.hours = 0;
          entry.tasks = [];
          foundHoliday = true;
        }
      }
    }
  });

  if (foundHoliday) {
    triggerToast('🚩 Bundesweiter Feiertag automatisch belegt!');
  }
}

function updateDays() {
  if (!selectedDate.value) return;

  const baseMonday = new Date(selectedDate.value);
  const newEntries: DayEntry[] = [];

  for (let i = 0; i < 7; i++) {
    const current = new Date(baseMonday);
    current.setDate(baseMonday.getDate() + i);
    const existing = dayEntries.value[i];
    const isWeekendDay = i >= 5;
    const isoDate = formatDateISO(current);

    let statusVal = existing ? existing.status : (isWeekendDay ? '(FREI)' : 'work');
    let hoursVal = existing ? existing.hours : (isWeekendDay ? 0 : defaultHours.value);
    let tasksVal: TaskItem[] = existing && existing.tasks ? [...existing.tasks] : [];
    const holidayName = nationalHolidaysMap.value[isoDate];

    if (!existing && holidayName && !isWeekendDay) {
      statusVal = '(FEIERTAG)';
      hoursVal = 0;
      tasksVal = [];
    } else if (tasksVal.length === 0 && statusVal !== '(FREI)' && statusVal !== '(URLAUB)' && statusVal !== '(FEIERTAG)' && statusVal !== '(KRANK)') {
      tasksVal.push({ id: createTaskId(), lf: '', text: '' });
    }

    newEntries.push({
      dayName: daysOfWeekGerman[i],
      dateStr: formatDateDE(current),
      hours: hoursVal,
      status: statusVal,
      tasks: tasksVal,
      isWeekend: isWeekendDay,
      holidayName: holidayName
    });
  }
  dayEntries.value = newEntries;
}

async function loadWeekDraftOrInit() {
  if (!selectedDate.value) return;
  isRestoringDraft = true;

  const currentYear = new Date(selectedDate.value).getFullYear();
  await fetchGermanNationwideHolidays(currentYear);

  if (typeof window !== 'undefined' && window.localStorage) {
    const key = `fidup_bh_week_${selectedDate.value}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          dayEntries.value = parsed;
          if (dayEntries.value.length < 7) {
            updateDays();
          }
          applyHolidaysToWeek();
          isRestoringDraft = false;
          return;
        }
      } catch (e) {
        console.error('Fehler beim Laden des Wochententwurfs:', e);
      }
    }
  }

  updateDays();
  applyHolidaysToWeek();
  isRestoringDraft = false;
}

function saveWeekDraft() {
  if (isRestoringDraft || !selectedDate.value) return;
  if (typeof window !== 'undefined' && window.localStorage) {
    const key = `fidup_bh_week_${selectedDate.value}`;
    localStorage.setItem(key, JSON.stringify(dayEntries.value));
  }
}

watch(selectedDate, () => {
  loadWeekDraftOrInit();
});

watch(dayEntries, () => {
  saveWeekDraft();
}, { deep: true });

watch(defaultHours, (newVal) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('fidup_bh_default_hours', String(newVal));
  }
  dayEntries.value.forEach((entry) => {
    if (!entry.isWeekend && (entry.status === 'work' || entry.status === 'school')) {
      entry.hours = newVal;
    }
  });
});

watch(includeHours, (newVal) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('fidup_bh_include_hours', String(newVal));
  }
});

watch(includeWeekend, (newVal) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('fidup_bh_include_weekend', String(newVal));
  }
});

/* Displayed days filtered by weekend toggle */
const displayedDayEntries = computed(() => {
  if (includeWeekend.value) {
    return dayEntries.value;
  }
  return dayEntries.value.slice(0, 5);
});

function applyWeekPreset(e: Event) {
  const target = e.target as HTMLSelectElement;
  const val = target.value;
  if (!val) return;

  if (val === 'work') {
    dayEntries.value.forEach((entry) => {
      if (!entry.isWeekend) {
        entry.status = 'work';
        entry.hours = defaultHours.value;
        if (entry.tasks.length === 0) {
          entry.tasks.push({ id: createTaskId(), lf: '', text: '' });
        }
      }
    });
    applyHolidaysToWeek();
    triggerToast('💼 Reguläre Arbeitswoche auf Werktage angewendet!');
  } else if (val === 'school') {
    dayEntries.value.forEach((entry) => {
      if (!entry.isWeekend) {
        entry.status = 'school';
        entry.hours = defaultHours.value;
        if (entry.tasks.length === 0) {
          entry.tasks.push({ id: createTaskId(), lf: '', text: '' });
        }
      }
    });
    triggerToast('🏫 Berufsschulwoche auf Werktage angewendet!');
  } else {
    dayEntries.value.forEach((entry) => {
      if (!entry.isWeekend) {
        entry.status = val;
        entry.hours = 0;
        entry.tasks = [];
      }
    });
    triggerToast(`⚡ Vorlage "${val}" auf Werktage angewendet!`);
  }
  target.value = '';
}

function copyFromPreviousWeek() {
  if (!selectedDate.value) return;
  const current = new Date(selectedDate.value);
  current.setDate(current.getDate() - 7);
  const prevKey = `fidup_bh_week_${current.toISOString().split('T')[0]}`;

  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem(prevKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach((prevEntry: DayEntry, idx: number) => {
            if (dayEntries.value[idx]) {
              dayEntries.value[idx].status = prevEntry.status;
              dayEntries.value[idx].hours = prevEntry.hours;
              dayEntries.value[idx].tasks = prevEntry.tasks.map(t => ({
                id: createTaskId(),
                lf: t.lf,
                text: t.text
              }));
            }
          });
          triggerToast('📋 Stichpunkte aus Vorwoche kopiert!');
          return;
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
  triggerToast('⚠️ Keine gespeicherte Vorwoche gefunden.');
}

/* Master Import / Export Logic */
function handleMasterShareSelect(e: Event) {
  const target = e.target as HTMLSelectElement;
  const action = target.value;
  if (!action) return;

  if (action === 'export_full_json') {
    exportFullJson();
  } else if (action === 'import_full_json') {
    triggerImportFileInput();
  } else if (action === 'copy_json_clipboard') {
    copyFullJsonToClipboard();
  } else if (action === 'import_json_clipboard') {
    importJsonFromClipboard();
  } else if (action === 'export_blocks_json') {
    exportBuildingBlocksJson();
  } else if (action === 'copy_jsdoc_template') {
    copyJsdocTemplateToClipboard();
  }

  target.value = '';
}

async function copyJsdocTemplateToClipboard() {
  try {
    await navigator.clipboard.writeText(jsdocTemplateSnippet);
    triggerToast('📋 JSDoc-Skript-Vorlage kopiert! (Ideal für VS Code)');
  } catch (err) {
    console.error(err);
  }
}

function getMasterPayload() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    config: {
      defaultHours: defaultHours.value,
      includeHours: includeHours.value,
      includeWeekend: includeWeekend.value
    },
    customBuildingBlocks: customBuildingBlocks.value,
    currentWeek: {
      mondayDate: selectedDate.value,
      entries: dayEntries.value
    }
  };
}

function exportFullJson() {
  const payload = getMasterPayload();
  const str = JSON.stringify(payload, null, 2);
  const blob = new Blob([str], { type: 'application/json;charset=utf-8' });
  const element = document.createElement('a');
  element.href = URL.createObjectURL(blob);
  element.download = `Berichtsheft_Backup_${selectedDate.value || 'data'}.json`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  triggerToast('📤 Vollständiges Backup heruntergeladen!');
}

function exportBuildingBlocksJson() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    type: 'custom_building_blocks',
    customBuildingBlocks: customBuildingBlocks.value
  };
  const str = JSON.stringify(payload, null, 2);
  const blob = new Blob([str], { type: 'application/json;charset=utf-8' });
  element.href = URL.createObjectURL(blob);
  element.download = `Textbausteine_Backup.json`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  triggerToast('🧩 Textbausteine als JSON heruntergeladen!');
}

async function copyFullJsonToClipboard() {
  try {
    const payload = getMasterPayload();
    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    triggerToast('📋 JSON-Backup in Zwischenablage kopiert!');
  } catch (err) {
    console.error(err);
  }
}

function triggerImportFileInput() {
  const fileInput = document.getElementById('import-json-file') as HTMLInputElement;
  if (fileInput) {
    fileInput.click();
  }
}

function handleFileImport(e: Event) {
  const target = e.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;
  const file = target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const content = event.target?.result as string;
      const data = JSON.parse(content);
      applyImportedData(data);
      target.value = '';
    } catch (err) {
      alert('Fehler beim Einlesen der JSON-Datei: Ungültiges Format.');
    }
  };
  reader.readAsText(file);
}

async function importJsonFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (!text || !text.trim()) {
      alert('Die Zwischenablage ist leer.');
      return;
    }
    const data = JSON.parse(text);
    applyImportedData(data);
  } catch (err) {
    alert('Fehler beim Importieren aus der Zwischenablage: Ungültiges JSON-Format.');
  }
}

function applyImportedData(data: any) {
  if (!data || typeof data !== 'object') {
    alert('Ungültiges Datenformat.');
    return;
  }

  // Restore config
  if (data.config) {
    if (typeof data.config.defaultHours === 'number') defaultHours.value = data.config.defaultHours;
    if (typeof data.config.includeHours === 'boolean') includeHours.value = data.config.includeHours;
    if (typeof data.config.includeWeekend === 'boolean') includeWeekend.value = data.config.includeWeekend;
  }

  // Restore custom building blocks
  if (Array.isArray(data.customBuildingBlocks)) {
    customBuildingBlocks.value = data.customBuildingBlocks;
    saveCustomBlocks();
  }

  // Restore week entries
  if (data.currentWeek) {
    if (data.currentWeek.mondayDate) {
      selectedDate.value = data.currentWeek.mondayDate;
    }
    if (Array.isArray(data.currentWeek.entries)) {
      dayEntries.value = data.currentWeek.entries;
      saveWeekDraft();
    }
  }

  triggerToast('📥 Daten & Einstellungen erfolgreich importiert!');
}

/* Completeness Check */
const completedDaysCount = computed(() => {
  return displayedDayEntries.value.filter(entry => {
    if (entry.status !== 'work' && entry.status !== 'school') return true;
    return entry.tasks.some(task => task.text.trim().length > 0 || task.lf.length > 0);
  }).length;
});

const isWeekComplete = computed(() => {
  return displayedDayEntries.value.length > 0 && completedDaysCount.value === displayedDayEntries.value.length;
});

const completenessStatusText = computed(() => {
  const total = displayedDayEntries.value.length;
  const current = completedDaysCount.value;
  if (current === total) {
    return `✅ ${current}/${total} Tage befüllt`;
  }
  return `⚠️ ${current}/${total} Tage befüllt`;
});

function onStatusChange(entry: DayEntry) {
  if (entry.status !== 'work' && entry.status !== 'school') {
    entry.hours = 0;
  } else {
    entry.hours = entry.isWeekend ? 0 : defaultHours.value;
    if (entry.tasks.length === 0) {
      entry.tasks.push({ id: createTaskId(), lf: '', text: '' });
    }
  }
}

function addTask(entry: DayEntry) {
  entry.tasks.push({ id: createTaskId(), lf: '', text: '' });
}

/* Check if block text is a JS function block */
function isJsFunctionBlock(text: string): boolean {
  const trimmed = text.trim();
  return (trimmed.startsWith('function') || trimmed.startsWith('async') || trimmed.includes('=>')) && (trimmed.includes('{') || trimmed.includes('=>'));
}

/* Deterministic parser for JS building blocks */
function parseJsBlock(code: string): { argNames: string[]; body: string } {
  let str = code.trim();
  if (str.endsWith(';')) str = str.slice(0, -1).trim();

  // Strip leading JSDoc comments if present (/** ... */)
  str = str.replace(/\/\*\*[\s\S]*?\*\//g, '').trim();

  // Strip leading function / async function keywords and optional function name
  str = str.replace(/^(?:async\s+)?function(?:\s+[a-zA-Z0-9_$]+)?\s*/i, '').trim();

  // Check if str starts with parameters "(a, b, c)"
  if (str.startsWith('(')) {
    const closeParenIdx = str.indexOf(')');
    if (closeParenIdx !== -1) {
      const rawArgs = str.substring(1, closeParenIdx).trim();
      const argNames = rawArgs ? rawArgs.split(',').map(a => a.trim()).filter(Boolean) : [];
      
      let rest = str.substring(closeParenIdx + 1).trim();
      if (rest.startsWith('=>')) {
        rest = rest.substring(2).trim();
      }
      
      if (rest.startsWith('{') && rest.endsWith('}')) {
        rest = rest.substring(1, rest.length - 1).trim();
      }
      
      const body = rest.includes('return') ? rest : `return ${rest};`;
      return { argNames, body };
    }
  }

  // Check for single arg arrow function: "arg1 => expression" or "arg1 => { ... }"
  const arrowMatch = str.match(/^([a-zA-Z0-9_$]+)\s*=>\s*([\s\S]*)$/);
  if (arrowMatch) {
    const argNames = [arrowMatch[1].trim()];
    let rest = arrowMatch[2].trim();
    if (rest.startsWith('{') && rest.endsWith('}')) {
      rest = rest.substring(1, rest.length - 1).trim();
    }
    const body = rest.includes('return') ? rest : `return ${rest};`;
    return { argNames, body };
  }

  // Fallback: No parameters declared, treat entire string as function body
  const body = str.includes('return') ? str : `return ${str};`;
  return { argNames: [], body };
}

/* Execute Advanced JS / Async API Building Block */
async function executeJsBuildingBlock(code: string, entry: DayEntry): Promise<string | null> {
  triggerToast('⚡ JS-Skript wird ausgeführt...');

  const { argNames, body } = parseJsBlock(code);
  const argValues: any[] = [];

  for (const argName of argNames) {
    const lower = argName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (lower === 'date') {
      argValues.push(entry.dateStr);
    } else if (lower === 'day') {
      argValues.push(entry.dayName);
    } else if (lower === 'hours') {
      argValues.push(entry.hours);
    } else if (lower === 'entry') {
      argValues.push(entry);
    } else if (lower === 'year') {
      const parts = entry.dateStr.split('.');
      argValues.push(parts[2] || '');
    } else if (lower === 'month') {
      const parts = entry.dateStr.split('.');
      argValues.push(parts[1] || '');
    } else if (lower === 'kw' || lower === 'calendarweek' || lower === 'woche') {
      argValues.push(getCalendarWeek(entry.dateStr));
    } else if (lower === 'status') {
      argValues.push(entry.status);
    } else if (lower === 'isweekend') {
      argValues.push(entry.isWeekend);
    } else if (lower === 'holiday' || lower === 'holidayname' || lower === 'feiertag') {
      argValues.push(entry.holidayName || '');
    } else if (lower === 'isodate') {
      const parts = entry.dateStr.split('.');
      argValues.push(parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : '');
    } else if (lower === 'mondaydate' || lower === 'monday') {
      argValues.push(displayedDayEntries.value[0]?.dateStr || selectedDate.value);
    } else {
      const val = window.prompt(`Wert für Argument "${argName}" eingeben:`, '');
      argValues.push(val !== null ? val.trim() : '');
    }
  }

  try {
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    const dynamicFn = new AsyncFunction(...argNames, body);
    const result = await dynamicFn(...argValues);
    return typeof result === 'string' ? result : JSON.stringify(result);
  } catch (e: any) {
    alert(`Fehler bei der Ausführung des JS-Textbausteins:\n${e.message}`);
    return null;
  }
}

/* Process dynamic variables or Async JS functions in building block text */
async function processVariables(rawText: string, entry: DayEntry): Promise<string | null> {
  if (isJsFunctionBlock(rawText)) {
    return await executeJsBuildingBlock(rawText, entry);
  }

  let processed = rawText;

  // Expanded auto variables
  processed = processed.replace(/\{\{\s*date\s*\}\}/gi, entry.dateStr);
  processed = processed.replace(/\{\{\s*day\s*\}\}/gi, entry.dayName);
  processed = processed.replace(/\{\{\s*hours\s*\}\}/gi, String(entry.hours));
  processed = processed.replace(/\{\{\s*year\s*\}\}/gi, entry.dateStr.split('.')[2] || '');
  processed = processed.replace(/\{\{\s*month\s*\}\}/gi, entry.dateStr.split('.')[1] || '');
  processed = processed.replace(/\{\{\s*(kw|calendarweek|woche)\s*\}\}/gi, String(getCalendarWeek(entry.dateStr)));
  processed = processed.replace(/\{\{\s*status\s*\}\}/gi, entry.status);
  processed = processed.replace(/\{\{\s*(holiday|feiertag)\s*\}\}/gi, entry.holidayName || '');
  processed = processed.replace(/\{\{\s*isodate\s*\}\}/gi, () => {
    const parts = entry.dateStr.split('.');
    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : '';
  });

  // Prompt variables like {{input}}, {{ticket_nr}}, {{thema}}
  const matches = Array.from(processed.matchAll(/\{\{\s*([a-zA-Z0-9_\-\s]+)\s*\}\}/g));
  
  for (const match of matches) {
    const fullMatch = match[0];
    const varName = match[1].trim();

    const promptTitle = varName === 'input' 
      ? `Wert eingeben:` 
      : `Wert für "${varName}" eingeben:`;

    const userInput = window.prompt(promptTitle, '');
    const replacement = userInput !== null ? userInput.trim() : '';

    processed = processed.replaceAll(fullMatch, replacement);
  }

  return processed;
}

async function addBuildingBlock(entry: DayEntry, rawBlockText: string) {
  if (!rawBlockText) return;
  const processedText = await processVariables(rawBlockText, entry);
  if (processedText === null) return; // JS execution cancelled or errored
  
  if (entry.tasks.length === 1 && !entry.tasks[0].text.trim() && !entry.tasks[0].lf) {
    entry.tasks[0].text = processedText;
  } else {
    entry.tasks.push({ id: createTaskId(), lf: '', text: processedText });
  }
}

function handleBuildingBlockSelect(entry: DayEntry, value: string) {
  if (value === '__CREATE_CUSTOM__') {
    const input = window.prompt(
      'Neuen eigenen Textbaustein eingeben:\n\n' +
      '• Standard-Baustein: "Bearbeitung von Ticket #{{ticket_nr}}"\n' +
      '• Async-JS / API: async function(ticket, kw) { const r = await fetch("..."); return "API: " + r; }\n\n' +
      'Tipp: JSDoc-Kommentare (/** ... */) für Type-Hints in VS Code werden automatisch unterstützt!'
    );
    if (input && input.trim()) {
      const trimmed = input.trim();
      const isJs = isJsFunctionBlock(trimmed);
      const prefix = isJs ? '⚡ [JS] ' : '⭐ ';
      
      // Clean label text without JSDoc comments for UI dropdown
      const cleanTextForLabel = trimmed.replace(/\/\*\*[\s\S]*?\*\//g, '').trim();
      const labelText = cleanTextForLabel.length > 35 ? cleanTextForLabel.substring(0, 32) + '...' : cleanTextForLabel;

      const newBlock: BuildingBlock = {
        label: `${prefix}${labelText}`,
        text: trimmed,
        isCustom: true,
        isJs: isJs
      };
      customBuildingBlocks.value.push(newBlock);
      saveCustomBlocks();
      addBuildingBlock(entry, trimmed);
      triggerToast(isJs ? '⚡ JS-Textbaustein gespeichert!' : '✨ Eigener Textbaustein gespeichert!');
    }
  } else if (value === '__MANAGE_CUSTOM__') {
    manageCustomBlocks();
  } else if (value) {
    addBuildingBlock(entry, value);
  }
}

function manageCustomBlocks() {
  if (customBuildingBlocks.value.length === 0) {
    alert('Keine eigenen Textbausteine vorhanden.');
    return;
  }

  let listText = 'Wähle die Nummer des Bausteins, den du LÖSCHEN möchtest:\n\n';
  customBuildingBlocks.value.forEach((b, idx) => {
    listText += `[${idx + 1}] ${b.label}\n`;
  });
  listText += '\nGib die Nummer ein (oder Abbrechen):';

  const answer = window.prompt(listText);
  if (answer) {
    const num = parseInt(answer.trim(), 10);
    if (!isNaN(num) && num >= 1 && num <= customBuildingBlocks.value.length) {
      const removed = customBuildingBlocks.value.splice(num - 1, 1);
      saveCustomBlocks();
      triggerToast(`🗑️ Baustein "${removed[0]?.label}" gelöscht.`);
    } else {
      alert('Ungültige Nummer eingegeben.');
    }
  }
}

function saveCustomBlocks() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('fidup_bh_custom_blocks', JSON.stringify(customBuildingBlocks.value));
  }
}

function loadCustomBlocks() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem('fidup_bh_custom_blocks');
    if (saved) {
      try {
        customBuildingBlocks.value = JSON.parse(saved);
      } catch (e) {
        console.error('Fehler beim Laden eigener Textbausteine:', e);
      }
    }
  }
}

function removeTask(entry: DayEntry, index: number) {
  entry.tasks.splice(index, 1);
  if (entry.tasks.length === 0 && (entry.status === 'work' || entry.status === 'school')) {
    entry.tasks.push({ id: createTaskId(), lf: '', text: '' });
  }
}

const generatedText = computed(() => {
  if (displayedDayEntries.value.length === 0) return '';

  let output = '';
  let totalHours = 0;

  displayedDayEntries.value.forEach((entry) => {
    const hoursSuffix = includeHours.value ? ` (${entry.hours} Std.)` : '';
    output += `${entry.dayName}, ${entry.dateStr}${hoursSuffix}\n`;
    
    if (entry.status !== 'work' && entry.status !== 'school') {
      output += `${entry.status}\n`;
    } else {
      let hasTasks = false;
      entry.tasks.forEach((task) => {
        const trimmed = task.text.trim();
        const lfPrefix = task.lf ? `${task.lf} ` : '';
        if (trimmed || task.lf) {
          hasTasks = true;
          output += `- ${lfPrefix}${trimmed}\n`.trimEnd() + '\n';
        }
      });
      if (!hasTasks) {
        output += `- [Tätigkeiten eintragen]\n`;
      }
    }
    output += '\n';
    totalHours += Number(entry.hours) || 0;
  });

  if (includeHours.value) {
    output += `GESAMTSTUNDEN: ${totalHours} Std.\n`;
  }

  return output.trim();
});

function resetAll() {
  dayEntries.value.forEach(entry => {
    if (entry.isWeekend) {
      entry.status = '(FREI)';
      entry.hours = 0;
      entry.tasks = [];
    } else {
      entry.status = 'work';
      entry.hours = defaultHours.value;
      entry.tasks = [{ id: createTaskId(), lf: '', text: '' }];
    }
  });
  applyHolidaysToWeek();
  saveWeekDraft();
}

function triggerToast(msg: string) {
  toastMessage.value = msg;
  showToast.value = true;
  setTimeout(() => { showToast.value = false; }, 2200);
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedText.value);
    triggerToast('✅ Text in die Zwischenablage kopiert!');
  } catch (err) {
    console.error('Fehler beim Kopieren:', err);
  }
}

function downloadTxt() {
  const element = document.createElement('a');
  const file = new Blob([generatedText.value], { type: 'text/plain;charset=utf-8' });
  element.href = URL.createObjectURL(file);
  const firstDay = displayedDayEntries.value[0]?.dateStr || 'berichtsheft';
  element.download = `Berichtsheft_${firstDay}.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedDefaultHours = localStorage.getItem('fidup_bh_default_hours');
    if (savedDefaultHours !== null) {
      defaultHours.value = parseFloat(savedDefaultHours) || 8;
    }
    const savedIncludeHours = localStorage.getItem('fidup_bh_include_hours');
    if (savedIncludeHours !== null) {
      includeHours.value = savedIncludeHours === 'true';
    }
    const savedIncludeWeekend = localStorage.getItem('fidup_bh_include_weekend');
    if (savedIncludeWeekend !== null) {
      includeWeekend.value = savedIncludeWeekend === 'true';
    }
    loadCustomBlocks();
  }
  initDate();
});
</script>

<template>
  <div class="bh-container">
    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="showToast" class="bh-toast">
        {{ toastMessage }}
      </div>
    </Transition>

    <!-- Hidden File Input for JSON Import -->
    <input type="file" id="import-json-file" accept=".json" style="display: none;" @change="handleFileImport" />

    <!-- Redesigned Master Toolbar -->
    <div class="bh-card bh-toolbar-master">
      <!-- Main Controls Row 1 -->
      <div class="toolbar-row row-primary">
        <div class="controls-left">
          <div class="field-group">
            <label for="monday-date" class="field-label">Woche ab (Montag)</label>
            <div class="date-nav-group">
              <button type="button" class="btn btn-secondary btn-icon-nav" title="Vorherige Woche (-7 Tage)" @click="changeWeek(-7)">◀️</button>
              <input id="monday-date" v-model="selectedDate" type="date" class="input-field date-input" />
              <button type="button" class="btn btn-secondary btn-icon-nav" title="Nächste Woche (+7 Tage)" @click="changeWeek(7)">▶️</button>
            </div>
          </div>

          <div class="field-group">
            <label for="default-hours" class="field-label">Std. / Tag</label>
            <div class="hours-def-wrapper">
              <input 
                id="default-hours" 
                v-model.number="defaultHours" 
                type="number" 
                min="0" 
                max="24" 
                step="0.5" 
                class="hours-def-field" 
              />
              <span class="hours-unit-suffix">h</span>
            </div>
          </div>

          <div class="field-group">
            <label class="field-label">Wochen-Vorlage</label>
            <select class="select-field preset-select" @change="applyWeekPreset">
              <option value="">⚡ Vorlage anwenden...</option>
              <option value="work">💼 Reguläre Arbeitswoche (Mo–Fr)</option>
              <option value="school">🏫 Berufsschulwoche (Mo–Fr)</option>
              <option value="(URLAUB)">🌴 Urlaubswoche (Mo–Fr)</option>
              <option value="(KRANK)">🤒 Krankheitswoche (Mo–Fr)</option>
              <option value="(FEIERTAG)">🚩 Feiertagswoche (Mo–Fr)</option>
            </select>
          </div>
        </div>

        <div class="controls-right">
          <div class="field-group">
            <label class="field-label">Teilen & Sichern</label>
            <select class="select-field share-select" @change="handleMasterShareSelect">
              <option value="">📦 Teilen & Verwalten...</option>
              <option value="export_full_json">📤 Backup herunterladen (.json)</option>
              <option value="import_full_json">📥 Backup einlesen (.json)</option>
              <option value="copy_json_clipboard">📋 Backup in Zwischenablage kopieren</option>
              <option value="import_json_clipboard">📋 Backup aus Zwischenablage laden</option>
              <option value="export_blocks_json">🧩 Nur Textbausteine exportieren (.json)</option>
              <option value="copy_jsdoc_template">⚡ JS-Skript-Vorlage (JSDoc) kopieren</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Options & Actions Row 2 -->
      <div class="toolbar-row row-secondary">
        <!-- Toggle Pills Inline Group -->
        <div class="toggles-inline">
          <label 
            class="toggle-pill" 
            :class="{ 'is-active': includeHours }"
            title="Fügt Stundenangaben (z. B. 8 Std.) in die Text-Überschriften ein"
          >
            <input type="checkbox" v-model="includeHours" />
            <span>⏱️ Stunden anzeigen</span>
          </label>

          <label 
            class="toggle-pill" 
            :class="{ 'is-active': includeWeekend }"
            title="Fügt Samstag und Sonntag als Tage hinzu"
          >
            <input type="checkbox" v-model="includeWeekend" />
            <span>📅 Sa / So anzeigen</span>
          </label>
        </div>

        <!-- Quick Actions & Completeness Badge -->
        <div class="actions-inline">
          <button type="button" class="btn btn-secondary btn-sm" title="Stichpunkte aus der Vorwoche übernehmen" @click="copyFromPreviousWeek">
            📋 Aus Vorwoche kopieren
          </button>

          <button type="button" class="btn btn-ghost btn-sm" @click="resetAll">
            🔄 Zurücksetzen
          </button>

          <!-- Completeness Indicator Badge -->
          <span class="completeness-badge" :class="{ 'is-complete': isWeekComplete }">
            {{ completenessStatusText }}
          </span>
        </div>
      </div>
    </div>

    <!-- Days Grid (2 Days Side-by-Side) -->
    <div class="days-grid-2col">
      <div 
        v-for="(entry, index) in displayedDayEntries" 
        :key="entry.dateStr" 
        class="bh-card day-item"
        :class="{ 
          'is-weekend': entry.isWeekend, 
          'is-status-day': entry.status !== 'work' && entry.status !== 'school',
          'is-school-day': entry.status === 'school',
          'is-holiday-day': entry.status === '(FEIERTAG)'
        }"
      >
        <!-- Card Header -->
        <div class="day-item-header">
          <div class="day-title-wrap">
            <span class="day-name">{{ entry.dayName }}, {{ entry.dateStr }}</span>
            <span v-if="entry.holidayName" class="holiday-tag" :title="entry.holidayName">
              🚩 {{ entry.holidayName }}
            </span>
          </div>

          <div class="day-controls">
            <!-- Status Selector -->
            <select v-model="entry.status" class="select-field status-select" @change="onStatusChange(entry)">
              <option value="work">💼 Arbeitstag</option>
              <option value="school">🏫 Berufsschultag</option>
              <option value="(URLAUB)">🌴 (URLAUB)</option>
              <option value="(FEIERTAG)">🚩 (FEIERTAG)</option>
              <option value="(KRANK)">🤒 (KRANK)</option>
              <option value="(FREI)">🛑 (FREI)</option>
            </select>

            <!-- Embedded Hours Input Wrapper -->
            <div class="hours-input-wrapper">
              <input 
                v-model.number="entry.hours" 
                type="number" 
                min="0" 
                max="24" 
                step="0.5" 
                class="hours-input-field" 
              />
              <span class="hours-unit-suffix">h</span>
            </div>
          </div>
        </div>

        <!-- Structured Tasks Body -->
        <div v-if="entry.status === 'work' || entry.status === 'school'" class="tasks-body">
          <div v-for="(task, taskIdx) in entry.tasks" :key="task.id" class="task-row">
            <!-- Embedded Task Input Wrapper -->
            <div class="task-input-wrapper">
              <span class="bullet-icon-inside">•</span>

              <!-- Lernfeld picker per task row (visible when Berufsschultag) -->
              <select v-if="entry.status === 'school'" v-model="task.lf" class="select-field task-lf-select">
                <option v-for="lf in lernfelder" :key="lf.code" :value="lf.code">
                  {{ lf.code ? lf.code : 'Kein LF' }}
                </option>
              </select>

              <input 
                v-model="task.text" 
                type="text" 
                placeholder="Tätigkeit / Stichpunkt..." 
                class="task-input-field"
                @keydown.enter.prevent="addTask(entry)"
              />

              <button 
                type="button" 
                class="btn-icon-inside" 
                title="Stichpunkt entfernen" 
                @click="removeTask(entry, taskIdx)"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Add Task Actions Row -->
          <div class="task-action-buttons">
            <button type="button" class="btn-add-task" @click="addTask(entry)">
              + Stichpunkt hinzufügen
            </button>

            <!-- Building Block Quick Selector -->
            <select 
              class="select-field building-block-select"
              @change="(e: Event) => {
                const target = e.target as HTMLSelectElement;
                if (target.value) {
                  handleBuildingBlockSelect(entry, target.value);
                  target.value = '';
                }
              }"
            >
              <option value="">🧩 + Textbaustein...</option>
              <option value="__CREATE_CUSTOM__">➕ [Neuen Baustein erstellen...]</option>
              <option v-if="customBuildingBlocks.length > 0" value="__MANAGE_CUSTOM__">
                🗑️ [Eigene Bausteine verwalten/löschen...]
              </option>

              <optgroup label="FIDP (Daten- & Prozessanalyse)">
                <option v-for="b in defaultBuildingBlocks" :key="b.label" :value="b.text">
                  {{ b.label }}
                </option>
              </optgroup>

              <optgroup v-if="customBuildingBlocks.length > 0" label="Eigene Bausteine (gespeichert)">
                <option v-for="b in customBuildingBlocks" :key="b.label" :value="b.text">
                  {{ b.label }}
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <!-- Simple Status Banner for non-work days -->
        <div v-else class="status-banner">
          <span>{{ entry.status }}</span>
        </div>
      </div>
    </div>

    <!-- Full Width Preview Card Below -->
    <div class="bh-card preview-card">
      <div class="preview-header">
        <h3>Textvorschau</h3>

        <div class="preview-actions">
          <button type="button" class="btn btn-secondary btn-sm" @click="downloadTxt">
            💾 .txt Download
          </button>
          <button type="button" class="btn btn-primary btn-sm" @click="copyToClipboard">
            📋 Text kopieren
          </button>
        </div>
      </div>

      <textarea readonly class="input-field preview-textarea" :value="generatedText" rows="14"></textarea>
    </div>
  </div>
</template>

<style scoped>
.bh-container, .bh-container * {
  box-sizing: border-box;
}

.bh-container {
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-family: var(--vp-font-family-base);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Card base */
.bh-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.85rem 1rem;
  width: 100%;
  max-width: 100%;
}

/* Master Toolbar Redesign */
.bh-toolbar-master {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.toolbar-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.row-primary {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.75rem;
}

.controls-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.controls-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toggles-inline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.actions-inline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.date-nav-group {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.btn-icon-nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 1;
  box-sizing: border-box;
}

.preset-select {
  max-width: 185px;
  height: 32px;
  box-sizing: border-box;
}

.share-select {
  max-width: 180px;
  height: 32px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  box-sizing: border-box;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.field-label {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
}

.date-input {
  max-width: 145px;
  height: 32px;
  box-sizing: border-box;
}

/* Master Toolbar Hours Field Wrapper */
.hours-def-wrapper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 0 0.45rem 0 0.2rem;
  height: 32px;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

.hours-def-wrapper:focus-within {
  border-color: var(--vp-c-brand-1);
}

.hours-def-field {
  width: 36px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: center;
  font-size: 0.83rem;
  font-family: inherit;
  outline: none;
  -moz-appearance: textfield;
}

.hours-def-field::-webkit-outer-spin-button,
.hours-def-field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.completeness-badge {
  padding: 0.28rem 0.65rem;
  border-radius: 20px;
  font-size: 0.76rem;
  font-weight: 600;
  background: rgba(234, 179, 8, 0.15);
  color: #d97706;
  border: 1px solid rgba(234, 179, 8, 0.3);
}

.completeness-badge.is-complete {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  border-color: rgba(16, 185, 129, 0.3);
}

.toggle-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.28rem 0.65rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  font-size: 0.78rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  color: var(--vp-c-text-1);
}

.toggle-pill input {
  display: none;
}

.toggle-pill:hover {
  border-color: var(--vp-c-brand-1);
}

.toggle-pill.is-active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* Base Form Inputs */
.input-field {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  padding: 0.32rem 0.55rem;
  font-size: 0.83rem;
  font-family: inherit;
  max-width: 100%;
}

.input-field:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
}

.select-field {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  padding: 0.25rem 0.4rem;
  font-size: 0.78rem;
  cursor: pointer;
  max-width: 100%;
}

/* Buttons */
.btn {
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.btn:hover {
  opacity: 0.9;
}

.btn-primary {
  background: var(--vp-c-brand-1);
  color: #ffffff;
}

.btn-secondary {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.btn-ghost {
  background: transparent;
  color: var(--vp-c-text-2);
}

.btn-ghost:hover {
  color: var(--vp-c-text-1);
}

.btn-sm {
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
}

/* 2 Days Side-by-Side Grid */
.days-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  width: 100%;
}

@media (max-width: 900px) {
  .days-grid-2col {
    grid-template-columns: 1fr;
  }
}

.day-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.8rem 0.9rem;
  min-width: 0;
}

.is-weekend {
  opacity: 0.85;
  background: var(--vp-c-bg-alt);
}

.is-school-day {
  border-left: 4px solid var(--vp-c-brand-1);
}

.is-holiday-day {
  border-left: 4px solid #ef4444;
}

.day-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  flex-wrap: wrap;
  width: 100%;
}

.day-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.day-name {
  font-weight: 700;
  font-size: 0.84rem;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}

.holiday-tag {
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  padding: 0.12rem 0.35rem;
  border-radius: 4px;
  white-space: nowrap;
}

.day-controls {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.status-select {
  font-weight: 600;
  max-width: 130px;
  height: 31px;
  box-sizing: border-box;
}

/* Day Hours Input Embedded Wrapper */
.hours-input-wrapper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 0 0.4rem 0 0.2rem;
  height: 31px;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

.hours-input-wrapper:focus-within {
  border-color: var(--vp-c-brand-1);
}

.hours-input-field {
  width: 32px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: center;
  font-size: 0.8rem;
  font-family: inherit;
  outline: none;
  -moz-appearance: textfield;
}

.hours-input-field::-webkit-outer-spin-button,
.hours-input-field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.hours-unit-suffix {
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  user-select: none;
}

/* Structured Tasks Body */
.tasks-body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
}

.task-row {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Task Input Embedded Wrapper */
.task-input-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 0 0.2rem 0 0.55rem;
  min-width: 0;
  transition: border-color 0.15s ease;
}

.task-input-wrapper:focus-within {
  border-color: var(--vp-c-brand-1);
}

.bullet-icon-inside {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 0.95rem;
  margin-right: 0.4rem;
  user-select: none;
  flex-shrink: 0;
}

.task-lf-select {
  max-width: 85px;
  font-size: 0.75rem;
  padding: 0.18rem 0.25rem;
  border: none;
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
  margin-right: 0.3rem;
  flex-shrink: 0;
}

.task-input-field {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  padding: 0.32rem 0;
  font-size: 0.83rem;
  font-family: inherit;
  outline: none;
  min-width: 0;
}

.btn-icon-inside {
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.82rem;
  flex-shrink: 0;
}

.btn-icon-inside:hover {
  color: #ef4444;
  background: var(--vp-c-bg-alt);
}

.task-action-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.15rem;
}

.btn-add-task {
  background: transparent;
  border: none;
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.btn-add-task:hover {
  background: var(--vp-c-brand-soft);
}

.building-block-select {
  max-width: 195px;
  font-size: 0.75rem;
  padding: 0.2rem 0.3rem;
}

/* Status Banner */
.status-banner {
  padding: 0.4rem 0.6rem;
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

/* Full Width Preview Card Below */
.preview-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.preview-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.preview-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-textarea {
  width: 100%;
  min-height: 380px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-word;
  resize: vertical;
}

/* Toast */
.bh-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  padding: 0.6rem 1.1rem;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
