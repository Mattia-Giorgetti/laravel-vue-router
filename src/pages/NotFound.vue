<template>
  <div class="container">
    <h1 class="text-center py-4">Error 404!!</h1>
    <p>Looks like the project You're looking for does not exist :(</p>
    <div class="row py-5 mt-5">
      <div class="col-lg-6">
        <h5>Please search for something else</h5>
        <router-link :to="{ name: 'projects' }" class="error404_btn"
          >Back to projects</router-link
        >
      </div>
      <div class="col-lg-6">
        <div style="width: 100%; height: 0; padding-bottom: 56%; position: relative">
          <iframe
            src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn"
            width="100%"
            height="100%"
            style="position: absolute"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <a
            href="https://giphy.com/gifs/high-quality-highqualitygifs-g01ZnwAUvutuK8GIQn"
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

h1 {
  font-size: 4rem;
  color: $third-color;
}
p {
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
}
h5 {
  color: $third-color;
  font-size: 2rem;
}
.error404_btn {
  text-decoration: none;
  display: inline-block;
  background-color: $primary-color;
  padding: 0.6rem 1.5rem;
  color: $bg-color;
  margin-top: 5rem;
  transition: 0.3s ease;
  &:hover {
    background-color: $secondary-color;
  }
}
</style>
