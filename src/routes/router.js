import { createMemoryHistory, createRouter } from "vue-router";

import MoviesView from "../views/Movie/MoviesView.vue";
import MovieShow from "../views/Movie/MovieShow.vue";

const routes = [
  { path: "/", component: MoviesView },
  { path: "/compra-boleteria", component: MovieShow },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
