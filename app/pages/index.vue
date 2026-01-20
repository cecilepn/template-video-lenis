<script setup>
  import { components } from '~/slices'
  const prismic = usePrismic()
  const { data: homepage } = await useAsyncData(() =>
    prismic.client.getSingle('homepage')
  )
</script>

<template>
  <section class="h-[200vh]">
    <slice-zone :components="components" :slices="homepage?.data.slices" />
  </section>
</template>
