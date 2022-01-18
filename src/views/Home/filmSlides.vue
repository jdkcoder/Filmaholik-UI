<script setup>
import SingleArrowRight from "../../assets/img/single-arrow-right.svg";
import TrianglePlayIcon from "../../assets/img/play-this.svg";
import HeartIcon from "../../assets/img/heart.svg";
import InfoIcon from "../../assets/img/info.svg";
</script>
<template>
  <section class="slides">
    <div class="latest">
      <div class="title" data-aos="fade-right" data-aos-delay="200">
        <h2>Phim mới cập nhật</h2>
        <div class="view-all">
          <p><span>Xem tất cả</span> <SingleArrowRight /></p>
        </div>
      </div>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true" data-aos="fade-zoom-in" data-aos-delay="600"
      >
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/2kYvx0N.png" />
          <div class="hover-el">
            <div class="tl-corner">
              <router-link to="/film" class="play-this"><TrianglePlayIcon /></router-link>
            </div>
            <div class="tr-corner">
              <a class="info-this"><InfoIcon /></a>
              <a class="favour-this"><HeartIcon /></a>
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
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);
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
@import "../../assets/styles/child/home/slides/latest";
section.slides {
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
}
</style>
