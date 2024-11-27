import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
import ContactView from '@/views/contact/ContactView.vue'
import SettingsView from '@/views/settings/SettingsView.vue'
import DonateView from '@/views/DonateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/donate',
      name: 'donate',
      component: DonateView,
    },
  ],
})

export default router
