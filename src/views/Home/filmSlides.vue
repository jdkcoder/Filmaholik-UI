<script setup>
import SingleArrowRight from "../../assets/img/single-arrow-right.svg";
import TrianglePlayIcon from "../../assets/img/play-this.svg";
</script>
<template>
  <section class="slides">
    <div class="latest">
      <div class="title">
        <h2>Phim mới cập nhật</h2>
        <div class="view-all">
          <p><span>Xem tất cả</span> <SingleArrowRight /></p>
        </div>
      </div>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
      >
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/2kYvx0N.png" />
          <div class="hover-el">
            <div class="tl-corner">
              <a class="play-this"><TrianglePlayIcon /></a>
            </div>
            <div class="bl-corner">
              <img src="https://i.imgur.com/gfin6Rz.png" class="title" />
              <div class="short-info">
                <p class="year-released">2019</p>
                <p class="type">TV Series</p>
                <p class="age-restrict">18+</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/sRWo3Y6.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/WIX0qlO.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/Y8gBtp9.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/Eh9sfS0.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/2kYvx0N.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/sRWo3Y6.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/WIX0qlO.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/Y8gBtp9.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/Eh9sfS0.png" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation, FreeMode]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
section.slides {
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
}
</style>

