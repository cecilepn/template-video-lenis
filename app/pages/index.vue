<script setup>
  const { $lenis } = useNuxtApp()
  const videoRef = ref()
  onMounted(async () => {
    const video = videoRef.value
    console.log(video.seeking)
    await nextTick(() => {
      if ($lenis) {
        $lenis.on('scroll', ({ progress }) => {
          updateScrollProgress(progress)
        })
      }
    })
  })

  const updateScrollProgress = progress => {
    console.log({ progress })
  }
</script>

<template>
  <section>
    <video ref="videoRef" controls>
      <source src="/content/video.mp4" type="video/mp4" />
    </video>
  </section>
</template>
