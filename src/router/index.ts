import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
import CreateForumView from '@/views/home/CreateForumView.vue'
import SignUpView from '@/views/home/SignUpView.vue'
import ContactView from '@/views/contact/ContactView.vue'
import ExtensionsView from '@/views/ExtensionsView.vue'
import SettingsView from '@/views/settings/SettingsView.vue'
import DonateView from '@/views/DonateView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'home',
          component: CreateForumView,
        },
        {
          path: '/signup',
          name: 'signup',
          component: SignUpView,
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/extensions',
      name: 'extensions',
      component: ExtensionsView,
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
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
