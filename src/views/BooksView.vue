<template>
  <div>
    <div class="book">
      <div class="book__header">
        <h1 class="book__title">Available Books</h1>
        <v-btn
          v-if="this.$store.state.isLoggedIn"
          class="book__button"
          @click="$store.commit('setFormDialog', true)"
        >
          Add
        </v-btn>
      </div>
      <v-container v-if="books.length > 0">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="book in books" :key="book.id">
            <BookCard :book="book" />
          </v-flex>
        </v-layout>
      </v-container>
      <div v-else class="book__empty">
        <v-progress-circular
          indeterminate
          color="red"
          class="mt-5"
          v-if="$store.state.loading"
        ></v-progress-circular>
        <span v-else>No books available</span>
      </div>
    </div>
    <AddBookForm v-if="$store.state.formDialog" @addBook="addBook" />
    <ChatDialog v-if="$store.state.chat.chatDialog" />
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import AddBookForm from '@/components/AddBookForm.vue';
import ChatDialog from '@/components/ChatDialog.vue';
import axiosInstance from '@/apiClient';
export default {
  name: 'BookView',
  components: {
    BookCard,
    AddBookForm,
    ChatDialog,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async fetchBooks() {
      this.$store.commit('loading', true);
      axiosInstance
        .get('/books')
        .then((response) => {
          this.$store.commit('loading', false);
          this.books = response.data;
        })
        .catch((error) => {
          this.$store.commit('loading', false);
          console.log(error);
        });
    },
    addBook(payload) {
      axiosInstance
        .post('/books', payload)
        .then(() => {
          this.$store.commit('loading', false);
          this.fetchBooks();
          this.$store.commit('setFormDialog', false);
        })
        .catch((error) => {
          this.$store.commit('loading', false);
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
.book {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131418;
  padding-top: 100px;
  min-height: 100vh;
}

.book__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin-bottom: 20px;
}

.book__title {
  font-size: 2rem;
  color: #fff;
}

.book__empty {
  font-size: 1.5rem;
  color: #fff;
}

.book__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.book__button {
  background-color: #fff;
  color: #131418;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
