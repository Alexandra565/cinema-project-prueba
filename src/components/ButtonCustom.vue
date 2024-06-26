<script setup>
defineProps(["title", "type"]);
</script>

<template>
  <button
    v-if="type === 'solid'"
    class="text-xs w-full px-3 py-1 bg-yellow-500 text-black font-normal border-2 border-transparent rounded-lg shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-bg-yellow-600 focus:ring-opacity-50"
  >
    <slot>{{ title }}</slot>
  </button>
  <button
    v-else-if="type === 'outlined'"
    class="text-xs w-full px-3 py-1 bg-transparent text-yellow-500 font-normal border-2 border-yellow-500 rounded-lg shadow-sm hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
  >
    <slot>{{ title }}</slot>
  </button>
</template>
