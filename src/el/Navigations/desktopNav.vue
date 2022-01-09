<script setup>
import ZapIcon from "../../assets/img/zap.svg";
import SearchIcon from "../../assets/img/search.svg";
</script>
<template>
  <div class="desktop-nav" :class="{scrolling: scrollPosition > 80}">
    <div class="left-corner">
      <span class="logo"> LOGO HERE </span>
      <ul>
        <li>
          <router-link to="/" class="item">
            <span>Trang chủ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/films" class="item">
            <span>Phim mới</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right-corner">
      <button type="button" class="upgrade">
        <ZapIcon /> <span>VIP PREMIUM</span>
      </button>
      <button type="button" class="search">
        <SearchIcon />
      </button>
      <div class="user-corner">
        <span class="username">Joker Dark Knight</span>
        <div class="avt"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desktop Navigation",
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
};
</script>

<style>
</style>