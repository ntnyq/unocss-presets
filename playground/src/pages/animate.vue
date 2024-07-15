<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

const builtinAnimations = [
  'animation-bounce',
  'animation-flash',
  'animation-head-shake',
  'animation-heart-beat',
  'animation-jello',
  'animation-pulse',
  'animation-rubber-band',
  'animation-shake',
  'animation-shake-x',
  'animation-shake-y',
  'animation-swing',
  'animation-tada',
  'animation-wobble',
  'animation-back-in-down',
  'animation-back-in-left',
  'animation-back-in-right',
  'animation-back-in-up',
  'animation-back-out-down',
  'animation-back-out-left',
  'animation-back-out-right',
  'animation-back-out-up',
  'animation-bounce-in',
  'animation-bounce-in-down',
  'animation-bounce-in-left',
  'animation-bounce-in-right',
  'animation-bounce-in-up',
  'animation-bounce-out',
  'animation-bounce-out-down',
  'animation-bounce-out-left',
  'animation-bounce-out-right',
  'animation-bounce-out-up',
  'animation-fade-in',
  'animation-fade-in-down',
  'animation-fade-in-down-big',
  'animation-fade-in-left',
  'animation-fade-in-left-big',
  'animation-fade-in-right',
  'animation-fade-in-right-big',
  'animation-fade-in-right-up',
  'animation-fade-in-right-up-big',
  'animation-fade-in-top-left',
  'animation-fade-in-top-right',
  'animation-fade-in-bottom-left',
  'animation-fade-in-bottom-right',
  'animation-fade-out',
  'animation-fade-out-down',
  'animation-fade-out-down-big',
  'animation-fade-out-left',
  'animation-fade-out-left-big',
  'animation-fade-out-right',
  'animation-fade-out-right-big',
  'animation-fade-out-up',
  'animation-fade-out-up-big',
  'animation-fade-out-top-left',
  'animation-fade-out-top-right',
  'animation-fade-out-bottom-left',
  'animation-fade-out-bottom-right',
  'animation-flip',
  'animation-flip-in-x',
  'animation-flip-in-y',
  'animation-flip-out-x',
  'animation-flip-out-y',
  'animation-light-speed-in-left',
  'animation-light-speed-in-right',
  'animation-light-speed-out-left',
  'animation-light-speed-out-right',
  'animation-rotate-in',
  'animation-rotate-in-down-left',
  'animation-rotate-in-down-right',
  'animation-rotate-in-up-left',
  'animation-rotate-in-up-right',
  'animation-rotate-out',
  'animation-rotate-out-down-left',
  'animation-rotate-out-down-right',
  'animation-rotate-out-up-left',
  'animation-rotate-out-up-right',
  'animation-hinge',
  'animation-jack-in-the-box',
  'animation-roll-in',
  'animation-roll-out',
  'animation-zoom-in',
  'animation-zoom-in-down',
  'animation-zoom-in-left',
  'animation-zoom-in-right',
  'animation-zoom-in-up',
  'animation-zoom-out',
  'animation-zoom-out-down',
  'animation-zoom-out-left',
  'animation-zoom-out-right',
  'animation-zoom-out-up',
  'animation-slide-in-down',
  'animation-slide-in-left',
  'animation-slide-in-right',
  'animation-slide-in-up',
  'animation-slide-out-down',
  'animation-slide-out-left',
  'animation-slide-out-right',
  'animation-slide-out-up',
]
const userAnimations = ['animation-foo-bar']

const animations = [...builtinAnimations, ...userAnimations]

const activeAnimation = ref(userAnimations[0])

async function onCopyClass() {
  await copy(activeAnimation.value)
}
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <h2
      class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 my-4"
    >
      unocss-preset-animate
    </h2>
    <div class="p-4 md:p-10 w-full">
      <div class="h-400px of-hidden w-full relative flex justify-center items-center">
        <div
          :class="activeAnimation"
          class="w-200px animated animate-infinate"
        >
          <img
            class="block w-full"
            src="/images/xingtong.png"
          />
        </div>
      </div>
    </div>

    <div class="p-4 flex items-center">
      <select
        class="py-2 px-4 border-base border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        v-model="activeAnimation"
      >
        <option
          v-for="animation in animations"
          :key="animation"
          :value="animation"
        >
          {{ animation }}
        </option>
      </select>
      <div
        @click="onCopyClass"
        :class="{
          'i-tabler:copy-check': copied,
        }"
        class="ml-4 text-xl i-tabler:copy cursor-pointer"
      />
    </div>
  </div>
</template>
