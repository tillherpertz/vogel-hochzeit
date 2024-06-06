<template>
    <div class="picture-upload-form">
        <div class="form-wrapper">
            <div @click="$emit('close')" class="form-close-button">
                <i class="bi-x-lg"></i>
            </div>
            <div v-if="uploading">
                <h1>Wird hochgeladen...</h1>
            </div>
            <form v-else-if="notUploaded" id="pictureCollectionForm" @submit.prevent="submitData">
                <h1>Fotos hochladen</h1>
                <label for="title">Name des Albums</label>
                <input type="text" name="title" id="title" />
                <label for="file">Dateien auswählen</label>
                <input type="file" name="file" id="file" multiple />
                <button class="picture-upload-button" type="submit">Hochladen</button>
            </form>
            <div v-else>
                <div v-if="success" class="alert">
                    <h1>Erfolgreich hochgeladen</h1>
                    <button class="picture-upload-button" @click="reloadPage">Zurück zur Übersicht</button>
                </div>
                <div v-if="error">
                    <h1>Fehler beim Hochladen</h1>
                    <RouterLink to="/fotos/">
                        <button class="picture-upload-button" @click="reloadPage">Zurück zur Übersicht</button>
                    </RouterLink>
                </div>
            </div>
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
        onClose: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            success: false,
            error: false,
            notUploaded: true,
            uploading: false,
        };
    },
    methods: {
        async submitData() {
            const formData = new FormData();
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

            // Validate form data
            const title = formData.get('name');
            const pictures = formData.getAll('pictures');

            if (!title || pictures.length === 0) {
                alert('Bitte füll alle Felder aus');
                return;
            }

            try {
                this.uploading = true;
                await api.uploadPictureCollection(formData);
                this.notUploaded = false;
                this.success = true;
                this.uploading = false;
            } catch (error) {
                console.error(error);
                this.error = true;
            }
        },
        reloadPage() {
            location.reload();
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

.alert {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
    }
}
</style>
