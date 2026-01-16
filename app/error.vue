<script setup>
  defineProps({
    error: {
      type: Object,
      required: true
    }
  })
  const { isMobile } = useDevice()
  const { client } = usePrismic()
  const { data: page } = await useAsyncData('404', () =>
    client.getSingle('404')
  )
  const image =
    isMobile && page.value.data.image_mobile?.id
      ? page.value.data.image_mobile
      : page.value.data.image_desktop
</script>

<template>
  <NuxtLayout>
    <section
      class="overflow-x-hidden h-[100vh] max-w-[100vw] relative bg-black flex flex-col items-center justify-center md:grid md:grid-cols-6">
      <PrismicImage
        v-if="image"
        :field="image"
        class="absolute h-full w-full object-cover z-10 pointer-events-none" />
      <div
        class="text-white mix-blend-difference z-20 h-full flex flex-col gap-m justify-center items-center p-s text-center md:text-left md:justify-start md:items-start md:col-span-2 md:col-start-5 md:p-0 md:pt-header">
        <div class="flex flex-col">
          <h1>{{ error.statusCode }}</h1>
          <h1>Oops! Page not found.</h1>
        </div>
        <p>
          {{ page.data.message }}
        </p>
        <NuxtLink to="/" class="pl-[10px]">
          <UiBracketText text="Go to homepage" />
        </NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>
