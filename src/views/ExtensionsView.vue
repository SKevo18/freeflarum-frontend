<script lang="ts">
import { defineComponent } from 'vue'

import extensionsData from '@/fixtures/extensions.json'
import CardComponent from '@/components/ui/CardComponent.vue'

export default defineComponent({
  name: 'ExtensionsView',
  components: {
    CardComponent,
  },
  data() {
    return {
      extensionCategories: extensionsData.data,
      infoText: 'Loading...',
    }
  },
  computed: {
    extensionsCount() {
      let count = 0

      for (const key in this.extensionCategories) {
        // @ts-ignore
        count += this.extensionCategories[key].length
      }

      return count
    },
  },
  beforeMount() {
    this.extensionCategories = extensionsData.data
    this.infoText = `There are ${this.extensionsCount} extensions available.`
  },
})
</script>

<template>
  <div>
    <div class="text-center">
      <h1 class="">Extensions</h1>
      <p>{{ infoText }}</p>
    </div>

    <div
      v-if="extensionCategories !== undefined"
      v-for="(extensions, category) in extensionCategories"
    >
      <h2 class="mt-10 mb-6">{{ category }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardComponent
          v-for="extension in extensions"
          :icon="extension.icon_name ? extension.icon_name.split(' ') : ['fas', 'question-circle']"
          :href="extension.url"
        >
          <h3>{{ extension.title }}</h3>
          <p>{{ extension.description }}</p>
        </CardComponent>
      </div>
    </div>
  </div>
</template>
