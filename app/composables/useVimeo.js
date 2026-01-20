export function useVimeo({
  videoId,
  videoRef,
  containerRef,
  videoRatio,
  options,
  isLoop
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
        if (isLoop) {
          const [videoWidth, videoHeight] = await Promise.all([
            player.getVideoWidth(),
            player.getVideoHeight()
          ])
          const videoRatio = videoWidth / videoHeight
          if (parent) {
            resizeObserver = new ResizeObserver(() =>
              useResizeMedia(videoRef, parent, videoRatio, false, true)
            )
            resizeObserver.observe(parent)
          }
          await useResizeMedia(videoRef, parent, videoRatio, false, isLoop)
        } else {
          await useResizeMedia(videoRef, containerRef, videoRatio, false)
          if (parent) {
            resizeObserver = new ResizeObserver(() =>
              useResizeMedia(videoRef, containerRef, videoRatio, false)
            )
            resizeObserver.observe(parent)
          }
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
