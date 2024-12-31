import { defineStore } from 'pinia'

export default defineStore('forum', {
  state: () => ({
    tag: '',
    email: '',
    url: '',
    donated: 0,
  }),
  actions: {
    async getForumData() {
      if (!this.isAuthenticated) return
      let response = await (
        await fetch(`https://api.freeflarum.com/settings/`, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
      ).json()

      if (response['errors']) {
        localStorage.removeItem('access_token')
        return
      }

      this.tag = response['data']['tag']
      this.email = response['data']['email']
      this.url = response['data']['url']
      this.donated = response['data']['donated']
    },
  },
  getters: {
    isAuthenticated: () => localStorage.getItem('access_token') !== null,
  },
})
