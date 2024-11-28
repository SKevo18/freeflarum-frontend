<script lang="ts">
import { defineComponent } from 'vue'

import extensionsData from '@/fixtures/extensions.json'

export default defineComponent({
  name: 'ExtensionsView',
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
    this.infoText = `There are ${this.extensionsCount} extensions available`
  },
})
</script>

<template>
  <main>
    <div>
      <h1>Extensions</h1>
      <p>{{ infoText }}</p>
    </div>

    <div
      v-if="extensionCategories !== undefined"
      v-for="(extensions, category) in extensionCategories"
    >
      <h2>{{ category }}:</h2>

      <div v-for="extension in extensions" class="grid grid-cols-4 gap-4">
        <div class="flex flex-row items-center">
          <span>ICON</span>
          <div>
            <h3>{{ extension.title }}</h3>
            <p>{{ extension.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
