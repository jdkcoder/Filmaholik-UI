<template>
  <section id="recovery">
    <picture>
      <source
        srcset="https://i.imgur.com/fnZXUrl.png"
        media="(min-width: 600px)"
      />
      <source
        srcset="
          https://i.ytimg.com/vi/WPbVuNKF8qw/maxresdefault.jpg
        "
      />
      <img srcset="https://i.ytimg.com/vi/WPbVuNKF8qw/maxresdefault.jpg" class="bg-recovery" />
    </picture>

    <div id="recovery-form">
      <div class="top-field">
        <a href="#!">Đăng ký</a>
        <a href="#!">Đăng nhập</a>
      </div>
      <h2 class="recovery-title">Quên mật khẩu</h2>
      <form>
        <div class="input-group">
          <input
            id="login"
            type="login"
            name="login"
            placeholder=" "
            autocomplete="off"
          />
          <label for="login">Tên người dùng / Địa chỉ email</label>
        </div>
        <button class="recovery-btn" type="submit">Gửi yêu cầu</button>
        <small>
          Yêu cầu xác nhận và thiết lập mật khẩu mới sẽ được gửi về email theo
          tài khoản đã đăng ký của bạn, hãy chắc chắn rằng bạn đã điền đúng
          thông tin!
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