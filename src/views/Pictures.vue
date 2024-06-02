<template>
    <!-- @vue-ignore -->
    <PictureUploadForm v-if="showUploadModal" @close="toggleModal" />
    <Background bgColor="#fff" opacity="0.05" />
    <div class="header-wrap">
        <Header />
    </div>
    <div class="content-wrap">
        <div class="information-panel">
            <div class="section-wrapper">
                <h1>Fotos</h1>
            </div>
        </div>
        <div class="thumbnail-collections">
            <div v-for="collection in pictureCollections" :key="collection.id">
                <CollectionThumbnail :collection="collection" />
            </div>
        </div>
    </div>
    <!-- @vue-ignore -->
    <PictureUploadButton @click="toggleModal()" v-if="!showUploadModal" />
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import Background from "@/components/background/Background.vue";
import CollectionThumbnail from "@/components/collectionThumbnail/CollectionThumbnail.vue";
import PictureUploadForm from "@/components/pictureUpload/PictureUploadForm.vue";
import PictureUploadButton from "@/components/pictureUpload/PictureUploadButton.vue";
import api from "@/api/api";

export default {
    name: "Overview",
    components: {
        Header,
        Background,
        CollectionThumbnail,
        PictureUploadForm,
        PictureUploadButton,
    },
    data() {
        return {
            pictureCollections: [] as any[],
            showUploadModal: false,
        };
    },
    async mounted() {
        const pictureCollections = await api.getPictureCollections();
        console.log(pictureCollections);
        this.pictureCollections = pictureCollections;
    },
    methods: {
        toggleModal() {
            this.showUploadModal = !this.showUploadModal;
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
    .thumbnail-collections {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 1em;
    }
}

.information-panel {}

.section-wrapper {
    margin-bottom: 1em;
    text-align: center;
}

h1 {
    color: #f8d0b6;
}

h2 {
    color: #804828;
}

h3 {
    color: #804828;
}
</style>
```
