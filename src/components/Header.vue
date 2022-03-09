<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/profile">Profile</router-link>
      |
      <router-link to="/explore">Explore</router-link>
      |
      <router-link to="/direct">Direct</router-link>
      |
    </nav>
  </header>
</template>
<script>
export default {
  name: "MainHeader"
}
</script>