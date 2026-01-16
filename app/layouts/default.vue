<script setup>
  const { $lenis } = useNuxtApp()
  onMounted(()=> console.log($lenis))
</script>

<template>
  <div>
    <Html lang="en">
      <Body>
        <main>
          <slot />
        </main>
      </Body>
    </Html>
  </div>
</template>
