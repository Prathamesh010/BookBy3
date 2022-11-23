<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <div class="navbar__links">
        <a href="/">Home</a>
        <a href="#">BOOK/3</a>
        <a href="#">Resources</a>
        <a href="#">Syllabus</a>
        <a href="/about">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="navbar__buttons">
      <button class="navbar__buttons--login">Login</button>
      <button class="navbar__buttons--signup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #131418;
  height: 5rem;
}

.navbar__content {
  display: flex;
  align-items: center;
}

.navbar__logo {
  display: flex;
  align-items: center;
}

.navbar__logo img {
  width: 4rem;
}

.navbar__links {
  display: flex;
  align-items: center;
  margin-left: 2rem;
}

.navbar__links a {
  margin: 0 1.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
}

.navbar__links a:hover {
  color: #f50057;
}

.navbar__links a.active {
  color: #f50057;
}

.navbar__links a.active:hover {
  color: #fff;
}

.navbar__buttons {
  display: flex;
  align-items: center;
}

.navbar__buttons--login {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #f50057;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
}

.navbar__buttons--signup {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #fff;
  color: #131418;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
}

.navbar__buttons--signup:hover {
  background-color: #f50057;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar__links {
    display: none;
  }
}
</style>
