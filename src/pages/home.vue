<template>
    <div>
        <Navbar></Navbar>
        <div class="navSearch">
            <h5>Que hay de comer?</h5>
            <div class="">
                <button class="btn btnSearch" type="button" v-b-modal.modal-search>
                    Buscar
                    <img class="img-fluid" :src="searchImg" alt="">
                </button>
            </div>
        </div>
        <div class="bodySection">
            <div class="box">
                <h5 class="titlePromotions">Promociones</h5>
                <carousel
                    :paginationEnabled="false"
                    :navigationEnabled="true"
                    :perPageCustom="[[0, 1], [768, 2], [1024, 3], [1250, 4]]"
                    navigationNextLabel=""
                    navigationPrevLabel=""
                >
                    <slide v-for="promo in this.listProducto.promo" :key="promo.id">
                       <b-card
                            :key="promo.id"
                            :id="promo.id"
                            :img-src="promo.img"
                            :img-alt="promo.title"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
                            :data-category="promo.categoria"
                        >
                        <div class="body">
                            <div class="text">
                                <h5>{{ promo.title }}</h5>
                                <p>{{ promo.desc }}</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover :title="promo.price+',00 €'">
                                    <p>{{ promo.price }}</p>
                                    <span>,00€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                    </slide>
                </carousel>
                <div class="row navSection">
                    <div class="col-4">
                        <button class="btn btnRestaurantes" @click="showSectionHome(2)" v-bind:class="{ 'active': activeSection == 2, '': activeSection == 1 }">
                            <span></span>
                            Comercios
                        </button>   
                    </div>
                    <div class="col-4">
                        <button class="btn btnProductos" @click="showSectionHome(1)" v-bind:class="{ 'active': activeSection == 1, '': activeSection == 2 }">
                            <span></span>
                            <span></span>
                            Productos
                        </button>
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 2">
                    <div style="width: 100%; margin: 0;" class="row">
                        <div v-for="rest in this.$store.getters.listRestaurantes.filter" :key="rest.id" :id="rest.id" :aria-sort="rest.km" :data-category="rest.categorias[0] ? rest.categorias[0].name : ''" class="col-md-6 col-12 mb-4">
                            <b-card
                                :img-src="rest.photo"
                                :img-alt="rest.name"
                                img-top
                                tag="article"
                                class="card-horizontal"
                                @click="restaurante(rest.id)"
                            >
                                <div class="body">
                                    <div class="text">
                                        <div v-if="rest.categorias[0] ? rest.categorias[0].name : '' === '#Comer'" class="star-content">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div class="box">
                                                        <img :src="star" alt="">
                                                        <span>4/5</span>
                                                        <h6>Sabor</h6>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="box">
                                                        <img :src="star" alt="">
                                                        <span>4/5</span>
                                                        <h6>Atención</h6>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="box">
                                                        <img :src="star" alt="">
                                                        <span>4/5</span>
                                                        <h6>Lugar</h6>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="box">
                                                        <img :src="star" alt="">
                                                        <span>5/5</span>
                                                        <h6>Tiempo</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 style="text-transform: uppercase !important;" class="title">{{ rest.name }}</h5>
                                        <p class="distancia">Distancia: {{ rest.km }} km.</p>
               
                                        <button class="btn" @click="restaurante(rest.id)">Ir <img :src="chevRight" alt=""></button>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                    <div class="boxPaginator">
                        <span v-if="this.rts.page != 0" @click="prevComercios" class="boxPaginator__btn left">
                            <img class="img-fluid" :src="arrowPrev">
                        </span>
                        <p class="boxPaginator__page">{{ this.rts.page + 1 }} / {{ this.$store.getters.listRestaurantes.filter.length + 1 }}</p>
                        <span v-if="this.$store.getters.listRestaurantes.filter.length != this.rts.page + 1" @click="nextComercios" class="boxPaginator__btn right">
                            <img class="img-fluid" :src="arrowNext">
                        </span>
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 1">
                    <div style="width: 100%; margin: 0;" class="row">
                        <div
                            v-for="prod in this.listProducto.filter"
                            :key="prod.id"
                            :id="prod.id"
                            class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4"
                            :data-category="prod.category"
                        >
                            <b-card
                                :img-src="prod.img"
                                :img-alt="prod.title"
                                img-top
                                :tag="prod.category"
                                class="mb-2 cardStyle"
                            >
                                <div class="body">
                                    <div class="text">
                                        <h5>{{ prod.title }}</h5>
                                        <p>{{ prod.desc }}</p>
                                    </div>
                                    <div class="price">
                                        <div class="number" v-b-tooltip.hover :title="prod.price+',00 €'">
                                            <p>{{ prod.price }}</p>
                                            <span>,00€</span>
                                        </div>
                                        <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- modals -->
        <search></search>
    </div>
