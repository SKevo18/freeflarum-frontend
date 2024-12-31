<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormFieldComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="space-y-2">
    <span>{{ $props.name }}</span>
    <input class="form-field" :name="$props.name.toLowerCase()" />
  </div>
</template>

<style></style>
