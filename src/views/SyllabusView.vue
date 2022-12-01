<template>
  <div class="syllabus__container">
    <v-container style="margin-top: 100px">
      <v-row justify="space-between" class="px-5">
        <h1 class="white--text">Syllabus</h1>
        <!-- add button at right side-->
        <v-btn
          color="#fff"
          class="black--text"
          @click="() => $store.commit('setSyllabusDialog', true)"
          v-if="$store.state.isLoggedIn"
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
    <AddSyllabusForm
      v-if="$store.state.syllabusDialog"
      @addSyllabus="addSyllabus"
    />
  </div>
</template>

<script>
import axiosInstance from '@/apiClient';
export default {
  name: 'SyllabusView',
  components: {
    SyllabusCard: () => import('@/components/SyllabusCard.vue'),
    AddSyllabusForm: () => import('@/components/AddSyllabusForm.vue'),
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
    addSyllabus(payload) {
      axiosInstance
        .post('/syllabus', payload)
        .then(() => {
          this.$store.commit('loading', false);
          this.getSyllabus();
          this.$store.commit('setSyllabusDialog', false);
          this.$store.commit('flashSuccess', 'Syllabus Added Successfully');
        })
        .catch((error) => {
          this.$store.commit('loading', false);
          this.$store.commit('flashError', 'Something went wrong');
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
