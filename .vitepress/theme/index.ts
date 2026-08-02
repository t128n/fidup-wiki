// https://vitepress.dev/guide/custom-theme
import "./style.css";
import { h, nextTick, watch } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
import AiDisclosure from "./components/AiDisclosure.vue";
import Sources from "./components/Sources.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData();

    const initMermaid = () => {
      createMermaidRenderer({
        theme: isDark.value ? "dark" : "forest",
      });
    };

    // initial mermaid setup
    nextTick(() => initMermaid());

    // on theme change, re-render mermaid charts
    watch(
      () => isDark.value,
      () => {
        initMermaid();
      },
    );

    return h(DefaultTheme.Layout, null, {
      // Inject article disclosure and sources into doc-footer-before slot
      "doc-footer-before": () => [h(AiDisclosure), h(Sources)],
    });
  },
} satisfies Theme;
