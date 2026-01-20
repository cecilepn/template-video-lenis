import Lenis from 'lenis'
export function useLocalLenis(modalRef) {
  if (!modalRef.value || !modalRef.value.firstElementChild) return
  const localLenis = new Lenis({
    wrapper: modalRef.value,
    content: modalRef.value.firstElementChild,
    eventsTarget: modalRef.value,
    smoothWheel: true,
    smoothTouch: true,
    autoRaf: true,
    lerp: 0.15,
    orientation: 'horizontal'
  })

  const nuxtApp = useNuxtApp()
  nuxtApp.provide('localLenis', localLenis)
}
