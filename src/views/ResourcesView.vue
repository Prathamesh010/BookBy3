<template>
  <div class="resources__container">
    <v-container style="margin-top: 100px">
      <v-row justify="space-between">
        <h1 class="white--text">Resources</h1>
        <!-- add button at right side-->
        <v-btn
          color="#fff"
          class="black--text"
          @click="() => $store.commit('setResDialog', true)"
          >Add</v-btn
        >
      </v-row>
      <!-- list of resources -->
      <v-row v-if="resources.length > 0">
        <v-col
          v-for="resource in resources"
          :key="resource.id"
          cols="12"
          sm="6"
          md="4"
        >
          <ResourcesCard :resource="resource" />
        </v-col>
      </v-row>
      <!-- no resources at center-->
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <h2 class="white--text">No Resources Found</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axiosInstance from '@/apiClient';
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
  },
  mounted() {
    this.getResources();
  },
};
</script>

<style>
.resources__container {
  min-height: 100vh;
  background-color: #131418;
}
</style>
