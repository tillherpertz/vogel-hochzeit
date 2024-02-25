<template>
    <div class="background-component">
        <div class="wreaths" :class="{ show: isNotStart }">
            <img class="wreath-top" src="../../assets/Wreath_15.png" alt="Wreath" />
            <img class="wreath-bottom" src="../../assets/Wreath_4.png" alt="Wreath" />
        </div>
        <div class="overlay" :style="{ backgroundColor: bgColor }"></div>
        <div class="background" :style="{ opacity: opacity }"></div>
    </div>
</template>

<script lang="ts">

export default {
    name: "Background",

    props: {
        bgColor: {
            type: String,
            default: "#f4caa3",
        },
        opacity: {
            type: String,
            default: 0.2,
        },
    },
    data() {
        return {
            isNotStart: true,
        };
    },

    mounted() {
        // console.log(router.currentRoute.value.path)

    },
};
</script>

<style scoped>
.background-component {
    position: relative;
    z-index: -1;
}

.overlay {
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

.wreaths {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;

    .wreath-top {
        position: absolute;
        top: -60px;
        left: -80px;
        width: 350px;
        height: auto;
        transform: rotate(75deg);
        opacity: 0.5;


        @media screen and (min-width: 768px) {
            width: 20%;
        }
    }

    .wreath-bottom {
        position: absolute;
        bottom: -100px;
        right: -120px;
        width: 500px;
        height: auto;
        transform: rotate(30deg);
        opacity: 0.5;

        @media screen and (min-width: 768px) {
            width: 35%;
        }
    }
}
</style>
