<template>
  <div id="app">
    <MainHeader />
    <main class="main">
      <MainContainer>
        <router-view />
      </MainContainer>
    </main>
  </div>
</template>
<script>
import MainHeader from "@/components/Header"
import MainContainer from "@/components/Container"
export default {
  name: "App",
  components:{
    MainHeader,
    MainContainer
  }
}
</script>

<style scoped>
.main {
  padding-top: 20px;
}
</style>
