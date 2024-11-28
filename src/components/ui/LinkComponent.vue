<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LinkComponent',
  props: {
    href: {
      type: String,
      required: false,
    },
  },
})
</script>

<template>
  <a :href class="flex space-x-2 items-center">
    <slot></slot>
  </a>
</template>
