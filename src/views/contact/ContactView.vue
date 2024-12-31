<script lang="ts">
import { defineComponent } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'ContactView',
  components: {
    FontAwesomeIcon,
    CardComponent,
  },
})
</script>

<template>
  <div class="mx-[10vw]">
    <div class="mb-8">
      <div class="flex flex-col max-w-screen-sm gap-4 mx-auto text-center">
        <h1 class="text-4xl font-bold text-yellow-500">Support</h1>
        <p class="text-lg">
          Are you experiencing issues? You may contact FreeFlarum at links provided on this page.
        </p>
      </div>

      <div
        class="p-6 mx-auto my-12 space-y-4 text-black bg-yellow-500 rounded-lg ring-4 ring-orange-500 ring-offset-gray-100 dark:ring-offset-gray-900 ring-offset-4"
      >
        <p>
          <b>Note:</b> FreeFlarum is an independent community service and is not affiliated with
          Flarum, its project, or the Flarum Foundation. Consequently, FreeFlarum cannot assist with
          issues solely related to Flarum or its extensions, just as Flarum cannot provide support
          for FreeFlarum-related matters. While FreeFlarum may offer guidance or direct you to
          relevant discussions for Flarum-related issues, resolution is not guaranteed. For example,
          if a specific extension has a bug, FreeFlarum cannot fix it, as extensions are typically
          managed by independent developers. In such cases, FreeFlarum can only provide logs and
          stack traces for you to share with the extension’s maintainer.
        </p>
      </div>

      <div class="grid justify-center grid-cols-1 gap-6 md:grid-cols-2">
        <CardComponent :icon="['fas', 'comment']" href="https://support.freeflarum.com">
          <h1>Support Forum</h1>
          <p>The official FreeFlarum support forum</p>
        </CardComponent>

        <CardComponent :icon="['fas', 'envelope']" href="mailto:info@freeflarum.com">
          <h1>E-mail</h1>
          <p>For private inquiries.</p>
        </CardComponent>
      </div>
    </div>
  </div>
</template>
