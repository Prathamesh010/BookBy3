<template>
  <v-card flat class="book__card text-center ma-3">
    <v-responsive :aspect-ratio="1.5">
      <v-img
        :src="book.image"
        height="250"
        width="170"
        class="mx-auto my-2 rounded-lg elevation-5"
      />
    </v-responsive>
    <v-card-text class="pa-0">
      <div class="black--text text-h6">{{ book.title }}</div>
      <div class="grey--text">{{ book.author }}</div>
    </v-card-text>
    <!-- chips of category -->
    <v-card-actions class="px-2 py-0">
      <v-chip
        v-for="category in categories"
        :key="category"
        class="mx-3"
        color="red lighten-4"
        text-color="grey darken-4"
        small
        outlined
      >
        {{ category }}
      </v-chip>
    </v-card-actions>

    <!-- price -->
    <v-card-actions class="px-6 pt-2 pb-0">
      <div class="black--text text-h6">Rs.{{ book.price }}</div>
    </v-card-actions>

    <v-card-actions v-if="!inProfile" class="justify-center pb-4 pt-0">
      <v-btn color="red" block class="mt-2" flat>
        <v-icon class="mr-3">mdi-phone</v-icon>
        {{ book.contact }}
      </v-btn>
    </v-card-actions>
    <!-- edit and delete button-->
    <v-card-actions v-if="inProfile" class="justify-space-around">
      <v-btn color="blue" @click="$emit('editBook', book)">Edit</v-btn>
      <v-btn color="red" @click="deleteBook"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axiosInstance from '@/apiClient';

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
    inProfile: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteBook() {
      this.$store.commit('loading', true);
      axiosInstance
        .delete(`/books/${this.book._id}`)
        .then(() => {
          this.$emit('refresh');
          this.$store.commit('flashSuccess', 'Syllabus Deleted Successfully');
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit('flashError', 'Something went wrong');
        });
    },
  },
  computed: {
    categories() {
      const categories = this.book.category.split(',');
      return categories.slice(0, 3);
    },
  },
};
</script>

<style scope></style>
