<template>
    <div class="back-button" @click="$router.go(-1)">
        <i class="bi-chevron-left"></i>
    </div>
</template>
<script lang="ts">
export default {
    name: "BackButton",
    data() {
        return {
        };
    },
};
</script>
<style lang="scss" scoped>
.back-button {
    position: fixed;
    top: 2em;
    left: 2em;
    z-index: 1000;

    i {
        color: #804828;
        font-size: 2em;
    }
}
</style>