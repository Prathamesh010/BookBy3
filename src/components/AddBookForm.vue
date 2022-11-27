<template>
  <v-dialog v-model="dialogValue" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Add a new book</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            outlined
            dense
            prepend-inner-icon="mdi-book"
            :rules="rules"
          />
          <v-text-field
            label="Author"
            v-model="author"
            outlined
            dense
            prepend-inner-icon="mdi-account"
            :rules="rules"
          />
          <v-text-field
            label="Description"
            v-model="description"
            prepend-inner-icon="mdi-format-quote-open"
            placeholder="A short description about the book."
            outlined
            dense
            :rules="rules"
          />
          <!-- allow numbers only -->
          <v-text-field
            label="Price"
            v-model="price"
            placeholder="X.rs"
            outlined
            dense
            prepend-inner-icon="mdi-currency-inr"
            :rules="rules"
            type="number"
          />
          <v-text-field
            label="Category"
            v-model="category"
            prepend-inner-icon="mdi-tag"
            outlined
            dense
            :rules="rules"
          />
          <!-- contact -->
          <v-text-field
            label="Contact"
            v-model="contact"
            prepend-inner-icon="mdi-phone"
            outlined
            dense
            placeholder="Phone number/email/Instagram/Whatsapp"
            :rules="rules"
            type="number"
          />
          <!-- allow images only -->
          <v-file-input
            label="Image"
            v-model="image"
            outlined
            dense
            :rules="rules"
            accept="image/jpeg, image/png"
          ></v-file-input>
          <v-col class="text-right">
            <v-btn color="white" @click="$emit('close')">Cancel</v-btn>
            <v-btn color="red" @click="submit" class="ml-3">Add</v-btn>
          </v-col>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import imageUploadService from '@/services/imageUploadService';
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    dialogValue: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit('update:dialog', value);
      },
    },
  },
  data() {
    return {
      title: '',
      author: '',
      description: '',
      price: '',
      category: '',
      image: null,
      contact: '',
      rules: [(value) => !!value || 'Required.'],
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const url = await imageUploadService(this.image);
        console.log(url);
        this.$emit('addBook', {
          title: this.title,
          author: this.author,
          description: this.description,
          price: this.price,
          category: this.category,
          contact: this.contact,
          image: url,
        });
      }
    },
  },
};
</script>

<style scoped>
.headline {
  color: #f50057;
}
</style>
