<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/logo.svg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <Avatar v-if="$store.state.isLoggedIn" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Book By 3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list dense>
        <v-list-item link @click="$router.push('/')">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1"> Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push('/books')">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-book-open-page-variant-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Book/3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push('/resources')">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Resources</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push('/syllabus')">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-school-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Syllabus</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/login')"
          class="mt-4"
          v-if="!$store.state.isLoggedIn"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/register')"
          v-if="!$store.state.isLoggedIn"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-card-account-details-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="px-15" :class="{ expand: false }" color="black">
      <v-toolbar-title>
        <v-img src="@/assets/logo.svg" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
        color="white"
      />
      <div v-else>
        <v-btn text @click="$router.push('/')">
          <span class="mr-2 white--text">Home</span>
        </v-btn>
        <v-btn text @click="$router.push('/books')">
          <span class="mr-2 white--text">Book/3</span>
        </v-btn>
        <v-btn text @click="$router.push('/resources')">
          <span class="mr-2 white--text">Resources</span>
        </v-btn>
        <v-btn text @click="$router.push('/syllabus')">
          <span class="mr-2 white--text">Syllabus</span>
        </v-btn>
        <!-- avatar -->
        <v-btn
          v-if="!$store.state.isLoggedIn"
          rounded
          outlined
          text
          @click="$router.push('/login')"
        >
          <span class="mr-2 white--text">LogIn</span>
        </v-btn>
        <v-btn
          v-if="!$store.state.isLoggedIn"
          rounded
          outlined
          text
          @click="$router.push('/register')"
          class="ml-2"
        >
          <span class="mr-2 white--text">Register</span>
        </v-btn>
        <Avatar v-if="$store.state.isLoggedIn" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [],
  }),
  components: {
    Avatar: () => import('@/components/Avatar.vue'),
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
