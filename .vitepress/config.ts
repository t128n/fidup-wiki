import { defineConfig } from "vitepress";
import { generateSidebar } from 'vitepress-sidebar';
import { fmTitlePlugin } from 'vitepress-plugin-frontmatter';
import { plantuml } from "@mdit/plugin-plantuml";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }],
        ['link', { rel: 'canonical', href: 'https://fidup.wiki' }]
    ],

    srcDir: "docs",
    lang: "de",
    title: "fidup.wiki",
    description: "Quelloffene Wissensdatenbank für die AP2 Fachinformatiker",
    lastUpdated: true,
    ignoreDeadLinks: true,

    sitemap: {
        hostname: 'https://fidup.wiki'
    },

    markdown: {
        math: true,
        config(md) {
            md.use(fmTitlePlugin);
            md.use(plantuml, {
                type: "uml",
            });
        },
    },
    themeConfig: {
        logo: '/icon.svg',

        sidebar: [
            {
                text: "Lerninhalte",
                collapsed: false,
                items: generateSidebar({
                    documentRootPath: '/docs',
                    scanStartPath: 'lerninhalte',
                    useTitleFromFrontmatter: true,
                    sortMenusByName: true,
                }).map(item => ({
                    ...item,
                    link: `/lerninhalte/${item.link}`
                }))
            },
            {
                text: "Rechtliches",
                collapsed: false,
                items: generateSidebar({
                    documentRootPath: '/docs',
                    scanStartPath: 'rechtliches',
                    useTitleFromFrontmatter: true,
                    sortMenusByName: true,
                }).map(item => ({
                    ...item,
                    link: `/rechtliches/${item.link}`
                }))
            }
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/t128n/fidup-wiki" }],

        search: {
            provider: "local",
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: "Suche",
                                buttonAriaLabel: "Suche",
                            },
                            modal: {
                                displayDetails: "Details anzeigen",
                                resetButtonTitle: "Suchfilter zurücksetzen",
                                backButtonTitle: "Zurück",
                                noResultsText: "Keine Ergebnisse gefunden",
                                footer: {
                                    selectText: "Auswählen",
                                    selectKeyAriaLabel: "Enter",
                                    navigateText: "Navigieren",
                                    navigateUpKeyAriaLabel: "Oben Pfeil",
                                    navigateDownKeyAriaLabel: "Unten Pfeil",
                                    closeText: "Schließen",
                                    closeKeyAriaLabel: "Escape",
                                },
                            },
                        },
                    },
                },
            },
        },
        outlineTitle: "Auf dieser Seite",
        lastUpdated: {
            text: "Zuletzt aktualisiert",
        },
        docFooter: {
            prev: "Vorherige Seite",
            next: "Nächste Seite",
        },
        editLink: {
            pattern: "https://github.com/t128n/fidup-wiki/edit/main/docs/:path",
            text: "Diese Seite auf GitHub bearbeiten",
        },
        returnToTopLabel: "Zurück nach oben",
        sidebarMenuLabel: "Menü",
        darkModeSwitchLabel: "Design",
        lightModeSwitchTitle: "Zu hellem Design wechseln",
        darkModeSwitchTitle: "Zu dunklem Design wechseln",
        footer: {
            copyright: 'Copyright © 2026 Torben Haack'
        }
    },
});
