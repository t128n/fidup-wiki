<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { page, frontmatter } = useData();

const showDisclosure = computed<boolean>(() => {
    if (frontmatter.value?.aiDisclosure === false) {
        return false;
    }
    if (
        page.value.relativePath === "lerninhalte/index.md" ||
        page.value.relativePath === "index.md"
    ) {
        return false;
    }
    return true;
});

const editorialReview = computed<boolean>(() => {
    const value = frontmatter.value?.editorialReview;
    return value === true;
});

const badge = computed(() => {
    if (editorialReview.value) {
        return {
            alt: "AI Modified",
            src: "https://t128n.github.io/starlight-ai-label/badges/ai-modified.svg",
        };
    }

    return {
        alt: "AI Generated",
        src: "https://t128n.github.io/starlight-ai-label/badges/ai-generated.svg",
    };
});

const popoverId = "ai-disclosure-popover";
</script>

<template>
    <template v-if="showDisclosure">
        <Teleport defer to=".vp-doc .vp-doc-title h1, .vp-doc h1">
            <span class="ai-title-badge-wrap">
                <img :src="badge.src" :alt="badge.alt" loading="lazy" class="ai-title-badge" />
                <button
                    type="button"
                    class="ai-badge-info"
                    :popovertarget="popoverId"
                    aria-label="KI-Hinweise öffnen"
                >
                    i
                </button>
            </span>
        </Teleport>

        <div :id="popoverId" popover class="ai-disclosure-popover">
            <h3 class="ai-disclosure-popover__title">Wie KI verwendet wurde</h3>
            <p>
                Dieser Artikel wurde in einem KI-Workflow erstellt: Auf Basis eigener Notizen wurden
                per Suchmaschine und KI passende Quellen recherchiert und die Notizen gegengeprüft.
                Daraus wurde der Artikel verfasst und anschließend nochmals gegen die Quellen
                geprüft.
            </p>
            <p v-if="editorialReview">
                Dieser Artikel wurde danach zusätzlich von Hand geprüft und überarbeitet (<strong
                    >AI Modified</strong
                >).
            </p>
            <p v-else>
                Menschliche Prüfungen wurden stichprobenartig durchgeführt. Veröffentlicht ist die
                KI-faktengeprüfte Fassung (<strong>AI Generated</strong>).
            </p>
        </div>
    </template>
</template>

<style scoped>
.ai-title-badge-wrap {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-left: 0.6rem;
    vertical-align: middle;
}

.ai-title-badge {
    display: inline-block;
    height: 1.6rem;
    width: auto;
}

.ai-badge-info {
    width: 1.35rem;
    height: 1.35rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 999px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-2);
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
}

.ai-badge-info:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-brand-1);
}

.ai-disclosure-popover {
    max-width: min(44rem, calc(100vw - 2rem));
    border: 1px solid var(--vp-c-divider);
    border-radius: 0.75rem;
    padding: 1rem 1.1rem;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
}

.ai-disclosure-popover::backdrop {
    background: rgba(0, 0, 0, 0.28);
}

.ai-disclosure-popover__title {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-weight: 700;
}

.ai-disclosure-popover p {
    margin: 0 0 0.8rem;
}

.ai-disclosure-popover p:last-child {
    margin-bottom: 0;
}
</style>
