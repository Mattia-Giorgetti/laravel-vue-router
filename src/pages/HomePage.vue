<template>
  <section id="home_page">
    <div class="container">
      <h1 class="py-lg-5 hidden pb-sm-0">Welcome to my Portfolio</h1>
      <div class="dev_define py-lg-5 mt-lg-5 mt-sm-0 pt-sm-0">
        <div class="row justify-content-between h-100">
          <div class="col-lg-5 h-100 d-flex flex-column justify-content-center hidden">
            <h4 class="mb-sm-5">Lorem ipsum <span>Lorem ipsum dolor sit amet. </span></h4>
          </div>
          <div class="col-lg-6 position-relative py-sm-5">
            <img
              class="hidden"
              src="https://posizioniaperte.com/wp-content/uploads/2021/12/web-developer-offerte-di-lavoro.jpg"
              alt="pic-1"
            />
            <img
              class="hidden"
              src="https://m.media-amazon.com/images/I/61f29Au44uL.jpg"
              alt="pic-2"
            />
          </div>
        </div>
      </div>
      <h3 class="text-center py-4 mt-5 hidden">Lorem, ipsum dolor!</h3>
      <div class="py-4">
        <div class="d-flex">
          <div class="col-lg-6 mt-sm-4 mt-lg-0">
            <p class="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a optio
              praesentium quam tenetur facilis illum laborum repellat quasi sint!
            </p>
            <p class="hidden subtext">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium
              molestias eos ducimus incidunt natus error ipsam mollitia ipsum nam!
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div class="col-lg-6">
            <p class="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a optio
              praesentium quam tenetur facilis illum laborum repellat quasi sint!
            </p>
            <p class="hidden subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a optio
              praesentium quam tenetur facilis illum laborum repellat quasi sint!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "HomePage",
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {
    store.showitems();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#home_page {
  .hidden {
    opacity: 0;
    transition: all 1s;
    filter: blur(5px);
    transform: translateX(-30%);
  }
  .showing {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
  h1 {
    color: $primary-color;
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
  }
  .dev_define {
    height: 500px;
    div.col-lg-6 img:nth-child(2) {
      width: 40%;
      position: absolute;
      right: 0;
      top: -5rem;
    }
    div.col-lg-6 img:first-child {
      width: 70%;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    h4 {
      font-size: 2rem;

      span {
        color: $third-color;
        font-weight: 600;
        font-size: 2.5rem;
      }
    }
  }
  h3 {
    font-size: 3rem;
    color: $third-color;
  }
  .subtext {
    color: $primary-color;
  }
}
</style>
