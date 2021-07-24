<template lang="html">
  <div class="">
    <h4>this is the list all</h4>
    <div class="all-contacts">
      allContacts {{ allContacts }}
    </div>
  </div>
</template>

<script>
import contacts from "@/data/contacts.json"
export default {
  data () {
    return {
      allContacts: []
    }
  },
  mounted () {
    this.allContacts = contacts
    console.log({
      contacts
    })
  }
}
</script>

<style lang="css" scoped>
</style>
