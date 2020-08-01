<template>
    <div>
        <navbar></navbar>
        <div v-if="dataRest != ''" class="boxRestaurantes">
            <div class="header">
                <router-link to="/home" class="btn backbutton">
                    <img class="img-fluid" :src="back" alt="">
                </router-link>
                <h5>{{ dataRest.business_name }}</h5>
            </div>
            <div class="header2">
                <div class="row">
                    <div class="col-md-3 col-2 px-0 px-sm-3">
                        <b-dropdown id="dropdown-1" text="" class="dropdownEdit" toggle-class="text-decoration-none" no-caret variant="link">
                            <template v-slot:button-content>
                                <img src="../assets/bars.png" alt="">
                            </template>
                            <div class="d-flex">
                                <div class="category">
                                    <b-dropdown-item v-for="(cate, i) in this.misProd.all" :key="i" :data-idcategory="cate.data.category">{{ cate.data.category_text }}</b-dropdown-item>
                                </div>
                                <div class="subcategory">
                                    <b-dropdown-item v-for="(subcate, i) in this.misProd.all" :key="i" :data-idsubcategory="subcate.data.sub_category">{{ subcate.data.sub_category_text }}</b-dropdown-item>
                                </div>
                            </div>
                        </b-dropdown>
                        <!-- <button class="btn">
                            <img src="assets/img/icons/bars.png" alt="">
                        </button> -->
                    </div>
                    <div class="col-md-6 col-6 px-0 px-sm-3">
                        <h5>{{ dataRest.direction.street }}</h5>
                    </div>
                    <div class="col-md-3 col-4 px-0 px-sm-3">
                        <div class="groupbutton">
                            <button @click="toggleCorazon()" type="button" class="btn">
                                <img :src="this.is_myFavory === false ? corazonBlue : corazonRed">
                            </button>
                            <button type="button" @click="toggleHorario()" class="btn">
                                <img src="../assets/iconRestaurant/reloj.svg">
                            </button>
                            <a class="btn" :href="'tel:' + dataRest.phone">
                                <img src="../assets/iconRestaurant/llamar.svg">
                            </a>
                            <a target="_blank" :href="`https://www.google.com/maps/dir/${dataRest.lat},${dataRest.lng}/${this.myUbicacion}/`" class="btn">
                                <img src="../assets/iconRestaurant/ir.svg">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider">
                <div class="box">
                    <img :src="dataRest.photo" :alt="dataRest.business_name">
                </div>
                <div class="box2">
                    <carousel
                        :paginationEnabled="false"
                        :navigationEnabled="false"
                        :perPageCustom="[[0, 3], [768, 5], [1024, 7], [1250, 8]]"
                    >
                        <slide v-for="(slideRest, i) in dataRest.slider" :key="i">
                            <img @click="fprevImage(slideRest.photo)" :src="slideRest.photo" :alt="slideRest.id + '_' + dataRest.business_name">
                        </slide>
                    </carousel>
                </div>
            </div>
            <div v-if="this.showHorario === true" class="boxHorario">
                <div class="boxHorario__item" v-for="(h, i) in this.horarios" :key="i">
                    <p class="dia">{{ h.dia }}</p>
                    <p class="hora">{{ h.desde }}am a {{ h.hasta }}pm</p>
                    <p v-if="h.abierto === true" class="activo">Abierto</p>
                    <p v-else class="no-activo">Cerrado</p>
                </div>
            </div>

            <div class="search">
                <h5>Destacados</h5>
                <div class="form-group">
                    <img src="../assets/iconRestaurant/search2.png" alt="">
                    <input type="search" class="form-control" placeholder="Buscar">
                </div>
            </div>
            <!-- destacados -->
            <carousel class="carouselEdit"
                :paginationEnabled="false"
                :navigationEnabled="true"
                :perPageCustom="[[0, 1], [768, 2], [1024, 3], [1250, 4]]"
                navigationNextLabel=""
                navigationPrevLabel=""
            >
                <slide v-for="desc in misProd.destacado" :key="desc.id">
                    <b-card
                        :img-src="desc.img"
                        :img-alt="desc.title"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal="desc.title + desc.id"
                    >
                        <div class="body">
                            <div class="text">
                                <h5>{{ desc.title }}</h5>
                                <p>{{ desc.desc }}</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>{{ desc.price }}€</p>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
            </carousel>
            <div class="row alignHorizontal" >
                <div v-for="prod in misProd.all" :key="prod.id" class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        :img-src="prod.img"
                        :img-alt="prod.title"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal="prod.title + prod.id"
                    >
                        <div class="body">
                            <div class="text">
                                <h5>{{ prod.title }}</h5>
                                <p>{{ prod.desc }}</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>{{ prod.price }}€</p>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                    <b-modal :modal-class="'ModalDetallesProductos'" :id="prod.title + prod.id" :ref="prod.title + prod.id" centered hide-footer hide-header class="ModalInfoProd">  
                        <div class="contentCaracteristics">
                            <div class="boxImage">
                                <carousel class="carouselEdit"
                                    :paginationEnabled="true"
                                    :navigationEnabled="false"
                                    :perPage="1"
                                    navigationNextLabel=""
                                    navigationPrevLabel=""
                                >
                                    <slide v-for="imgProd in prod.data.images" :key="imgProd.id">
                                        <img class="img-fluid imgEdit" :src="imgProd.img" :alt="prod.data.name">
                                    </slide>
                                </carousel>
                            </div>
                            <div class="boxInfo">
                                <div class="title">
                                    <h4>{{ prod.data.name }}</h4>
                                    <div class="price text-truncate">
                                        {{ prod.data.price_with_iva }}€
                                    </div>
                                    <p class="text">{{ prod.data.description }}</p>
                                </div>
                                <div class="carac">
                                    <div class="info">
                                        <div v-if="prod.data.ingredients" class="box">
                                            <p class="title">Ingredientes:</p>
                                            <b-list-group>
                                                <b-list-group-item v-for="(ingreProd, i) in prod.data.ingredients" :key="i">{{ ingreProd.name }}</b-list-group-item>
                                            </b-list-group>
                                        </div>
                                        <div v-if="prod.data.no_ingredients" class="box">
                                            <p class="title">Alergenos:</p>
                                            <b-list-group>
                                                <b-list-group-item v-for="(noingreProd, i) in prod.data.no_ingredients" :key="i" class="d-flex justify-content-between align-items-center">{{ noingreProd.name }}</b-list-group-item>
                                            </b-list-group>
                                        </div>
                                        <div class="box" v-if="prod.data.nutritional_values === true">
                                            <p class="title">Valores nutricionales:</p>
                                            <b-list-group>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">Grasas: <span>{{ prod.data.fat }}</span></b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">Proteínas: <span>{{ prod.data.protein }}</span></b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">Carbohidratos: <span>{{ prod.data.carbohydrates }}</span></b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">Total calorias: <span>{{ prod.data.total_calories }}</span></b-list-group-item>
                                            </b-list-group>
                                        </div>
                                    </div>
                                    <div class="groupSelect">
                                        <div class="quality">
                                            <h5>Cantidad</h5>
                                            <b-button v-on:click="prodMenos()">-</b-button>
                                            <input type="text" class="form-control" v-model="cantProd">
                                            <b-button v-on:click="prodMas()">+</b-button>
                                        </div>
                                        <div class="groupRadio">
                                            <div v-if="prod.data.delivery === true" class="form-grou">
                                                <input type="radio" name="radiosSelect" id="delivery">
                                                <label for="delivery">
                                                    <div class="a">
                                                        <img src="../assets/moto.png" alt="">
                                                        <span>Delivery</span>
                                                    </div>
                                                    <div class="box">
                                                        <i class="fas fa-check"></i>
                                                    </div>
                                                </label>
                                            </div>
                                            <div v-if="prod.data.wear === true" class="form-grou">
                                                <input type="radio" name="radiosSelect" id="llevar">
                                                <label for="llevar">
                                                    <div class="a">
                                                        <img src="../assets/take.png" alt="">
                                                        <span>Para llevar</span>
                                                    </div>
                                                    <div class="box">
                                                        <i class="fas fa-check"></i>
                                                    </div>
                                                </label>
                                            </div>
                                            <div v-if="prod.data.eat_in_restaurant === true" class="form-grou">
                                                <input type="radio" name="radiosSelect" id="comer">
                                                <label for="comer">
                                                    <div class="a">
                                                        <img src="../assets/dinner.png" alt="">
                                                        <span>Comer acá</span>
                                                    </div>
                                                    <div class="box">
                                                        <i class="fas fa-check"></i>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <b-button type="button" @click="addCarrito(prod.data), $bvModal.hide(prod.title + prod.id)" class="btnComprar">
                                            <i class="fas fa-cart-plus"></i>
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                </div>
            </div>
        </div>
        <button type="button" id="alertdr" v-b-modal.modal-alertdr style="display: none;"></button>
        <b-modal modal-class="modal-alertdr" centered id="modal-alertdr" ref="modal-alertdr"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img style="width: 150px; margin-bottom: 1rem;" :src="checkimg" alt="">
                <h3>¡Éxito!</h3>
                <p>El producto fue agregado al carrito.</p>
            </div>
        </b-modal>

        <div id="prevImageID" class="boxPreviewImage">
            <img @click="closePrevImage" class="boxPreviewImage__close" :src="close">
            <img :src="prevImage" class="boxPreviewImage__img">
        </div>
    </div>
