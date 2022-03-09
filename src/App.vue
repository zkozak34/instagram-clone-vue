<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/direct">Direct</router-link> |
    </nav>
    <router-view />
  </div>
</template>

