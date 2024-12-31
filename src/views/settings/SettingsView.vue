<script lang="ts">
import { defineComponent } from 'vue'

import useForumStore from '@/stores/forum'
import { mapStores } from 'pinia';

export default defineComponent({
  name: 'SettingsView',
  computed: {
    ...mapStores(useForumStore),
  },
  beforeMount() {
    if (!this.forumStore.isAuthenticated) {
      this.$router.push({name: "login"})
    }
  }
})
</script>

<template>
  <div>settings: {{ forumStore.tag }}</div>
</template>
