<template>
  <div class="container text-left mb-5">
    <h4>Welcome to my Code Challenge</h4>
    <div class="readme-content">
      <vue-simple-markdown :source="readme"></vue-simple-markdown>
    </div>
    <div>
      <b-button
        size="lg"
        @click="$router.push('/contacts')"
        block
        class="w-100 mt-3"
      >
        View Contacts
      </b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReadMe from "../../README.md";
export default {
  name: "Home",
  data: () => {
    return {
      readme: ReadMe,
    };
  },
  mounted() {
    console.log({
      readme: this.readme,
    });
  },
};
</script>
