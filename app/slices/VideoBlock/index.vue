<script setup>
  const props = defineProps(
    getSliceComponentProps(['slice', 'index', 'slices', 'context'])
  )

  console.log(props.slice.primary)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation">
    <Video
      :sourceDesktop="slice.primary.media_desktop"
      :sourceMobile="slice.primary.media_mobile"
      :videoDesktop="slice.primary.video_link"
      :videoMobile="slice.primary.video_link_mobile" />
  </section>
</template>
