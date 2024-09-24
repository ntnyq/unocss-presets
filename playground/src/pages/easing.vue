<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const { copy, copied } = useClipboard()

const copiedIdx = ref(-1)

async function onCopyClass(className: string, idx: number) {
  await copy(className)
  copiedIdx.value = idx
}

const easings = [
  'easing-in-back',
  'easing-in-circ',
  'easing-in-cubic',
  'easing-in-expo',
  'easing-in-quad',
  'easing-in-quart',
  'easing-in-quint',
  'easing-in-sine',
  'easing-out-back',
  'easing-out-circ',
  'easing-out-cubic',
  'easing-out-expo',
  'easing-out-quad',
  'easing-out-quart',
  'easing-out-quint',
  'easing-out-sine',
  'easing-in-out-back',
  'easing-in-out-circ',
  'easing-in-out-cubic',
  'easing-in-out-expo',
  'easing-in-out-quad',
  'easing-in-out-quart',
  'easing-in-out-quint',
  'easing-in-out-sine',
]
</script>

<template>
  <div class="h-full flex flex-col items-center of-y-auto">
    <h2
      class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 my-4"
    >
      unocss-preset-easing
    </h2>
    <div class="p-4 md:p-10 max-w-1200px">
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div
          v-for="(easing, idx) in easings"
          :key="easing"
          class="flex flex-col items-center border border-base p-4 of-hidden rounded-md"
        >
          <div class="mb-6 flex items-center">
            <h4 class="font-semibold text-md">{{ easing }}</h4>
            <div
              @click="onCopyClass(easing, idx)"
              :class="{
                'i-tabler:copy-check': copied && idx === copiedIdx,
              }"
              class="ml-2 i-tabler:copy cursor-pointer"
            />
          </div>
          <div class="of-hidden">
            <div
              :class="easing"
              class="animated animation-foo-bar animate-duration-10 animate-infinate"
            >
              <img
                class="block w-full"
                src="/images/xingtong.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
