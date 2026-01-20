<script setup>
  import Lenis from 'lenis'
  const videoRef = ref(null)
  const modalRef = ref(null)
  let modalLenis = null

  const initModalLenis = () => {
    if (!modalRef.value || !modalRef.value.firstElementChild) return
    modalLenis?.destroy()
    modalLenis = new Lenis({
      wrapper: modalRef.value,
      content: modalRef.value.firstElementChild,
      eventsTarget: modalRef.value,
      smoothWheel: true,
      smoothTouch: true,
      autoRaf: true,
      lerp: 0.15,
      orientation: 'horizontal'
    })
  }

  onMounted(() => {
    initModalLenis()
  })

  onBeforeUnmount(() => {
    modalLenis?.destroy()
    modalLenis = null
  })

  const updateScrollProgress = () => {
    nextTick(() => {
      if (modalLenis) {
        modalLenis.on('scroll', ({ progress }) => {
          videoRef.value.currentTime += progress
          console.log(videoRef.value.currentTime * progress)
        })
      }
    })
  }

  const togglePlay = async () => {
    if (!videoRef.value || !modalLenis) return
    if (videoRef.value.paused) {
      initModalLenis()
      videoRef.value.play()
      updateScrollProgress()
    } else {
      videoRef.value.pause()
      modalLenis?.destroy()
    }
  }
</script>

<template>
  <section
    class="h-screen w-full overflow-hidden"
    ref="modalRef"
    data-lenis-local>
    <div class="w-[120vw]">
      <video ref="videoRef">
        <source src="/content/video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="z-10 absolute w-full h-full top-0" @click="togglePlay()" />
  </section>
</template>
