<script setup>
import TrianglePlayIcon from "../../../assets/img/play-this.svg";
import HeartIcon from "../../../assets/img/heart.svg";
import InfoIcon from "../../../assets/img/info.svg";
import LikeIcon from "../../../assets/img/like.svg";
import DisLikeIcon from "../../../assets/img/dislike.svg";
</script>
<template>
  <section class="short-details">
    <div class="big-wallpaper">
      <img src="https://i.imgur.com/QmTr4OZ.jpg" class="img-top" />
    </div>
    <div class="overlay"></div>
  </section>
  <section class="full-details">
    <div class="titles">
      <h3 class="translated-name">Thợ săn quái vật</h3>
      <h5 class="original-name">The Witcher</h5>
    </div>
    <div class="genres">
      <a href="#!">Thể loại 1</a>
      <a href="#!">Thể loại 2</a>
      <a href="#!">Thể loại 3</a>
    </div>
    <div class="ratings">
      <div class="imdb">
        <img src="https://i.imgur.com/fnIrM8k.png" /><span>6.2 / 10</span>
      </div>
      <div class="rotten">
        <img src="https://i.imgur.com/lk7BRP5.png" /><span>63%</span>
      </div>
      <div class="meta">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png"
        />
        <span>6.9</span>
      </div>
    </div>
    <div class="btn-m">
      <a href="#!" class="play-this">Xem ngay</a>
      <a href="#!" class="add-to-list">Thêm vào danh sách</a>
      <a href="#!" class="report-info-detail">Báo cáo</a>
    </div>
    <div class="synopsis">
      The Witcher là một serie phim truyền hình chính kịch kỳ ảo được xây dựng
      dựa trên bộ sách cùng tên của nhà văn người Ba Lan Andrzej Sapkowski. Lấy
      bối cảnh bên trong thế giới hư cấu thời trung cổ tại một vùng đất được gọi
      là "Lục địa", The Witcher kể về câu chuyện của những con người mang theo
      định mệnh gắn liền với nhau, bao gồm chàng thợ săn quái vật cô độc Geralt
      xứ Rivia, nàng phù thủy Yennefer xứ Vengerberg và công chúa của Cintra,
      Ciri.
    </div>
    <div class="casts">
      <div class="casts-title">
        <strong>Diễn viên</strong>
        <span>
          Chạm 1 lần - hiển thị vai diễn | 2 lần - thông tin diễn viên
        </span>
      </div>
      <div class="casts-list">
        <div class="item">
          <img
            class="cast-img"
            src="https://i.imgur.com/2LxKJLX.png"
            alt="Henry Cavil"
          />
          <img
            class="char-img"
            src="https://i.imgur.com/cmwyMfZ.png"
            alt="Geralt of Rivia"
          />
        </div>
        <div class="item">
          <img
            class="cast-img"
            src="https://i.imgur.com/4gQ3G9K.png"
            alt="Freya Allan"
          />
          <img
            class="char-img"
            src="https://i.imgur.com/jgUi9XV.png"
            alt="Princess Ciri"
          />
        </div>
        <div class="item">
          <img
            class="cast-img"
            src="https://i.imgur.com/99Q1qRj.png"
            alt="Anya Chalotra"
          />
          <img
            class="char-img"
            src="https://i.imgur.com/aE0vGta.png"
            alt="Yennefer of Vengerberg"
          />
        </div>
        <div class="item">
          <img
            class="cast-img"
            src="https://i.imgur.com/PPcB7iT.png"
            alt="Joey Batey"
          />
          <img
            class="char-img"
            src="https://i.imgur.com/JjFqtIW.png"
            alt="Jaskier"
          />
        </div>
      </div>
    </div>
    <div class="seasons-parts">
      <div class="sp-title">
        <strong>Danh sách tập</strong>
        <select>
          <option>Mùa 1</option>
          <option>Mùa 2</option>
        </select>
      </div>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
      >
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/2BFyWFi.png" />
          <div class="chapter-overlay">
            <a class="play-this"><TrianglePlayIcon /></a>

            <div class="chapter-info">
              <div>
                <div>01</div>
                <strong>Khởi đầu của sự kết thúc</strong>
              </div>

              <span class="duration">1h 1m</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/OQiIIhH.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/da5sEMH.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/s0CGjsU.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/aHvsHSm.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/u6ARP0u.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/qHmrLyE.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="movie-thumb" src="https://i.imgur.com/8DmzhOU.png" />
        </swiper-slide>
      </swiper>
    </div>  
    <div class="related" style="margin-bottom:10rem;">
        <strong class="rf-title">
            Phim cùng thể loại
        </strong>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
</style>