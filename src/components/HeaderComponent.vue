<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'HeaderComponent',
  data() {
    return {
      buttons: ['Home', 'Contact'],
      links: {} as { [key: string]: string },
    }
  },
  beforeMount() {
    this.loadRoutePaths()
  },
  methods: {
    loadRoutePaths() {
      for (const title of this.buttons) {
        let route = this.$router.getRoutes().find((route) => route.name == title.toLowerCase())
        if (route == undefined) continue

        this.links[title] = route?.path
      }
    },
  },
})
</script>

<template>
  <header>
    <img alt="FreeFlarum Logo" class="logo" src="/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav v-for="(href, title) in links">
        <RouterLink :to="href">{{ title }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
