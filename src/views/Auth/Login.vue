<template>
  <section id="login">
    <img
      src="https://cdn.wallpapersafari.com/54/67/yXjDHE.jpg"
      class="bg-login"
      data-aos="fade"
      data-aos-delay="200"
    />
    <div id="login-form" data-aos="fade" data-aos-delay="200">
      <div class="top-field">
        <router-link
          to="/register"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-offset="-200"
          >Đăng ký
        </router-link>
        <router-link
          to="/recover"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-offset="-200"
        >
          Quên mật khẩu
        </router-link>
      </div>
      <h2
        class="login-title"
        data-aos="flip-up"
        data-aos-delay="500"
        data-aos-offset="-200"
      >
        đăng nhập
      </h2>
      <form @submit.prevent="login">
        <div
          class="input-group"
          data-aos="fade"
          data-aos-delay="700"
          data-aos-offset="-200"
        >
          <input
            id="login"
            type="login"
            name="username"
            v-model="username"
            placeholder=" "
            autocomplete="off"
          />
          <label for="login">Tên đăng nhập / Email</label>
        </div>
        <div
          class="input-group"
          data-aos="fade"
          data-aos-delay="800"
          data-aos-offset="-200"
        >
          <input
            id="password"
            type="password"
            name="password"
            placeholder=" "
            v-model="password"
            autocomplete="off"
          />
          <label for="password">Mật khẩu</label>
        </div>

        <div
          class="remember-me"
          data-aos="fade"
          data-aos-delay="900"
          data-aos-offset="-200"
        >
          <input id="remember-me" class="remember-checkbox" type="checkbox" />
          Duy trì đăng nhập trong vòng 7 ngày tới
        </div>
        <button
          class="login-btn"
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-offset="-200"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return { username: "", password: "" };
  },
  methods: {
    async login() {
      await axios
        .post(`/auth/login`, {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let data = res.data;
          console.log(data);

          let jwt = data.accessToken;

          /* Kiểm tra remember-me*/
          let remember = document.getElementById("remember-me");
          if (remember.checked == true) {
            console.log("Đã chọn không cần re-login trong vòng 7 ngày tới");
            document.cookie = `JWT=${jwt}; max-age=604800`; //re-login sau 7 ngày - Đã chọn remember-me
          } else {
            document.cookie = `JWT=${jwt}; max-age=172800`; //re-login sau 3 ngày - Mặc định
            console.log("Mặc định, re-login trong vòng 3 ngày tới");
          }
          /* END Kiểm tra remember-me*/

          /* Chuyển hướng theo status login */
          if (
            jwt === data.accessToken &&
            jwt.length === 213 &&
            document.cookie.length === 217
          ) {
            this.$router.push("/"); //nếu login thành công
          } else {
            alert("Đăng nhập thất bại, hãy thử lại!"); //nếu login thất bại
          }
          /* END Chuyển hướng theo status login */
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    /* Require login or not */
    if (document.cookie.length === 217) {
      alert("Đăng nhập rồi còn gì nữa?");
      this.$router.push("/");
    } else if (document.cookie !== 217) {
      alert("Đăng nhập đê");
    } else {
      return false;
    }
    /* END REQUIRE LOGIN */
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/child/auth/login";
</style>
