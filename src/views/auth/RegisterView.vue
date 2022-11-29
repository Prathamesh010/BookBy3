<template>
  <div class="register">
    <!-- two sections -->
    <div class="register__left">
      <h1 class="register__left__title">Welcome to Book By 3!</h1>
      <p class="register__left__text">
        In this inflating world of books prices, we are here to help you get the
        best books at the best prices. One thrid of the price of the original
        book.
      </p>
    </div>
    <div class="register__right">
      <!-- error -->
      <h1 class="register__right__title">Sign Up</h1>
      <form class="register__right__form" @click.prevent>
        <div class="register__right__form__group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="register__right__form__group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="register__right__form__group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="register__right__form__group">
          <label for="password2">Confirm Password</label>
          <input type="password" id="password2" v-model="password2" />
        </div>
        <button class="register__right__form__button" @click="register">
          Sign Up
        </button>
      </form>
      <p class="register__right__text">
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password2: '',
      error: '',
    };
  },
  methods: {
    register() {
      const valid = this.validate();
      if (!valid) {
        this.$store.commit('flashError', this.error);
        return;
      }

      this.$store
        .dispatch('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/');
        });
    },
    validate() {
      if (
        this.username.trim() === '' ||
        this.email.trim() === '' ||
        this.password.trim() === '' ||
        this.password2.trim() === ''
      ) {
        this.error = 'All fields are required';
        return false;
      } else if (!this.validateEmail(this.email)) {
        this.error = 'Email is not valid';
        return false;
      } else if (this.password.length < 6) {
        this.error = 'Password must be at least 6 characters';
        return false;
      } else if (this.password !== this.password2) {
        this.error = 'Passwords do not match';
        return false;
      }
      return true;
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register__left {
  flex: 1;
  height: 100%;
  background-color: #131418;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.register__left__title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.register__left__text {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin: 0 2rem;
}

.register__right {
  flex: 1;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.register__right__title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.register__right__form {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.register__right__form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.register__right__form__group label {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.register__right__form__group input {
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register__right__form__button {
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #f50057;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

.register__right__text {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
}

.register__right__text a {
  color: #f50057;
  text-decoration: none;
}

.register__right__text a:hover {
  text-decoration: underline;
}

.register__right__error {
  width: 80%;
  color: red;
  border: 1px dotted red;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.register__right__error__text {
  font-size: 1.2rem;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .register {
    flex-direction: column;
  }

  .register__left {
    display: none;
  }
}
</style>
