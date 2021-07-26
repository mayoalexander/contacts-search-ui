<template>
  <div class="container text-left">
    <h4>Welcome to my Code Challenge</h4>
    <p>Here are some of the things I did in this project:</p>
    <ul>
      <li>Routing</li>
      <li>Vuex Store Implementation</li>
      <li>Searchability</li>
      <li>Filter/Sorting</li>
      <li>Saving Favorites to Session</li>
    </ul>
    <div>
      <b-button @click="$router.push('/contacts')" block class="w-100">
        View Contacts
      </b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>
