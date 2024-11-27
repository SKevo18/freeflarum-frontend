<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'

import { useForumStore } from '@/stores/forum'

export default defineComponent({
  name: 'SettingsView',
  computed: {
    ...mapStores(useForumStore),
  },
})
</script>

<template>
  <div>settings</div>
</template>
