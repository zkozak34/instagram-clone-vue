<template>
  <div class="home">
    <CustomText tag="h1" size="normal" class="red">Home</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'HomeView',
  components: {
    CustomText
  }
}
</script>
