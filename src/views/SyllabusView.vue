<template>
  <div class="syllabus__container">
    <v-container style="margin-top: 100px">
      <v-row justify="space-between">
        <h1 class="white--text">Syllabus</h1>
        <!-- add button at right side-->
        <v-btn
          color="#fff"
          class="black--text"
          @click="() => $store.commit('setResDialog', true)"
          >Add</v-btn
        >
      </v-row>
      <v-row v-if="syllabuss.length > 0">
        <v-col
          v-for="syllabus in syllabuss"
          :key="syllabus.id"
          cols="12"
          sm="6"
          md="4"
        >
          <SyllabusCard :syllabus="syllabus" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <h2 class="white--text">No syllabus Found</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axiosInstance from '@/apiClient';
export default {
  name: 'SyllabusView',
  components: {
    SyllabusCard: () => import('@/components/SyllabusCard.vue'),
  },
  data() {
    return {
      syllabuss: [],
    };
  },
  methods: {
    getSyllabus() {
      axiosInstance
        .get('/syllabus')
        .then((response) => {
          this.syllabuss = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getSyllabus();
  },
};
</script>

<style>
.syllabus__container {
  min-height: 100vh;
  background-color: #131418;
}
</style>
