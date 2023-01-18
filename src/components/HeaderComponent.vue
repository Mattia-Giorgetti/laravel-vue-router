<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo_spans">
        <span>Vue</span>
        <span>/</span>
        <span>Laravel</span>
      </div>
      <nav>
        <ul class="list-unstyled d-flex align-items-center mb-0 gap-4">
          <li v-for="(item, index) in store.navbarLinks" :key="index">
            <router-link :to="{ name: item.url }" active-class="active-li">{{
              item.link
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  background-color: $primary-color;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .active-li {
    color: $third-color;
  }
  .logo_spans span:first-child,
  .logo_spans span:last-child {
    color: $secondary-color;
    font-size: 2rem;
    font-weight: 600;
  }
  .logo_spans span:nth-child(2) {
    color: $bg-color;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: $bg-color;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
