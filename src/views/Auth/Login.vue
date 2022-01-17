<template>
  <section id="login">
    <img
      src="https://cdn.wallpapersafari.com/54/67/yXjDHE.jpg"
      class="bg-login"
    />
    <div id="login-form">
      <div class="top-field">
        <a href="#!">Đăng ký</a>
        <a href="#!">Quên mật khẩu</a>
      </div>
      <h2 class="login-title">đăng nhập</h2>
      <form>
        <div class="input-group">
          <input
            id="login"
            type="login"
            name="username"
            placeholder=" "
            autocomplete="off"
          />
          <label for="login">Tên đăng nhập / Email</label>
        </div>
        <div class="input-group">
          <input
            type="password"
            name="password"
            placeholder=" "
            autocomplete="off"
          />
          <label for="login">Mật khẩu</label>
        </div>

        <div class="remember-me">
          <input class="remember-checkbox" type="checkbox" />
          Duy trì đăng nhập cho lần tới
        </div>
        <button class="login-btn" type="submit">Đăng nhập</button>
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