<template>
  <div class="book">
    <h1 class="book__title">Available Books</h1>
    <div v-if="books.length" class="book__grid">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
    <div v-else class="book__empty">No books available</div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import axiosInstance from '@/apiClient';
export default {
  name: 'BookView',
  components: {
    BookCard,
  },
  data() {
    return {
      books: [],
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
  height: 100vh;
  padding-top: 100px;
}

.book__title {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 30px;
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
</style>
