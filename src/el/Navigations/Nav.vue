
<script setup>
import desktopNav from "./desktopNav.vue";
import mobileNav from "./mobileNav.vue";
</script>

<template>
  <mobileNav v-if="isPlayer" />
  <desktopNav v-if="isPlayer" />
</template>
<script>
export default {
  computed: {
    isPlayer() {
      return this.$route.name !== "Film Player";
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/child/menus";
</style>
