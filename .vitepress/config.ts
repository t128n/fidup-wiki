import fs from "node:fs";
import { defineConfig } from "vitepress";
import { renderMermaidAscii } from "beautiful-mermaid";
// @ts-ignore — No types available
import markdownItWikilinks from "markdown-it-wikilinks";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "docs",
    lang: "de",
    title: "fidup.wiki",
    description: "Quelloffene Wissensdatenbank für die AP2 Fachinformatiker",
    lastUpdated: true,
    markdown: {
        math: true,
        config: (md) => {
            const defaultFence = md.renderer.rules.fence

            md.use(markdownItWikilinks(), {});

            md.renderer.rules.fence = (tokens, idx, options, env, self) => {
                const token = tokens[idx]
                if (token.info === 'mermaid-ascii') {
                    const ascii = renderMermaidAscii(token.content)
                    return `<pre><code>${ascii}</code></pre>`
                }

                if (defaultFence) {
                    return defaultFence(tokens, idx, options, env, self)
                } else {
                    return self.renderToken(tokens, idx, options)
                }
            }

        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Lerninhalte",
                items: fs.readdirSync("./docs/lerninhalte").map((file) => {
                    const name = file.replace(".md", "");
                    return { text: name, link: `/lerninhalte/${name}` };
                }),
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],

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
            pattern: "https://github.com/user/repo/edit/main/docs/:path",
            text: "Diese Seite auf GitHub bearbeiten",
        },
        returnToTopLabel: "Zurück nach oben",
        sidebarMenuLabel: "Menü",
        darkModeSwitchLabel: "Design",
        lightModeSwitchTitle: "Zu hellem Design wechseln",
        darkModeSwitchTitle: "Zu dunklem Design wechseln",
    },
});
