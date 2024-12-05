<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundView',
})
</script>

<template>
  <div>
    <h1 class="big">404</h1>
    <p>Page not found. <RouterLink :to="{ name: 'home' }">Return to home</RouterLink>.</p>
  </div>
</template>
