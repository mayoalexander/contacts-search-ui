<template lang="html">
  <div class="container">
    <h2 class="text-left">All Contacts</h2>
    <div class="all-contacts mb-5">
      <list-controls />

      <div v-if="$store.state.view_type === 'list'" class="list-view">
        <contacts-list-view :items="filteredContacts" />
      </div>

      <div v-if="$store.state.view_type === 'bookmarks'" class="list-view">
        <contacts-list-view :items="$store.state.bookmarks" />
      </div>
    </div>
  </div>
</template>

<script>
import contacts from "@/data/contacts.json";
import ContactsListView from "@/views/Contacts/Views/List";
import ListControls from "@/views/Contacts/Controls";
export default {
  components: {
    ContactsListView,
    ListControls,
  },
  data() {
    return {
      allContacts: [],
    };
  },
  mounted() {
    this.allContacts = contacts;

    // set default view
    this.$store.commit("SET_VIEW", "list");
  },
  methods: {
    getSearchQuery() {
      return this.$store.state.searchQuery.trim().toLowerCase();
    },
    isFilterApplied(param, item) {
      const searchBy = this.$store.state.searchBy;

      // if object empty, return false
      if (item && item.length > 0 && !item[param]) {
        return false;
      }

      const found = searchBy.find((item) => item === param);
      return found;
    },
    applyFiltersSorting(contacts) {
      const sortBy = this.$store.state.sortBy;

      // // sort by name
      if (!sortBy || sortBy === "name") {
        contacts.sort(function (a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }

      // // sort by phone
      if (sortBy === "phone") {
        contacts.sort(function (a, b) {
          var textA = a.phone[0].area_code.toUpperCase();
          var textB = b.phone[0].area_code.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }

      // // sort by city
      if (sortBy === "city") {
        contacts.sort(function (a, b) {
          var textA = a.city.toUpperCase();
          var textB = b.city.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }

      // // sort by state
      if (sortBy === "state") {
        contacts.sort(function (a, b) {
          var textA = a.state.toUpperCase();
          var textB = b.state.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }

      return contacts;
    },
  },
  computed: {
    filteredContacts() {
      let filtered = this.allContacts;
      const query = this.getSearchQuery();
      const allContacts = this.applyFiltersSorting(this.allContacts);
      if (query) {
        filtered = allContacts.filter((item) => {
          let res = false;
          if (
            this.isFilterApplied("name", item) &&
            item.name.toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("email", item) &&
            item.email.toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("city", item) &&
            item.city.toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("state", item) &&
            item.state.toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("postal_code", item) &&
            item.postal_code.toString().toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("keywords", item) &&
            item.keywords.toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (
            this.isFilterApplied("employments", item) &&
            item.employments.length > 0
          ) {
            item.employments.forEach((item) => {
              if (item.title.toLowerCase().includes(query)) {
                res = true;
              }
              if (item.industry.toLowerCase().includes(query)) {
                res = true;
              }
              if (item.company.toLowerCase().includes(query)) {
                res = true;
              }
              if (item.classification.toLowerCase().includes(query)) {
                res = true;
              }
            });
          }
          if (this.isFilterApplied("phone", item) && item.phone.length > 0) {
            item.phone.forEach((item) => {
              if (item.area_code.toLowerCase().includes(query)) {
                res = true;
              }
              if (item.number.toLowerCase().includes(query)) {
                res = true;
              }
            });
          }
          return res;
        });
      }
      return filtered;
    },
  },
};
</script>

<style lang="css" scoped></style>
