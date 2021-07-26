<template lang="html">
  <div class="controls row mb-3">
    <div class="col-md-9">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
