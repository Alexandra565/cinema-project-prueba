<script setup>
import ButtonCustom from "./components/ButtonCustom.vue";
</script>
<!-- Esto es nuevo -->
<template>
  <div class="bg-slate-800">
    <nav class="bg-gray-600 p-4 flex items-center justify-between">
      <div class="text-white text-xl font-bold">CINEMA</div>
      <div class="flex items-center gap-10 ml-12">
        <RouterLink class="text-white text-lg font-normal" to="/"
          >🎥 Películas</RouterLink
        >
        <RouterLink
          class="text-white text-lg font-normal"
          to="/compra-boleteria"
          >🎞️ Compra de boletería</RouterLink
        >
        <RouterLink class="text-white text-lg font-normal" to="/confiteria"
          >🍿 Confitería</RouterLink
        >
      </div>
      <div class="flex items-center space-x-4 ml-auto">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Buscar..."
          class="px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ButtonCustom title="BUSCAR" type="solid" />
      </div>
    </nav>
    <main class="px-12">
      <RouterView />
    </main>
  </div>
</template>
