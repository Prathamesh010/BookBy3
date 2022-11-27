<template>
  <div>
    <div class="book">
      <div class="book__header">
        <h1 class="book__title">Available Books</h1>
        <button
          v-if="this.$store.state.isLoggedIn"
          class="book__button"
          @click="dialog = true"
        >
          Add Book
        </button>
      </div>
      <div v-if="books.length" class="book__grid">
        <BookCard v-for="book in books" :key="book.id" :book="book" />
      </div>
      <div v-else class="book__empty">No books available</div>
    </div>
    <AddBookForm
      v-if="dialog"
      :dialog="dialog"
      @close="() => (dialog = false)"
      @addBook="addBook"
    />
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import AddBookForm from '@/components/AddBookForm.vue';
import axiosInstance from '@/apiClient';
export default {
  name: 'BookView',
  components: {
    BookCard,
    AddBookForm,
  },
  data() {
    return {
      books: [],
      dialog: false,
    };
  },
  methods: {
    async fetchBooks() {
      axiosInstance
        .get('/books')
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addBook(payload) {
      axiosInstance
        .post('/books', payload)
        .then(() => {
          this.fetchBooks();
          this.dialog = false;
        })
        .catch((error) => {
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
