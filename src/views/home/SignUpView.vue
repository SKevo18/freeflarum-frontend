<script lang="ts">
import { defineComponent } from 'vue'

import FormFieldComponent from '@/components/FormFieldComponent.vue'

export default defineComponent({
  name: 'SignUpView',
  components: {
    FormFieldComponent,
  },
  methods: {
    async createForum(form: HTMLFormElement) {
      if (!form.reportValidity()) return

      let formData = new FormData(form)
      let data = await fetch('https://api.freeflarum.com/forum/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag: formData.get('tag'),
          email: formData.get('email'),
          parentDomain: formData.get('parentDomain'),
          hcaptchaResponse: formData.get('hcaptcha'),
          template: 'default',
        }),
      })

      let json = await data.json()
      if (json['success']) {
        alert('OK!')
      } else {
        alert(`Error: ${json['errors'][0]}`)
      }
    },
  },
})
</script>

<template>
  <form method="POST" @submit.prevent="createForum($el)" class="max-w-screen-sm mx-auto px-6">
    <FormFieldComponent title="Tag" placeholder="Your forum tag" required />
    <FormFieldComponent type="email" title="Email" placeholder="Your admin E-mail" required />

    <div class="mt-6">
      <a class="button" @click="createForum($el)">Create forum</a>
    </div>
  </form>
</template>
