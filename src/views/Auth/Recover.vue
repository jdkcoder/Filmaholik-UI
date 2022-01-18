<template>
  <section id="recovery">
    <picture data-aos="fade">
      <source srcset="https://i.imgur.com/fnZXUrl.png" media="(min-width: 600px)" />
      <source srcset="https://i.ytimg.com/vi/WPbVuNKF8qw/maxresdefault.jpg" />
      <img
        srcset="https://i.ytimg.com/vi/WPbVuNKF8qw/maxresdefault.jpg"
        class="bg-recovery"
      />
    </picture>

    <div id="recovery-form" data-aos="fade" data-aos-delay="200" data-aos-offset="-200">
      <div class="top-field">
        <router-link
          to="/register"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-offset="-200"
        >
          Đăng ký
        </router-link>
        <router-link
          to="/login"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-offset="-200"
        >
          Đăng nhập
        </router-link>
      </div>
      <h2
        class="recovery-title"
        data-aos="flip-up"
        data-aos-delay="500"
        data-aos-offset="-200"
      >
        Quên mật khẩu
      </h2>
      <form>
        <div
          class="input-group"
          data-aos="flip-down"
          data-aos-delay="700"
          data-aos-offset="-200"
        >
          <input
            id="login"
            type="login"
            name="login"
            placeholder=" "
            autocomplete="off"
          />
          <label for="login">Tên người dùng / Địa chỉ email</label>
        </div>
        <button
          class="recovery-btn"
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-offset="-200"
        >
          Gửi yêu cầu
        </button>
        <small data-aos="fade" data-aos-delay="700" data-aos-offset="-200">
          Yêu cầu xác nhận và thiết lập mật khẩu mới sẽ được gửi về email theo tài khoản
          đã đăng ký của bạn, hãy chắc chắn rằng bạn đã điền đúng thông tin!
        </small>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/child/auth/recover";
</style>
