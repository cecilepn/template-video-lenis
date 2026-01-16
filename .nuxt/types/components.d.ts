
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'ScriptAriaLoadingIndicator': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue").default
  'ScriptCarbonAds': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue").default
  'ScriptCrisp': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue").default
  'ScriptGoogleAdsense': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue").default
  'ScriptGoogleMaps': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue").default
  'ScriptIntercom': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue").default
  'ScriptLemonSqueezy': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue").default
  'ScriptLoadingIndicator': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue").default
  'ScriptStripePricingTable': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue").default
  'ScriptVimeoPlayer': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue").default
  'ScriptYouTubePlayer': typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue").default
  'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.4_ioredis@5.9.2_magicast@0.5.1/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default
  'NuxtPicture': typeof import("../../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.4_ioredis@5.9.2_magicast@0.5.1/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default
  'Icon': typeof import("../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.1_vite@7.3.1_jiti@2.6.1_lightningcss@1.30.2_terser@5.46._0cc09862379354fd5db02c1c399ab52e/node_modules/@nuxt/icon/dist/runtime/components/index").default
  'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue").default>
  'LazyScriptCarbonAds': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue").default>
  'LazyScriptCrisp': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue").default>
  'LazyScriptGoogleAdsense': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue").default>
  'LazyScriptGoogleMaps': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue").default>
  'LazyScriptIntercom': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue").default>
  'LazyScriptLemonSqueezy': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue").default>
  'LazyScriptLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue").default>
  'LazyScriptStripePricingTable': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue").default>
  'LazyScriptVimeoPlayer': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue").default>
  'LazyScriptYouTubePlayer': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+scripts@0.11.10_@unhead+vue@2.1.2_vue@3.5.26_typescript@5.9.3___db0@0.3.4_ioredis_d5ff15074dc66eb8b2e24ba78fc45271/node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.4_ioredis@5.9.2_magicast@0.5.1/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@1.10.0_db0@0.3.4_ioredis@5.9.2_magicast@0.5.1/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default>
  'LazyIcon': LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.5.1_vite@7.3.1_jiti@2.6.1_lightningcss@1.30.2_terser@5.46._0cc09862379354fd5db02c1c399ab52e/node_modules/@nuxt/icon/dist/runtime/components/index").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.4_@vue+compiler-sfc@3.5.26_cac@6.7.14_db0@0.3.4_eslint@9_f1423c5c0e7028edaa630f9833d4a560/node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
