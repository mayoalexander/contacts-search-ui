<template lang="html">
  <div class="">
    <b-list-group v-if="items && items.length > 0">
      <b-list-group-item v-for="(item, i) in items" :key="i">
        <div class="row text-left">
          <div class="col-md-6 mb-4">
            <h4 class="text-sm-left">
              {{ item.name }}
            </h4>
            <div class="">
              <p class="mb-0">
                {{ item.city }}, {{ item.state }}
                <span class="international-code" v-if="item.country !== 'US'"
                  >, {{ item.country }}</span
                >
              </p>
              <p class="text-muted mb-0">{{ item.email }}</p>
              <div v-if="item.phone">
                <span v-for="(phone_line, i) in item.phone" :key="i">
                  <a :href="'tel:' + formatPhone(phone_line)">
                    {{ formatPhone(phone_line) }}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="employments">
              <h6 class="mb-0">Employments:</h6>
              <div v-for="(position, i) in item.employments" :key="i">
                {{ position.title }} at {{ position.company }} -
                {{ position.classification }}
                <span
                  v-if="position.primary && item.employments.length > 1"
                  class="text-muted"
                  >(Primary)</span
                >
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <div v-else class="text-muted">No contacts found..</div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    formatPhone(phone) {
      return (
        "+" + phone.country_code + " (" + phone.area_code + ") " + phone.number
      );
    },
  },
};
</script>

<style lang="css" scoped></style>
