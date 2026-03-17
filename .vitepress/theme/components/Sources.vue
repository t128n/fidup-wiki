<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

interface Source {
  title: string
  url: string
}

const { page } = useData()

const sources = computed<Source[]>(() => {
  return page.value.frontmatter?.sources || []
})

const hasSources = computed(() => sources.value.length > 0)
</script>

<template>
  <div v-if="hasSources" class="sources-section">
    <hr class="sources-divider">
    <h2 id="quellen" tabindex="-1">
      Quellen
      <a class="header-anchor" href="#quellen" aria-label="Permalink to &quot;Quellen&quot;">​</a>
    </h2>
    <ol class="sources-list">
      <li v-for="(source, index) in sources" :key="index" class="source-item">
        <a 
          :href="source.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="source-link"
        >
          {{ source.title }}
          <span class="external-link-icon" aria-label="Öffnet in neuem Tab">→</span>
        </a>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.sources-section {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.sources-divider {
  margin: 2rem 0 1.5rem 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

.sources-list {
  padding-left: 1.5rem;
  line-height: 2;
  list-style-type: decimal;
}

.source-item {
  margin: 0.5rem 0;
}

.source-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.source-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.external-link-icon {
  margin-left: 0.25rem;
  font-size: 0.9em;
  opacity: 0.7;
}
</style>
