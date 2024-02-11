import PocketBase from 'pocketbase';
import { defineStore } from 'pinia'

const pb = new PocketBase('http://127.0.0.1:8090');

export const useStore = defineStore('api', {
    state: () => ({
        home: [],
    }),
    persist: {
    },
    actions: {
        async getHome() {
            try {
                this.home = await pb.collection('home').getFullList({
                    sort: '-created',
                });
            } catch (e) {
                throw e;
            }
        },
        setSessionState() {
            if (sessionStorage.getItem('dataFetched') != 'true') {
                if (this.home.length > 0) {
                    sessionStorage.setItem('dataFetched', 'true');
                }
            }
        }
    },
})