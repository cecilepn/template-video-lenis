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

  const { isMobile } = useDevice()
  const nuxtApp = useNuxtApp()
  const imageRef = ref()
  const videoRef = ref(null)
  const vimeoRef = ref(null)
  const containerRef = ref(null)

  const newWidth = ref('100%')
  let modalLenis

  const videoRatio = props.videoDesktop.width / props.videoDesktop.height
  const options = {
    responsive: true,
    vimeo_logo: false,
    title: false,
    byline: false,
    pip: false,
    portrait: false
  }
  const videoId =
    isMobile && props.videoMobile?.video_id
      ? props.videoMobile.video_id
      : props.videoDesktop?.video_id

  const { ready, hideVideo } = useVimeo({
    videoId,
    videoRef: vimeoRef,
    containerRef,
    videoRatio,
    options
  })

  onMounted(() => {
    nextTick(() => {
      useResizeMedia(imageRef, containerRef, videoRatio, true)
    })
    useLocalLenis(containerRef)
    modalLenis = nuxtApp.$localLenis
  })

  onBeforeUnmount(() => {
    modalLenis?.destroy()
    modalLenis = null
  })

  const updateVideoOnScroll = () => {
    if (!modalLenis || !videoRef.value) return
    const video = videoRef.value
    newWidth.value = `120vw`
    modalLenis.on('scroll', ({ progress }) => {
      if (video.currentTime < video.duration) {
        // TODO : adjust calcul to backwards the video too
        video.currentTime += progress
        console.log(video.currentTime)
      }
    })
  }

  const togglePlay = async () => {
    if (!modalLenis || !videoRef.value) return
    if (videoRef.value.paused) {
      videoRef.value.play()
      // TODO : find a way to restart local lenis after stopped once
      // TODO : handle control videos both cases
      modalLenis.start()
      updateVideoOnScroll()
    } else {
      videoRef.value.pause()
      modalLenis.destroy()
    }
  }
</script>

<template>
  <div
    class="h-screen w-full overflow-hidden flex justify-center items-center"
    ref="containerRef"
    data-lenis-local>
    <div class="relative h-full" :style="`width: ${newWidth}`" />
    <!-- case vimeo -->
    <div
      v-if="videoDesktop?.video_id"
      ref="vimeoRef"
      :class="[
        'absolute z-1 transition-opacity duration-500 ease-cubic-out',
        ready ? 'opacity-100' : 'opacity-0',
        hideVideo && 'hidden'
      ]" />
    <!-- case local video -->
    <video
      v-else
      ref="videoRef"
      class="h-full w-full absolute top-0 left-0 bg-red-200 z-1">
      <source src="/content/video.mp4" type="video/mp4" />
    </video>
    <div class="z-10 absolute w-full h-full top-0" @click="togglePlay()" />
  </div>
</template>
