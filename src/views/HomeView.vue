<template>
  <div class="hero__container">
    <div class="right">
      <v-responsive>
        <v-img
          src="@/assets/reading.svg"
          alt="welcome"
          max-height="500px"
          max-width="500px"
          class="mx-auto home__image"
        ></v-img>
      </v-responsive>
    </div>
    <div class="left">
      <!-- vertically and horizontally center -->
      <div class="main__heading">Book / 3</div>
      <div class="sub__heading">
        One platform for all your books at one thrid of the price
      </div>
      <div class="buttons">
        <button class="btn btn__primary">Explore</button>
      </div>
    </div>
    <!-- a scroll down arrow -->
    <div class="scroll__down">
      <v-icon color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.hero__container {
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-right: auto;
  margin-left: auto;
  background-color: #131418;
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
}

.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__heading {
  font-size: 8.4vw;
  color: #fff;
  font-weight: 700;
  margin-top: 200px;
}

.sub__heading {
  font-size: 1.4vw;
  color: #fff;
  font-weight: 400;
  font-style: italic;
  margin-top: -20px;
}

.buttons {
  width: 100%;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}

.btn__primary {
  background-color: #ff5a5f;
}

.scroll__down {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}

/* media query to move the right above left on mobile devices */
@media (max-width: 425px) {
  .home__container {
    flex-direction: column;
    padding-right: 40px;
    padding-left: 40px;
    margin-right: auto;
    margin-left: auto;
  }

  .left {
    margin-top: 0px;
    justify-content: flex-start;
    margin-left: 0px;
  }

  .right {
    margin-top: 0px;
    justify-content: flex-start;
    margin-top: 100px;
  }

  .main__heading {
    margin-top: 0px;
    font-size: 15vw;
  }

  .sub__heading {
    margin-top: 0px;
    font-size: 3.5vw;
  }
}

@media (max-width: 768px) {
  .home__container {
    flex-direction: column;
    padding-right: 40px;
    padding-left: 40px;
    margin-right: auto;
    margin-left: auto;
  }

  .left {
    margin-top: 0px;
    justify-content: flex-start;
    margin-left: 0px;
  }

  .right {
    margin-top: 0px;
    justify-content: flex-start;
    margin-top: 100px;
  }

  .home__image {
    width: 100%;
    height: 100%;
  }

  .main__heading {
    margin-top: 0px;
    font-size: 12vw;
  }

  .sub__heading {
    margin-top: 0px;
    font-size: 3vw;
  }
}
</style>
