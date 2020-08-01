<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-trolley" ref="modal-trolley"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.hide('modal-trolley')">
                <svg version="1.1" class="icono" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.89 595.28" enable-background="new 0 0 841.89 595.28" xml:space="preserve">
                    <g>
                        <defs>
                            <rect id="SVGID_1_" x="115.853" y="84.721" width="573.14" height="448.98"/>
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlink:href="#SVGID_1_"  overflow="visible"/>
                        </clipPath>
                        <path clip-path="url(#SVGID_2_)" fill="none" stroke="#5B7AA2" stroke-width="40" stroke-linecap="round" d="M375.237,506.363 h146.555c0,0,140.229,0,140.229-146.197v-33.74c0,0,0-146.191-140.229-146.191H155.458"/>
                        <polyline clip-path="url(#SVGID_2_)" fill="none" stroke="#5B7AA2" stroke-width="40" stroke-linecap="round" points="235.555,255.733 155.461,180.235 235.555,104.745"/>
                    </g>
                </svg>
            </button>
            <h5 class="titleModal">Tu compra</h5>
            <div v-if="this.$store.getters.trolley.length" class="BoxPage">
                <div v-for="(cart, i) in this.$store.getters.trolley" :key="i" class="comercios">
                    <p class="comercios__title">{{ getComercio(cart.id_comercio) }}</p>
                    <button @click="actualizarTrolley(i, cart._id);" style="display: none;" :id="'GuardarTrolleyCart_' + cart._id" type="button" class="btnSaveEdit">Guardar</button>

                    <div v-for="(prod, y) in cart.products" :key="y" class="comercios__prod">
                        <div class="prod--info">
                            <img class="img-prod" :src="prod.images[0].img" :onerror="'this.src = ' + '\'' + imgDefault + '\''" alt="name producto">
                            <p class="name-prod">{{ prod.name }}<br>{{ cart.shippingForms }}</p>
                        </div>
                        <div class="prod--cant">
                            <span @click="prodMenos(prod.name + '_' + prod.id_producto, prod._id, cart._id, cart, i, y)" class="cant__menus">-</span>
                            <input :data-quantity="prod.name + '_' + prod.id_producto" type="text" :value="prod.quantity" class="cant__input">
                            <span @click="prodMas(prod.name + '_' + prod.id_producto, prod._id, cart._id, cart, i, y)" class="cant__more">+</span>
                        </div>
                        <div class="prod--price">
                            <p class="price">{{ (prod.price_with_iva * prod.quantity).toFixed(2) }}€</p>
                            <span @click="deleteProd(i, y)" class="delete-product"><i class="fas fa-times"></i></span>
                        </div>
                    </div>

                    <div class="comercios__config">
                        <div v-if="cart.shippingForms === 'delivery'" class="config--item">
                            <div class="item-left">
                                <img src="../assets/moto.png" class="imgIconos">
                                <p class="text">Costo delivery</p>
                            </div>
                            <div class="item-right">
                                <p class="price">0,00</p>
                            </div>
                        </div>
                        <div v-if="cart.shippingForms === 'eat_in_restaurant'" class="config--item">
                            <div class="item-left">
                                <img src="../assets/take.png" class="imgIconos">
                                <p class="text">Costo de envase</p>
                            </div>
                            <div class="item-right">
                                <p class="price">0,00</p>
                            </div>
                        </div>
                        <div class="config--item">
                            <div class="item-left">
                                <img src="../assets/moto.png" class="imgIconos">
                                <p class="text">Delivery</p>
                            </div>
                            <div class="item-right">
                                <div class="boxCheckbox">
                                    <input type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'delivery_' + cart.id_comercio" :checked="cart.shippingForms === 'delivery' ? 'on' : 'off'">
                                    <label class="boxCheckbox__checked" :for="'delivery_' + cart.id_comercio">
                                        <i class="fas fa-check"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="config--item">
                            <div class="item-left">
                                <img src="../assets/recogertienda.svg" class="imgIconos __retienda">
                                <p class="text">Recoger en tienda</p>
                            </div>
                            <div class="item-right">
                                <div class="boxCheckbox">
                                    <input type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'eat_in_restaurant_' + cart.id_comercio" :checked="cart.shippingForms === 'eat_in_restaurant' ? 'on' : 'off'">
                                    <label class="boxCheckbox__checked" :for="'eat_in_restaurant_' + cart.id_comercio">
                                        <i class="fas fa-check"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="config--item">
                            <div class="item-left">
                                <img src="../assets/regalo.svg" class="imgIconos">
                                <p class="text">Para Regalo</p>
                            </div>
                            <div class="item-right">
                                <p class="price">2,00 €</p>
                                <div class="boxCheckbox">
                                    <input type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'wear_' + cart.id_comercio" :checked="cart.shippingForms === 'wear' ? 'on' : 'off'">
                                    <label class="boxCheckbox__checked" :for="'wear_'  + cart.id_comercio">
                                        <i class="fas fa-check"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="comercios__total">
                    <div class="total--item">
                        <p class="title">Sub total</p>
                        <span class="mount">{{ this.listPrice.subTotal }}€</span>
                    </div>
                    <div v-for="(iva, i) in this.listPrice.iva" :key="i" class="total--item">
                        <p class="title">IVA {{ iva.porcentaje }}%</p>
                        <span class="mount">{{ iva.monto }}€</span>
                    </div>
                    <div class="total--item">
                        <p class="title">Total</p>
                        <span class="mount">{{ this.listPrice.total }}€</span>
                    </div>
                </div>

                <div class="row border-bottom">
                    <div class="col-12 info">
                        <p>{{ this.$store.getters.user.name }} {{ this.$store.getters.user.lastname }}</p>
                        <div class="d-flex2">
                            <p>{{ this.$store.getters.user.address }}</p>
                            <button type="button">
                                <img src="../assets/lapiz.svg">
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <button type="button" class="btnPago">Enviar pago</button>
                    </div>
                </div>
            </div>
            <div v-if="!this.$store.getters.trolley.length" class="align-center">
                <div class="col-12">
                    <p class="mensaje-info">Su carrito se encuentra vacío en este momento</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    import back from '../assets/img/icons/flechavolver.svg';
    import imgDefault from '../assets/img/noimage.jpeg';

    // -> API + EventBus
    import { EventBus } from '../main.js';
    // import api from '../api.js';
    import axios from "axios";

    export default {
        name: 'historial',
        components: {},
        data: function () {
            return {
                myclass: ['modal-trolley'],
                back: config.rutaWeb(back),
                imgDefault: imgDefault,
                myTrolley: [],
                listPrice: {
                    iva: [],
                    subTotal: 0.00,
                    total: 0.00
                }
            }
        },
        async created() {
            if (this.$store.getters.isLoggedIn === true) {
                if (this.$store.getters.uid != "" || this.$store.getters.uid != null || this.$store.getters.uid != undefined) {
                    await this.getTrolley();

                    EventBus.$on("NewPushOfTrolley", obj => {
                        if (obj.ok === "OK") {
                            this.getTrolley();
                        }
                    });

                    console.log(this.$store.getters.trolley);
                }
            }
        },
        methods: {
            prodMenos(prod, id_producto, id_comercio, arr, index_c, index_p) {
                var _input = document.querySelector(`[data-quantity='${prod}']`);
                var _btn = document.querySelector(`#GuardarTrolleyCart_${id_comercio}`);

                if (_input.value === "1") {
                    _input.value = 1;
                } else {
                    _input.value--;
                }

                arr.products.forEach(item => {
                    if (item._id === id_producto) {
                        if (parseInt(_input.value) < parseInt(item.quantity)) {
                            _btn.removeAttribute("style");
                        }
                    }
                });

                this.$store.state.trolley[index_c].products[index_p].quantity = _input.value;
            },
            prodMas(prod, id_producto, id_comercio, arr, index_c, index_p) {
                var _input = document.querySelector(`[data-quantity='${prod}']`);
                var _btn = document.querySelector(`#GuardarTrolleyCart_${id_comercio}`);
                _input.value++;

                arr.products.forEach(item => {
                    if (item._id === id_producto) {
                        if (parseInt(_input.value) > parseInt(item.quantity)) {
                            _btn.removeAttribute("style");
                        }
                    }
                });

                this.$store.state.trolley[index_c].products[index_p].quantity = _input.value;
            },
            getComercio(id_comercio) {
                let _name = "";
                let _values = this.$store.getters.listRestaurantes.all;

                for (var i = 0; i < _values.length; i++) {
                    for (var y = 0; y < _values[i].length; y++) {
                        if (id_comercio === _values[i][y].key) {
                            _name = _values[i][y].data.business_name;
                        }
                    }
                }

                return _name;
            },
            getTrolley() {
                axios.get("https://myraus.com:8282/api/cart/get/cliente/" + this.$store.getters.uid).then(res => {
                    if (res.data.data.length) {
                        this.$store.state.trolley = [];
                        this.$store.state.trolley = res.data.data;
                    } else {
                        this.$store.state.trolley = [];
                    }

                    this.price(this.$store.getters.trolley);
                    console.log("Response of Trolley -> ", this.$store.getters.trolley);
                }).catch(err => {
                    console.log(err);
                });
            },
            price(arr) {
                this.listPrice.iva = [];
                var _agruparIVA = [];
                var _subTotal = 0;
                var _total = 0;

                var arrayTemporal = [];
                arr.forEach(item => {
                    for (var i = 0; i < item.products.length; i++) {
                        arrayTemporal = _agruparIVA.filter(resp => resp["iva"] == item.products[i]["iva"])
                        if (arrayTemporal.length > 0) {
                            _agruparIVA[_agruparIVA.indexOf(arrayTemporal[0])];
                        } else {
                            _agruparIVA.push({"iva" : item.products[i]["iva"]});
                        }
                    }

                    _subTotal = parseFloat((item.total + _subTotal).toFixed(2));
                });

                this.listPrice.subTotal = _subTotal;
                _agruparIVA.forEach(item => {
                    this.listPrice.iva.push({
                        porcentaje: item.iva,
                        monto: parseFloat((_subTotal * parseFloat(`0.${item.iva}`)).toFixed(2))
                    });
                });

                this.listPrice.iva.forEach(item => {
                    _total = parseFloat((_subTotal + item.monto).toFixed(2));
                });

                this.listPrice.iva.sort(function(a, b) {
                    if (a.porcentaje < b.porcentaje) {
                        return -1;
                    }
                });

                this.listPrice.total = _total;
            },
            deleteProd(index_c, index_p) {
                delete this.$store.getters.trolley[index_c].products[index_p];
                this.$store.getters.trolley[index_c].products.splice(index_p, 1);

                if (this.$store.getters.trolley[index_c].products.length <= 0) {
                    var id_comercio = this.$store.getters.trolley[index_c]._id;
                    delete this.$store.getters.trolley[index_c];
                    this.$store.getters.trolley.splice(index_c, 1);

                    axios.post("https://myraus.com:8282/api/cart/delete", {_id: id_comercio}).then(res => {
                        console.log(res);
                        this.price(this.$store.getters.trolley);
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    var _trolley = this.$store.getters.trolley[index_c];
                    var _total = 0;

                    for (var i = 0; i < _trolley.products.length; i++) {
                        _total = (parseFloat((_trolley.products[i].price_with_iva).toFixed(2)) * parseInt((_trolley.products[i].quantity))) + _total;
                    }

                    this.$store.state.trolley[index_c].total = 0;
                    this.$store.state.trolley[index_c].total = parseFloat(_total.toFixed(2));

                    axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index_c]).then(res => {
                        console.log(res);
                        this.price(this.$store.getters.trolley);
                    }).catch(err => {
                        console.log(err);
                    });
                }

                console.log("Delete -> ", this.$store.getters.trolley);
            },
            actualizarTrolley(index, id_comercio) {
                var _trolley = this.$store.getters.trolley[index];
                var _btn = document.querySelector(`#GuardarTrolleyCart_${id_comercio}`);

                var _total = 0;

                for (var i = 0; i < _trolley.products.length; i++) {
                    _total = (parseFloat((_trolley.products[i].price_with_iva).toFixed(2)) * parseInt((_trolley.products[i].quantity))) + _total;
                }

                this.$store.state.trolley[index].total = 0;
                this.$store.state.trolley[index].total = parseFloat(_total.toFixed(2));

                axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                    console.log(res);
                    this.price(this.$store.getters.trolley);
                    _btn.setAttribute("style", "display: none;");
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .btnBack {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 70px;
        background: transparent;
        z-index: 100;
        padding: 0 !important;
        border: none !important;
        outline: none !important;

        .icono {
            display: block;
            margin: 0;
            padding: 0;
            width: 70px;
        }
    }
    .titleModal{
        text-align: center;
        color: var(--blue);
        margin: 30px auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        font-size: 22px;
        justify-content: center;
        font-weight: normal;
        img{
            width: 40px;
            object-fit: contain;
        }
    }

    .BoxPage {
        position: relative;
        width: 100%;
        height: max-content;
        min-height: max-content;
        max-height: max-content;

        .comercios {
            position: relative;
            display: block;
            width: 100%;
            height: max-content;
            margin-bottom: .5rem;

            &__title {
                display: block;
                width: 100%;
                margin: 0;
                padding: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 1.25rem;
                color: #31428b;
                margin-bottom: .5rem;
                padding-bottom: .5rem;
                border-bottom: 1px solid rgba(0,0,0,.35);
            }

            .btnSaveEdit {
                position: absolute;
                top: 0;
                right: 0;
                padding: .25rem .5rem;
                background: var(--bluePrimary);
                color: #ffffff;
                margin: 0;
                font-size: .95rem;
                border: none;
                border-radius: 0;
                box-shadow: none;
                outline: none;
                cursor: pointer;

                z-index: 1;
            }

            .btn-open {
                position: absolute;
                top: .5rem;
                right: .5rem;
                font-size: 1.25rem;
                color: #31428b;
            }

            &__prod {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                background: #ffffff;
                margin-bottom: .5rem;
                padding-bottom: .5rem;
                border-bottom: 1px solid rgba(0,0,0,.35);

                .prod--info {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: calc(50px + 120px);

                    .img-prod {
                        display: block;
                        margin: 0;
                        padding: 0;
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                        object-position: center center;
                        overflow: hidden;
                    }

                    .name-prod {
                        display: block;
                        width: 120px;
                        height: max-content;
                        margin: 0 .5rem 0;
                        padding: 0;
                    }
                }

                .prod--cant {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: max-content;
                    height: max-content;

                    .cant__menus, .cant__more {
                        display: block;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        color: #000;
                        font-weight: bold;
                        font-size: 1.2rem;
                        margin: 0 .25rem;
                        user-select: none;
                        cursor: pointer;
                    }

                    .cant__input {
                        display: block;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border: 1px solid #777777;
                        background: #ffffff;
                        box-shadow: none;
                        color: #000;
                        font-weight: bold;
                        border-radius: 0;
                        outline: none;
                    }
                }

                .prod--price {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .price {
                        font-size: 1.1rem;
                        color: #444;
                        padding: 0;
                        margin: 0;
                        height: 30px;
                        line-height: 30px;
                    }

                    .delete-product {
                        display: block;
                        font-size: 2rem;
                        color: #f03131;
                        font-weight: bold;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        margin-left: .5rem;
                        outline: none;
                        cursor: pointer;
                    }
                }
            }

            &__config {
                width: 100%;
                height: max-content;

                .config--item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    margin-bottom: .5rem;
                    padding-bottom: .5rem;
                    border-bottom: 1px solid rgba(0,0,0,.35);

                    .item-left {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        height: max-content;

                        .imgIconos {
                            display: block;
                            width: 50px;
                            height: 50px;
                            margin: 0;
                            margin-right: .5rem;
                            padding: 0;
                            object-fit: contain;
                            object-position: center center;
                        }

                        .imgIconos.__retienda {
                            width: 40px;
                            height: 40px;
                            margin-left: 5px;
                            margin-right: 12px;
                            margin-top: 5px;
                            margin-bottom: 5px;
                        }

                        .text {
                            display: block;
                            padding: 0;
                            margin: 0;
                            color: #444;
                            font-size: 1.05rem;
                        }
                    }

                    .item-right {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        height: max-content;

                        .price {
                            display: block;
                            padding: 0;
                            margin: 0;
                            font-size: 1.05rem;
                            color: #444;
                        }

                        .AparenceRadio {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-left: .5rem;
                            width: 30px;
                            height: 30px;
                            border: 1px solid #888888;

                            i {
                                font-size: 25px;
                            }
                        }
                    }
                }
            }

            &__total {
                width: 100%;
                height: max-content;

                .total--item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: max-content;

                    .title, .mount {
                        display: block;
                        padding: 0;
                        margin: 0;
                        font-size: 1.05rem;
                        color: #444;
                    }
                }
            }
        }
    }

    .info{
        padding: 10px;
        border-top: 1px solid rgba(0,0,0,.35);
        .padding {
            padding-left: 0;
            min-height: 20px;
        }
        .d-flex2{
            position: relative;
            display: flex;
            align-items: flex-start;
            p {
                width: 100%;
                margin: 0;
                font-size: 14px;
                color: #494947;
            }
            button {
                position: absolute;
                right: .5rem;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent;
                color: #494947;
                width: 40px;
                height: 40px;
                margin: 0;
                border: none;
                box-shadow: none;
                padding: 0;
                outline: none;

                img {
                    width: 40px;
                }
            }

        }

        > p {
            margin: 0;
            font-size: 14px;
            color: #494947;

            &:nth-child(1) {
                font-size: 16px;
            }
        }
    }

    .btnPago {
        background: #4e5d6a;
        color: #fff;
        float: right;
        margin-top: 10px;
        letter-spacing: 0;
        padding: .5rem 1rem;
        border: none;
        outline: none;
        box-shadow: none;
        margin-right: 20px;
        font-size: 16px;
    }

    .border-bottom{
        border-bottom: 1px solid rgba(0,0,0,.35);
    }

    .mensaje-info {
        display: block;
        font-size: .95rem;
        color: #444444;
        padding: 0;
        margin: 3.5rem 0 1rem;
        width: 100%;
        text-align: center;
    }

    .boxCheckbox input[type="radio"] {
        display: none;
    }
        
    .boxCheckbox__checked {
        width: 30px;
        min-width: 30px;
        height: 30px;
        border: 1px solid #d1d1d1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        margin-left: .5rem;
        cursor: pointer;

        i {
            color: var(--bluePrimary);
            font-size: 20px;
            display: none;
            opacity: 0;
            transition: .3s ease all;
        }
    }
    
    .boxCheckbox input[type="radio"]:checked ~ .boxCheckbox__checked {
        i {
            display: block;
            opacity: 1;
        }
    }
</style>

<style lang="css">
    .modal.show .modal-dialog {
        margin-left: auto !important;
        margin-right: auto !important;
    }
</style>