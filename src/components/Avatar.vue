<template>
  <!-- profile avatar -->
  <div class="avatar">
    <img :src="avatar" alt="avatar" />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: 'https://i.imgur.com/8Q1Jz8m.png',
    },
  },
};
</script>

<style>
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 1rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
