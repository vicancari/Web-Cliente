<template>
    <div>
        <Navbar></Navbar>
        <div class="boxSearch3">
            <input id="searchRestaurante3" type="text" class="boxSearch3__input" :value="this.searching" placeholder="Buscar" v-on:keyup="search3" v-on:focus="openSearching3" @keypress.enter="search()" autocomplete="off">
            <button type="button" class="boxSearch3__btn" @click="search()"><img :src="searchImg" :alt="'buscar_'+this.searching"></button>
            <div @click="selectRestaurante3" class="boxSearch3__result">
                <p v-for="res in this.refSearch2" :key="'result_'+res.id" :id="'result_'+res.id" :data-name="res.name" :data-categoria="res.categoria" :data-subcategoria="res.subcategoria" class="result">{{ res.name }}</p>
            </div>
        </div>
        <div class="bodySection">
            <div class="box">
                <div v-if="this.listProducto.promo.length != 0">
                    <h5 class="titlePromotions">Promociones</h5>
                    <carousel
                        class="carrousel--promo"
                        v-if="this.listProducto.promo.length != 0"
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
                                class="mb-2 cardStyle CursorPointer"
                                :data-category="promo.categoria.name"
                                v-b-modal="promo.title + promo.id"
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
                </div>
                <div v-else class="sms">
                    <p class="text">No hay promociones</p>
                </div>
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
                                class="card-horizontal CursorPointer"
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
                        <p class="boxPaginator__page">{{ this.rts.page + 1 }} / {{ this.$store.getters.listRestaurantes.all.length }}</p>
                        <span v-if="this.$store.getters.listRestaurantes.all.length != this.rts.page + 1" @click="nextComercios" class="boxPaginator__btn right">
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
                            :data-category="prod.categoria.name"
                            v-b-modal="prod.title + prod.id"
                        >
                            <b-card
                                :img-src="prod.img"
                                :img-alt="prod.title"
                                img-top
                                :tag="prod.categoria.name"
                                class="mb-2 cardStyle CursorPointer"
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
        <modal-detalles-productos
            v-for="(prod, i) in this.listProducto.all"
            :key="i"
            :GetProd="prod"
        ></modal-detalles-productos>
        <Send :GetRest="{searching: true, data: false}"></Send>
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
    import Send from '../modals/send';
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
    import socket from "../socket.js";
    import { EventBus } from "../main.js";

    import ModalDetallesProductos from "../modals/modal-detalles-productos.vue";

    export default {
        name: 'home',
        components: {
            Carousel,
            Slide,
            Navbar,
            ModalDetallesProductos,
            Send,
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
                distancia: "20000.000",
                rts: {
                    page: 0
                },
                searching: "",
                listRest: {},
                refSearch2: [],
            }
        },
        async created() {
            var ubicacion = await this.geo();
            this.ubiLat = ubicacion.lat;
            this.ubiLng = ubicacion.lon;

            // -> Santa marta COLOMBIA.
            this.ubiLat = 11.24722;
            this.ubiLng = -74.20167;

            // -> Madrid ESPAÑA.
            // this.ubiLat = 40.4893538;
            // this.ubiLng = -3.6827461;
            // this.distancia = false;

            this.$store.state.coords.lat = this.ubiLat;
            this.$store.state.coords.lng = this.ubiLng;

            if (this.$store.getters.isLoggedIn === true) {
                await this.getUser();
                await socket.Iniciar();
                await this.getStreetAddressFrom();
                await this.getRestaurantes(this.ubiLat, this.ubiLng, this.distancia, this.rts.page);
            }
        },
        methods: {
            search() {
                var _input = document.querySelector("#searchRestaurante3").value;
                this.searching = _input;
                var _conv = _input.split(" ").join("-");
                this.$router.push(`/home/searching=${_conv}`);
            },
            selectRestaurante3(e) {
                var _el = e.target;
                document.querySelector("#searchRestaurante3").value = _el.getAttribute("data-name");
                this.search();
                
                if (document.querySelector("#searchRestaurante3").parentNode.classList.contains("boxSearch3")) {
                    document.querySelector("#searchRestaurante3").parentNode.classList.remove("searching3");
                }
            },
            openSearching3() {
                if (document.querySelector("#searchRestaurante3")) {
                    if (document.querySelector("#searchRestaurante3").parentNode.classList.contains("boxSearch3")) {
                        document.querySelector("#searchRestaurante3").parentNode.classList.add("searching3");
                    }
                }
            },
            search3(e) {
                var _parent = e.target.parentNode;
                var _input = e.target;
                var _boxResult = _parent.children[2];
                var _datas = _boxResult.children;

                if (_parent.classList.contains("boxSearch3")) {
                    if (_input.value != "") {
                        _parent.classList.add("searching3");
                    }
                }

                for (var el = 0; el < _datas.length; el++) {
                    var dataLower = _datas[el].innerText.toLowerCase();
                    var obj = {data: dataLower};

                    _datas[el].classList.add("d-none");

                    if (_input.value.toLowerCase() === obj.data) {
                        _datas[el].classList.remove('d-none');
                    }

                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.indexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.lastIndexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
            
                    if (_input.value.toLowerCase() === obj.data.substr(0, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === '') {
                        _datas[el].classList.remove('d-none');
                    }
                }
            },
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
                EventBus.$emit("user", this.$store.getters.user);
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
            async getRestaurantes(myLat, myLng, distancia, page) {
                const limit = 20;
                this.$store.state.listRestaurantes.all = [];
                this.$store.state.listRestaurantes.filter = [];
                api.get(`restaurantes/list/${myLat}/${myLng}/${distancia}`).then(res => {
                    var array = [];
                    var _pArray = [];

                    var _values = res;
                    _values.forEach(item => {
                        array.push(item);
                    });

                    for (let val = 0; val < array.length; val += limit) {
                        let pedazo = array.slice(val, val + limit);
                        _pArray.push(pedazo);
                    }

                    _values = _pArray[page];
                    var _list = [];
                    
                    for (var i = 0; i < _values.length; i++) {
                        _list.push({
                            id: _values[i].key,
                            categorias: Object.values(_values[i].data.categories),
                            direccion: _values[i].data.direction,
                            name: _values[i].data.name,
                            phone: _values[i].data.phone,
                            photo: _values[i].data.photo
                                        ? _values[i].data.photo.substr(_values[i].data.photo.length - "generic_business-71.png".length, _values[i].data.photo.length) === "generic_business-71.png"
                                            ? imgDefault
                                            : _values[i].data.photo
                                        : imgDefault,
                            rating: _values[i].data.rating,
                            lat: _values[i].data.lat,
                            lng: _values[i].data.lng,
                            km: funciones.getKilometros(myLat, myLng, _values[i].data.lat, _values[i].data.lng)
                        });
                    }

                    _list.sort(function(a, b){ 
                        if (a.km < b.km) {
                            return -1;
                        }
                    });

                    this.$store.state.listRestaurantes.all = _pArray;
                    this.$store.state.listRestaurantes.filter = _list;

                    var _lRSearchVAL = res;
                    var _lRN = [];

                    for (var k = 0; k < _lRSearchVAL.length; k++) {
                        _lRN.push({
                            id: _lRSearchVAL[k].key,
                            categorias: Object.values(_lRSearchVAL[k].data.categories),
                            direccion: _lRSearchVAL[k].data.direction,
                            name: _lRSearchVAL[k].data.name,
                            phone: _lRSearchVAL[k].data.phone,
                            photo: _lRSearchVAL[k].data.photo
                                        ? _lRSearchVAL[k].data.photo.substr(_lRSearchVAL[k].data.photo.length - "generic_business-71.png".length, _lRSearchVAL[k].data.photo.length) === "generic_business-71.png"
                                            ? imgDefault
                                            : _lRSearchVAL[k].data.photo
                                        : imgDefault,
                            rating: _lRSearchVAL[k].data.rating,
                            lat: _lRSearchVAL[k].data.lat,
                            lng: _lRSearchVAL[k].data.lng,
                            km: funciones.getKilometros(myLat, myLng, _lRSearchVAL[k].data.lat, _lRSearchVAL[k].data.lng)
                        });
                    }

                    _lRN.sort(function(a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                    });
                    
                    this.refSearch2 = _lRN;
                    EventBus.$emit("listRestauranteSearch", _lRN);
                    EventBus.$emit("coordenadas", {lat: this.ubiLat, lng: this.ubiLng});

                    this.getCategorias();
                    this.getProductos(res);
                    this.getProductosPromocionados(res);

                    this.stopLoader();
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductosPromocionados(comercios) {
                await api.get("products/promotions/").then(res => {
                    var _list = [];
                    res.product.forEach(el => {
                        for (var i = 0; i < comercios.length; i++) {
                            if (el.id_restaurant === comercios[i].key) {
                                _list.push({
                                    id: el._id,
                                    title: el.name,
                                    desc: el.description,
                                    price: el.price_with_iva,
                                    img: el.images.length ? el.images[0].img : imgDefault,
                                    categoria: Object.values(comercios[i].data.categories),
                                    data: el,
                                });
                            }
                        }
                    });

                    this.listProducto.promo = _list;
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductos(comercios) {
                await axios.post(`https://myraus.com:8282/api/products/list/`).then(res => {
                    var _list = [];
                    res.data.products.forEach(el => {
                        for (var i = 0; i < comercios.length; i++) {
                            if (el.id_restaurant === comercios[i].key) {
                                _list.push({
                                    id: el._id,
                                    title: el.name,
                                    desc: el.description,
                                    price: el.price_with_iva,
                                    img: el.images.length ? el.images[0].img : imgDefault,
                                    categoria: Object.values(comercios[i].data.categories),
                                    data: el,
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
                    // console.log(this.$store.getters.filterCategory);
                }).catch(err => {
                    console.log(err);
                });
            },
            nextComercios() {
                var res = this.$store.getters.listRestaurantes;
                this.$store.commit("loading");
                this.rts.page++;
                var _values = res.all[this.rts.page];
                var _list = [];
                for (var i = 0; i < _values.length; i++) {
                    _list.push({
                        id: _values[i].key,
                        categorias: Object.values(_values[i].data.categories),
                        direccion: _values[i].data.direction,
                        name: _values[i].data.name,
                        phone: _values[i].data.phone,
                        photo: _values[i].data.photo
                                    ? _values[i].data.photo.substr(_values[i].data.photo.length - "generic_business-71.png".length, _values[i].data.photo.length) === "generic_business-71.png"
                                        ? imgDefault
                                        : _values[i].data.photo
                                    : imgDefault,
                        rating: _values[i].data.rating,
                        lat: _values[i].data.lat,
                        lng: _values[i].data.lng,
                        km: funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].data.lat, _values[i].data.lng)
                    });
                }

                _list.sort(function(a, b){ 
                    if (a.km < b.km) {
                        return -1;
                    }
                });

                this.$store.state.listRestaurantes.filter = _list;
                this.stopLoader();
            },
            prevComercios() {
                var res = this.$store.getters.listRestaurantes;
                this.$store.commit("loading");
                this.rts.page--;
                var _values = res.all[this.rts.page];
                var _list = [];
                for (var i = 0; i < _values.length; i++) {
                    _list.push({
                        id: _values[i].key,
                        categorias: Object.values(_values[i].data.categories),
                        direccion: _values[i].data.direction,
                        name: _values[i].data.name,
                        phone: _values[i].data.phone,
                        photo: _values[i].data.photo
                                    ? _values[i].data.photo.substr(_values[i].data.photo.length - "generic_business-71.png".length, _values[i].data.photo.length) === "generic_business-71.png"
                                        ? imgDefault
                                        : _values[i].data.photo
                                    : imgDefault,
                        rating: _values[i].data.rating,
                        lat: _values[i].data.lat,
                        lng: _values[i].data.lng,
                        km: funciones.getKilometros(this.ubiLat, this.ubiLng, _values[i].data.lat, _values[i].data.lng)
                    });
                }

                _list.sort(function(a, b){ 
                    if (a.km < b.km) {
                        return -1;
                    }
                });

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
            if (this.$store.getters.isLoggedIn === true) {
                this.$store.commit("loading");
                console.log("Store -> ", this.$store.getters);
            }
        }
    }
</script>

<style scope lang="scss">
    .boxSearch3 {
        --width: 250px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: max-content;
        margin: 1rem 0 0;
        padding: 0;

        &__input {
            display: block;
            width: var(--width);
            height: 40px;
            line-height: 40px;
            padding: 0;
            background: #fff;
            border: 0;
            border-bottom: 1px solid #888;
            box-shadow: none;
            outline: none;
            text-transform: uppercase;
            border-radius: 0;
        }

        &__btn {
            width: 40px;
            height: 40px;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            border-radius: 0;
            background: transparent;
            margin: 0 0 0 .5rem;
            cursor: pointer;

            img {
                display: block;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center center;
                outline: none !important;
            }
        }

        &__result {
            display: none;
            position: absolute;
            top: 100%;
            right: 3rem;
            width: var(--width);
            background: #fff;
            z-index: 100;
            height: max-content;
            max-height: 292px;
            padding: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            overflow: hidden;
            overflow-y: auto;
            box-shadow: 1px 1px 10px 0 rgba(0,0,0,.45);
            border-left: 1px solid #666666;
            border-right: 1px solid #666666;
            border-bottom: 1px solid #666666;

            p.result {
                display: block;
                margin: 0;
                width: 100%;
                height: max-content;
                padding: .5rem 1rem;
                border-bottom: 1px solid rgba(0,0,0,.25);
                text-transform: uppercase !important;
                transition: all .15s ease-in-out;
                text-align: left;
                cursor: pointer;

                &:hover {
                    background: rgba(0,0,0,.15);
                }

                &:last-child {
                    border-bottom: none;
                }
            }
        }

        &.searching3 {
            .boxSearch3__result {
                display: block !important;
            }
        }
    }
</style>