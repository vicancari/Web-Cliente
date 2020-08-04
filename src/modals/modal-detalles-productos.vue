<template>
    <div>
        <b-modal v-bind="GetProd" :modal-class="'ModalDetallesProductos'" :id="prod.title + prod.id" :ref="prod.title + prod.id" centered hide-footer hide-header class="ModalInfoProd">  
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
                                    <input type="radio" :name="'radiosSelect_' + prod.data._id" :id="'delivery_' + prod.data._id">
                                    <label :for="'delivery_' + prod.data._id">
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
                                    <input type="radio" :name="'radiosSelect_' + prod.data._id" :id="'llevar_' + prod.data._id">
                                    <label :for="'llevar_' + prod.data._id">
                                        <div class="a">
                                            <img src="../assets/take.png" alt="">
                                            <span>Para llevar</span>
                                        </div>
                                        <div class="box">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </label>
                                </div>
                                <div v-if="prod.data.eat_in_restaurant === true" disabled class="form-grou">
                                    <input type="radio" :name="'radiosSelect_' + prod.data._id" :id="'comer_' + prod.data._id">
                                    <label :for="'comer_' + prod.data._id">
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
                                Comprar
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <button type="button" id="alertdr" v-b-modal="'modal-alertdr_' + prod.data._id" style="display: none;"></button>
        <b-modal modal-class="modal-alertdr" centered :id="'modal-alertdr_' + prod.data._id" :ref="'modal-alertdr_' + prod.data._id"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img style="width: 150px; margin-bottom: 1rem;" :src="checkimg" alt="">
                <h3>¡Éxito!</h3>
                <p>El producto fue agregado al carrito.</p>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueCarousel from 'vue-carousel';
    import { Carousel, Slide } from 'vue-carousel';
    Vue.use(VueCarousel);

    // -> IMAGE STATIC
    import checkimg from "../assets/img/icons/check.svg";

    // -> API + Firebase + funciones
    import axios from "axios";
    import { EventBus } from "../main.js";
    import moment from "moment";

    export default {
        name: 'detalles-productos',
        props: {
            GetProd: {type: Object},
        },
        components: {
            Carousel,
            Slide,
        },
        created() {
            this.prod = this.GetProd;
        },
        data: function () {
            return {
                myclass: ['detalles-productos'],
                dataImg: [],
                cantProd: 1,
                checkimg: checkimg,
                prod: {},
                pedido: {
                    status: 0,
                    id_comercio: "",
                    lat: "",
                    lng: "",
                    id_cliente: "",
                    shippingForms: "",
                    created_at: "",
                    total: "",
                    costos_extras: {},
                    products: []
                },
            }
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
                var _shippingFormsDelivery = document.querySelector(`#delivery_${obj._id}`);
                var _shippingFormsLlevar = document.querySelector(`#llevar_${obj._id}`);
                var _shippingFormsComer = document.querySelector(`#comer_${obj._id}`);

                if (_shippingFormsDelivery.checked != false || _shippingFormsLlevar.checked != false || _shippingFormsComer.checked != false) {
                    if (_shippingFormsDelivery.checked === true || _shippingFormsLlevar.checked === true) {
                        if (_shippingFormsDelivery.checked === true) {
                            this.pedido.shippingForms = "delivery";
                        }
            
                        if (_shippingFormsLlevar.checked === true) {
                            this.pedido.shippingForms = "wear";
                        }

                        this.pedido.id_comercio = obj.id_restaurant;
                        this.pedido.lat = obj.lat;
                        this.pedido.lng = obj.lng;
                        this.pedido.id_cliente = this.$store.getters.uid;
                        this.pedido.created_at = moment(new Date()).format("YYYY-MM-DD HH:mm");

                        this.pedido.costos_extras = obj.costos;

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
                                    var _btnAlert = document.querySelector('#modal-alertdr_' + obj._id);
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
                                var _btnAlert = document.querySelector('#modal-alertdr_' + obj._id);
                                _btnAlert.click();
                            }).catch(err => {
                                console.log(err);
                            });
                            this.cantProd = 1;
                        }
            
                        console.log("Pedido -> ", this.$store.getters.trolley);
                    } else {
                        if (_shippingFormsComer.checked === true) {
                            this.pedido.shippingForms = "eat_in_restaurant";
                        }

                        console.log("Comer en restaurante no esta habilitado aun.");
                    }
                    
                } else {
                    console.log("Disculpe debes seleccionar un {{ shippingForms }}");
                }
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
                        margin: auto;
                        display: block;
                        margin-top: 50px;
                        border-radius: 0;
                        padding: 4px 22px;
                        font-size: 16px;
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