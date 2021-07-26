<template lang="html">
  <div class="container">
    <h4>this is the list all</h4>
    <div class="all-contacts">
      <list-controls />

      <div v-if="$store.state.view_type === 'list'" class="list-view">
        <contacts-list-view :items="filteredContacts" />
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
  computed: {
    filteredContacts() {
      let filtered = this.allContacts;
      const query = this.$store.state.searchQuery.trim().toLowerCase();
      if (query) {
        filtered = this.allContacts.filter((item) => {
          // need to pull all data before removing
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
