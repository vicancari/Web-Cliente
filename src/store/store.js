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
            phoneNumber: "",
            status: "",
            myBalance: 0,
            balanceBeneficio: 0,
            listBeneficio: [],
            balanceIncentivos: 0,
            listIncentivo: [],
            balancePropio: 0,
            listPropio: [],
            coords: {
                lat: "",
                lng: "",
            },
            newRegister: {},
            user: {}
        },
        getters: {
            isLoggedIn: state => state.isLoggedIn,
            token: state => state.token,
            uid: state => state.uid,
            isFirstTime: state => state.isFirstTime,
            phoneNumber: state => state.phoneNumber,
            status: state => state.status,
            newRegister: state => state.newRegister,
            balanceBeneficio: state => state.balanceBeneficio,
            listBeneficio: state => state.listBeneficio,
            balanceIncentivos: state => state.balanceIncentivos,
            listIncentivo: state => state.listIncentivo,
            balancePropio: state => state.balancePropio,
            listPropio: state => state.listPropio,
            coords: state => state.coords,
            myBalance: state => state.myBalance,
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