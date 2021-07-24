<template lang="html">
  <div class="container">
    <h4>this is the list all</h4>
    <div class="all-contacts">
      <div class="controls row">
        <div class="col-md-9">
          <b-form-input v-model="searchQuery" placeholder="Search anything.."></b-form-input>
        </div>
        <div class="col-md-3">
          <b-button block class="w-100" @click="search()">
            Search
          </b-button>
        </div>
      </div>

      <b-table striped hover :items="filteredContacts"></b-table>
    </div>
  </div>
</template>

<script>
import contacts from "@/data/contacts.json"
export default {
  data () {
    return {
      allContacts: [],
      searchQuery: ''
    }
  },
  mounted () {
    this.allContacts = contacts
  },
  computed: {
    filteredContacts () {
      let filtered = this.allContacts
      const query = this.searchQuery.trim().toLowerCase()
      if (query) {
        filtered = this.allContacts.filter((item) => {
          // need to pull all data before removing
          console.log({
            item
          })
          let res = false
          if (item.name.toLowerCase().includes(query)) {
            res = true
          }
          if (item.email
            && item.email.toLowerCase().includes(query)) {
            res = true
          }
          if (item.city
            && item.city.toLowerCase().includes(query)) {
            res = true
          }
          if (item.state
            && item.state.toLowerCase().includes(query)) {
            res = true
          }
          if (item.postal_code
            && item.postal_code.toString().toLowerCase().includes(query)) {
            res = true
          }
          if (item.keywords
            && item.keywords.toLowerCase().includes(query)) {
            res = true
          }
          if (item.employments
            && item.employments.length > 0) {
              item.employments.forEach((item) => {
                if (item.title.toLowerCase().includes(query)) {
                  res = true
                }
                if (item.industry.toLowerCase().includes(query)) {
                  res = true
                }
                if (item.company.toLowerCase().includes(query)) {
                  res = true
                }
                if (item.classification.toLowerCase().includes(query)) {
                  res = true
                }
              });
          }
          if (item.phone
            && item.phone.length > 0) {
              item.phone.forEach((item) => {
                if (item.area_code.toLowerCase().includes(query)) {
                  res = true
                }
                if (item.number.toLowerCase().includes(query)) {
                  res = true
                }
              });
          }
          return res
        });
      }
      return filtered
    },
  }
}
</script>

<style lang="css" scoped>
</style>
