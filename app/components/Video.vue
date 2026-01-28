<script setup>
  const videoRef = ref(null)
  const { $lenis } = useNuxtApp()

  onMounted(() => {
    nextTick(() => {
      $lenis.on('scroll', ({ progress }) => {
        updateScrollProgress(progress)
      })
    })
  })

  const updateScrollProgress = progress => {
    nextTick(() => {
      if (!videoRef.value) return
      const pageHeight = document.body.scrollHeight // 100%
      const videoHeight = videoRef.value.getBoundingClientRect().height
      const portionVideo = Math.floor((videoHeight * 100) / pageHeight) // 21 %
      const videoTop = videoRef.value.getBoundingClientRect().top
      const videoBottom = videoRef.value.getBoundingClientRect().bottom

      if (videoTop < 0 && videoBottom > 0) {
        console.log({ progress }) // 33 / 100
      }
    })
  }
</script>

<template>
  <section class="h-fit w-full overflow-hidden">
    <video ref="videoRef">
      <source src="/content/video.mp4" type="video/mp4" />
    </video>
  </section>
</template>
