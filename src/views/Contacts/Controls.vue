<template lang="html">
  <div class="controls row mb-3">
    <div class="col-md-9 mb-2">
      <b-form-input
        v-model="$store.state.searchQuery"
        placeholder="Search anything.."
      ></b-form-input>
    </div>
    <div class="col-md-3">
      <b-button-group class="w-100">
        <b-button @click="$store.commit('SET_VIEW', 'list')">List</b-button>
        <b-button @click="$store.commit('SET_VIEW', 'table')">Table</b-button>
      </b-button-group>
    </div>
    <div class="col-md-12 text-left pt-2">
      <b-row align-v="center">
        <b-col class="text-left">
          <label class="mb-0">Sort by:</label>
          <div class="text-rigt">
            <b-form-select
              @change="setSorting()"
              v-model="sortBy"
              :options="sortingOptions"
              class="mt-0"
            ></b-form-select>
          </div>
        </b-col>
        <b-col class="text-right">
          <b-button
            v-if="$store.state.view_type !== 'bookmarks'"
            @click="$store.commit('SET_VIEW', 'bookmarks')"
          >
            <span class="d-none d-md-inline">View</span>
            Bookmarks
          </b-button>
          <b-button v-else @click="$store.commit('SET_VIEW', 'list')">
            <span class="d-none d-md-inline">Go</span>
            Back
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: null,
      sortingOptions: [
        { value: null, text: "Please select an option" },
        { value: "name", text: "Name" },
        { value: "phone", text: "Phone" },
        { value: "city", text: "City" },
        { value: "state", text: "State" },
      ],
    };
  },
  methods: {
    setSorting() {
      const value = this.sortBy;
      this.$store.commit("SET_SORT_BY", value);
    },
  },
};
</script>

<style lang="css" scoped></style>
