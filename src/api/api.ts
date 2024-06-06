import PocketBase from 'pocketbase';

const apiUrl = import.meta.env.VITE_POCKETBASE_API_URL;
const apiUser = import.meta.env.VITE_POCKETBASE_API_USER;
const apiPass = import.meta.env.VITE_POCKETBASE_API_PASS;

const pb = new PocketBase(apiUrl);

// @ts-ignore
const authData = await pb.admins.authWithPassword(apiUser, apiPass);

export default {
    async getHome() {
        try {
            const result = await pb.collection('home').getFullList({
                sort: '-created',
            });
            return result;
        } catch (e) {
            throw e;
        }
    },
    async getPictureCollections() {
        try {
            const result = await pb.collection('pictureCollections').getFullList({
                sort: '+created',
            });
            return result;
        } catch (e) {
            throw e;
        }
    },
    async uploadPictureCollection(data: any) {
        try {
            const result = await pb.collection('pictureCollections').create(data);
            console.log(result);
            return result;
        } catch (e) {
            throw e;
        }
    }
}