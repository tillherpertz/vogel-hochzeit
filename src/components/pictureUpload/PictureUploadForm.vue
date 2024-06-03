<template>
    <div class="picture-upload-form">
        <div class="form-wrapper">
            <div @click="$emit('close')" class="form-close-button">
                <i class="bi-x-lg"></i>
            </div>
            <h1>Fotos hochladen</h1>
            <form id="pictureCollectionForm" @submit.prevent="submitData">
                <label for="title">Name des Albums</label>
                <input type="text" name="title" id="title" />
                <label for="file">Dateien auswählen</label>
                <input type="file" name="file" id="file" multiple />
                <button class="picture-upload-button" type="submit">Hochladen</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import PictureUploadButton from './PictureUploadButton.vue';
import api from '@/api/api';

export default {
    name: "PictureUploadForm",
    components: {
        PictureUploadButton,
    },
    emits: ['close'],
    props: {
        onClick: Function,
    },
    data() {
        return {};
    },
    methods: {
        submitData() {
            const formData = new FormData() as any;
            const formElement = document.getElementById('pictureCollectionForm') as HTMLFormElement;

            const titleInput = formElement.querySelector('input[name="title"]') as HTMLInputElement;
            const fileInput = formElement.querySelector('input[name="file"]') as HTMLInputElement;

            if (titleInput && titleInput.value) {
                formData.append('name', titleInput.value);
            }

            if (fileInput && fileInput.files) {
                for (let i = 0; i < fileInput.files.length; i++) {
                    formData.append('pictures', fileInput.files[i]);
                }
            }

            // i need a check if pictures or title are empty
            if (formData.get('name') === '' || formData.get('pictures') === null) {
                alert('Bitte füll alle Felder aus');
                return;
            }

            api.uploadPictureCollection(formData);
        },
    },
};
</script>
<style lang="scss" scoped>
.form-close-button {
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: 2em;
    color: #7f4828;
    cursor: pointer;
}

h1 {
    color: #7f4828;
    text-align: center;

}

.picture-upload-form {
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 1001;

    .form-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: relative;

        .picture-upload-button {
            width: 80%;
            height: 2.5em;
            background-color: #7f4828;
            color: #fff;
            border: none;
            border-radius: 40px;
            margin: 2em auto;
            font-size: 1.25em;
            box-shadow: 0px 0px 13px 0px #00000018;
        }
    }

    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        label {
            margin-top: 1em;
            font-size: 1.25em;
            color: #7f4828;
        }

        input:not([type="file"]) {
            width: 80%;
            height: 2em;
            margin-top: 0.5em;
            padding: 0.5em;
            border: 1px solid #7f4828;
            border-radius: 5px;
        }
    }
}
</style>
