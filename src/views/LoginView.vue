<script lang="ts">
import { defineComponent } from 'vue'

import useForumStore from '@/stores/forum'
import { mapStores } from 'pinia'

export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      info: null as null | string,
    }
  },
  computed: {
    ...mapStores(useForumStore),
  },
  methods: {
    async login(formElement: HTMLFormElement) {
      let request = await fetch(`https://api.freeflarum.com/authentication`, {
        method: 'POST',
        credentials: 'include',
        body: new FormData(formElement),
      })

      let response = await await request.json()
      if (response['errors'] !== undefined) {
        this.info = response['errors'][0]
        return
      }

      localStorage.setItem('access_token', response['token'])
      this.forumStore.tag = response['token']
      this.$router.push({ name: 'settings' })
    },
  },
  beforeMount() {
    if (this.forumStore.isAuthenticated) {
      this.$router.push({ name: 'settings' })
    }
  },
})
</script>

<template>
  <form
    class="w-80"
    action="https://api.freeflarum.com/authentication"
    method="POST"
    @submit.prevent="login($el)"
  >
    <div class="mb-4">
      <input
        class="my-2 p-3 w-full text-black bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none"
        placeholder="Forum ID"
        name="username"
        autocomplete="username"
        required="true"
        title="Forum ID is the part before '.freeflarum.com' in your forum hostname."
      />
      <br />

      <input
        class="my-2 p-3 w-full text-black bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none"
        placeholder="Your forum admin account password"
        type="password"
        name="password"
        autocomplete="current-password"
        required="true"
      />
      <br />
    </div>

    <div class="flex flex-col mb-12 justify-evenly">
      <div>
        <input type="checkbox" name="remember" class="mr-2" />
        <label for="remember">Remember Me</label>
      </div>
    </div>

    <p x-text="info" class="pl-2 mb-4 text-left text-gray-500 border-l-2 border-yellow-500"></p>
    <button
      class="hint--top hint--no-arrow hint--medium dark:disabled:text-gray-700 disabled:bg-yellow-600 dark:disabled:hover:bg-yellow-600 px-2 py-1 font-medium text-center transition-colors duration-500 text-black bg-yellow-500 border border-transparent rounded-lg shadow-sm focus:outline-none hover:bg-yellow-600 dark:hover:bg-yellow-400"
      type="submit"
    >
      Login
    </button>
    <br />
  </form>
</template>
