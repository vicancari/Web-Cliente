<template>
    <div>
        <b-modal modal-class="modal-trolley" id="modal-trolley" ref="modal-trolley"  hide-footer hide-header>  
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
            <h5 style="padding-top: 1rem;" class="titleModal">Tu compra</h5>
            <div v-if="this.$store.getters.trolley.length" class="BoxPage">
                <div v-for="(cart, i) in this.$store.getters.trolley" :key="i" class="comercios">
                    <p class="comercios__title">{{ getComercio(cart.id_comercio) }} <i :id="'toggle_icon_' + cart.id_comercio" @click="showConfig(cart.id_comercio)" class="fas fa-caret-down"></i></p>
                    <button @click="actualizarTrolley(i, cart._id);" style="display: none;" :id="'GuardarTrolleyCart_' + cart._id" type="button" class="btnSaveEdit">Guardar</button>

                    <div v-for="(prod, y) in cart.products" :key="y" class="comercios__prod">
                        <div class="prod--info">
                            <img class="img-prod" :src="prod.images.length ? prod.images[0].img : imgDefault" :onerror="'this.src = ' + '\'' + imgDefault + '\''" alt="name producto">
                            <p class="name-prod">{{ prod.name }}</p>
                        </div>
                        <div class="prod--cant">
                            <span @click="prodMenos(prod.name + '_' + prod.id_producto, prod._id, cart._id, cart, i, y)" class="cant__menus">-</span>
                            <input :data-quantity="prod.name + '_' + prod.id_producto" type="text" :value="prod.quantity" class="cant__input">
                            <span @click="prodMas(prod.name + '_' + prod.id_producto, prod._id, cart._id, cart, i, y)" class="cant__more">+</span>
                        </div>
                        <div class="prod--price">
                            <p class="price">{{ (prod.price_with_iva * prod.quantity) | money }}€</p>
                            <span @click="deleteProd(i, y)" class="delete-product"><img :src="EliminarProducto"></span>
                        </div>
                    </div>

                    <div :id="'config_' + cart.id_comercio" class="comercios__config">
                        <div class="config--item">
                            <div class="item-left">
                                <img src="../assets/moto.png" class="imgIconos">
                                <p class="text">Delivery</p>
                            </div>
                            <div class="item-right">
                                <p v-if="cart.shippingForms === 'delivery'" class="price">{{ getPriceDelivery(cart) | money }}€</p>
                                <div class="boxCheckbox">
                                    <input @change="changeShipping(cart.id_comercio, cart, i)" v-if="cart.shippingForms === 'delivery'" type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'delivery_' + cart.id_comercio" checked>
                                    <input @change="changeShipping(cart.id_comercio, cart, i)" v-else type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'delivery_' + cart.id_comercio">
                                    <label class="boxCheckbox__checked" :for="'delivery_' + cart.id_comercio">
                                        <i class="fas fa-check"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="config--item">
                            <div class="item-left">
                                <img src="../assets/recogertienda.svg" class="imgIconos __retienda">
                                <p class="text">Para llevar</p>
                            </div>
                            <div class="item-right">
                                <p v-if="cart.shippingForms === 'wear'" class="price">{{ getPriceWear(cart) }}€</p>
                                <div class="boxCheckbox">
                                    <input @change="changeShipping(cart.id_comercio, cart, i)" v-if="cart.shippingForms === 'wear'" type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'wear_' + cart.id_comercio" checked>
                                    <input @change="changeShipping(cart.id_comercio, cart, i)" v-else type="radio" :name="'radiosSelect_' + cart.id_comercio" :id="'wear_' + cart.id_comercio">
                                    <label class="boxCheckbox__checked" :for="'wear_' + cart.id_comercio">
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
                                <p class="price">{{ cart.costos_extras.papel_regalo | money }}€</p>
                                <div class="boxCheckbox">
                                    <input v-if="cart.papel_of_regalo === true" @change="papelRegalo(cart.id_comercio, i)" type="checkbox" :name="'regaloSelect_' + cart.id_comercio" :id="'regalo_' + cart.id_comercio" checked>
                                    <input v-if="cart.papel_of_regalo === false" @change="papelRegalo(cart.id_comercio, i)" type="checkbox" :name="'regaloSelect_' + cart.id_comercio" :id="'regalo_' + cart.id_comercio">
                                    <label class="boxCheckbox__checked" :for="'regalo_'  + cart.id_comercio">
                                        <i class="fas fa-check"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="comercios__total">
                        <div class="total--item">
                            <p class="title">Sub total</p>
                            <span class="mount">{{ cart.total | money }}€</span>
                        </div>
                        <div v-for="(iva, i) in listPrice.iva" :key="i" class="total--item">
                            <p v-if="iva.id_c === cart.id_comercio" class="title">IVA {{ iva.porcentaje }}%</p>
                            <span v-if="iva.id_c === cart.id_comercio" class="mount">{{ iva.monto | money }}€</span>
                        </div>
                    </div>

                    <div class="comercios__address">
                        <input type="text" :data-address="'input_address_' + cart.id_comercio" :value="cart.address" disabled class="form-control">
                        <button @click="editAddress(cart.id_comercio);" class="edit" type="button">
                            <img src="../assets/lapiz.svg">
                        </button>
                        <button @click="saveNewAddress(cart.id_comercio, i);" class="save" type="button">
                            Guardar
                        </button>
                    </div>
                </div>

                <div class="boxTotal">
                    <p class="title">Total: <span class="mount">{{ this.listPrice.total | money }}€</span></p>
                    <button :disabled="this.is_disabled" type="button" class="btnPago" v-b-modal.modal-send-2>Enviar pago</button>
                </div>
            </div>
            <div v-if="!this.$store.getters.trolley.length" class="align-center">
                <div class="col-12">
                    <div class="boxNotTrolley">
                        <i class="boxNotTrolley__icon fas fa-shopping-cart"></i>
                        <p class="boxNotTrolley__msj">Carrito vacío</p>
                    </div>
                </div>
            </div>
        </b-modal>

        <pagar-trolley
            :GetTrolley="{data: this.$store.getters.trolley, price: listPrice}"
        ></pagar-trolley>
    </div>
