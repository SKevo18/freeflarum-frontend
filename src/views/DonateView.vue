<script lang="ts">
import { defineComponent } from 'vue'

import useForumStore from '@/stores/forumStore'
import { mapStores } from 'pinia'

export default defineComponent({
  name: 'DonateView',
  computed: {
    ...mapStores(useForumStore),
  },
})
</script>

<template>
  <div>
    <div class="mb-6 space-y-2">
      <h1 class="text-5xl font-bold text-center text-yellow-500">Donate</h1>
      <p class="text-lg text-center">...and support FreeFlarum!</p>
    </div>

    <div class="my-24 space-y-6">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold text-center text-yellow-500">Donation Perks</h1>
        <p class="text-center">What do you get for making a one-time donation?</p>
      </div>

      <div class="grid max-w-screen-lg grid-cols-1 gap-8 px-8 mx-auto justify-items-center">
        <div
          class="p-4 rounded-lg bg-gradient-to-tr dark:from-gray-700 dark:to-gray-800 from-gray-300 to-gray-400 w-80"
        >
          <div class="mb-6 space-y-2 text-center">
            <h3 class="text-2xl font-bold text-yellow-500">7 €</h3>
            <p>Donate 7 € or more, and:</p>
          </div>

          <ul class="ml-6 space-y-4 list-['\2012\A0\A0'] text-sm">
            <li>The "Powered by FreeFlarum" footer at your forum will be removed</li>

            <li>Your forum will not be automatically archived due to inactivity.</li>

            <li>
              Ability to use an additional 500 MB in the <code>`local`</code> extender for the FoF
              Upload extension.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="px-10 my-16 bg-gray-100 py-14">
      <div class="mx-[5vw]">
        <div class="mb-6 space-y-2 text-center">
          <h1 class="text-3xl font-extrabold text-orange-600">Are you ready to donate?</h1>
          <p class="italic text-gray-900">All money goes towards supporting FreeFlarum</p>
        </div>

        <div class="grid items-center justify-between grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            class="p-4 my-6 mb-6 space-y-2 text-black bg-red-200 rounded-lg ring-offset-2 ring-red-400 ring-4"
          >
            <b class="text-lg">Important:</b>
            <p>
              When donating, please input nothing else except your forum tag in the donation
              message! Our system will automatically mark you as donor by scanning the donation
              message.
            </p>

            <div class="py-6" v-if="forumStore.isAuthenticated">
              <div class="flex flex-row gap-2">
                <b>Your forum tag is:</b>
                <pre>{{ forumStore.tag }}</pre>
              </div>
              <p>(please, include that and nothing else in the donation message)</p>
            </div>
            <p v-else>
              <RouterLink
                class="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-color duration-500 underline"
                :to="{ name: 'login' }"
              >
                Log in to your settings
              </RouterLink>
              and your forum tag will appear here.
            </p>

            <ul class="my-4 ml-6 space-y-1 list-disc">
              <li><b>Nickname</b> can be anything that you want.</li>
              <li>
                You can check <b>Private message</b> so only FreeFlarum can see your donation
                message/forum name. Useful if your forum is private - otherwise, it will show up at
                our
                <a
                  class="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-color duration-500 underline text-orange-800 hover:text-orange-700 dark:hover:text-orange-700"
                  href="https://ko-fi.com/freeflarum"
                  >donation page</a
                >
              </li>
            </ul>

            <p>
              If FreeFlarum can't find your forum tag in the donation message, your forum will not
              be automatically marked as donor. If you have donated and haven't received a thank-you
              E-mail within a day, please contact me so that we can sort it out:
              <a
                class="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-color duration-500 underline text-orange-800 hover:text-orange-700 dark:hover:text-orange-700"
                href="/support"
                >https://freeflarum.com/support</a
              >
            </p>
          </div>

          <iframe
            id="kofiframe"
            src="https://ko-fi.com/freeflarum/?hidefeed=true&widget=true&embed=true&preview=true"
            class="w-full p-1 bg-gray-100 border-none"
            height="650"
            title="FreeFlarum"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
