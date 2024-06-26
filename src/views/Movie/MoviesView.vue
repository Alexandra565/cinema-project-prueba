<script setup>
import { ref, onBeforeMount } from "vue";
import MovieServices from "../../services/MovieServices";
import CardMovie from "../../components/CardMovie.vue";
import dataExample from "../../assets/data.json";

const data = ref([]);
const loading = ref(true);
const error = ref(null);

const handleGetMovies = () => {
  loading.value = false;
  data.value = dataExample;
  return;
  MovieServices.getAll()
    .then((res) => {
      data.value = res?.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
};

onBeforeMount(() => {
  handleGetMovies();
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <div class="container mx-auto py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
      >
        <div v-for="movie in data" :key="movie.id">
          <CardMovie :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>
