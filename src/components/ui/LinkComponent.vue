<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LinkComponent',
})
</script>

<template>
  <div class="flex py-2 space-x-2 items-center hover:text-yellow-500 text-yellow-300">
    <slot></slot>
  </div>
</template>
