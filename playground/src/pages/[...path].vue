<script lang="ts" setup>
defineProps<{}>()
</script>

<template>
  <div class="h-full flex-center">
    <div class="flex-center flex-col gap-20px">
      <h1 class="text-50px font-semibold text-red">404 not found</h1>
      <RouterLink
        class="text-20px text-blue px-3 py-2 transition-colors font-semibold duration-200 bg-blue hover:op-80 rounded-md text-white"
        role="button"
        to="/"
      >
        Go Home
      </RouterLink>
    </div>
  </div>
</template>
