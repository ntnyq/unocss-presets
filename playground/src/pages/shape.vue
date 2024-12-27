<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { computed, ref } from 'vue'

const { copy, copied } = useClipboard()

const shapes: Array<{ shape: string; extra: string }> = [
  {
    shape: 'shape-star-200px',
    extra: 'bg-yellow',
  },
  {
    shape: 'shape-triangle-200px',
    extra: 'bg-red',
  },
  {
    shape: 'shape-rhombus-200px',
    extra: 'bg-blue',
  },
  {
    shape: 'shape-hexagon-200px',
    extra: 'bg-indigo',
  },
  {
    shape: 'shape-octagon-200px',
    extra: 'bg-orange',
  },
  {
    shape: 'shape-heart-200px',
    extra: 'bg-gradient-to-r from-red-400 to-red-600',
  },
  {
    shape: 'shape-parallelogram-200px',
    extra: 'bg-black',
  },
]

const activeShape = ref(shapes[0])
const shapeClass = computed({
  get() {
    return activeShape.value.shape
  },
  set(shape) {
    const matched = shapes.find(s => s.shape === shape)

    if (!matched) return
    activeShape.value = matched
  },
})

async function onCopyClass() {
  await copy(shapeClass.value)
}
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <h2
      class="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:to-yellow-200 my-4"
    >
      unocss-preset-shape
    </h2>
    <div class="p-4 md:p-10 w-full">
      <div class="h-400px of-hidden w-full relative flex justify-center items-center">
        <div :class="[activeShape.shape, activeShape.extra]" />
      </div>
    </div>

    <div class="p-4 flex items-center">
      <select
        v-model="shapeClass"
        class="py-2 px-4 border-base border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option
          v-for="shape in shapes"
          :key="shape.shape"
          :value="shape.shape"
        >
          {{ shape.shape }}
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
