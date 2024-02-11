<template>
  <div class="overlay"></div>
  <div class="background"></div>
</template>

<script lang="ts"></script>

<style scoped>
.overlay {
  background-color: #f4caa3;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
}
.background {
  background-image: url(../../assets/gimi.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
  opacity: 0.2;
  z-index: 0;
}
</style>
