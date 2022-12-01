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
      <v-form @click.prevent style="width: 100%" class="px-12 my-4" ref="form">
        <v-text-field
          v-model="username"
          label="Username"
          outlined
          dense
          :rules="required"
          color="black"
        />
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          dense
          :rules="emailRules.concat(required)"
          color="black"
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          :rules="required"
          color="black"
        />
        <v-text-field
          v-model="password2"
          type="password"
          label="Confirm Password"
          outlined
          dense
          :rules="required.concat(passwordConfirmationRule)"
          color="black"
        />
        <v-btn color="red" @click="register">
          <v-progress-circular
            indeterminate
            color="white"
            size="20"
            v-if="$store.state.loading"
          ></v-progress-circular>
          <span v-else>Register</span>
        </v-btn>
      </v-form>
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
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      required: [(v) => !!v || 'Field is required'],
    };
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.password2 || 'Password must match';
    },
  },
  methods: {
    register() {
      if (!this.$refs.form.validate()) return;
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
