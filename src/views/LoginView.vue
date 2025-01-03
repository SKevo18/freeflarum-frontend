<script lang="ts">
import { defineComponent } from 'vue'

import useForumStore from '@/stores/forumStore'
import { mapStores } from 'pinia'
import FormFieldComponent from '@/components/FormFieldComponent.vue'

export default defineComponent({
  name: 'LoginView',
  components: {
    FormFieldComponent,
  },
  data() {
    return {
      info: null as null | string,
    }
  },
  computed: {
    ...mapStores(useForumStore),
  },
  methods: {
    async login(form: HTMLFormElement) {
      if (!form.reportValidity()) return

      let request = await fetch(`https://api.freeflarum.com/authentication`, {
        method: 'POST',
        credentials: 'include',
        body: new FormData(form),
      })

      let response = await await request.json()
      if (response['errors'] !== undefined) {
        this.info = response['errors'][0]
        return
      }

      localStorage.setItem('access_token', response['token'])

      await this.forumStore.getForumData()
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
    class="w-80 mx-auto"
    action="https://api.freeflarum.com/authentication"
    method="POST"
    @submit.prevent="login($el)"
  >
    <div class="mb-4">
      <FormFieldComponent
        placeholder="Forum ID"
        title="Username"
        autocomplete="username"
        required
      />
      <br />

      <FormFieldComponent
        placeholder="Your forum admin account password"
        type="password"
        title="Password"
        autocomplete="current-password"
        required
      />
      <br />
    </div>

    <div class="flex flex-col mb-12 justify-evenly">
      <div>
        <input type="checkbox" name="remember" class="mr-2" />
        <label for="remember">Remember Me</label>
      </div>
    </div>

    <p class="pl-2 mb-4 text-left text-gray-700 dark:text-gray-300 border-l-2 border-yellow-500">
      {{ info }}
    </p>
    <a href="#" class="button" @click="login($el)"> Login </a>
  </form>
</template>
