<script setup>
import ButtonCustom from "./ButtonCustom.vue";

defineProps(["movie"]);
</script>

<template>
  <div
    class="h-full w-full flex flex-col items-center justify-start gap-2 rounded-lg"
  >
    <img
      class="w-full object-cover overlay rounded-lg mx-auto shadow-lg"
      :src="movie.image"
      alt="movie.title"
    />
    <div class="flex flex-col gap-2 items-center justify-start p-2 flex-1">
      <h1 class="text-lg font-bold text-white text-center">
        {{ movie.title }}
      </h1>
      <div class="flex items-center justify-center gap-1">
        <div class="text-white text-sm">Genre</div>
        <div v-for="genre in movie.genre">
          <span class="text-sm text-gray-300">{{ genre }},</span>
        </div>
      </div>
      <div class="flex items-center justify-center gap-1">
        <span class="text-sm text-white font-bold">⌛</span>
        <span class="text-xs text-gray-400">1h 44m</span>
      </div>
      <div class="flex items-center justify-center gap-2">
        <span class="text-xs text-white font-bold">4.5</span>
        <span class="text-xs text-gray-400">⭐️</span>
      </div>
    </div>
    <div class="w-full flex flex-column items-center justify-start gap-2 p-2">
      <ButtonCustom title="🎟️ Comprar" type="solid" />
      <ButtonCustom title="Más..." type="outlined" />
    </div>
  </div>
</template>