</template>

<script>


/* Images */
import Navbar from '../components/navbar';
import back from '../assets/img/icons/flechavolver.svg';
import shared from '../assets/img/icons/share.png';
import checkimg from "../assets/img/icons/check.svg";
import imgDefault from '../assets/img/noimage.jpeg';
import close from '../assets/img/icons/add2.png';
import corazonBlue from '../assets/iconRestaurant/corazon-blue.svg';
import corazonRed from '../assets/iconRestaurant/corazon-red.svg';

/* Components */
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';

// API + Firebase + funciones
import api from '../api.js';
import axios from "axios";
import moment from "moment";
import { EventBus } from "../main.js";

export default {
    name: 'restaurante',
    components: {
        Navbar,
        Carousel,
        Slide
    },
    data: function () {
        return {
            error: "",
            id_restaurante: this.$router.currentRoute.params.id,
            dataRest: "",
            checkimg: checkimg,
            misProd: {
                destacado: [],
                all: []
            },
            cantProd: 1,
            back: back,
            shared: shared,
            corazonBlue: corazonBlue,
            corazonRed: corazonRed,
            prevImage: imgDefault,
            close: close,
            showHorario: false,
            horarios: [],
            myUbicacion: "",
            is_myFavory: false,
            id_favory: '',
            pedido: {
                status: 0,
                id_comercio: "",
                id_cliente: "",
                shippingForms: "",
                created_at: "",
                total: "",
                products: []
            },
        }
    },
    async created() {
        var _ubi = await this.geo();
        this.myUbicacion = `${_ubi.lat},${_ubi.lon}`;

        await api.get("restaurante/" + this.id_restaurante).then(res => {
            this.dataRest = res;
            console.log("rest -> ", this.dataRest);
        }).catch(err => {
            this.error = err;
        });

        this.isFavory();

        api.get(`products/`).then(res => {
            var _list = [];
            var _listD = [];
            res.forEach(el => {
                if (el.id_restaurant === this.id_restaurante) {
                    _list.push({
                        id: el._id,
                        title: el.name,
                        desc: el.description,
                        price: el.price_with_iva,
                        img: el.images[0] ? el.images[0].img : imgDefault,
                        data: el,
                    });
                }

                if (el.id_restaurant === this.id_restaurante && el.destacado === 1) {
                    _listD.push({
                        id: el._id,
                        title: el.name,
                        desc: el.description,
                        price: el.price_with_iva,
                        img: el.images[0] ? el.images[0].img : imgDefault,
                    });
                }
            });

            this.misProd.all = _list;
            this.misProd.destacado = _listD;
            console.log(this.misProd.all);
        }).catch(err => {
            console.log(err);
        });

        axios.post(`https://myraus.com:8282/api/scheduless/get`, {id_restaurant: this.id_restaurante}).then(res => {
            var _res = res.data.schedules.schedules;

            _res.forEach(h => {
                this.horarios.push({
                    dia: h.name,
                    abierto: h.status,
                    desde: h.schedules[0].start.split("T")[1].split(":")[0],
                    hasta: h.schedules[0].end.split("T")[1].split(":")[0],
                });
            });
        });

        EventBus.$on('removeFavory', obj => {
            if (obj.id_comercio === this.id_restaurante) {
                this.is_myFavory = false;
                this.id_favory = '';
            }
        });
    },
    methods: {
        prodMenos() {
            if (this.cantProd === 1) {
                this.cantProd = 1;
            } else {
                this.cantProd--;
            }
        },
        prodMas() {
            this.cantProd++;
        },
        addCarrito(obj) {
            var _shippingFormsDelivery = document.querySelector("#delivery");
            var _shippingFormsLlevar = document.querySelector("#llevar");
            var _shippingFormsComer = document.querySelector("#comer");

            if (_shippingFormsDelivery.checked != false || _shippingFormsLlevar.checked != false || _shippingFormsComer.checked != false) {
                if (_shippingFormsDelivery.checked === true) {
                    this.pedido.shippingForms = "delivery";
                }
    
                if (_shippingFormsLlevar.checked === true) {
                    this.pedido.shippingForms = "wear";
                }
    
                if (_shippingFormsComer.checked === true) {
                    this.pedido.shippingForms = "eat_in_restaurant";
                }

                this.pedido.id_comercio = obj.id_restaurant;
                this.pedido.id_cliente = this.$store.getters.uid;
                this.pedido.created_at = moment(new Date()).format("YYYY-MM-DD HH:mm");

                var _prod = {
                    id_producto: obj._id,
                    name: obj.name,
                    description: obj.description,
                    category: obj.category_text,
                    sub_category: obj.sub_category_text,
                    quantity: this.cantProd,
                    images: obj.images,
                    detalles: obj.detalles,
                    iva: obj.iva,
                    price_with_iva: obj.price_with_iva
                }
                
                var _trolley = this.$store.getters.trolley;
                var _set = true;

                for (var i = 0; i < _trolley.length; i++) {
                    if (_trolley[i].id_comercio === obj.id_restaurant) {
                        _set = false;
                        var _idDifrente = true;
                        var _quantityIgual = 0;

                        for (var z = 0; z < _trolley[i].products.length; z++) {
                            if (_trolley[i].products[z].id_producto === _prod.id_producto) {
                                _quantityIgual = _trolley[i].products[z].quantity + this.cantProd;
                                _prod.quantity = _quantityIgual;

                                this.$store.state.trolley[i].products[z] = _prod;
                                _idDifrente = false;
                            }
                        }

                        if (_idDifrente === true) {
                            this.$store.state.trolley[i].products.push(_prod);
                        }

                        var _trolley2 = this.$store.getters.trolley;
                        var _total = 0;

                        for (var y = 0; y < _trolley2[i].products.length; y++) {
                            _total = _total = (parseFloat((_trolley2[i].products[y].price_with_iva).toFixed(2)) * parseInt((_trolley2[i].products[y].quantity))) + _total;
                        }

                        this.$store.state.trolley[i].total = parseFloat(_total.toFixed(2));

                        console.log("ANTES DE ACTUALIZAR -> ", this.$store.state.trolley[i]);
                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.state.trolley[i]).then(res => {
                            console.log(res);
                            EventBus.$emit("NewPushOfTrolley", {ok: "OK"});
                            var _btnAlert = document.querySelector("#alertdr");
                            _btnAlert.click();
                        }).catch(err => {
                            console.log(err);
                        });
                        this.cantProd = 1;
                    }
                }

                if (_set === true) {
                    this.pedido.total = parseFloat((obj.price_with_iva * this.cantProd).toFixed(2));
                    this.pedido.products.push(_prod);

                    console.log("POST DEL PRIMER CARRITO -> ", this.pedido);
                    axios.post("https://myraus.com:8282/api/cart/add", this.pedido).then(res => {
                        this.pedido._id = res.data.cart._id;
                        this.$store.state.trolley.push(this.pedido);
                        EventBus.$emit("NewPushOfTrolley", {ok: "OK"});
                        var _btnAlert = document.querySelector("#alertdr");
                        _btnAlert.click();
                    }).catch(err => {
                        console.log(err);
                    });
                    this.cantProd = 1;
                }
    
                console.log("Pedido -> ", this.$store.getters.trolley);
            } else {
                console.log("Disculpe debes seleccionar un {{ shippingForms }}");
            }
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
        toggleCorazon() {
            if (this.is_myFavory === false) {
                this.is_myFavory = true;
                this.addMyFavory();
            } else {
                this.is_myFavory = false;
                console.log(this.id_favory);
                if (this.id_favory != null) {
                    this.removeMyFavory(this.id_favory);
                }
            }
        },
        toggleHorario() {
            if (this.showHorario === false) {
                this.showHorario = true;
            } else {
                this.showHorario = false;
            }

            console.log("horario_show: ", this.showHorario);
        },
        isFavory() {
            api.get("favory/list/" + this.$store.getters.uid).then(res => {
                res.forEach(item => {
                    if (item.id_comercio === this.id_restaurante) {
                        console.log("is favory");
                        this.id_favory = item._id;
                        this.is_myFavory = true;
                    }
                });
            }).catch(err => {
                console.log("Error al buscar favoritos ", err);
            });
        },
        hoverF(id) {
            console.log(id);
        },
        fprevImage(img) {
            var __img = img;
            var _box = document.querySelector("#prevImageID");

            if (_box) {
                if (!_box.classList.contains("__show")) {
                    _box.classList.add("__show");
                    this.prevImage = __img;
                }
            }
        },
        closePrevImage() {
            var _box = document.querySelector("#prevImageID");

            if (_box) {
                if (_box.classList.contains("__show")) {
                    _box.classList.remove("__show");
                    this.prevImage = imgDefault;
                }
            }
        },
        addMyFavory() {
            api.post("favory/", {id_user: this.$store.getters.uid, id_comercio: this.id_restaurante}).then(res => {
                console.log("Is favory ", res);
                EventBus.$emit("addFavory", {ok: 'OK'});
                this.id_favory = res.data._id;
            }).catch(err => {
                console.log("Not Favory ", err);
            });
        },
        removeMyFavory(id) {
            api.post('favory/delete/', {id: id, id_user: this.$store.getters.uid}).then(res => {
                console.log(res);
                EventBus.$emit("removeFavoryDR", {ok: 'OK'});
            }).catch(err => {
                console.log("Error al eliminar -> ", err);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .boxRestaurantes{
        position: relative;
        max-width: 90%;
        margin: auto;
        .header{
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
        .header2{
                margin-top: 20px;
                margin: 20px auto 0;
            .row{
                align-items: center;
                @media (max-width: 767px){
                    .dropdownEdit{
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                    h5{
                        font-size: 14px !important;
                        text-align: left;
                    }
                    .groupbutton{
                        .btn{
                            padding: 0;
                            margin-left: 0px;
                            img{
                                width: 25px;
                                height: 25px;   
                            }
                        }
                    }
                }
                .dropdownEdit{
                    padding: 0;
                    width: 40px;
                    display: flex;
                    ::v-deep .dropdown-toggle{
                        padding: 0;
                    }
                    ::v-deep .dropdown-menu{
                        padding: 0;
                        border: none;
                        border-radius: 0px;
                        @media (max-width: 767px){
                            zoom: .9;
                        }
                        .dropdown-item{
                            &:hover{
                                background-color: transparent;
                            }
                        }
                    }
                    img{
                        height: 40px;
                        width: 40px;
                        object-fit: contain;
                    }
                    .category{
                        background: #f9f9f9;
                        padding: 8px 0;
                        li{
                            display: flex;
                            align-items: center;
                             ::v-deep .dropdown-item{
                                color: var(--text-color);
                                &:hover, &:focus{
                                    color: var(--text-color);
                                }
                                i{
                                    color: var(--bluePrimary);
                                    margin-left: 5px;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .subcategory{
                        background-color: var(--bluePrimary);
                        padding: 8px 0;
                        li{
                            color: #fff;
                            ::v-deep .dropdown-item{
                                color: #fff;
                                &:hover, &:focus{
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
                h5{
                    color: var(--text-color);
                    font-size: 16px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin: 0;
                }
                .groupbutton{
                    display: flex;
                    justify-content: flex-end;
                    .btn {
                        padding: 4px;
                        margin-left: 5px;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
        }
        .slider{
            display: flex;
            margin-top: 10px;
            .box{
                width: 80px;
                min-width: 80px;
                height: 80px;
                margin-right: 5px;
                @media (max-width: 767px){
                    width: 60px;
                    min-width: 60px;
                    height: 60px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                }
            }
            .box2{
                width: 100%;

                ::v-deep .VueCarousel-slide{
                    max-width: max-content;
                    margin-right: .5rem;
                }
            }
            img{
                max-width: 100%;
                height: 80px;
                @media (max-width: 767px){
                    height: 60px;
                    padding-right: 5px !important;
                }
            }
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
            margin-bottom: 5px;
            @media (max-width: 767px){
                margin-top: 20px;
                margin-bottom: 20px;
            }
            h5{
                margin: 0;
                color: var(--text-color);
                font-size: 18px;
            }
            .form-group{
                position: relative;
                @media (max-width: 767px){
                    zoom: .7;
                    max-width: 210px;
                    margin: 0;
                }
                img{
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    width: 30px;
                }
                input{
                    padding-right: 40px;
                    color: var(--text-color);
                    font-size: 18px;
                    box-shadow: none;
                    border-radius: 0;
                    border-color: #d1d1d1;
                    &:active, &:focus, &hover{
                        box-shadow: none;
                        border-color: #d1d1d1;
                    }
                }
            }
        }
        .alignHorizontal{
            margin-top: 30px;
        }
        .carouselEdit {
            ::v-deep .VueCarousel-slide{
                max-width: 250px;
            }
        }

        @media (min-width: 1024px){
            .carouselEdit{
                .VueCarousel-slide{
                    transform: scaleX(.97);
                }
            }
            .carouselEdit .cardStyle{
                width: 100%!important;
                max-width: 100%;
                margin: 0;
            }
        }
        @media (max-width: 767px){
            .cardStyle .card-img-top{
                zoom: .8;
                height: 160px;
            }
             .card-body{
                padding: 10px;
                zoom: .8;
                .price .number{
                    p{
                        font-size: 24px;
                    }
                    span{
                        font-size: 13px;
                    }
                }
            }
        }
    }

    .contentCaracteristics{
        display: flex;
        align-items: flex-start;
        @media(max-width: 767px){
            flex-direction: column;
        }
        
        .boxImage{
            padding: 0;
            @media(min-width: 767px) and (max-width: 992px){
                width: 40%;
            }
            .imgEdit{
                margin: auto;
                display: block;
                object-fit: contain;
                max-height: 470px;
                @media (max-width: 767px){
                    max-height: initial;
                }
                 @media(min-width: 767px) and (max-width: 992px){
                    height: 100%;
                }
               
            }
        }
        .boxImage, .boxInfo{
            width: 470px; 
            height: 470px;
            @media(max-width: 767px){
                width: 100%;
                height: auto;
            }
            
        }

        /* Caracteristicas */
        .boxInfo{
            padding: 15px;
            max-height: 500px;
            overflow-y: auto;
            width: calc(100% - 470px);
            @media(max-width: 767px){
                width: 100%;
                max-height: max-content;
                overflow-y: initial;
            }
            @media(min-width: 767px) and (max-width: 992px){
                width: 60% !important;
            }
            .title{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                h4{
                    margin-top: 17.5px;    
                    color: var(--bluePrimary);
                    width: 65%; 
                    overflow: hidden;
                    font-size: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical; 

                }
                .price{
                    width: 35%;
                    text-align: right;
                    font-size: 36px;
                    color: var(--text-color);
                }
            }
            ::v-deep{
                .list-group-item{
                    border: none;
                    padding: 0px 12px 0 0;
                    font-size: 14px;
                    color:var(--text-color);
                }
            }

            .carac{
                display: flex;
                .info{width: 50%;
                    .box{
                        padding: 7.5px 0;
                        width: 100%;
                        .title{
                            padding-right: 12px;
                            color: var(--bluePrimary);
                            margin-bottom: 0;
                        }
                        .text{
                            width: 100%;
                            color: var(--text-color);
                            margin-bottom: 0;
                            font-size: 14px;
                            line-height: 1.4;
                        }
                    }
                }
                .groupSelect{
                    width: 50%;
                    .quality{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        h5{
                            flex-grow: 1;
                            margin:0;
                            font-size: 16px;
                            color: var(--bluePrimary);
                        }
                        button{
                            border:none;
                            box-shadow: none;
                            background-color: transparent;
                            color: var(--bluePrimary);
                        }
                        input{
                            outline: none;
                            box-shadow: none;
                            border-radius: 0;
                            border: 1px solid #d1d1d1;
                            margin: auto 5px;
                            padding: 0;
                            text-align: center;
                            width: 32px;
                            height: 32px;
                            font-size: 14px;
                            &:focus{
                                box-shadow:none;
                                border-color: va(--bluePrimary);
                            }
                        }
                    }
                    .groupRadio{
                        margin: 20px auto;
                        /* COMMON RADIO AND CHECKBOX STYLES  */
                        input[type=radio]{
                            display: none;
                        }
                       label{
                           display: flex;
                            align-items: center;
                            justify-content: space-between;
                            cursor: pointer;
                            zoom: .8;
                            .a{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                img{
                                    width: 50px;
                                    height: 50px;
                                    object-fit: contain;
                                }
                                span{
                                    margin-left: 10px;
                                    color: var(--text-color);
                                }
                            }
                            .box{
                                width: 30px;
                                min-width: 30px;
                                height: 30px;
                                border: 1px solid #d1d1d1;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                i{
                                    color: var(--bluePrimary);
                                    font-size: 20px;
                                    display: none;
                                    opacity: 0;
                                    transition: .3s ease all;
                                }
                            }
                        }
                        input[type=radio]:checked + label{
                            .box{
                                i{
                                    display: block;
                                    opacity: 1;
                                }
                            }
                        }
                    }
                    .btnComprar{
                        background-color: var(--bluePrimary);
                        margin: 50px 0 auto auto;
                        display: block;
                        border-radius: 5px;
                        padding: .25rem .75rem;
                        font-size: 22px;
                        border: none;
                    }
                }
            }
        }
    }
    .VueCarousel-slide {
        visibility: visible;
        flex-basis: 100%;
        width: 100%;
        display: flex;
    }
    
    body.modal-open{
        overflow: none;
    }

    .boxPreviewImage {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.75);
        margin: 0;
        padding: 2rem;

        z-index: 2500;

        &__close {
            position: absolute;
            top: 1rem;
            left: 1rem;
            display: block;
            margin: 0;
            padding: 0.25rem;
            width: 50px;
            height: 50px;
            border-radius: 3px;
            transform: rotate(45deg);
            cursor: pointer;
        }

        &__img {
            display: block;
            margin: 0;
            padding: 0;
            width: 85%;
            height: 80%;
            object-fit: contain;
            object-position: center center;
        }

        &.__show {
            display: flex;
        }
    }

    .boxHorario {
        position: relative;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-between;
        background: #fbfbe6;
        padding: .5rem;

        &__item {
            p {
                margin: 0;
                padding: .25rem 0;
                font-size: 1rem;
                color: #607381;
                text-align: center;

                &:nth-child(2) {
                    padding: 0;
                }
            }
        }
    }
</style>

<style lang="css">
    .ModalDetallesProductos .modal-dialog {
        width: 100% !important;
        max-width: 85% !important;
        max-height: max-content !important;
        margin: 1rem auto !important;
    }

    @media only screen and (min-width: 640px) {
        .ModalDetallesProductos .modal-dialog {
            max-width: 95% !important;
        }
    }

    @media only screen and (min-width: 992px) {
        .ModalDetallesProductos .modal-dialog {
            width: 70% !important;
            max-width: 850px !important;
        }
    }
</style>