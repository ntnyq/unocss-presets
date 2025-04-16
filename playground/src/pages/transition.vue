<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const { copy, copied } = useClipboard()

const builtinTransitions = [
  'st-circle-in-center',
  'st-circle-in-hesitate',
  'st-circle-in-top-left',
  'st-circle-in-top-right',
  'st-circle-in-bottom-left',
  'st-circle-in-bottom-right',
  'st-circle-out-center',
  'st-circle-out-hesitate',
  'st-circle-out-top-left',
  'st-circle-out-top-right',
  'st-circle-out-bottom-left',
  'st-circle-out-bottom-right',
  'st-square-in-center',
  'st-square-in-hesitate',
  'st-square-in-top-left',
  'st-square-in-top-right',
  'st-square-in-bottom-left',
  'st-square-in-bottom-right',
  'st-square-out-center',
  'st-square-out-hesitate',
  'st-square-out-top-left',
  'st-square-out-top-right',
  'st-square-out-bottom-left',
  'st-square-out-bottom-right',
  'st-polygon-in-opposing-corners',
  'st-polygon-out-opposing-corners',
  'st-diamond-in-center',
  'st-diamond-in-double-scale',
  'st-diamond-out-center',
  'st-diamond-out-double-scale',
  'st-wipe-in-top',
  'st-wipe-in-bottom',
  'st-wipe-in-left',
  'st-wipe-in-right',
  'st-wipe-in-top-left',
  'st-wipe-in-top-right',
  'st-wipe-in-bottom-left',
  'st-wipe-in-bottom-right',
  'st-wipe-out-top',
  'st-wipe-out-bottom',
  'st-wipe-out-left',
  'st-wipe-out-right',
  'st-wipe-out-top-left',
  'st-wipe-out-top-right',
  'st-wipe-out-bottom-left',
  'st-wipe-out-bottom-right',
  'st-wipe-cinematic-in',
  'st-wipe-cinematic-out',
]
const transitions = [...builtinTransitions]

const activeTransition = ref(transitions[0])

async function onCopyClass() {
  await copy(activeTransition.value)
}
</script>

<template>
  <div class="h-full flex-col flex-center">
    <h2
      class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 my-4"
    >
      unocss-preset-transition
    </h2>
    <div class="p-4 md:p-10 w-full">
      <div class="h-400px of-hidden w-full relative flex-center">
        <div
          :class="activeTransition"
          class="w-200px styled-transition"
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
        v-model="activeTransition"
        class="py-2 px-4 border-base border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option
          v-for="transition in transitions"
          :key="transition"
          :value="transition"
        >
          {{ transition }}
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
