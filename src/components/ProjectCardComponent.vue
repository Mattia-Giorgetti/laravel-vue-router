<template>
  <div class="card gap-1 mb-5 border-0">
    <div class="img-wrap">
      <img
        :src="`${store.imgpath}${project.cover_image}`"
        class="card-img-top"
        :alt="project.slug"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title fs-3 my-3">{{ project.title }}</h5>
      <p class="card-text">
        {{ this.trimContent(project.proj_description) }}
      </p>
      <router-link
        class="my-btn"
        :to="{ name: 'single-project', params: { slug: project.slug } }"
        >View Project</router-link
      >
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "ProjectCardComponent",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
      contentMaxLen: 40,
    };
  },
  methods: {
    trimContent(text) {
      if (text.length > this.contentMaxLen) {
        return text.substr(0, this.contentMaxLen) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.img-wrap {
  height: 190px;
  overflow: hidden;
}
h5 {
  color: $third-color;
  font-weight: 600;
}
p {
  color: $text-color;
  padding-bottom: 2rem;
}
.my-btn {
  background-color: $primary-color;
  text-decoration: none;
  color: $bg-color;
  padding: 0.5rem 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: $secondary-color;
  }
}
</style>
