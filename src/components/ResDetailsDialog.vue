<template>
  <v-dialog
    v-model="$store.state.resDetailsDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="red">
        <v-btn icon dark @click="$store.commit('setResDetailsDialog', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Resource</v-toolbar-title>
      </v-toolbar>
      <v-card-title class="text-h4">
        {{ $store.state.resource.title }}
      </v-card-title>
      <v-card-text>
        <!-- category chips -->
        <v-chip
          small
          color="red"
          class="mr-3"
          v-for="tag in $store.state.resource.category"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-card-text>
      <v-card-subtitle class="text-h6">
        <span class="text-h6 black--text"> About: </span>
        <span class="text-subtitle-5 black--text">
          {{ $store.state.resource.description }}
        </span>
      </v-card-subtitle>

      <!-- links  in a list with a link icon at left-->
      <v-list>
        <v-list-item
          v-for="link in $store.state.resource.links"
          :key="link"
          class="px-5"
        >
          <v-list-item-icon>
            <v-icon>mdi-link</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a :href="link" target="_blank">{{ link }}</a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script></script>
