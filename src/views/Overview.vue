<template>
  <Background bgColor="#fff" opacity="0.05" />
  <Header />
  <div class="information-panel">
    <div class="section-wrapper">
      <h1>Informationen</h1>
      <h2>07.06.2024</h2>
    </div>
    <div class="section-wrapper">
      <h1>Standesamt</h1>
      <h2>11:00 Uhr</h2>
      <h3>Ladenburg 68526</h3>
      <h3>Hauptstraße 7</h3>
    </div>
    <div class="section-wrapper">
      <h1>Sekt Empfang</h1>
      <h2>14:00 Uhr</h2>
      <h3>Jäck’s Scheuerboden</h3>
      <h3>Aussiedlerhof 7a</h3>
      <h3>69198 Schriesheim</h3>
    </div>
    <div class="section-wrapper">
      <h1>Freie Trauung</h1>
      <h2>15:00 Uhr</h2>
      <h3>Jäck’s Scheuerboden</h3>
    </div>
    <div class="section-wrapper">
      <h1>Abendessen / Feier</h1>
      <h2>ca. 18:00 Uhr</h2>
      <h3>Jäck’s Scheuerboden</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Background from "@/components/background/Background.vue";

export default {
  name: "Overview",
  components: {
    Header,
    Background,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.section-wrapper{
    margin-bottom: 1em;
    text-align: center;
}
h1{
    color: #F8D0B6;
}
h2{
 color: #804828
}
h3{
    color: #804828
}
</style>
```
