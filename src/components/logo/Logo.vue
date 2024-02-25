<template>
    <div class="logo" :class="{ start: isStart }">
        <span class="upper-logo" :class="{ start: isStart }" :style="{ color: colorTop }">Vogel</span>
        <span class="lower-logo" :class="{ start: isStart }" :style="{ color: colorBottom }">Hochzeit</span>
    </div>
</template>

<script lang="ts">
export default {
    name: "Logo",
    props: {
        colorTop: {
            type: String,
            default: "#804828",
        },
        colorBottom: {
            type: String,
            default: "#fff",
        },
        isStart: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.logo {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23em;
    height: 7em;
    margin-top: 1em;

    &.start {
        height: 10em;
    }
}

.upper-logo {
    font-family: "Yusei Magic", sans-serif;
    font-weight: 400;
    font-style: normal;
    position: absolute;
    font-size: 1.5em;
    left: 130px;

    &.start {
        font-size: 3em;
        left: 100px;
    }
}

.lower-logo {
    font-family: "Style Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 3em;
    position: absolute;
    top: 20px;

    &.start {
        font-size: 5em;
        top: 40px;
    }
}
</style>
