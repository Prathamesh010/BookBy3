<template>
  <v-container class="mt-10 profile" fluid style="background-color: #000000">
    <v-row
      align="center"
      class="mt-5 text-center pa-5"
      style="background-color: #131418; border-radius: 10px"
    >
      <v-col cols="12" md="6">
        <v-row align="center">
          <v-col cols="12" md="4">
            <v-avatar size="150" color="brown">
              <span class="white--text text-h2">{{ initials }}</span>
            </v-avatar>
          </v-col>
          <v-col cols="12" md="8">
            <h1 class="white--text">{{ user.username }}</h1>
            <!-- email -->
            <h3 class="white--text">Email: {{ user.email }}</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-col class="px-4 py-8">
      <v-row class="py-4">
        <h1 class="white--text text-h4 mx-sm-4 mx-md-6 mx-lg-10">
          Uploaded Books
        </h1>
      </v-row>
      <v-row>
        <v-container v-if="books.length > 0">
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="book in books" :key="book.id">
              <BookCard
                :book="book"
                :inProfile="true"
                @refresh="getBooks"
                @editBook="editBook"
              />
            </v-flex>
          </v-layout>
        </v-container>
        <v-container v-else class="text-center">
          <h2 class="white--text">No books uploaded yet</h2>
        </v-container>
      </v-row>
    </v-col>
    <AddBookForm :isEdit="isEdit" :book="book" @edit="editReq" />
  </v-container>
</template>

<script>
import axiosInstance from '@/apiClient';
export default {
  name: 'ProfileView',
  data() {
    return {
      initials: '',
      user: {
        username: '',
        email: '',
      },
      books: [],
      resources: [],
      isEdit: false,
      book: {},
    };
  },
  components: {
    BookCard: () => import('@/components/BookCard.vue'),
    AddBookForm: () => import('@/components/AddBookForm.vue'),
  },
  methods: {
    getUser() {
      axiosInstance.get('/auth/me').then((response) => {
        this.user = response.data.user;
        this.initials = this.user.username.charAt(0).toUpperCase();
      });
    },
    getBooks() {
      axiosInstance.get('/books/me').then((response) => {
        this.books = response.data;
      });
    },
    editBook({ book }) {
      this.book = book;
      this.$store.commit('setFormDialog', true);
      this.isEdit = true;
    },
    editReq(payload) {
      axiosInstance
        .put(`/books/${this.book._id}`, payload)
        .then(() => {
          this.$store.commit('loading', false);
          this.$store.commit('setFormDialog', false);
          this.isEdit = false;
          this.getBooks();
        })
        .catch((err) => {
          this.$store.commit('loading', false);
          console.log(err);
        });
    },
  },
  created() {
    this.getUser();
    this.getBooks();
  },
};
</script>

<style scoped>
.profile {
  min-height: 100vh;
}
</style>