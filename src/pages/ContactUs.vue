<template>
  <div class="container">
    <h1 class="text-center py-4">Contact Us</h1>
    <div class="border-bottom pb-3">
      <span>Something to say?</span>
      <span>Get in touch!</span>
    </div>
    <div class="my-5 col-lg-6">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  name: "ContactUs",
  components: { ContactForm },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

h1 {
  color: $third-color;
  font-size: 3rem;
}
div span:nth-child(2) {
  color: $third-color;
  margin-left: 1rem;
  font-weight: 600;
}
</style>
