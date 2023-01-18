<template>
  <HeaderComponent />
  <JumboComponent />
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
import axios from "axios";
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },

  components: {
    HeaderComponent,
    JumboComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
