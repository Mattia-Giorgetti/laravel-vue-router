<template>
  <form class="d-flex flex-column gap-3" @submit.prevent="sendMail()">
    <Transition name="bounce">
      <div v-if="success" class="alert alert-success">Mail Sent!</div>
    </Transition>

    <LoaderComponent v-if="store.loading" />
    <label for="name">Full Name</label>
    <input
      placeholder="insert your full name here..."
      required
      type="text"
      name="name"
      id="name"
      v-model="name"
      :class="{ 'is-invalid': errors.name }"
    />
    <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
      {{ error }}
    </p>
    <label for="email">Email</label>
    <input
      placeholder="insert your email here..."
      required
      type="email"
      name="email"
      id="email"
      v-model="email"
      :class="{ 'is-invalid': errors.email }"
    />
    <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
      {{ error }}
    </p>

    <textarea
      placeholder="Write a message"
      required
      name="message"
      id="message"
      cols="30"
      rows="5"
      v-model="message"
      :class="{ 'is-invalid': errors.message }"
      class="mt-4"
    ></textarea>
    <p v-for="(error, index) in errors.message" :key="index" class="invalid-feedback">
      {{ error }}
    </p>

    <button type="submit" :disabled="store.loading">
      {{ store.loading ? "Sending..." : "Send" }}
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import LoaderComponent from "../components/LoaderComponent.vue";
export default {
  name: "ContactForm",
  components: { LoaderComponent },
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      success: false,
      errors: {},
    };
  },
  methods: {
    resetSuccess() {
      setTimeout(() => {
        this.success = false;
      }, 2000);
    },
    sendMail() {
      store.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      axios.post(`${store.apiURL}contacts`, data).then((response) => {
        console.log(response.data);
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
          console.log(this.errors);
        } else {
          (this.name = ""), (this.email = ""), (this.message = "");
        }
        store.loading = false;
        this.resetSuccess();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

label {
  color: $primary-color;
}
*::placeholder {
  color: $secondary-color;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-style: italic;
}
input,
textarea {
  padding: 0.5rem;
}
button {
  width: 20%;
  margin-top: 1rem;
  background-color: $primary-color;
  border: none;
  padding: 0.5rem 1.3rem;
  color: $bg-color;
  transition: all 0.3s ease;
  &:hover {
    background-color: $secondary-color;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
