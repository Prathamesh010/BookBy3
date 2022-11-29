<template>
  <v-dialog v-model="$store.state.syllabusDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Add a new Syllabus</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Branch"
            v-model="branch"
            outlined
            dense
            prepend-inner-icon="mdi-merge"
            :rules="rules"
          />
          <v-select
            label="Year"
            v-model="year"
            prepend-inner-icon="mdi-calendar"
            outlined
            dense
            :items="years"
            :rules="rules"
          />
          <v-select
            label="Sem"
            v-model="sem"
            prepend-inner-icon="mdi-clock"
            outlined
            dense
            :items="sems"
            :rules="rules"
          />
          <!-- allow pdf only -->
          <v-file-input
            label="File"
            v-model="file"
            outlined
            dense
            :rules="rulesFile"
            accept="application/pdf"
          ></v-file-input>
          <v-col class="text-right">
            <v-btn
              color="white"
              @click="$store.commit('setSyllabusDialog', false)"
              >Cancel</v-btn
            >
            <v-btn color="red" @click="submit" class="ml-3">
              <v-progress-circular
                v-if="$store.state.loading"
                indeterminate
                size="20"
                color="white"
              ></v-progress-circular>
              <span v-else>Add</span>
            </v-btn>
          </v-col>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import imageUploadService from '@/services/imageUploadService';

export default {
  data() {
    return {
      file: null,
      rules: [(v) => !!v || 'Field is required'],
      branch: '',
      year: '',
      sem: '',
      years: ['FE', 'SE', 'TE', 'BE'],
      sems: ['1', '2', '3', '4', '5', '6', '7', '8'],
    };
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    syllabus: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    rulesFile: {
      get() {
        return this.isEdit ? [] : [(v) => !!v || 'Field is required'];
      },
    },
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit('loading', true);
        var url = '';
        try {
          if (this.image !== null) url = await imageUploadService(this.file);
        } catch (e) {
          this.$store.commit('loading', false);
          console.log(e);
        }

        const toEdit = {
          branch: this.branch,
          year: this.year,
          sem: this.sem,
        };

        if (this.isEdit) {
          if (url !== '') toEdit.file = url;
          this.$emit('edit', toEdit);
        } else {
          this.$emit('addSyllabus', { ...toEdit, file: url });
        }
      }
    },
  },
  watch: {
    isEdit: {
      handler() {
        if (this.isEdit) {
          this.branch = this.syllabus.branch;
          this.year = this.syllabus.year;
          this.sem = this.syllabus.sem;
        }
      },
      immediate: true,
    },
  },
};
</script>
