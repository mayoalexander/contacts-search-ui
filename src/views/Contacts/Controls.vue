<template lang="html">
  <div class="controls row mb-3">
    <div class="col-md-12 mb-2">
      <b-form-input
        v-model="$store.state.searchQuery"
        :placeholder="'Search ' + searchType + '..'"
        :class="{
          'invalid-form' : !isValid,
          'valid-form' : isValid
        }"
      ></b-form-input>
      <div v-if="searchType === 'email' && $store.state.searchQuery.length > 3" class="text-left">
        <b-form-invalid-feedback :state="isValid">
          You must enter a valid email!
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="isValid">
          Looks Good.
        </b-form-valid-feedback>
      </div>
    </div>
    <div class="col-md-12 text-left pt-2">
      <b-row align-v="center">
        <!-- search by -->
        <b-col class="text-left">
          <label class="mb-0">Search by:</label>
          <div class="">
            <b-form-select
              @change="setSearchBy()"
              v-model="searchType"
              :options="searchOptions"
              class="mt-0 w-100"
            ></b-form-select>
          </div>
        </b-col>

        <!-- view sortby -->
        <b-col class="text-left">
          <label class="mb-0">Sort by:</label>
          <div class="">
            <b-form-select
              @change="setSorting()"
              v-model="sortBy"
              :options="sortingOptions"
              class="mt-0 w-100"
            ></b-form-select>
          </div>
        </b-col>

        <!-- view bookmarks -->
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
      searchType: "email",
      searchOptions: [
        { value: null, text: "Anything" },
        { value: "name", text: "Name" },
        { value: "email", text: "Email" },
        { value: "phone", text: "Phone" },
        { value: "city", text: "City" },
        { value: "state", text: "State" },
      ],
      sortingOptions: [
        { value: null, text: "Select.." },
        { value: "name", text: "Name" },
        { value: "email", text: "Email" },
        { value: "phone", text: "Phone" },
        { value: "city", text: "City" },
        { value: "state", text: "State" },
      ],
    };
  },
  mounted () {
    // set default search to email
    this.setSearchBy('email');
  },
  computed: {
    isValid() {
      let res = true;
      if (this.searchType === "email") {
        res = this.validateEmail();
      }
      return res;
    },
  },
  methods: {
    setSorting() {
      const value = this.sortBy;
      this.$store.commit("SET_SORT_BY", value);
    },
    setSearchBy() {
      const value = this.searchType;
      this.$store.commit("SET_SEARCH_BY", value);
    },
    validateEmail() {
      const email = this.$store.state.searchQuery;
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style lang="css" scoped></style>
