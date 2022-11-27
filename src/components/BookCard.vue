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
    <v-card-actions class="justify-center">
      <v-btn color="red" block flat class="my-2">Buy</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scope></style>
