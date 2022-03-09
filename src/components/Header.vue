<template>

  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Instagram</router-link>

      <form class="search">
        <input type="text" placeholder="Search"/>
      </form>

      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'home'"/>
          <IconHome v-else/>
        </router-link>

        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'explore'"/>
          <IconExplore v-else/>
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'direct'"/>
          <IconDirect v-else/>
        </router-link>
        <router-link to="/profile">Profile
        </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import IconHome from "@/icons/home.svg"
import IconExplore from "@/icons/explore.svg"
import IconDirect from "@/icons/direct.svg"
import IconHomeFill from "@/icons/home-fill.svg"
import IconExploreFill from "@/icons/explore-fill.svg"
import IconDirectFill from "@/icons/direct-fill.svg"
import Container from "@/components/Container"

export default {
  name: "MainHeader",
  components: {
    IconHome,
    IconExplore,
    IconDirect,
    IconHomeFill,
    IconExploreFill,
    IconDirectFill,
    Container
  }
}
</script>

<style scoped>
.header {

  border-bottom: 1px solid rgba(var(--b6a));
}

.header-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
  text-align: center;

  input {
    width: 215px;
    height: 28px;
    border: 1px solid rgb(var(--b6a));
    border-radius: 4px;
    background-color: rgb(var(--b3f));
    padding: 0 20px;
  }

  input:focus {
    outline: none;
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin-left: 20px;
  }
}
</style>