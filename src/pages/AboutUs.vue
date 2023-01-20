<template>
  <section id="about_one" class="py-4">
    <div class="container hidden">
      <h1 class="py-5">About Me</h1>
      <div class="row">
        <div class="col-lg-6 px-4">
          <img
            class="img-fluid"
            src="https://www.selefor.com/wp-content/uploads/2021/12/developer_solid-II.jpg"
            alt="about-pic-1"
          />
        </div>
        <div class="col-lg-6 px-4 align-self-center">
          <h4 class="pb-3">Lorem Ipsum</h4>
          <p class="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente
            nobis porro molestiae ipsam magni, ipsa asperiores quae assumenda nisi
            commodi? Illum possimus ut doloribus harum vero facilis iure quidem aut enim,
            explicabo, hic delectus iste voluptatibus blanditiis pariatur vitae?.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nesciunt
            cupiditate quasi unde alias ducimus fuga porro natus, eius dicta
            necessitatibus.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="about_two" class="py-4 my-5">
    <div class="container hidden">
      <div class="row">
        <div class="col-lg-6 align-self-end">
          <h4 class="pb-3">Lorem, ipsum dolor.</h4>
          <p class="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur
            hic autem recusandae non, ipsa aperiam amet, impedit quasi alias error
            suscipit tempore officia? Quidem delectus in repudiandae asperiores deleniti.
          </p>
          <h3>Quos corrupti quas consequntur dolores!</h3>
        </div>
        <div class="col-lg-6">
          <img
            class="img-fluid"
            src="https://www.irbox.it/wp-content/uploads/2022/01/WEB_DESIGNER_VS_WEB_DEVELOPER_.jpg"
            alt="about-pic-2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "AboutUs",
  data() {
    return {
      store,
    };
  },
  mounted() {
    store.showitems();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
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
#about_one {
  h1 {
    text-align: center;
    font-size: 3.5rem;
  }
  h4 {
    color: $third-color;
    text-align: center;
    border-bottom: 1px solid $third-color;
    font-size: 2rem;
  }
}
#about_two {
  h4 {
    color: $primary-color;
    font-size: 2rem;
    border-bottom: 1px solid $primary-color;
  }
  h3 {
    color: $secondary-color;
    font-weight: 700;
  }
}
</style>
