<template>
  <div class="resources__container">
    <v-container style="margin-top: 100px">
      <v-row class="justify-space-between px-5">
        <h1 class="white--text">Resources</h1>
        <v-btn
          color="#fff"
          class="black--text"
          @click="() => $store.commit('setResDialog', true)"
          >Add</v-btn
        >
      </v-row>
      <v-row v-if="resources.length > 0">
        <v-col
          v-for="resource in resources"
          :key="resource.id"
          cols="12"
          sm="6"
          md="4"
        >
          <ResourceCard :resource="resource" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <h2 class="white--text">No Resources Found</h2>
        </v-col>
      </v-row>
    </v-container>
    <AddResForm v-if="$store.state.resDialog" @addRes="addResource" />
    <ResDetailsDialog v-if="$store.state.resDetailsDialog" />
  </div>
</template>

<script>
import axiosInstance from '@/apiClient';
import AddResForm from '@/components/AddResForm.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import ResDetailsDialog from '@/components/ResDetailsDialog.vue';
export default {
  name: 'ResourcesView',
  data() {
    return {
      resources: [],
    };
  },
  methods: {
    getResources() {
      axiosInstance
        .get('/resources')
        .then((response) => {
          this.resources = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addResource(payload) {
      axiosInstance
        .post('/resources', payload)
        .then(() => {
          this.$store.commit('loading', false);
          this.$store.commit('setResDialog', false);
          this.getResources();
          this.$store.commit('flashSuccess', 'Syllabus Added Successfully');
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit('loading', false);
          this.$store.commit('flashError', 'Something went wrong');
        });
    },
  },
  mounted() {
    this.getResources();
  },
  components: { AddResForm, ResourceCard, ResDetailsDialog },
};
</script>

<style>
.resources__container {
  min-height: 100vh;
  background-color: #131418;
}
</style>
