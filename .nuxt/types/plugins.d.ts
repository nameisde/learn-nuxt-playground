// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.4_nuxt@3.8.2+vite@5.0.4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.4_nuxt@3.8.2+vite@5.0.4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+content@2.9.0_nuxt@3.8.2+vue@3.3.9/node_modules/@nuxt/content/dist/runtime/plugins/ws").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.8.2_ww7ezt77jizkco5l7knibxh4lm/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
