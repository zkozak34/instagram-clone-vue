<template>
  <div class="home">
    <CustomText tag="p" size="normal">Home</CustomText>
    <CustomText tag="p" size="small">Home</CustomText>
    <CustomText tag="p" size="xsmall">Home</CustomText>
    <CustomText tag="p" size="xxsmall">Home</CustomText>
    <IconHome />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconHome from "@/icons/home.svg"

export default {
  name: 'HomeView',
  components: {
    CustomText,
    IconHome
  }
}
</script>

