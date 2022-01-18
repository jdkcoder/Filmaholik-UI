<script setup>
import TrianglePlayIcon from "../../../assets/img/play-this.svg";
import HeartIcon from "../../../assets/img/heart.svg";
import InfoIcon from "../../../assets/img/info.svg";
import LikeIcon from "../../../assets/img/like.svg";
import DisLikeIcon from "../../../assets/img/dislike.svg";
</script>
<template>
  <section class="short-details">
    <div class="overlay">
      <div class="short-info-block">
        <div class="short-info-contents">
          <img
            class="title"
            src="https://i.imgur.com/vmBBWz0.png"
            alt="The Witcher"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <div class="badges" data-aos="fade-right" data-aos-delay="500">
            <p>2019</p>
            <p class="age-min">18+</p>
            <p>2 Mùa</p>
          </div>

          <div class="ratings" data-aos="fade-up" data-aos-delay="700">
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
            <div class="filmaholik">
              <span><LikeIcon /> <DisLikeIcon /></span>
              <div class="count">
                <span class="likes-count">100</span>
                <span class="dislikes-count">10</span>
              </div>
            </div>
          </div>
          <div
            class="btn-short-info"
            data-aos="fade-zoom-in"
            data-aos-delay="1000"
          >
            <button
              class="show-full-info"
              type="button"
              @click="showFullDetail()"
            >
              <span v-if="textShow.original">Thông tin đầy đủ</span>
              <span v-if="textShow.clicked">Thu gọn lại</span>
            </button>
          </div>
        </div>
      </div>
      <div class="play" data-aos="fade-zoom-in" data-aos-delay="200">
        <a class="play-trailer"><TrianglePlayIcon /></a>
      </div>
      <div class="seasons-parts-top">
        <div
          class="seasons-parts-list"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <ul>
            <li class="season active">Mùa 1</li>
            <li>Mùa 2</li>
            <li>Mùa 3</li>
          </ul>
        </div>
        <div class="episodes-result" data-aos="fade-down" data-aos-delay="1000">
          <swiper
            :direction="'vertical'"
            :slidesPerView="'auto'"
            :spaceBetween="10"
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            class="episodes"
          >
            <swiper-slide>
              <img class="movie-thumb" src="https://i.imgur.com/2BFyWFi.png" />
              <div class="ep-overlay">
                <a class="play-this"><TrianglePlayIcon /></a>
                <div class="ep-info">
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
      </div>
    </div>
    <div class="big-wallpaper">
      <img
        src="https://i.imgur.com/aLXNzNH.jpg"
        class="img-top"
        data-aos="fade-zoom-in"
        data-aos-delay="200"
      />
    </div>
  </section>

  <section id="full-details" class="full-details" v-if="isMobile()">
    <div class="titles" data-aos="zoom-out" data-aos-delay="200">
      <h3 class="translated-name">Thợ săn quái vật</h3>
      <h5 class="original-name">The Witcher</h5>
    </div>
    <div class="genres" data-aos="flip-up" data-aos-delay="400">
      <a href="#!">Thể loại 1</a>
      <a href="#!">Thể loại 2</a>
      <a href="#!">Thể loại 3</a>
    </div>
    <div class="btn-m" data-aos="zoom-out" data-aos-delay="400">
      <a href="#!" class="play-this">Xem ngay</a>
      <a href="#!" class="add-to-list">Thêm vào danh sách</a>
      <a href="#!" class="report-info-detail">Báo cáo</a>
    </div>
    <div class="synopsis" data-aos="fade-zoom-in" data-aos-delay="400">
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
        <strong data-aos="fade-right" data-aos-delay="600">Diễn viên</strong>
        <span data-aos="fade-zoom-in" data-aos-delay="800">
          Chạm 1 lần - hiển thị vai diễn | 2 lần - thông tin diễn viên
        </span>
      </div>
      <div class="casts-list" data-aos="fade-zoom-in" data-aos-delay="900">
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
      <div class="sp-title" data-aos="fade-up" data-aos-delay="1000">
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
        data-aos="fade-zoom-in"
        data-aos-delay="1200"
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
    <div class="related" style="margin-bottom: 10rem">
      <strong class="rf-title" data-aos="fade-right" data-aos-delay="1300">
        Phim cùng thể loại
      </strong>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation]);

AOS.init();

var check = false;
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      textShow: {
        clicked: false,
        original: true,
      },
      isShow: false,
    };
  },
  methods: {
    isMobile() {
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },

    showFullDetail() {
      check = !check;
      this.textShow.clicked = !this.textShow.clicked;
      this.textShow.original = !this.textShow.original;
      if (check) {
        setTimeout(() => {
          var element = document.getElementById("full-details");
          var headerOffset = 2;
          var elementPosition = element.getBoundingClientRect().top;
          var offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 200);
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/child/film/fullDetails";
</style>
