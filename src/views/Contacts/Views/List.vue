<template lang="html">
  <div class="">
    <b-list-group v-if="items && items.length > 0">
      <b-list-group-item v-for="(item, i) in items" :key="i">
        <div class="row text-left pt-3">
          <div class="col-md-5 mb-3">
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
          <div class="col-md-5 mb-2">
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
          <div class="col-md-2 mb-3 text-right">
            <b-button
              v-if="!isSavedToBookmarks(item)"
              @click="toggleBookmark(item)"
              size="sm"
              >Add to Bookmarks</b-button
            >
            <b-button v-else size="sm" @click="toggleBookmark(item)">
              Unbookmark
            </b-button>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <div v-else class="text-muted mt-3">
      No contacts found..
      <div v-if="$store.state.view_type === 'bookmarks'" class="mt-2">
        <b-button size="sm" @click="$store.commit('SET_VIEW', 'list')">
          Go Back
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    toggleBookmark(item) {
      // save to bookmarks
      this.$store.commit("TOGGLE_BOOKMARK", item);
    },
    isSavedToBookmarks(item) {
      return this.$store.state.bookmarks.find(
        (bookmark) => bookmark.name == item.name
      );
    },
    formatPhone(phone) {
      // compile
      phone =
        "+" + phone.country_code + " (" + phone.area_code + ") " + phone.number;
      // format
      var cleaned = ("" + phone).replace(/\D/g, "");
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = match[1] ? "+1 " : "";
        return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
          ""
        );
      }
      return null;
    },
  },
};
</script>

<style lang="css" scoped></style>
