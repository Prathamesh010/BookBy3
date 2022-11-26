<template>
  <div class="book__card">
    <!-- image -->
    <img class="book__card-image" :src="book.image" alt="book image" />
    <!-- center text -->
    <div class="book__card-text">
      <h3 class="book__card-title">{{ book.title }}</h3>
      <p class="book__card-author">{{ book.author }}</p>
    </div>

    <!-- price tag with symbol small -->
    <div class="book__card-price">
      <p class="book__card-price--symbol">Price:</p>
      <p class="book__card-price--amount">{{ book.price }}</p>
    </div>

    <!-- contact seller button -->
    <button class="book__card-button">Contact Seller</button>
  </div>
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

<style scoped>
.book__card {
  width: auto;
  height: auto;
  background-color: rgb(30, 30, 30);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 30px 30px;
}

.book__card-image {
  width: 165px;
  height: 269px;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* center the text horizontally */
.book__card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10px;
}

.book__card-title {
  font-size: 1rem;
  color: #fff;
}

.book__card-author {
  font-size: 0.8rem;
  color: rgb(150, 150, 150);
}

.book__card-price {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.book__card-price--symbol {
  font-size: 0.8rem;
  color: rgb(150, 150, 150);
}

.book__card-price--amount {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1px;
  color: #fff;
}

.book__card-button {
  width: 100%;
  height: 40px;
  background-color: #de1d34;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
