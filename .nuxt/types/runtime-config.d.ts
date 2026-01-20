import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   "nuxt-scripts": {
      version: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   device: {
      defaultUserAgent: string,
   },

   prismic: {
      endpoint: string,

      environment: string,

      client: string,

      linkResolver: string,

      clientConfig: any,

      preview: string,

      toolbar: boolean,

      components: {
         richTextComponents: string,
      },
   },

   "nuxt-scripts": {
      version: string,

      defaultScriptOptions: {
         trigger: string,
      },
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }