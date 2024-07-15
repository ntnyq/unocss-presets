<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

const copiedIdx = ref(-1)

async function onCopyClass(className: string, idx: number) {
  await copy(className)
  copiedIdx.value = idx
}

const filters = [
  'filter-1977',
  'filter-aden',
  'filter-amaro',
  'filter-ashby',
  'filter-brannan',
  'filter-brooklyn',
  'filter-charmes',
  'filter-clarendon',
  'filter-crema',
  'filter-dogpatch',
  'filter-earlybird',
  'filter-gingham',
  'filter-ginza',
  'filter-hefe',
  'filter-helena',
  'filter-hudson',
  'filter-inkwell',
  'filter-juno',
  'filter-kelvin',
  'filter-lark',
  'filter-lofi',
  'filter-ludwig',
  'filter-maven',
  'filter-mayfair',
  'filter-moon',
  'filter-nashville',
  'filter-perpetua',
  'filter-poprocket',
  'filter-reyes',
  'filter-rise',
  'filter-sierra',
  'filter-skyline',
  'filter-slumber',
  'filter-stinson',
  'filter-sutro',
  'filter-toaster',
  'filter-valencia',
  'filter-vesper',
  'filter-walden',
  'filter-willow',
  'filter-xpro-ii',
]
</script>

<template>
  <div class="h-full flex flex-col items-center of-y-auto">
    <h2
      class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 my-4"
    >
      unocss-preset-filter
    </h2>
    <div class="p-4 md:p-10 max-w-1200px">
      <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div
          v-for="(filter, idx) in filters"
          :key="filter"
          class="flex flex-col items-center border border-base p-4 of-hidden rounded-md"
        >
          <div class="mb-6 flex items-center">
            <h4 class="font-semibold text-md">{{ filter }}</h4>
            <div
              @click="onCopyClass(filter, idx)"
              :class="{
                'i-tabler:copy-check': copied && idx === copiedIdx,
              }"
              class="ml-2 i-tabler:copy cursor-pointer"
            />
          </div>
          <div :class="filter">
            <img
              class="block w-full"
              src="/images/xingtong.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
