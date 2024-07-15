<script lang="ts" setup>
import { toggleDark } from '../composables/useDark'
</script>

<template>
  <div
    class="h-$h-navbar flex flex-wrap items-center justify-between border-b border-base p-2 px-4"
  >
    <h1 class="text-xl font-semibold">
      <RouterLink to="/">UnoCSS Presets</RouterLink>
    </h1>
    <div class="flex items-center gap-2">
      <button
        @click="toggleDark"
        class="btn-icon"
        type="button"
        role="button"
      >
        <div class="i-ri-sun-line dark:i-ri-moon-line" />
      </button>
      <a
        href="https://github.com/ntnyq/unocss-presets"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-icon"
        role="button"
      >
        <div class="i-ri-github-fill" />
      </a>
    </div>
  </div>
</template>
