<template>
  <div class="login">
    <h1>Login</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click.prevent="login">Login</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
};
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login h1 {
  text-align: center;
}

.login label {
  display: block;
  margin-top: 10px;
}

.login input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login input[type='submit'] {
  margin-top: 10px;
  cursor: pointer;
}

.login input[type='submit']:hover {
  background: #ccc;
}

.login input[type='submit']:active {
  background: #aaa;
}

.login input[type='submit']:focus {
  outline: none;
}

.login input[type='submit']:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
