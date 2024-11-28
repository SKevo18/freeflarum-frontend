import { defineStore } from 'pinia'

export const useForumStore = defineStore('forum', {
  state: () => ({
    tag: null,
  }),
  getters: {
    isAuthenticated: (forum) => forum.tag !== null,
  },
})
