import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default function(/* { ssrContext } */) {
    const Store = new Vuex.Store({
        state: {
            isLoggedIn: false,
            token: "",
            uid: "",
            isFirstTime: true,
            status: "",
            user: {}
        },
        getters: {
            isLoggedIn: state => state.isLoggedIn,
            token: state => state.token,
            uid: state => state.uid,
            isFirstTime: state => state.isFirstTime,
            status: state => state.status,
            user: state => state.user
        },
        mutations: {
            notLoading(state) {
                state.status = "";
            },
            loading(state) {
                state.status = "loading";
            },
            error(state) {
                state.status = "error";
            },
            done(state) {
                state.status = "done";
            },
            logout(state) {
                state.isLoogedIn = false;
                state.token = "";
                state.isFirstTime === false ? false : true;
                state["user"] = {};
            },
            logout_in_isFirstTime(state) {
                state.isLoogedIn = false;
                state.token = "";
                state.isFirstTime = true;
                state["user"] = {};
            }
        },
        plugins: [createPersistedState()]
    });

    return Store;
}