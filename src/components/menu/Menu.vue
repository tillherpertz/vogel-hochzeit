<template>
    <div class="menu-icon">
        <i v-if="!showMenu" class="bi-list" @click="toggleMenu()"></i>
        <i v-else class="bi-x-lg" @click="toggleMenu()"></i>
    </div>
    <div v-if="showMenu" class="menu">
        <div class="menu-item" v-for="route in cleansedRoutes" :key="route.path">
            <router-link v-if="dontShowIfStart(route)" :to="route.path"
                :class="{ 'is-active': currentRoute === route.name }">{{ route.name }}</router-link>
        </div>
    </div>
</template>
<script lang="ts">
import router from '@/router';

export default {
    name: "Menu",
    data() {
        return {
            showMenu: false,
            cleansedRoutes: this.cleanseRoutes(),
            allRoutes: router.getRoutes(),
            currentRoute: router.currentRoute.value.name,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        dontShowIfStart(route: any) {
            return route.name !== "start";
        },
        cleanseRoutes() {
            const routes = router.getRoutes()
            const cleansedRoutes = routes.filter((route: any) => {
                return route.meta.showInMenu;
            });
            return cleansedRoutes;
        },
    },
};
</script>
<style lang="scss" scoped>
.menu-icon {
    position: fixed;
    top: 2em;
    right: 2em;
    z-index: 1000;

    i {
        color: #ED7B97;
        font-size: 2em;
    }
}

.menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #F8D0B6;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .menu-item {
        margin: 1em;
        font-size: 2em;
        color: #804828;

        a {
            text-decoration: none;
            color: #804828;
        }

        a.is-active {
            font-weight: bold;
            text-decoration: underline;
        }
    }
}
</style>