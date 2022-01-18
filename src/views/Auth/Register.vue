<template>
  <section id="register">
    <picture>
      <source
        srcset="https://i.imgur.com/IQBlSLe.jpg"
        media="(min-width: 600px)"
      />
      <source
        srcset="
          https://images.hdqwalls.com/download/iron-man-mask-4k-8n-320x568.jpg
        "
      />
      <img
        srcset="
          https://images.hdqwalls.com/download/iron-man-mask-4k-8n-320x568.jpg
        "
        class="bg-register"
      />
    </picture>

    <div id="register-form">
      <div class="top-field">
        <a href="#!">Đăng nhập</a>
        <a href="#!">Quên mật khẩu</a>
      </div>
      <h2 class="register-title">Đăng ký</h2>
      <form>
        <div class="input-group">
          <input
            id="username"
            type="username"
            name="username"
            placeholder=" "
            autocomplete="off"
          />
          <label for="username">Tên người dùng</label>
        </div>
        <div class="input-group">
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            autocomplete="off"
          />
          <label for="email">Địa chỉ email</label>
        </div>
        <div class="input-group">
          <input
            id="password"
            type="password"
            name="password"
            placeholder=" "
            autocomplete="off"
          />
          <label for="password">Mật khẩu</label>
        </div>
        <div class="input-group">
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder=" "
            autocomplete="off"
          />
          <label for="confirmPassword">Nhập lại Mật khẩu</label>
        </div>
        <button class="register-btn" type="submit">Đăng ký</button>
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