<template>
  <section id="single_project" class="py-5">
    <div class="container" v-if="project">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="mb-5">{{ project.title }}</h1>
          <p class="border-bottom pb-3">{{ project.proj_description }}</p>
          <p v-if="project.type">
            <span class="prefix_span">Typology: </span> {{ project.type.name }}
          </p>
          <p v-else>No Type</p>
          <div class="d-flex gap-4" v-if="project.technologies">
            <span class="prefix_span">Technology used:</span>
            <ul class="list-unstyled">
              <li v-for="technology in project.technologies" class="py-1">
                {{ technology.name }}
              </li>
            </ul>
          </div>
          <div v-else>No technologies</div>
          <a :href="project.github_link" target="_blank"
            >View code on <i class="fa-brands fa-github fs-4 ms-2"></i>
          </a>
        </div>
        <div class="col-lg-6">
          <img
            class="img-fluid"
            :src="`${store.imgpath}${project.cover_image}`"
            :alt="project.slug"
          />
        </div>
      </div>
    </div>
    <div class="container" v-else>..Loading..</div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
    };
  },
  methods: {
    getSingleProject() {
      axios.get(`${store.apiURL}projects/${this.$route.params.slug}`).then((response) => {
        if (response.data.success) {
          this.project = response.data.results;
        } else {
          console.log(this.$router);
          this.$router.push({ name: "not-found" });
        }
        console.log(this.project);
      });
    },
  },
  mounted() {
    this.getSingleProject();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#single_project {
  h1 {
    color: $primary-color;
  }
  .prefix_span {
    color: $secondary-color;
    font-weight: bolder;
  }
  ul li {
    color: $third-color;
  }
  a {
    text-decoration: none;
    color: $primary-color;
    margin-top: 2rem;
    display: block;
    transition: all 0.3s ease;
    &:hover {
      transform: translateX(8px);
    }
  }
}
</style>
