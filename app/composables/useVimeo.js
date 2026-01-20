export function useVimeo({
  videoId,
  videoRef,
  containerRef,
  videoRatio,
  options
}) {
  const { onLoaded } = useScriptVimeoPlayer()
  const ready = ref(false)
  const hideVideo = ref(false)

  let resizeObserver
  let player

  onMounted(() => {
    nextTick(() => {
      onLoaded(async ({ Vimeo }) => {
        if (!videoId || !videoRef?.value) return

        player = new Vimeo.Player(videoRef.value, {
          id: videoId,
          ...options
        })

        await player.ready()
        setTimeout(() => (ready.value = true), 1200)
        player.on('error', () => (hideVideo.value = true))

        const parent = videoRef.value.parentElement
        await useResizeMedia(videoRef, containerRef, videoRatio)
        if (parent) {
          resizeObserver = new ResizeObserver(() =>
            useResizeMedia(videoRef, containerRef, videoRatio)
          )
          resizeObserver.observe(parent)
        }
      })
    })
  })

  onBeforeUnmount(() => {
    if (resizeObserver) resizeObserver.disconnect()
    if (player) player.destroy()
  })

  return { hideVideo, ready }
}
