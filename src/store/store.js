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
            listCategorias: [],
            filterCategory: {},
            coords: {
                lat: "",
                lng: "",
            },
            listRestaurantes: {
                all: [],
                filter: []
            },
            listRestauranteSearchs: [],
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
            listRestaurantes: state => state.listRestaurantes,
            listRestauranteSearchs: state => state.listRestauranteSearchs,
            listCategorias: state => state.listCategorias,
            filterCategory: state => state.filterCategory,
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
                window.localStorage.clear();
                state.isLoggedIn = false;
                state.token = "";
                state.uid = "";
                state.isFirstTime = true;
                state.phoneNumber = "";
                state.status = "";
                state.myBalance = 0;
                state.balanceBeneficio = 0;
                state.listBeneficio = [];
                state.balanceIncentivos = 0;
                state.listIncentivo = [];
                state.balancePropio = 0;
                state.listPropio = [];
                state.listCategorias = [];
                state.coords = {lat: "", lng: ""};
                state.listRestaurantes = {
                    all: [],
                    filter: []
                };
                state.listRestauranteSearchs = [];
                state.newRegister = {};
                state.filterCategory = {};
                state.user = {};
            }
        },
        plugins: [createPersistedState()]
    });

    return Store;
}