<template lang="html">
  <b-list-group>
    <b-list-group-item v-for="(item, i) in items" :key="i">
      {{ item }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="css" scoped>
</style>
