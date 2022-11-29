<template>
  <div class="login">
    <div class="login__container">
      <div class="login__container__header">
        <p class="login__container__header__subtitle">Welcome back.</p>
        <h1 class="login__container__header__title">Login to your account</h1>
      </div>
      <div class="login__container__body">
        <form class="login__container__body__form" @submit.prevent="login">
          <div class="login__container__body__form__group">
            <label
              class="login__container__body__form__group__label"
              for="email"
              >Email</label
            >
            <input
              class="login__container__body__form__group__input"
              type="email"
              id="email"
              v-model="email"
            />
          </div>
          <div class="login__container__body__form__group">
            <label
              class="login__container__body__form__group__label"
              for="password"
              >Password</label
            >
            <input
              class="login__container__body__form__group__input"
              type="password"
              id="password"
              v-model="password"
            />
          </div>
          <div class="login__container__body__form__group">
            <button
              class="login__container__body__form__group__button"
              type="submit"
            >
              <v-progress-circular
                indeterminate
                color="white"
                size="20"
                v-if="$store.state.loading"
              ></v-progress-circular>
              <span v-else>Login</span>
            </button>
          </div>
        </form>
        <!-- Not registered yet -->
        <div class="login__container__body__register">
          <p class="login__container__body__register__text">
            Not registered yet?
            <router-link
              class="login__container__body__register__link"
              to="/register"
              >Register</router-link
            >
            <img
              src="../../assets/right-arrow.svg"
              class="login__container__body__register__icon"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      if (!this.validate()) {
        this.$store.commit('flashError', this.error);
        return;
      }

      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/');
        });
    },
    validate() {
      if (!this.email) {
        this.error = 'Email is required';
        return false;
      }

      if (!this.password) {
        this.error = 'Password is required';
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #131418;
}

.login__container {
  width: 500px;
  padding: 30px;
  border-radius: 5px;
  background-color: rgb(30, 30, 30);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 0 20px;
}

.login__container__header {
  text-align: center;
}

.login__container__header__subtitle {
  font-size: 14px;
  color: #a0a0a0;
  margin-top: 20px;
}

.login__container__header__title {
  font-size: 24px;
  color: #fff;
}

.login__container__body {
  margin-top: 20px;
}

.login__container__body__form__error {
  margin-bottom: 10px;
}

.login__container__body__form__error__message {
  color: red;
}

.login__container__body__form__group {
  margin-bottom: 10px;
}

.login__container__body__form__group__label {
  display: block;
  margin-bottom: 5px;
  color: #a0a0a0;
}

.login__container__body__form__group__input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #fff;
}

.login__container__body__form__group__button {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: #de1d34;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}

.login__container__body__form__group__button:hover {
  background-color: #ddd;
}

.login__container__body__form__group__button:active {
  background-color: #eee;
}

.login__container__body__form__group__button:focus {
  outline: none;
}

.login__container__body__form__group__button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.login__container__body__register {
  margin-top: 30px;
}

.login__container__body__register__text {
  font-size: 14px;
  color: #a0a0a0;
}

.login__container__body__register__link {
  font-size: 14px;
  color: #de1d34;
  text-decoration: none;
  margin-bottom: 20px;
  margin-left: 2px;
}

.login__container__body__register__link:hover {
  text-decoration: underline;
}

.login__container__body__register__icon {
  width: 14px;
  height: 14px;
  margin-left: 5px;
  vertical-align: middle;
}
</style>
