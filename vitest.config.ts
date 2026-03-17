import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['.vitepress/plugins/**/*.ts'],
      exclude: ['.vitepress/plugins/**/*.test.ts']
    }
  }
});
