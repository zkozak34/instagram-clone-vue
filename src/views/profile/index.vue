<template>
  <div>
    <nav>
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link> |
    </nav>
    <CustomText tag="p" size="normal">Profile</CustomText>

    <router-view></router-view>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'ProfileView',
  components: {
    CustomText,
  }
}
</script>
