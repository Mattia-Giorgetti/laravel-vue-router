<template>
  <section class="py-4">
    <div class="container">
      <h1 class="text-center py-5" v-if="!store.loading">Current Projects</h1>

      <div class="row" mt-5>
        <div class="d-flex justify-content-center mt-5">
          <LoaderComponent v-if="store.loading" />
        </div>
        <TransitionGroup name="list">
          <div
            v-if="!store.loading"
            class="col-lg-4"
            v-for="(item, index) in store.projectsArray"
            :key="item.id"
          >
            <ProjectCardComponent :project="item" />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import ProjectCardComponent from "../components/ProjectCardComponent.vue";
import LoaderComponent from "../components/LoaderComponent.vue";
export default {
  name: "ProjectsList",
  data() {
    return {
      store,
    };
  },
  methods: {
    getProjects() {
      store.loading = true;
      axios.get(store.apiURL + "projects").then((response) => {
        store.projectsArray = response.data.results;
        console.log(store.projectsArray);
        console.log(response.data);
        store.loading = false;
      });
    },
  },
  mounted() {
    this.getProjects();
  },
  components: { ProjectCardComponent, LoaderComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

h1 {
  font-size: 3.5rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
