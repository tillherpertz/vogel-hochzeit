<template>
    <div class="thumbnail">
        <div class="thumb-wrap">
            <h1 :style="'font-size:'">{{ shortenedCollectionName }}</h1>
            <img :src="linkCreator(firstPicture)" alt="picture" width= />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "CollectionThumbnail",
    components: {},
    props: {
        collection: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            firstPicture: this.collection.pictures[0],
            shortenedCollectionName: this.collection.name.substring(0, 20) + "..."
        };
    },
    methods: {
        linkCreator(picture: string) {
            const apiUrl = import.meta.env.VITE_POCKETBASE_API_URL;
            const urlString = `${apiUrl}/api/files/`;
            const collectionId = this.collection.collectionId;
            const albumId = this.collection.id;
            return urlString + collectionId + "/" + albumId + "/" + picture;
        },
    },
};
</script>

<style lang="scss" scoped>
.thumbnail {
    position: relative;

    .thumb-wrap {
        width: 10em;
        height: 10em;
        margin-bottom: 2em;
        position: relative;
        overflow: hidden;
        border: 1px solid #804828;
        background-color: #000000bd;
    }

    h1 {
        position: absolute;
        color: #ffffff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        z-index: 1;
        text-align: center;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
    }
}
</style>
```
