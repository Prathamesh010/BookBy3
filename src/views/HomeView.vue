<template>
  <div style="background-color: black">
    <section id="hero">
      <v-parallax dark src="@/assets/bg.png" height="750">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" xl="8">
                <h1 class="display-2 font-weight-bold mb-4">Book By 3</h1>
                <h1 class="font-weight-light">
                  All in one platform. From books at one thrid price to
                  resources to upskill yourself.
                </h1>
                <v-btn
                  rounded
                  outlined
                  large
                  dark
                  @click="$vuetify.goTo('#features')"
                  class="mt-5"
                >
                  Explore
                  <v-icon class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
                <v-img src="@/assets/reading.svg" max-width="500px" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="svg-border-waves text-white"></div>
        <div class="svg-border-waves"></div>
      </v-parallax>
      <v-container fluid id="features" class="mt-2 mb-6">
        <v-row>
          <!-- services header -->
          <v-col cols="12" class="text-center">
            <h1 class="display-2 font-weight-bold mb-4 white--text">
              Services We Provide
            </h1>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="4" class="text-center">
                <v-card
                  class="card py-4"
                  shaped
                  :elevation="4"
                  @click="$router.push('/books')"
                >
                  <v-img
                    src="@/assets/book.svg"
                    max-width="150px"
                    class="d-block ml-auto mr-auto"
                  ></v-img>
                  <h1 class="font-weight-regular mt-5">Books / 3</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    Flagship Service of the platform offering a wide range of
                    books at thrid of the price.
                  </h4>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-card
                  class="card py-4"
                  shaped
                  :elevation="4"
                  @click="$router.push('/resources')"
                >
                  <v-img
                    src="@/assets/resource.svg"
                    max-width="150px"
                    class="d-block ml-auto mr-auto"
                  ></v-img>
                  <h1 class="font-weight-regular mt-5">Resources</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    Suffered from a lack of resources? We have a wide range of
                    resources for you to use.
                  </h4>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-card
                  class="card py-4"
                  shaped
                  :elevation="4"
                  @click="$router.push('/syllabus')"
                >
                  <v-img
                    src="@/assets/exam.svg"
                    max-width="175px"
                    class="d-block ml-auto mr-auto"
                  ></v-img>
                  <h1 class="font-weight-regular mt-5">Syllabus</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    Exams are coming up? Don't know the syllabus yet? Search on
                    our platform and get the syllabus for your exams.
                  </h4>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-footer padless>
      <v-card flat tile class="red white--text text-center">
        <v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            class="mx-4 white--text"
            :href="icon.link"
            target="_blank"
            icon
          >
            <v-icon size="24px">{{ icon.text }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          One platform for all your books at one third of the price
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} ©️ <strong>Book By 3</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    icons: [
      {
        text: 'mdi-facebook',
        link: 'https://www.facebook.com/',
      },
      {
        text: 'mdi-twitter',
        link: 'https://twitter.com/',
      },
      {
        text: 'mdi-linkedin',
        link: 'https://www.linkedin.com/',
      },
      {
        text: 'mdi-instagram',
        link: 'https://www.instagram.com/',
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  width: 100%;
}

#hero {
  background-image: url('../assets/bg.png');
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
</style>
