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
                <carousel class="carouselEdit"
                    :autoplay="false" 
                    :nav="false"
                    :dots="false"
                >
                    <b-card
                        v-for="promo in this.listPromocion"
                        :key="promo.id"
                        :id="promo.id"
                        :img-src="promo.img"
                        :img-alt="promo.title"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                    <template slot="prev">
                       <span class="prev carouselPrev">
                           <img class="img-fluid" :src="arrowPrev" alt="">
                       </span>
                    </template>
                    <template slot="next">
                        <span class="next carouselNext">
                            <img class="img-fluid" :src="arrowNext" alt="">
                        </span>
                    </template>
                </carousel>
                <div class="row navSection">
                    <div class="col-4">
                        <button class="btn btnProductos" @click="showSectionHome(1)" v-bind:class="{ 'active': activeSection == 1, '': activeSection == 2 }">
                            <span></span>
                            <span></span>
                            Productos
                        </button>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid" :src="imgPin" alt="">
                        <p id="myUbicacion"></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btnRestaurantes" @click="showSectionHome(2)" v-bind:class="{ 'active': activeSection == 2, '': activeSection == 1 }">
                            <span></span>
                            Restaurantes
                        </button>   
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 2">
                    <div style="width: 100%; margin: 0;" class="row">
                        <div v-for="rest in this.listRestaurantes" :key="rest.uid" :id="rest.uid" :aria-sort="rest.km" class="col-md-6 col-12 mb-4">
                            <b-card
                                :img-src="rest.photo"
                                :img-alt="rest.name"
                                img-top
                                tag="article"
                                class="card-horizontal"
                                >
                                <div class="body">
                                    <div class="text">
                                        <h5 class="title">{{ rest.name }}</h5>
                                        <p class="distancia">Distancia: {{ rest.km }} km.</p>
                                        <button class="btn">Ir <img :src="chevRight" alt=""></button>
                                        <div class="star-content">
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
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 1">
                    <div style="width: 100%; margin: 0;" class="row">
                        <div
                            v-for="prod in this.listProductos"
                            :key="prod.id"
                            :id="prod.id"
                            class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4"
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
    import GoogleMapsApiLoader from "google-maps-api-loader";
    import carousel from 'vue-owl-carousel'
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

    // API + Firebase + funciones
    import api from '../api.js';
    import * as firebase from "firebase";

    // var Jquery = require("jquery");

    export default {
        name: 'home',
        components: {
            carousel,
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
                listRestaurantes: {},
                listRestauranteslength: 0,
                myUbicaion: "",
                listPromocion: {},
                listProductos: {},
                google: "",
                myLat: "",
                myLng: ""
            }
        },
        async created() {
            var ubicacion = await this.geo();
            this.ubiLat = ubicacion.lat;
            this.ubiLng = ubicacion.lon;

            if (this.$store.getters.isLoggedIn === true) {
                this.getUser();
                this.getStreetAddressFrom(ubicacion.lat, ubicacion.lon);
                this.getRestaurantes(ubicacion.lat, ubicacion.lon);
                this.getProductos();
                this.getProductosPromocionados();

                this.$store.commit("done");
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true;
            },
            onSlideEnd() {
                this.sliding = false;
            },
            showSectionHome(id){
                if (id == 1){
                    this.activeSection= 1
                } else if ( id == 2) {
                    this.activeSection= 2
                }
            },
            getKilometros(_latOrigin, _lngOrigin, _latDestination, _lngDestination){
                var rad = function(x) {
                    return x * Math.PI / 180;
                }

                // -> Radio de la tierra en km.
                var R = 6378.137;

                // -> Restamos la latitud del sitio con el origen.
                var dLat = rad(_latDestination - _latOrigin);
                // -> Restamos las longitud del sitio con el origen.
                var dLong = rad(_lngDestination - _lngOrigin);

                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(_latOrigin)) * Math.cos(rad(_latDestination)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;

                // -> Retornamo la cantidad en Km con tres decimales.
                return d.toFixed(3);
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
                var _MB = Object.values(this.$store.getters.user.accounts);
                var total = 0;
                
                for (var i = 0; i < _MB.length; i++) {
                    total = total + _MB[i].value;
                }

                this.$store.state.myBalance = total;
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
            async getStreetAddressFrom(lat, long) {
                const googleMapApi = await GoogleMapsApiLoader({
                    apiKey: this.apiKey,
                    libraries: ['places']
                });
                var geocoder = new googleMapApi.maps.Geocoder();

                geocoder.geocode({"latLng": new googleMapApi.maps.LatLng(lat, long)}, function(results, status) {
                    if (status === "OK") {
                        if (document.querySelector("#myUbicacion")) {
                            document.querySelector("#myUbicacion").innerText = results[0].formatted_address;
                        }
                    }
                });
            },
            async getRestaurantes(myLat, myLng) {
                await api.get(`restaurantes/list/`).then(res => {
                    // -> restaurantes cerca de mi.
                    // var geocoder = new this.google.maps.Geocoder();
                    // var directionsServiceTmp = new this.google.maps.DirectionsService;

                    var _list = [];
                    res.forEach(el => {
                        if (this.getKilometros(myLat, myLng, el.lat, el.lng) <= 20.000) {
                            _list.push({
                                uid: el.place_id,
                                name: el.name,
                                photo: el.photo,
                                lat: el.lat,
                                lng: el.lng,
                                km: this.getKilometros(myLat, myLng, el.lat, el.lng)
                            });
                        }
                    });

                    _list.sort(function(a, b){ 
                        if (a.km < b.km) {
                            return -1;
                        }
                    });

                    this.listRestaurantes = _list;
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductosPromocionados() {
                await api.get("products/promotions/").then(res => {
                    var _list = [];
                    res.product.forEach(el => {
                        _list.push({
                            id: el._id,
                            title: el.name,
                            desc: el.description,
                            price: el.price_with_iva,
                            img: el.images[0].img
                        });
                    });

                    this.listPromocion = _list;
                }).catch(err => {
                    console.log(err);
                });
            },
            async getProductos() {
                await api.get(`products/`).then(res => {
                    var _list = [];
                    res.forEach(el => {
                        _list.push({
                            id: el._id,
                            title: el.name,
                            desc: el.description,
                            price: el.price_with_iva,
                            img: el.images[0].img,
                            category: el.listProductos
                        });
                    });

                    this.listProductos = _list;
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        async beforeMount() {
            if (this.$store.getters.isLoggedIn === false) {
                window.localStorage.clear();
                this.$store.state.token = "";
                this.$store.state.uid = "";
                this.$store.state.user = {};
                this.$store.state.myBalance = 0;
                this.$store.commit("notLoading");
                this.$router.push("/");
            }
        },
        async mounted() {
            this.$store.commit("loading");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

    @media only screen and (max-width: 992px) {
        .bodySection .alignHorizontal .card-horizontal {
            height: 190px !important;
            max-height: 190px !important;
        }

        .bodySection .alignHorizontal .card-horizontal .card-img-top {
            width: 42% !important;
            height: 100% !important;
        }
    }
</style>
