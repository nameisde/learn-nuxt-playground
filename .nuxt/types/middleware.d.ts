import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}