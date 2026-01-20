<script setup>
  const props = defineProps({
    sourceDesktop: {
      type: Object,
      required: false,
      default: () => ({})
    },
    sourceMobile: {
      type: Object,
      required: false,
      default: () => ({})
    },
    videoDesktop: {
      type: Object,
      required: false,
      default: null
    },
    videoMobile: {
      type: Object,
      required: false,
      default: null
    }
  })

  const nuxtApp = useNuxtApp()
  const videoRef = ref(null)
  const modalRef = ref(null)
  const progressBar = ref(null)
  let modalLenis

  onMounted(() => {
    useLocalLenis(modalRef)
    modalLenis = nuxtApp.$localLenis
  })

  onBeforeUnmount(() => {
    modalLenis?.destroy()
    modalLenis = null
  })

  const updateVideoOnScroll = () => {
    if (!progressBar.value) return
    nextTick(() => {
      if (modalLenis) {
        modalLenis.on('scroll', ({ progress }) => {
          if (videoRef.value.currentTime < videoRef.value.duration) {
            videoRef.value.currentTime += progress
          }
        })
      }
    })
  }

  const togglePlay = async () => {
    if (!videoRef.value || !modalLenis) return
    if (videoRef.value.paused) {
      videoRef.value.play()
      updateVideoOnScroll()
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
    <div
      ref="progressBar"
      class="h-full w-px bg-off-white absolute left-0 top-0 z-10 transition-transform duration-200 ease-out" />
    <div class="z-10 absolute w-full h-full top-0" @click="togglePlay()" />
  </section>
</template>
