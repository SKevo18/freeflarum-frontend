<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      linkGroups: {
        FreeFlarum: {
          'Support Forum': 'https://support.freeflarum.com',
          Github: 'https://github.com/FreeFlarum/freeflarum.com',
          Donate: this.$router.getRoutes().find((route) => route.name == "donate")?.path
        },
        Flarum: {
          'Flarum.org': 'https://flarum.org',
          Discuss: 'https://discuss.flarum.org',
        },
      },
    }
  },
  computed: {
    aktualnyRok(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<template>
  <footer
    class="relative bottom-0 w-full py-12 mt-24 text-gray-500 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 xl:pb-24"
  >
    <div class="grid max-w-screen-xl grid-cols-2 gap-6 px-8 mx-auto md:grid-cols-4 lg:gap-x-8">
      <div v-for="(link, group) in linkGroups">
        <h1 class="text-xl font-bold text-yellow-500">{{ group }}</h1>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li v-for="(href, title) in link">
              <a :href class="text-base text-gray-900 dark:text-gray-100 hover:text-gray-500">
                {{ title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center max-w-screen-xl px-8 mx-auto mt-16 space-y-4 md:flex-row lg:mt-20"
    >
      <div class="flex flex-col space-y-4 text-sm text-center">
        <div>
          <p>
            Copyright &copy; 2017 ‐
            <span>{{ aktualnyRok }}</span> FreeFlarum.
          </p>
          <p class="italic">
            FreeFlarum is a community provided service and it is not affiliated with the Flarum
            Foundation.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
