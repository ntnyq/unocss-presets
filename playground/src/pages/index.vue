<script lang="ts" setup>
const presets = [
  {
    name: 'unocss-preset-animate',
    link: '/animate',
    icon: 'i-fluent-emoji-flat:red-heart',
    description: 'UnoCSS preset for animate.css',
  },
  {
    name: 'unocss-preset-easing',
    link: '/easing',
    icon: 'i-fluent-emoji-flat:wheel-of-dharma',
    description: 'UnoCSS preset for easing transition cubic-bezier function',
  },
  {
    name: 'unocss-preset-filter',
    link: '/filter',
    icon: 'i-fluent-emoji-flat:magnifying-glass-tilted-right',
    description: 'UnoCSS preset for pure CSS filters.',
  },
  {
    name: 'unocss-preset-shape',
    link: '/shape',
    icon: 'i-fluent-emoji-flat:star',
    description: 'UnoCSS preset for CSS shapes.',
  },
  {
    name: 'unocss-preset-transition',
    link: '/transition',
    icon: 'i-fluent-emoji-flat:hourglass-done',
    description: 'UnoCSS preset for transition.css.',
  },
]
</script>

<template>
  <div class="h-full flex-col flex-center">
    <h1
      class="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 text-4xl font-bold mb-4"
    >
      UnoCSS Presets
    </h1>

    <div class="p-4 md:p-10">
      <div class="grid gap-4 grid-cols-1">
        <RouterLink
          v-for="preset in presets"
          :key="preset.link"
          :to="preset.link"
          class="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
        >
          <div class="h-full flex-center">
            <div
              :class="preset.icon"
              class="mr-4 text-4xl"
            />
            <div class="flex-1">
              <div class="text-2xl font-medium">
                {{ preset.name }}
              </div>
              <div class="text-md font-normal op-50">
                {{ preset.description }}
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
