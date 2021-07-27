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

      <div v-if="$store.state.view_type === 'table'" class="list-view">
        <b-table striped hover :items="filteredContacts"></b-table>
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
          if (item.name.toLowerCase().includes(query)) {
            res = true;
          }
          if (item.email && item.email.toLowerCase().includes(query)) {
            res = true;
          }
          if (item.city && item.city.toLowerCase().includes(query)) {
            res = true;
          }
          if (item.state && item.state.toLowerCase().includes(query)) {
            res = true;
          }
          if (
            item.postal_code &&
            item.postal_code.toString().toLowerCase().includes(query)
          ) {
            res = true;
          }
          if (item.keywords && item.keywords.toLowerCase().includes(query)) {
            res = true;
          }
          if (item.employments && item.employments.length > 0) {
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
          if (item.phone && item.phone.length > 0) {
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
