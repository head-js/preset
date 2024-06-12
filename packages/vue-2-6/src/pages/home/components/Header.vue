<template>
  <h1 :class="`title ${mono ? 'title-mono': ''}`">Hello Home Index Page</h1>
</template>

<script>
export default {
  components: {},

  props: {
    mono: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="css" scoped>
.title {
  @apply text-center;
}

.title-mono {
  @apply font-mono;
}
</style>
