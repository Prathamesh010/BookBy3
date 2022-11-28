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
    <v-card-text class="pa-2">
      <div class="black--text text-h6">{{ book.title }}</div>
      <div class="grey--text">{{ book.author }}</div>
    </v-card-text>
    <v-card-actions v-if="!inProfile" class="justify-center">
      <v-btn color="red" block class="mt-2">Buy</v-btn>
    </v-card-actions>
    <!-- edit and delete button-->
    <v-card-actions v-if="inProfile" class="justify-space-around">
      <v-btn color="blue" @click="$emit('editBook', { book })">Edit</v-btn>
      <v-btn color="red" @click="deleteBook">
        <v-progress-circular
          v-if="$store.state.loading"
          indeterminate
          size="20"
          color="white"
        ></v-progress-circular>
        <span v-else>Delete</span>
      </v-btn>
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scope></style>
