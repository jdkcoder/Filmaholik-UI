<template>
  <section id="login">
    <img
      src="https://cdn.wallpapersafari.com/54/67/yXjDHE.jpg"
      class="bg-login"
      data-aos="fade"
      data-aos-delay="400"
      data-aos-offset="-200"
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
      <form>
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
          <input class="remember-checkbox" type="checkbox" />
          Duy trì đăng nhập cho lần tới
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
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/child/auth/login";
</style>
