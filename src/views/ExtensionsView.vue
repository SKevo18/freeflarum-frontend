<script lang="ts">
import { defineComponent } from 'vue'

import extensionsData from '@/fixtures/extensions.json'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: 'ExtensionsView',
  components: {
    FontAwesomeIcon,
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
  <main>
    <div class="text-center">
      <h1 class="">Extensions</h1>
      <p>{{ infoText }}</p>
    </div>

    <div
      v-if="extensionCategories !== undefined"
      v-for="(extensions, category) in extensionCategories"
    >
      <h2 class="mt-10 mb-6">{{ category }}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="extension in extensions"
          class="flex flex-row gap-4 items-center bg-gray-400 dark:bg-gray-700 rounded-lg p-6"
        >
          <FontAwesomeIcon
            v-if="extension.icon_name && extension.icon_name.length > 0"
            :icon="extension.icon_name.split(' ')"
            size="4x"
          />
          <FontAwesomeIcon v-else :icon="['fas', 'question-circle']" size="4x" />

          <div>
            <h3>{{ extension.title }}</h3>
            <p>{{ extension.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
