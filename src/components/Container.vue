<template>
  <div class="container">
    <slot />
  </div>
</template>
<script>
export default {
  name: "MainContainer"
}
</script>

<style scoped>
.container {
  max-width: 940px;
  margin: 0 auto;
}
</style>