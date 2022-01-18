<script setup>
import HomeIcon from "../../assets/img/home.svg";
import FilmIcon from "../../assets/img/film.svg";
import SingleUserIcon from "../../assets/img/user.svg";
import SearchIcon from "../../assets/img/search.svg";
import HamburgerIcon from "../../assets/img/hamburger.svg";
</script>
<template>
  <div class="m-nav">
    <router-link to="/" class="item">
      <HomeIcon />
      <span>Trang chủ</span>
    </router-link>
    <router-link to="/" class="item">
      <FilmIcon />
      <span>Phim mới</span>
    </router-link>
    <router-link to="/" class="item">
      <SingleUserIcon />
      <span>Tài khoản</span>
    </router-link>
    <router-link to="/" class="item">
      <SearchIcon />
      <span>Tìm kiếm</span>
    </router-link>
    <router-link to="/" class="item more">
      <HamburgerIcon />
      <span>Thêm</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Mobile Navigation",
};
</script>