<template>
    <div class="logo-wrapper">
        <Logo class="logo" colorTop="#E87273" colorBottom="#E87273" />
    </div>
</template>

<script lang="ts">
import Logo from "@/components/logo/Logo.vue";

export default {
    name: "Header",
    components: {
        Logo,
    },
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
```
