<template>
  <div class="logo">
    <span class="upper-logo">Vogel</span>
    <span class="lower-logo">Hochzeit</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23em;
  height: 10em;
}
.upper-logo {
  font-family: "Yusei Magic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3em;
  color: #804828;
  position: absolute;
  left: 100px;
}

.lower-logo {
  font-family: "Style Script", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 5em;
  color: #fff;
  position: absolute;
  top: 40px;
}
</style>
