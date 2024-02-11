<template>
  <Background />
  <template class="start-content">
    <Logo />
    <div class="info">
      <div class="start-names">Julia & Till</div>
      <div class="start-date">07.06.2024</div>
    </div>
  </template>
  <h3>{{ this.placeholder }}</h3>
</template>

<script lang="ts">
import Background from "@/components/background/Background.vue";
import Logo from "@/components/logo/Logo.vue";

import { useStore } from "@/utils/store.ts";
import api from "@/api/api.ts";

export default {
  name: "Start",
  components: {
    Logo,
    Background,
  },
  data() {
    return {
      placeholder: "",
    };
  },
  async mounted() {
    // const store = useStore();
    const data = await api.getHome();
    this.placeholder = data[0].text;
  },
};
</script>

<style scoped>
.start-content {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .start-names {
    font-family: "Style Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 3em;
    color: #804828;
  }
  .start-date {
    font-family: "Yusei Magic", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5em;
    color: #fff;
  }
}
h3 {
  position: absolute;
  bottom: 2em;
  margin-top: 4em;
  color: #fff;
  font-size: 2em;
  width: 100%;
  text-align: center;
}
</style>
```
