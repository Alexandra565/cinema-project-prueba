<script setup>
import dataExample from "../../assets/data.json";
import CinemaLayout from "../../components/CinemaLayout.vue";
import DataTimePicker from "../../components/DataTimePicker.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
    <div class="flex gap-4 rounded-lg">
      <img
        class="h-90 object-cover overlay rounded-lg shadow-lg"
        :src="dataExample[0]?.image"
        alt="imagen"
      />
      <div class="flex flex-col gap-2 items-start justify-start">
        <h1 class="text-xl font-bold text-white">
          {{ dataExample[0]?.title }}
        </h1>
        <div class="flex items-center gap-1">
          <div class="text-white text-xl">Genre</div>
          <div v-for="genre in dataExample[0]?.genre">
            <span class="text-xl text-gray-300">{{ genre }},</span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-xl text-white font-bold">⌛</span>
          <span class="text-xl text-gray-400">1h 44m</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xl text-white font-bold">4.5</span>
          <span class="text-xl text-gray-400">⭐️</span>
        </div>
        <div class="flex items-center gap-1">
          <p class="text-lg text-gray-400 text-justify">
            <span class="text-white"> Sinopsis: </span>
            {{ dataExample[0]?.description }} <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolores, aperiam rerum consequatur atque dicta, sed nam quibusdam
            ullam error, qui libero nemo. Tempora eos a pariatur modi similique
            sunt.
          </p>
        </div>
      </div>
    </div>
    <div>
      <CinemaLayout />
    </div>
  </div>
  <DataTimePicker />
</template>
