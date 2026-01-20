export default async function useResizeMedia(
  mediaRef,
  containerRef,
  videoRatio,
  isImage,
  isLoop
) {
  const { isMobile } = useDevice()
  if (!mediaRef.value) return
  try {
    const mediaWrapper = isImage ? mediaRef.value.$el : mediaRef.value
    const containerWidth = isLoop
      ? containerRef.clientWidth
      : containerRef.value.clientWidth
    const containerHeight = isLoop
      ? containerRef.clientHeight
      : containerRef.value.clientHeight
    const containerRatio = containerWidth / containerHeight

    const newWidth = containerHeight * videoRatio
    const newHeight = containerWidth / videoRatio

    const conditionResize = isLoop
      ? videoRatio < containerRatio
      : videoRatio > containerRatio

    if (conditionResize || isMobile) {
      mediaWrapper.style.width = `${containerWidth}px`
      mediaWrapper.style.height = `${newHeight}px`
    } else {
      mediaWrapper.style.width = `${newWidth}px`
      mediaWrapper.style.height = `${containerHeight}px`
    }
  } catch (e) {
    console.error('Error on calculating media ratio', e)
  }
}
