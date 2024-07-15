<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex flex-col">
    <Navbar />
    <main class="h-[calc(100vh-var(--h-navbar))]">
      <RouterView />
    </main>
  </div>
</template>