</template>

<script>
    // import config from "../config.js";
    /* Components */
    import Vue from 'vue';
    import VueCarousel from 'vue-carousel';
    Vue.use(VueCarousel);
    import GoogleMapsApiLoader from "google-maps-api-loader";
    /* import carousel from 'vue-owl-carousel' */
    import { Carousel, Slide } from 'vue-carousel';
    import Navbar from '../components/navbar';
    /* Modals */
    import search from '../modals/search';
    /* Images */
    import searchImg from '../assets/img/search.png';
    import shared from '../assets/img/icons/share.png';
    import arrowPrev from '../assets/img/icons/arrow-prev.png';
    import arrowNext from '../assets/img/icons/arrow-next.png';
    import imgPin from '../assets/img/icons/pin.png';
    import star from '../assets/img/icons/star.png';
    import chevRight from '../assets/img/icons/chev-right.png';
    import imgDefault from '../assets/img/noimage.jpeg';

    // API + Firebase + funciones
    import api from '../api.js';
    import axios from "axios";
    import * as firebase from "firebase";
    import funciones from "../funciones.js";

    // var Jquery = require("jquery");

    export default {
        name: 'home',
        components: {
            Carousel,
            Slide,
            Navbar,
            search
        },
        data: function () {
            return {
                apiKey: "AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho",
                searchImg: searchImg,
                shared: shared,
                arrowPrev: arrowPrev,
                arrowNext: arrowNext, 
                imgPin: imgPin,
                star: star,
                chevRight: chevRight,
                slide: 0,
                sliding: null,
                activeSection: 2,
                listRestauranteslength: 0,
                myUbicaion: "",
                google: "",
                myLat: "",
                myLng: "",
                listProducto: {
                    all: [],
                    filter: [],
                    promo: []
                },
                listPropio: [],
                listBeneficio: [],
                listIncentivo: [],
                googleMapApi: "",
                rts: {
                    page: 0
                }
            }
        },
        async created() {
            var ubicacion = await this.geo();
            this.ubiLat = ubicacion.lat;
            this.ubiLng = ubicacion.lon;

            this.$store.state.coords = {
                lat: ubicacion.lat,
                lng: ubicacion.lon
            }

            if (this.$store.getters.isLoggedIn === true) {
                this.getUser();
                this.getStreetAddressFrom();
                this.getRestaurantes(ubicacion.lat, ubicacion.lon, this.rts.page);
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true;
            },
            restaurante(id) {
                this.$router.push(`/restaurante/${id}`);
            },
            onSlideEnd() {
                this.sliding = false;
            },
            showSectionHome(id) {
                this.activeSection = id;
                this.$store.commit("loading");
                
                if (this.$store.getters.filterCategory.filter.active === true) {
                    setTimeout(() => {
                        var _keys = Object.keys(this.$store.getters.filterCategory);
                        var _values = Object.values(this.$store.getters.filterCategory);
    
                        var _selectAll = document.querySelectorAll(`[data-category]`);
                        _selectAll.forEach(item => {
                            item.classList.add("d-none");
                        });
    
                        for (var i = 0; i < _values.length; i++) {
                            if (_values[i].active === true) {
                                if (_keys[i] != "filter") {
                                    this.$store.getters.listCategorias.forEach(el => {
                                        if (_keys[i].toLowerCase() === el.name.toLowerCase()) {
                                            var _selectAllFilter = document.querySelectorAll(`[data-category="#${el.name}"]`);
        
                                            _selectAllFilter.forEach(item => {
                                                item.classList.remove("d-none");
                                            });
                                        }
                                    });
                                }
                            }
                        }

                        this.$store.commit("notLoading");
                    }, 500);
                }

                if (this.$store.getters.filterCategory.filter.active === false) {
                    this.$store.commit("notLoading");
                }
            },
            async getUser() {
                if (this.$store.getters.uid != "" || this.$store.getters.uid != null || this.$store.getters.uid != undefined) {
                    var _list = {};
                    firebase.database().ref("clientes").child(this.$store.getters.uid).on("value", (res) => {
                        _list = res.val();
                        this.$store.state.user = _list;
                        this.getBalance();
                    });
                }
            },
            async getBalance() {
                var _keys = Object.keys(this.$store.getters.user.accounts);
                var _MB = Object.values(this.$store.getters.user.accounts);
                var total = 0;
                this.$store.state.balanceBeneficio = 0;
                this.$store.state.balanceIncentivos = 0;
                this.$store.state.balancePropio = 0;
                this.$store.state.listBeneficio = [];
                this.$store.state.listIncentivo = [];
                this.$store.state.listPropio = [];
                
                for (var i = 0; i < _MB.length; i++) {
                    total = total + parseFloat(_MB[i].value);

                    if (_MB[i].type === 1) {
                        if (parseFloat(_MB[i].value) > 0) {
                            this.$store.state.listBeneficio.push({
                                name: _keys[i],
                                saldo: funciones.numberFormat(parseFloat(_MB[i].value).toFixed(2).replace(".", ","))
                            });
                            
                            this.$store.state.balanceBeneficio = parseFloat(this.$store.getters.balanceBeneficio) + parseFloat(_MB[i].value);
                            this.$store.state.balanceBeneficio = funciones.numberFormat(parseFloat(this.$store.getters.balanceBeneficio).toFixed(2).replace(".", ","));
                        }

                    }

                    if (_MB[i].type === 2) {
                        if (parseFloat(_MB[i].value) > 0) {
                            this.$store.state.listIncentivo.push({
                                name: _keys[i],
                                saldo: funciones.numberFormat(parseFloat(_MB[i].value).toFixed(2).replace(".", ","))
                            });

                            this.$store.state.balanceIncentivos = parseFloat(this.$store.getters.balanceIncentivos) + parseFloat(_MB[i].value);
                            this.$store.state.balanceIncentivos = funciones.numberFormat(parseFloat(this.$store.getters.balanceIncentivos).toFixed(2).replace(".", ","));
                        }
                    }

                    if (_MB[i].type === 3) {
                        if (parseFloat(_MB[i].value) > 0) {
                            this.$store.state.listPropio.push({
                                name: _keys[i],
                                saldo: funciones.numberFormat(parseFloat(_MB[i].value).toFixed(2).replace(".", ","))
                            });

                            this.$store.state.balancePropio = parseFloat(this.$store.getters.balancePropio) + parseFloat(_MB[i].value);
                            this.$store.state.balancePropio = funciones.numberFormat(parseFloat(this.$store.getters.balancePropio).toFixed(2).replace(".", ","));
                        }
                    }
                }

                this.$store.state.myBalance = funciones.numberFormat(parseFloat(total).toFixed(2).replace(".", ","));
                console.log(this.$store.state.myBalance);
            },
            async geo() {
                return new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        async function(pos) {
                            resolve({
                                lat: pos.coords.latitude,
                                lon: pos.coords.longitude
                            });
                        },
                        function(error) {
                            console.log(error);
                            reject();
                        }
                    );
                });
            },
            async getStreetAddressFrom() {
                const googleMapApi = await GoogleMapsApiLoader({
                    apiKey: this.apiKey,
                    libraries: ['places']
                });

                this.googleMapApi = googleMapApi;
            },
            async getRestaurantes(myLat, myLng, page) {
                const limit = 20;
                await api.get(`restaurantes/list/`).then(res => {
                    var array = [];
                    var array2 = [];
                    var _pArray = [];
                    var _pArray2 = [];

                    var _values = Object.values(res);
                    _values.forEach(item => {
                        array.push(item);
                    });

                    for (let val = 0; val < array.length; val += limit) {
                        let pedazo = array.slice(val, val + limit);
                        _pArray.push(pedazo);
                    }

                    var _keys = Object.keys(res);
                    _keys.forEach(item2 => {
                        array2.push(item2);
                    });
                    
                    for (let key = 0; key < array2.length; key += limit) {
                        let pedazo = array2.slice(key, key + limit);
                        _pArray2.push(pedazo);
                    }

                    _keys = _pArray2[page];
                    _values = _pArray[page];
                    var _list = [];

                    for (var i = 0; i < _values.length; i++) {
                        //  <= 20.000
                        if (funciones.getKilometros(myLat, myLng, _values[i].lat, _values[i].lng)) {
                            _list.push({
                                id: _keys[i],
                                categorias: Object.values(_values[i].categories),
                                direccion: _values[i].direction,
                                name: _values[i].name,
                                phone: _values[i].phone,
                                photo: _values[i].photo
                                            ? _values[i].photo.substr(_values[i].photo.length - "generic_business-71.png".length, _values[i].photo.length) === "generic_business-71.png"
                                                ? imgDefault
                                                : _values[i].photo
                                            : imgDefault,
                                rating: _values[i].rating,
                                lat: _values[i].lat,
                                lng: _values[i].lng,
                                km: funciones.getKilometros(myLat, myLng, _values[i].lat, _values[i].lng)
                            });
                        }
                    }

                    _list.sort(function(a, b){ 
                        if (a.km < b.km) {
                            return -1;
                        }
                    });

                    this.$store.state.listRestaurantes.ids = _pArray2;
                    this.$store.state.listRestaurantes.all = _pArray;
                    this.$store.state.listRestaurantes.filter = _list;
                    this.getCategorias();
                    this.getProductos(Object.keys(res));
                    this.getProductosPromocionados(Object.keys(res));

                    this.stopLoader();

                    setTimeout(() => {
                        var img = document.querySelectorAll(".card-img-top");
                        img.forEach(el => {
                            el.onerror = imgDefault;
                        });
                    }, 950);
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductosPromocionados(comercios) {
                await api.get("products/promotions/").then(res => {
                    var _list = [];
                    res.product.forEach(el => {
                        for (var i = 0; i < comercios.length; i++) {
                            if (el.id_restaurant === comercios[i]) {
                                _list.push({
                                    id: el._id,
                                    title: el.name,
                                    desc: el.description,
                                    price: el.price_with_iva,
                                    img: el.images[0] ? el.images[0].img : imgDefault
                                });
                            }
                        }
                    });

                    this.listProducto.promo = _list;
                    this.stopLoader();
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductos(comercios) {
                await api.get(`products/`).then(res => {
                    var _list = [];
                    res.forEach(el => {
                        for (var i = 0; i < comercios.length; i++) {
                            if (el.id_restaurant === comercios[i]) {
                                _list.push({
                                    id: el._id,
                                    title: el.name,
                                    desc: el.description,
                                    price: el.price_with_iva,
                                    img: el.images[0] ? el.images[0].img : imgDefault,
                                    category: el.listProductos
                                });
                            }
                        }
                    });

                    this.listProducto.all = _list;
                    this.listProducto.filter = _list;
                }).catch(err => {
                    console.log(err);
                });
            },
            stopLoader() { this.$store.commit("notLoading"); },
            async getCategorias() {
                await axios.get("https://myraus.com:8282/api/categories-subcategories").then(res => {
                    var _list = [];
                    res.data.categories.forEach(el => {
                        _list.push({
                            name: el.nombre,
                            desp: el.descripcion,
                            establecimiento: el.establecimiento
                        });

                        this.$store.state.filterCategory[`${el.nombre}`] = {
                            active: false
                        }

                        this.$store.state.filterCategory[`filter`] = {
                            active: false
                        }
                    });
                    
                    this.$store.state.listCategorias = _list;
                    console.log(this.$store.getters.filterCategory);
                }).catch(err => {
                    console.log(err);
                });
            },
            nextComercios() {
                var res = this.$store.getters.listRestaurantes;
                this.$store.commit("loading");
                this.rts.page++;
                var _keys = res.ids[this.rts.page];
                var _values = res.all[this.rts.page];

                var _list = [];

                for (var i = 0; i < _values.length; i++) {
                    //  <= 20.000
                    if (funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].lat, _values[i].lng)) {
                        _list.push({
                            id: _keys[i],
                            categorias: Object.values(_values[i].categories),
                            direccion: _values[i].direction,
                            name: _values[i].name,
                            phone: _values[i].phone,
                            photo: _values[i].photo
                                        ? _values[i].photo.substr(_values[i].photo.length - "generic_business-71.png".length, _values[i].photo.length) === "generic_business-71.png"
                                            ? imgDefault
                                            : _values[i].photo
                                        : imgDefault,
                            rating: _values[i].rating,
                            lat: _values[i].lat,
                            lng: _values[i].lng,
                            km: funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].lat, _values[i].lng)
                        });
                    }
                }

                var _listOrderAlfabetico = _list;

                _list.sort(function(a, b){ 
                    if (a.km < b.km) {
                        return -1;
                    }
                });

                _listOrderAlfabetico.sort(function(a, b){ 
                    if (a.name < b.name) {
                        return -1;
                    }
                });

                this.$store.state.listRestauranteSearchs = _listOrderAlfabetico;
                this.$store.state.listRestaurantes.filter = _list;
                this.stopLoader();
            },
            prevComercios() {
                var res = this.$store.getters.listRestaurantes;
                this.$store.commit("loading");
                this.rts.page--;
                var _keys = res.ids[this.rts.page];
                var _values = res.all[this.rts.page];

                var _list = [];

                for (var i = 0; i < _values.length; i++) {
                    //  <= 20.000
                    if (funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].lat, _values[i].lng)) {
                        _list.push({
                            id: _keys[i],
                            categorias: Object.values(_values[i].categories),
                            direccion: _values[i].direction,
                            name: _values[i].name,
                            phone: _values[i].phone,
                            photo: _values[i].photo
                                        ? _values[i].photo.substr(_values[i].photo.length - "generic_business-71.png".length, _values[i].photo.length) === "generic_business-71.png"
                                            ? imgDefault
                                            : _values[i].photo
                                        : imgDefault,
                            rating: _values[i].rating,
                            lat: _values[i].lat,
                            lng: _values[i].lng,
                            km: funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].lat, _values[i].lng)
                        });
                    }
                }

                var _listOrderAlfabetico = _list;

                _list.sort(function(a, b){ 
                    if (a.km < b.km) {
                        return -1;
                    }
                });

                _listOrderAlfabetico.sort(function(a, b){ 
                    if (a.name < b.name) {
                        return -1;
                    }
                });

                this.$store.state.listRestauranteSearchs = _listOrderAlfabetico;
                this.$store.state.listRestaurantes.filter = _list;
                this.stopLoader();
            }
        },
        
        async beforeMount() {
            if (this.$store.getters.isLoggedIn === false) {
                this.$store.commit("logout");
                this.$store.commit("notLoading");
                this.$router.push("/");
            }
        },
        mounted() {
            this.$store.commit("loading");
            console.log("Store -> ", this.$store.getters);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    //search nav
    .navSearch{
        display: flex;
        justify-content: center;
        position:relative;
        margin: auto;
        border-bottom: 1px solid #c1c1c1;
        padding: 5px 50px;
        @media (max-width: 576px){
            padding: 5px 15px;
            justify-content: space-between;
            align-items: center;
        }
        h5{
            margin:5px 0;
            color: var(--bluePrimary);
        }
        .btnSearch{
            border: none;
            position: absolute;
            right: 15px;    
            @media (max-width: 576px){
                position: initial;
            }
            img{
                width: 25px;
            }
        }
    }

    .bodySection{
        margin: auto 30px 30px;
        @media (max-width: 576px){
            margin: auto 15px;
        }
        .titlePromotions{
            text-align: center;
            color: var(--bluePrimary);
            margin: 15px 0 5px;
        }
        .carouselEdit{
            margin: auto;
            position: relative;
        }
        .navSection{
            margin: 30px auto;
            align-items: center;
            .btn{
                color: var(--text-color);
                font-size: 22px;
                @media (max-width: 576px){
                    display: flex;
                    margin: auto;
                    font-size: 13px;
                    padding: 4px 0;
                }
                 @media (max-width: 320px){
                    font-size: 11px;
                }
                span{
                     background-color: #d1d1d1;
                    display: inline-block;
                    vertical-align: middle;
                    margin: -2px 2.5px 0;
                    height: 20px;
                    @media (max-width: 576px){
                        height: 15px;
                    }
                }
            }
            .btn.active{
                color: var(--bluePrimary);
                span{
                    background-color:  var(--bluePrimary); 
                }
            }
            .btnProductos{
                span{
                    width: 20px;
                    @media (max-width: 576px){
                        width: 15px;
                    }
                }
            }
            .btnRestaurantes{
                 span{
                    width: 50px;
                    @media (max-width: 576px){
                        width: 35px;
                    }
                }
            }
            .img-fluid{
                width: 55px;
                text-align: center;
                @media (max-width: 576px){
                    transform: scale(1.5);
                }
            }
        }
        .alignHorizontal{
            margin: auto 0px;
            .card-horizontal{
                display: flex;
                flex-direction: row;
                border-radius: 0;
                .card-img-top{
                    width: 50%;
                    object-fit: cover;
                    border-radius: 0;
                    @media (max-width: 992px){
                        width: 40%
                    }
                }
                .card-body{
                    padding: 15px;
                    .body{
                        .text{
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            height: 160px;
                            align-items: center;
                             @media (max-width: 992px){
                                height: 120px;
                            }
                            @media (max-width: 576px){
                                height: 90px;
                            }
                            .title{
                                width: 70%;
                                font-size: 20px;
                                color: var(--text-color);
                                text-align: left;
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                max-height: 48px;
                                 @media (max-width: 992px){
                                    font-size: 18px;
                                }
                                @media (max-width: 576px){
                                    font-size: 16px;
                                }
                            }
                            .btn{
                                width: 30%;
                                display: flex;
                                align-items: center;
                                 @media (max-width: 992px){
                                    font-size: 18px;
                                }
                                @media (max-width: 576px){
                                    font-size: 16px;
                                }
                                img{
                                    width: 20px;
                                    margin-left: 10px;
                                }
                            }
                            .star-content{
                                width: 100%;
                                margin-top: auto;
                                .box{
                                    text-align: center;
                                    color: var(--text-color);
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    img{
                                        width: 20px;
                                        height: 20px;
                                        object-fit: contain;
                                        margin: auto
                                    }
                                    span, h6{
                                        font-size: 14px;
                                        margin: 0;
                                        @media (max-width: 992px){
                                            font-size: 12px;
                                        }
                                        @media (max-width: 576px){
                                            font-size: 11px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .box-mensaje {
        width: 100%;
    }

    p.distancia {
        font-size: .85rem;
    }

    @media (max-width: 992px) {
        .bodySection .alignHorizontal .card-horizontal .card-body .body .text .title {
            font-size: 15px !important;
        }
    }

    .carouselEdit .cardStyle {
        width: 250px !important;
    }

    .bodySection .alignHorizontal .card-horizontal {
        height: 200px !important;
        max-height: 200px !important;
        overflow: hidden !important;
    }

    .bodySection .alignHorizontal .card-horizontal .card-body .body .text .title {
        overflow: hidden !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
        width: 100% !important;
        display: block !important;
        padding: .25rem 0 !important;
    }

    .bodySection .alignHorizontal .card-horizontal .card-img-top {
        width: 50% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center center !important;
        border-radius: 0 !important;
    }

    .bodySection .alignHorizontal .card-horizontal .card-body {
        width: calc(100% - 50%);
    }

    @media only screen and (max-width: 992px) {
        .bodySection .alignHorizontal .card-horizontal {
            height: 190px !important;
            max-height: 190px !important;
        }

        .bodySection .alignHorizontal .card-horizontal .card-img-top {
            width: 42% !important;
            height: 100% !important;
        }

        .bodySection .alignHorizontal .card-horizontal .card-body {
            width: calc(100% - 42%);
        }
    }

    .owl-carousel.owl-loaded {
        display: flex !important;
    }

    .btn.btnBack.backModal {
        background: transparent !important;
        border: none !important;
        width: max-content !important;
        height: max-content !important;
        padding: 0 !important;
    }

    .btn.btnBack.backModal img {
        width: 70px !important;
    }

    .VueCarousel-navigation-prev{
        background-image: url('../assets/img/icons/arrow-prev.png');
        height: 90px;
        padding: 0 !important;
        width: 30px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        left: 10px !important;
        outline: none;
        @media (max-width: 767px){
            left: 20px !important;
        }
    }
    .VueCarousel-navigation-next{
        background-image: url('../assets/img/icons/arrow-next.png');
        height: 90px;
        padding: 0 !important;
        width: 30px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        right: 10px !important;
        outline: none;
        @media (max-width: 767px){
            right: 20px !important;
        }
    }
    .boxArrows__btn {
        position: fixed;
        top: 50%;
        transform: translate(0, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background: rgba(0,0,0,.15);
        z-index: 100;
        cursor: pointer;
    }

    .boxArrows__btn img {
        display: block;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .boxArrows__btn.left {
        left: 0;
        padding: .5rem 0 .5rem .75rem;
    }

    .boxArrows__btn.right {
        right: 0;
        padding: .5rem .75rem .5rem 0;
    }

    .nodata {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nodata .mensaje {
        font-size: 1.25rem;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        font-weight: bold;
        color: rgba(0,0,0,.45);
    }

    .boxPaginator {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max-content;

        &__btn {
            width: 30px;
            height: 30px;
            background: #fff;
            cursor: pointer;
            
            img {
                display: block;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                object-fit: contain;
                object-position: center center;
            }
        }

        &__page {
            display: block;
            width: max-content;
            height: max-content;
            padding: .5rem 1rem;
            margin: 0 .5rem;
            background: #eee;
            border: 2px solid var(--bluePrimary);
            color: var(--bluePrimary);
            font-weight: bold;
            user-select: none;
        }
    }

    .VueCarousel-navigation-button {
        outline: none !important;
    }
</style>