</template>

<script>
    import config from "../config.js";
    import back from '../assets/img/icons/flechavolver.svg';
    import imgDefault from '../assets/img/noimage.jpeg';
    import EliminarProducto from "../assets/img/icons/close.svg";

    // -> components
    import PagarTrolley from "../modals/pagar-trolley.vue";

    // -> API + EventBus
    import { EventBus } from '../main.js';
    // import api from '../api.js';
    import funciones from "../funciones.js";
    import axios from "axios";

    export default {
        name: 'historial',
        components: {
            PagarTrolley
        },
        data: function () {
            return {
                myclass: ['modal-trolley'],
                back: config.rutaWeb(back),
                imgDefault: imgDefault,
                myTrolley: [],
                EliminarProducto: EliminarProducto,
                is_disabled: false,
                shippingPrince: {
                    delivery: 0,
                    wear: 0,
                },
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

                    EventBus.$on("TrolleyPagado", obj => {
                        if (obj.ok === "OK") {
                            this.getTrolley();
                        }
                    });

                    console.log(this.$store.getters.trolley);
                }
            }
        },
        methods: {
            papelRegalo(id_c, index) {
                var _checked = document.querySelector(`#regalo_${id_c}`);
                var _trolley = this.$store.getters.trolley[index];

                if (_checked) {
                    if (_checked.checked === true) {
                        _trolley.total = parseFloat(_trolley.total) + parseFloat(_trolley.costos_extras.papel_regalo);
                        _trolley.papel_of_regalo = true;

                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                            console.log(res);
                            this.price(this.$store.getters.trolley);
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        _trolley.total = parseFloat(_trolley.total) - parseFloat(_trolley.costos_extras.papel_regalo);
                        _trolley.papel_of_regalo = false;

                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                            console.log(res);
                            this.price(this.$store.getters.trolley);
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }
            },
            editAddress(id_c) {
                var _input = document.querySelector(`[data-address="input_address_${id_c}"]`);

                if (_input) {
                    if (_input.disabled === true) {
                        _input.disabled = false;
                        _input.focus();
                    }
                }
            },
            saveNewAddress(id_c, index) {
                var _input = document.querySelector(`[data-address="input_address_${id_c}"]`);
                var _trolley = this.$store.getters.trolley[index];
                var _nAddress = "";

                if (_input) {
                    if (_input.disabled === false) {
                        _nAddress = _input.value;
                        _trolley.address = _nAddress;

                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                            console.log(res);
                            _input.disabled = true;
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }
            },
            changeShipping(id_comercio, trolley, index) {
                var _trolley = this.$store.getters.trolley[index];
                var _shippingFormsDelivery = document.querySelector(`#delivery_${id_comercio}`);
                var _shippingFormsLlevar = document.querySelector(`#wear_${id_comercio}`);

                if (_shippingFormsDelivery.checked != false || _shippingFormsLlevar.checked != false) {
                    if (_shippingFormsDelivery.checked === true) {
                        _trolley.shippingForms = "delivery";

                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                            console.log(res);
                            this.price(this.$store.getters.trolley);
                            this.getPriceDelivery(this.$store.getters.trolley[index]);
                        }).catch(err => {
                            console.log(err);
                        });
                    }

                    if (_shippingFormsLlevar.checked === true) {
                        _trolley.shippingForms = "wear";

                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[index]).then(res => {
                            console.log(res);
                            this.price(this.$store.getters.trolley);
                            this.getPriceWear(this.$store.getters.trolley[index]);
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }
            },
            showConfig(id_c) {
                var _box = document.querySelector(`#config_${id_c}`);
                var _icon = document.querySelector(`#toggle_icon_${id_c}`);

                if (_box) {
                    if (!_box.classList.contains("show")) {
                        _box.classList.add("show");
                        _icon.classList.remove("fa-caret-down");
                        _icon.classList.add("fa-caret-up");
                    } else {
                        _box.classList.remove("show");
                        _icon.classList.remove("fa-caret-up");
                        _icon.classList.add("fa-caret-down");
                    }
                }
            },
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
                            this.is_disabled = true;
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
                            this.is_disabled = true;
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
                var _subTotalBase = 0;
                var _total = 0;

                var arrayTemporal = [];
                arr.forEach(item => {
                    for (var i = 0; i < item.products.length; i++) {
                        arrayTemporal = _agruparIVA.filter(resp => resp["iva"] == item.products[i]["iva"] && resp["id_c"] == item.id_comercio);
                        if (arrayTemporal.length > 0) {
                            _agruparIVA[_agruparIVA.indexOf(arrayTemporal[0])];
                        } else {
                            _agruparIVA.push({
                                "id_c": item.id_comercio,
                                "iva" : item.products[i]["iva"]
                            });
                        }
                    }

                    _subTotalBase = parseFloat((item.total + _subTotalBase).toFixed(2));
                });

                this.listPrice.subTotal = _subTotalBase;
                _agruparIVA.forEach(item => {
                    arr.forEach(item2 => {
                        if (item.id_c === item2.id_comercio) {
                            this.listPrice.iva.push({
                                id_c: item.id_c,
                                porcentaje: item.iva,
                                monto: parseFloat((item2.total * parseFloat(`0.${item.iva}`)).toFixed(2))
                            });
                        }
                    });
                });

                this.listPrice.iva.forEach(item => {
                    _total = parseFloat((_total + item.monto).toFixed(2));
                });

                _total = parseFloat((_subTotalBase + _total).toFixed(2))

                this.listPrice.iva.sort(function(a, b) {
                    if (a.porcentaje < b.porcentaje) {
                        return -1;
                    }
                });

                this.listPrice.total = _total;
                this.listPrice.total = parseFloat(this.listPrice.total) + parseFloat(this.shippingPrince.delivery) + parseFloat(this.shippingPrince.wear);
                console.log(this.listPrice);
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
                        EventBus.$emit("NewPushOfTrolleyChangeComer", {ok: "OK"});
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
                        EventBus.$emit("NewPushOfTrolleyChangeComer", {ok: "OK"});
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
                    this.getPriceDelivery(this.$store.getters.trolley[index]);
                    _btn.setAttribute("style", "display: none;");
                    this.is_disabled = false;
                }).catch(err => {
                    console.log(err);
                });
            },
            getPriceWear(obj) {
                var _cant = 0;
                obj.products.forEach(item => {
                    _cant = parseInt(item.quantity) + parseInt(_cant);
                });

                this.shippingPrince.delivery = 0; 
                this.shippingPrince.wear = parseFloat(obj.costos_extras.envases) * parseInt(_cant)
                return parseFloat(obj.costos_extras.envases) * parseInt(_cant);
            },
            getPriceDelivery(obj) {
                var _total = obj.total;
                var _coords_c = {
                    lat: obj.lat,
                    lng: obj.lng
                }

                var _coords_u = this.$store.getters.coords;
                var _km = funciones.getKilometros(_coords_u.lat, _coords_u.lng, _coords_c.lat, _coords_c.lng);
                console.log(_km);
                var _costos = obj.costos_extras;

                if (_costos.standard.km != 0 && _costos.standard.price != 0 && _costos.km_exta.km != 0 && _costos.km_exta.price != 0 && _costos.minima.price_a != 0 && _costos.minima.price_b != 0) {
                    var _kmStand = _costos.standard.km;
                    var _priceExtra = _costos.km_exta.price;

                    if (parseFloat(_total) > parseFloat(_costos.minima.price_a)) {
                        this.shippingPrince.wear = 0;
                        this.shippingPrince.delivery = _costos.minima.price_b;
                        return _costos.minima.price_b;
                    }
                    
                    if (parseFloat(_total) <= parseFloat(_costos.minima.price_a)) {
                        if (parseInt(_km.split(".")[0]) > parseInt(_kmStand)) {
                            var _restKM = _km - _kmStand; // Valor para km extra
                            
                            var _montoExtra = parseInt(String(_restKM).split(".")[0]) * _priceExtra;

                            this.shippingPrince.wear = 0;
                            this.shippingPrince.delivery = _costos.standard.price + _montoExtra;
                            return _costos.standard.price + _montoExtra;
                        }

                        if (parseInt(_km.split(".")[0]) <= parseInt(_kmStand)) {
                            this.shippingPrince.wear = 0;
                            this.shippingPrince.delivery = _costos.standard.price;
                            return _costos.standard.price;
                        }
                    }

                    this.listPrice.total = parseFloat(this.listPrice.total) + parseFloat(this.shippingPrince.delivery) + parseFloat(this.shippingPrince.wear);
                } else {
                    return "0.00";
                }
            },
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

            &__title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                margin: 0;
                padding: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 1.25rem;
                color: var(--bluePrimary);
                background: #f5f5f5;
                margin-bottom: .5rem;
                padding-top: .5rem;
                padding-bottom: .5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                border-top: 1px solid rgba(0,0,0,.35);
                border-bottom: 1px solid rgba(0,0,0,.35);

                i {
                    cursor: pointer;
                    font-size: 1.85rem;
                }
            }

            &:first-child {
                &__title {
                    border-top: none;
                    padding-top: 0;
                }
            }

            .btnSaveEdit {
                position: absolute;
                top: .5rem;
                right: calc(1rem + 2.1rem);
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
                padding-left: 1rem;
                padding-right: 1rem;
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
                        width: 50px;
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
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 2rem;
                        font-weight: bold;
                        width: 25px;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        margin-left: .5rem;
                        outline: none;
                        cursor: pointer;

                        img {
                            display: block;
                            margin: 0;
                            padding: 0;
                            width: 15px;
                            height: 15px;
                            object-fit: contain;
                            object-position: center center;
                        }
                    }
                }
            }

            &__config {
                width: 100%;
                height: max-content;
                padding: 0 1rem;
                display: none;

                &.show {
                    display: block;
                }

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
                padding: 0 1rem;

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

            &__address {
                position: relative;
                width: 100%;
                padding: 0 1rem;
                margin: .5rem 0;

                button {
                    display: none;
                    position: absolute;
                    top: 0;
                    right: 10px;
                    border: none;
                    background: transparent;
                    outline: none;
                    box-shadow: none;
                    width: 50px;

                    img {
                        display: block;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }

                    &.save {
                        display: block;
                        width: max-content;
                        background: var(--bluePrimary);
                        color: #fff;
                        padding: .25rem .5rem;
                    }
                }

                input {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(0,0,0,.25);
                    border-radius: 0;
                    outline: none;
                    box-shadow: none;
                    padding: .5rem 2.5rem .5rem 0;
                    color: var(--blue);

                    &:disabled {
                        color: #777;
                    }

                    &:disabled ~ .edit {
                        display: block;
                    }

                    &:disabled ~ .save {
                        display: none;
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
        background: var(--bluePrimary);
        color: #fff;
        margin: 0;
        letter-spacing: 0;
        padding: .5rem 1rem;
        border: none;
        outline: none;
        box-shadow: none;
        font-size: 16px;
        cursor: pointer;

        &:disabled {
            background: #bfbfbf;
            cursor: no-drop;
        }
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

    .boxCheckbox input[type="radio"], .boxCheckbox input[type="checkbox"] {
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
    
    .boxCheckbox input[type="radio"]:checked ~ .boxCheckbox__checked,
    .boxCheckbox input[type="checkbox"]:checked ~ .boxCheckbox__checked {
        i {
            display: block;
            opacity: 1;
        }
    }

    .boxTotal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: max-content;
        font-size: 1.5rem;
        padding: 1rem;

        p {
            margin: 0;

            span {
                color: #9d8755;
            }
        }
    }

    .boxNotTrolley {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 450px;

        &__icon {
            font-size: 3.5rem;
            color: rgba(0,0,0,.3);
        }

        &__msj {
            width: 100%;
            font-size: 1.25rem;
            text-transform: uppercase;
            font-weight: bold !important;
            color: rgba(0,0,0,.3);
            margin: 0;
            padding: 1rem 0;
            text-align: center;
        }
    }
</style>

<style lang="css">
    .modal-trolley .modal-body {
        padding: 0 !important;
        overflow-x: hidden !important;
    }

    .modal-trolley .modal.show .modal-dialog {
        margin-left: auto !important;
        margin-right: auto !important;
    }
</style>