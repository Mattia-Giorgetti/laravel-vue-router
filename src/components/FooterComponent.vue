<template>
  <footer class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="mb-4">Vue/Laravel</h4>
          <div class="icons d-flex align-items-center gap-4 fs-4 mb-4">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <button>
            <router-link
              style="color: aliceblue"
              :to="{ name: 'contact' }"
              class="text-decoration-none"
              >Contact Us</router-link
            >
          </button>
        </div>
        <div class="col-lg-6 d-flex justify-content-between">
          <ul class="list-unstyled">
            <li v-for="(link, index) in store.footerLinks" :key="index">
              {{ link.link }}
            </li>
          </ul>
          <ul class="list-unstyled">
            <li v-for="(link, index) in store.footerLinks" :key="index">
              {{ link.link }}
            </li>
          </ul>
          <ul class="list-unstyled">
            <li v-for="(link, index) in store.footerLinks" :key="index">
              {{ link.link }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { store } from "../store";
export default {
  name: "FooterComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
footer {
  background-color: $third-color;
  .icons {
    i {
      color: $bg-color;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }

  h4 {
    color: $bg-color;
  }
  button {
    border: none;
    background-color: $primary-color;
    padding: 0.6rem 1.5rem;
    color: $bg-color;
    transition: all 0.3s ease;

    &:hover {
      background-color: $bg-color;
      color: $third-color;
    }
  }
}
</style>
