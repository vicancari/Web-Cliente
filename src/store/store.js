import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default function(/* { ssrContext } */) {
    const Store = new Vuex.Store({
        state: {
            isLoggedIn: false,
            status: "",
            token: "",
            tutorial: true,
            coords: {},
            user: {}
        },
        getters: {
            isLoggedIn: state => state.isLoggedIn,
            token: state => state.token,
            authStatus: state => state.status,
            status: state => state.status,
            tutorial: state => state.tutorial,
            coords: state => state.coords,
            user: state => state.user
        },
        plugins: [createPersistedState()]
    });

    return Store;
}