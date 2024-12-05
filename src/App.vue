<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div>
    <HeaderComponent />

    <main class="mx-4">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>
