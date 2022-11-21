<template>
  <!-- register with username, password, email -->
  <div class="register">
    <h1>Register</h1>
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      v-model="username"
      placeholder="Enter username"
    />
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email" placeholder="Enter email" />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Enter password"
    />
    <input type="submit" value="Register" @click="register" />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  methods: {
    register() {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: '',
    };
  },
};
</script>

<style>
.register {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register h1 {
  text-align: center;
}

.register label {
  display: block;
  margin-top: 10px;
}

.register input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register input[type='submit'] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  cursor: pointer;
}

.register input[type='submit']:hover {
  background-color: #ddd;
}

.register p {
  color: red;
}

.register p::first-letter {
  text-transform: uppercase;
}

.register p::after {
  content: '!';
}

.register p::before {
  content: 'Error: ';
}
</style>
