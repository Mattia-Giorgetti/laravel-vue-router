<template>
  <section id="Jumbo">
    <div class="container"></div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "JumboComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#Jumbo {
  background-color: $primary-color;
  height: 600px;
  div.container {
    height: 100%;
    background-image: url(/webdev.webp);
    background-position: top;
  }
}
</style>
