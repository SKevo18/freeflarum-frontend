import { defineStore } from 'pinia'

export default defineStore('forum', {
  state: () => ({
    tag: null,
  }),
  actions: {
    async nacitatForum() {
      if (!this.isAuthenticated) return
      let response = await (
        await fetch(`https://api.freeflarum.com/settings/`, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
      ).json()

      this.tag = response['data']['tag']
    },
  },
  getters: {
    isAuthenticated: () => localStorage.getItem('access_token') !== null,
  },
})
