<template>
    <Background bgColor="#fff" opacity="0.05" />
    <BackButton />
    <Menu />
    <div class="header-wrap">
        <Header />
    </div>
    <div>
        <div class="content-wrap">
            <div class="section-wrapper">
                <h1>{{ collection.name }}</h1>
            </div>
        </div>
        <viewer :images="collection.pictures" class="thumbnail-collections">
            <div v-for="src in images" :key="src" :src="src" class="thumbnail-picture">
                <img :src="src" :key="src">
            </div>
        </viewer>
    </div>
</template>
<script lang="ts">
import Header from "@/components/header/Header.vue";
import Background from "@/components/background/Background.vue";
import Menu from "@/components/menu/Menu.vue";
import BackButton from "@/components/backButton/BackButton.vue";

export default {
    name: "PictureCollection",
    components: {
        Header,
        Background,
        Menu,
        BackButton,
    },
    props: {
        collection: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            images: this.createImageArray(this.collection.pictures),
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
        createImageArray(pictures: any) {
            let images = [];
            for (let picture of pictures) {
                images.push(this.linkCreator(picture));
            }
            return images;
        },
    },
};
</script>
<style lang="scss" scoped>
.header-wrap {
    width: 100%;
    height: 7em;
    display: flex;
    justify-content: center;
    top: 0;
}

.content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-wrapper {
        margin-bottom: 1em;
        text-align: center;

        h1 {
            color: #804828;
        }
    }

}

.thumbnail-collections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
}

.thumbnail-picture {
    width: 10em;
    height: 10em;
    margin-bottom: 2em;
    position: relative;
    overflow: hidden;
    border: 1px solid #804828;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>