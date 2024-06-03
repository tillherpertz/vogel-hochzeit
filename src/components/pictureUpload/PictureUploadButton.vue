<template>
    <div class="picture-upload-button">
        <button>Fotos hochladen</button>
    </div>
</template>

<script lang="ts">

export default {
    name: "PictureUploadButton",
    components: {},
    props: {
        onClick: Function,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.picture-upload-button {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 1em;
    width: 100%;

    button {
        width: 80%;
        height: 2.5em;
        background-color: #fff;
        color: #7f4828;
        border: none;
        border-radius: 40px;
        margin: 0 auto;
        font-size: 1.25em;
        box-shadow: 0px 0px 13px 0px #00000094;
    }
}
</style>
