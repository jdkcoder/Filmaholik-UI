<template>
  <section id="register" data-aos-delay="300">
    <picture data-aos="fade">
      <source srcset="https://i.imgur.com/IQBlSLe.jpg" media="(min-width: 600px)" />
      <source
        srcset="https://images.hdqwalls.com/download/iron-man-mask-4k-8n-320x568.jpg"
      />
      <img
        srcset="https://images.hdqwalls.com/download/iron-man-mask-4k-8n-320x568.jpg"
        class="bg-register"
      />
    </picture>

    <div id="register-form" data-aos="fade" data-aos-delay="200" data-aos-offset="-200">
      <div class="top-field">
        <router-link
          to="/login"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-offset="-200"
        >
          Đăng nhập
        </router-link>
        <router-link
          to="/recover"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-offset="-200"
          >Quên mật khẩu</router-link
        >
      </div>
      <h2
        class="register-title"
        data-aos="flip-up"
        data-aos-delay="500"
        data-aos-offset="-200"
      >
        Đăng ký
      </h2>
      <form>
        <div
          class="input-group"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-offset="-200"
        >
          <input
            id="username"
            type="username"
            name="username"
            placeholder=" "
            autocomplete="off"
          />
          <label for="username">Tên người dùng</label>
        </div>
        <div
          class="input-group"
          data-aos="fade"
          data-aos-delay="700"
          data-aos-offset="-200"
        >
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            autocomplete="off"
          />
          <label for="email">Địa chỉ email</label>
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
          class="input-group"
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-offset="-200"
        >
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder=" "
            autocomplete="off"
          />
          <label for="confirmPassword">Nhập lại Mật khẩu</label>
        </div>
        <button
          class="register-btn"
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-offset="-300"
        >
          Đăng ký
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/child/auth/register";
</style>
