<script setup>
  import Lenis from 'lenis'
  const videoRef = ref(null)
  const modalRef = ref(null)
  let modalLenis = null

  const initLenis = () => {
    if (!modalRef.value || !modalRef.value.firstElementChild) return
    modalLenis?.destroy()
    modalLenis = new Lenis({
      wrapper: modalRef.value,
      content: modalRef.value.firstElementChild,
      eventsTarget: modalRef.value,
      smoothWheel: true,
      smoothTouch: true,
      autoRaf: true,
      lerp: 0.15
    })
  }

  onMounted(async () => {
    initLenis()
    console.log(videoRef.value.seeking)
  })

  onBeforeUnmount(() => {
    modalLenis?.destroy()
    modalLenis = null
  })

  watch(
    () => videoRef.value,
    async isActive => {
      await nextTick()
      if (!modalLenis) return
      modalLenis.resize()
      if (isActive) {
        modalLenis.start()
      } else {
        modalLenis.stop()
      }
    }
  )

  const updateScrollProgress = progress => {
    console.log({ progress })
  }
</script>

<template>
<section class="h-screen w-full" ref="modalRef" data-lenis-local>
  <video ref="videoRef" controls>
    <source src="/content/video.mp4" type="video/mp4" />
  </video>
</section>
</template>
