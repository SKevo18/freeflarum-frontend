<script lang="ts">
import { defineComponent } from 'vue'

import CardComponent from '@/components/CardComponent.vue'
import HeadingSectionComponent from '@/components/HeadingSectionComponent.vue'

export default defineComponent({
  name: 'ExtensionsView',
  components: {
    CardComponent,
    HeadingSectionComponent,
  },
  data() {
    return {
      extensionCategories: {} as {
        category: {
          id: string
          title: string
          icon_name: string | null
          description: string
          author: string
          url: string
        }[]
      },
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
  async beforeMount() {
    let data = await (await fetch('https://api.freeflarum.com/extensions')).json()
    if (data['success']) {
      this.extensionCategories = data['data']
      this.infoText = `There are ${this.extensionsCount} extensions available.`
    } else {
      this.infoText = 'Error loading extensions!'
    }
  },
})
</script>

<template>
  <div>
    <HeadingSectionComponent heading="Extensions" :description="infoText" />

    <div
      v-if="extensionCategories !== undefined"
      v-for="(extensions, category) in extensionCategories"
    >
      <h2 class="mt-10 mb-6">{{ category.length > 0 ? category : 'Other' }}</h2>

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
