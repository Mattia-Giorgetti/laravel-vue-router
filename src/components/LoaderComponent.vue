<template>
  <div class="d-flex align-items-center mb-5">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.circle {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: $primary-color;
  &:first-child {
    animation: bounce 0.8s infinite;
  }
  &:nth-child(2) {
    animation: bounce 0.8s infinite 0.2s;
  }
  &:last-child {
    animation: bounce 0.8s infinite 0.4s;
  }
}
@keyframes bounce {
  40% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
