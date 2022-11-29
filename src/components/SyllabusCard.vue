<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Year {{ syllabus.year }}</div>
        <v-list-item-title class="text-h5 mb-1">
          SEM {{ syllabus.sem }}
        </v-list-item-title>
        <v-list-item-subtitle
          >Branch {{ syllabus.branch }}</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80" @click="download">
        <v-icon size="100" color="red">mdi-download</v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions @click="download">
      <v-btn outlined rounded text> View </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="$emit('editSyllabus', syllabus)"
        color="primary"
        v-if="inProfile"
      >
        Edit
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="deleteSyllabus"
        color="error"
        v-if="inProfile"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axiosInstance from '@/apiClient';

export default {
  name: 'SyllabusCard',
  props: {
    syllabus: {
      type: Object,
      required: true,
    },
    inProfile: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    download() {
      window.open(this.syllabus.file, '_blank');
    },
    deleteSyllabus() {
      this.$store.commit('loading', true);
      axiosInstance
        .delete(`/syllabus/${this.syllabus._id}`)
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
