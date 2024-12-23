// eslint-disable-next-line import-x/no-duplicates
import { createRouter, createWebHashHistory } from 'vue-router'
// eslint-disable-next-line import-x/no-duplicates
import { routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
