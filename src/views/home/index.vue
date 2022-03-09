<template>
  <div class="home">
      <div class="timeline">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
      </div>
      <div class="sidebar">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolor eius excepturi fugiat impedit, minima modi nisi porro quisquam quo repellat rerum sapiente sit, unde veniam! Eveniet, reprehenderit. </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.home {
  max-width: 605px;
  margin: 0 auto;
  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>