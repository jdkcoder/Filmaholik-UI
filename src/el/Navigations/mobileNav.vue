<script setup>
import FilmIcon from '../../assets/img/film.svg';
import HomeIcon from '../../assets/img/home.svg';
import SingleUserIcon from '../../assets/img/user.svg';
</script>
<template>
  <div class="m-nav">
    <router-link to="/" class="item">
      <FilmIcon />
      <span>Phim</span>
    </router-link>
    <router-link to="/" class="item">
      <HomeIcon />
      <span>Trang chủ</span>
    </router-link>
    <router-link to="/" class="item">
      <FilmIcon />
      <span>Phim</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Mobile Navigation",
};
</script>