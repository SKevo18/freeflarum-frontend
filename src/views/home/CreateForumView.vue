<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CreateForumView',
})
</script>

<template>
  <div class="mb-6 text-center text-gray-700 lg:text-right dark:text-gray-300">
    <h1 class="big">Create a forum in under 5 minutes</h1>
    <div class="my-6 space-y-4">
      <p class="text-lg">Creating a Flarum forum was never easier!</p>
      <p class="text-lg">
        Start building your community today with
        <a href="https://flarum.org">Flarum</a>
        - one of the fastest and most modern open source forum frameworks available. It's free,
        fast, and you can download your data and move out at anytime.
      </p>
    </div>

    <RouterLink class="button" :to="{ name: 'signup' }"> Create a Flarum forum </RouterLink>
  </div>
</template>
