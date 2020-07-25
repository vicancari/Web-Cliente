<template>
    <div>
        <Navbar></Navbar>
        <div class="header">
            <router-link to="/home" class="btn backbutton">
                <img class="img-fluid" :src="back" alt="">
            </router-link>
            <div class="boxSearch3">
                <input id="searchRestaurante3" type="text" class="boxSearch3__input" :value="this.searching" placeholder="Buscar" v-on:keyup="search3" v-on:focus="openSearching3" @keypress.enter="search()" autocomplete="off">
                <button type="button" class="boxSearch3__btn" @click="search()"><img :src="searchImg" :alt="'buscar_'+this.searching"></button>
                <div @click="selectRestaurante3" class="boxSearch3__result">
                    <p v-for="res in this.refSearch2" :key="'result_'+res.id" :id="'result_'+res.id" :data-name="res.name" :data-categoria="res.categoria" :data-subcategoria="res.subcategoria" class="result">{{ res.name }}</p>
                </div>
            </div>
        </div>
        <div class="bodySection">
            <div class="box">
                <div class="row alignHorizontal" style="margin-top: 2rem;">
                    <div style="width: 100%; margin: 0;" class="row">
                        <div v-for="rest in this.listRest" :key="rest.id" :id="rest.id" :aria-sort="rest.km" :data-category="rest.categorias[0] ? rest.categorias[0].name : ''" class="col-md-6 col-12 mb-4">
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
    /* import carousel from 'vue-owl-carousel' */
    import Navbar from '../components/navbar';
    /* Modals */
    import search from '../modals/search';
    /* Images */
    import back from '../assets/img/icons/flechavolver.svg';
    import searchImg from '../assets/img/search.png';
    import shared from '../assets/img/icons/share.png';
    import arrowPrev from '../assets/img/icons/arrow-prev.png';
    import arrowNext from '../assets/img/icons/arrow-next.png';
    import imgPin from '../assets/img/icons/pin.png';
    import star from '../assets/img/icons/star.png';
    import chevRight from '../assets/img/icons/chev-right.png';
    import imgDefault from '../assets/img/noimage.jpeg';

    // API + Firebase + funciones
    import funciones from "../funciones.js";

    // var Jquery = require("jquery");

    export default {
        name: 'home',
        components: {
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
                back: back,
                myLng: "",
                googleMapApi: "",
                searching: this.$router.currentRoute.params.search.split("-").join(" "),
                listRest: {},
                refSearch2: [],
            }
        },
        async created() {
            this.myUbicaion = await this.geo();
            this.ubiLat = this.myUbicaion.lat;
            this.ubiLng = this.myUbicaion.lon;

            if (this.$store.getters.isLoggedIn === true) {
                this.getRestaurantes(this.ubiLat, this.ubiLng);
            }
        },
        methods: {
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
            restaurante(id) {
                this.$router.push(`/restaurante/${id}`);
            },
            search() {
                this.listRest = [];
                var _input = document.querySelector("#searchRestaurante3").value;
                window.location = window.location.hash.replace(this.searching.split(" ").join("-"), _input.split(" ").join("-"));
                this.searching = _input;
                var _conv = _input.split(" ").join("-");
                this.$router.currentRoute.params.search = _conv;
                this.getRestaurantes(this.ubiLat, this.ubiLng);
            },
            async getRestaurantes(myLat, myLng) {
                var _values = this.$store.getters.listRestaurantes.all;
                var _list = [];
                var _listSearch = [];

                for (var i = 0; i < _values.length; i++) {
                    for (var y = 0; y < _values[i].length; y++) {
                        _listSearch.push({
                            id: _values[i][y].key,
                            categorias: Object.values(_values[i][y].data.categories),
                            direccion: _values[i][y].data.direction,
                            name: _values[i][y].data.name,
                            phone: _values[i][y].data.phone,
                            photo: _values[i][y].data.photo
                                        ? _values[i][y].data.photo.substr(_values[i][y].data.photo.length - "generic_business-71.png".length, _values[i][y].data.photo.length) === "generic_business-71.png"
                                            ? imgDefault
                                            : _values[i][y].data.photo
                                        : imgDefault,
                            rating: _values[i][y].data.rating,
                            lat: _values[i][y].data.lat,
                            lng: _values[i][y].data.lng,
                            km: funciones.getKilometros(myLat, myLng, _values[i][y].data.lat, _values[i][y].data.lng)
                        });

                        if (this.searching.toLowerCase() === _values[i][y].data.business_name.toLowerCase().substr(0, this.searching.length) || this.searching.toLowerCase() === _values[i][y].data.business_name.toLowerCase().substr(_values[i][y].data.business_name.toLowerCase().indexOf(" ") + 1, this.searching.length)) {
                            _list.push({
                                id: _values[i][y].key,
                                categorias: Object.values(_values[i][y].data.categories),
                                direccion: _values[i][y].data.direction,
                                name: _values[i][y].data.name,
                                phone: _values[i][y].data.phone,
                                photo: _values[i][y].data.photo
                                            ? _values[i][y].data.photo.substr(_values[i][y].data.photo.length - "generic_business-71.png".length, _values[i][y].data.photo.length) === "generic_business-71.png"
                                                ? imgDefault
                                                : _values[i][y].data.photo
                                            : imgDefault,
                                rating: _values[i][y].data.rating,
                                lat: _values[i][y].data.lat,
                                lng: _values[i][y].data.lng,
                                km: funciones.getKilometros(myLat, myLng, _values[i][y].data.lat, _values[i][y].data.lng)
                            });
                        }
                    }
                }

                _listSearch.sort(function(a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                });

                _list.sort(function(a, b){ 
                    if (a.km < b.km) {
                        return -1;
                    }
                });

                this.refSearch2 = _listSearch;
                this.listRest = _list;
                console.log("Searching... -> ", this.listRest);

                this.stopLoader();
                setTimeout(() => {
                    var img = document.querySelectorAll(".card-img-top");
                    img.forEach(el => {
                        el.onerror = imgDefault;
                    });
                }, 950);
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
            stopLoader() { this.$store.commit("notLoading"); },
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    //search nav
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        @media (max-width: 767px){
            margin-top: 15px;
        }
        .backbutton{
            position: absolute;
            left: 0;
            padding: 8px 0;
            z-index: 100;
            img{
                width: 50px;
            }
        }
        h5{
            margin: 0;
            margin-top: 3px;
            color: var(--text-color);
            width: 100%;
            max-width: 80%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
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

    .boxSearch3 {
        --width: 250px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: max-content;
        margin: 0;
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

    #app {
        min-height: 100vh;
    }
</style>
