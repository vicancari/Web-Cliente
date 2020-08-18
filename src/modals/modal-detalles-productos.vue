<template>
    <div>
        <b-modal v-bind="GetProd" :modal-class="'ModalDetallesProductos'" :id="prod.title + prod.id" :ref="prod.title + prod.id" centered hide-footer hide-header class="ModalInfoProd">  
            <div class="contentCaracteristics">
                <div v-if="prod.data.images.length" class="boxImage">
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
                            <div v-if="prod.data.ingredients.length" class="box">
                                <p class="title">Ingredientes:</p>
                                <b-list-group>
                                    <b-list-group-item v-for="(ingreProd, i) in prod.data.ingredients" :key="i">{{ ingreProd.name }}</b-list-group-item>
                                </b-list-group>
                            </div>
                            <div v-if="prod.data.no_ingredients.length" class="box">
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
                        <div v-if="!is_trolley.length" class="groupSelect">
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
                                <div v-if="prod.data.eat_in_restaurant === true" class="form-grou">
                                    <input @change="ChangeComer(prod.data._id, prod.data.id_restaurant)" type="radio" :name="'radiosSelect_' + prod.data._id" :id="'comer_' + prod.data._id">
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
                        <div v-if="is_trolley.length" class="groupSelect">
                            <div v-if="isTypeMesa === false">
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
                                </div>
                                <b-button type="button" @click="addCarrito(prod.data), $bvModal.hide(prod.title + prod.id)" class="btnComprar">
                                    Comprar
                                </b-button>
                            </div>
                            <div v-if="isTypeMesa === true">
                                <div v-for="(t, i) in is_trolley" :key="i">
                                    <div v-if="t.id_comercio != prod.data.id_restaurant">
                                        <p class="sms err">Disculpe pero usted posee un carrito con una mesa activa.</p>
                                        <b-button disabled type="button" class="btnComprar">
                                            Comprar
                                        </b-button>
                                    </div>
                                    <div v-if="t.id_comercio === prod.data.id_restaurant">
                                        <div class="quality">
                                            <h5>Cantidad</h5>
                                            <b-button v-on:click="prodMenos()">-</b-button>
                                            <input type="text" class="form-control" v-model="cantProd">
                                            <b-button v-on:click="prodMas()">+</b-button>
                                        </div>
                                        <div class="groupRadio">
                                            <p v-if="is_trolley[0].type_cart.type_cart === 'Invitado'">Usted es invitado</p>
                                            <div v-if="is_trolley[0].type_cart.type_cart === 'Invitado'" class="form-grou">
                                                <label :for="'comer_' + prod.data._id">
                                                    <div class="a">
                                                        <img src="../assets/dinner.png" alt="">
                                                        <span>Mesa: {{ is_trolley[0].mesa.numero_mesa }}</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <b-button type="button" @click="addProductoCarrito(prod.data), $bvModal.hide(prod.title + prod.id)" class="btnComprar">
                                            Comprar
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" id="btn_comer" v-b-modal="'modal-comer_' + prod.data._id" style="display: none;"></button>
            <b-modal modal-class="modal-comer" centered :id="'modal-comer_' + prod.data._id" :ref="'modal-comer_' + prod.data._id"  hide-footer hide-header>  
                <div class="d-block text-center">
                    <div class="boxMesa">
                        <h3>Unirse a mesa</h3>

                        <div class="boxSelectMesa">
                            <select @change="horariosMesa" :name="'selectMesa_' + prod.data._id" :id="'selectMesa_' + prod.data._id" class="form-control select-mesa">
                                <option value="" selected>Elige la mesa</option>
                                <option v-for="(m, i) in this.getMesa" :key="i" :value="JSON.stringify(m)">{{ m.mesa }}</option>
                            </select>
                            <span class="cubo"></span>
                        </div>
                        
                        <div v-if="this.time_limit != ''" class="boxHorarios">
                            <p class="title">Cuando se active la mesa usted tendra un tiempo limite de <span>{{ this.time_limit }}</span>min.</p>
                        </div>
                        
                        <div class="checboxs">
                            <div class="form-group">
                                <input v-if="this.is_pago === true" @change="typeDePagoPorMesa(prod.data._id)" type="radio" checked :name="'radiosSelectMesa_' + prod.data._id" data-name="pago-unico" :id="'pago-unico_' + prod.data._id">
                                <input v-else @change="typeDePagoPorMesa(prod.data._id)" type="radio" :name="'radiosSelectMesa_' + prod.data._id" data-name="pago-unico" :id="'pago-unico_' + prod.data._id">
                                <label :for="'pago-unico_' + prod.data._id">
                                    <div class="a">
                                        <span>Pago único</span>
                                    </div>
                                    <div class="box">
                                        <i class="fas fa-check"></i>
                                    </div>
                                </label>
                            </div>
                            
                            <div class="form-group">
                                <input @change="typeDePagoPorMesa(prod.data._id)" type="radio" :name="'radiosSelectMesa_' + prod.data._id" data-name="pago-separado" :id="'pago-separado_' + prod.data._id">
                                <label :for="'pago-separado_' + prod.data._id">
                                    <div class="a">
                                        <span>Pago por separado</span>
                                    </div>
                                    <div class="box">
                                        <i class="fas fa-check"></i>
                                    </div>
                                </label>
                            </div>

                            <div v-if="this.is_pago === true" class="boxListInvite">
                                <div class="boxListInvite__title">
                                    <p>Lista de invitados</p>
                                </div>
                                <div class="boxListInvite__searchinvitado">
                                    <input id="searchinvitado" type="text" v-on:keyup="searchinvitado" v-on:focus="opensearchinvitado" class="from-control" placeholder="Buscar invitado">
                                    <div @click="selectUserComoInvitado" :data-idpro="prod.data._id" class="searchinvitado__result">
                                        <p v-for="res in this.$store.getters.listSearchUser" :key="'result_'+res.id" :id="'result_'+res.id" :data-obj="JSON.stringify(res)" class="result"><img :src="res.photo" :onerror="'this.src = ' + '\'' + imgDefaultUser + '\''"> {{ res.name }}</p>
                                    </div>
                                </div>
                                <p :id="'sms_' + prod.data._id" class="sms">Lo sentimos pero el usuario que quiere invitar tiene carritos por pagar.</p>
                                <ul class="boxListInvite__nav">
                                    <li v-for="(inv, i) in this.mysInvitados" :key="i">
                                        <p><img :src="inv.photo ? inv.photo : ''" :onerror="'this.src = ' + '\'' + imgDefaultUser + '\''"> {{ inv.name }}</p>
                                        <span @click="deleteInvitado(i)" class="delete-product"><img :src="EliminarProducto"></span>
                                    </li>
                                </ul>
                            </div>

                            <p :class="this.err != '' ? 'err' : ''" class="sms">{{ this.err }}</p>
                        </div>

                        <button class="btn btnConfirmar" @click="addCarrito(prod.data)">
                            Confirmar
                        </button>
                        <button :id="'closeModal_' + prod.data._id" @click="$bvModal.hide('modal-comer_' + prod.data._id), $bvModal.hide(prod.title + prod.id)" style="display: none;">---</button>
                    </div>
                </div>
            </b-modal>

            <button type="button" :id="'alertdr_' + prod.data._id" v-b-modal="'modal-alertdr_' + prod.data._id" style="display: none;"></button>
            <b-modal modal-class="modal-alertdr" centered :id="'modal-alertdr_' + prod.data._id" :ref="'modal-alertdr_' + prod.data._id"  hide-footer hide-header>  
                <div class="d-block text-center">
                    <img style="width: 150px; margin-bottom: 1rem;" :src="checkimg" alt="">
                    <h3>¡Éxito!</h3>
                    <p>Se guardo el carrito con éxito.</p>
                </div>
            </b-modal>
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
    import imgDefaultUser from "../assets/avatar.png";
    import EliminarProducto from "../assets/img/icons/close.svg";

    // -> API + Firebase + funciones
    import axios from "axios";
    // import api from "../api.js";
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
        data: function () {
            return {
                myclass: ['detalles-productos'],
                dataImg: [],
                cantProd: 1,
                checkimg: checkimg,
                prod: {},
                imgDefaultUser: imgDefaultUser,
                EliminarProducto: EliminarProducto,
                getMesa: "",
                eatinrest: false,
                listSearchUser: [],
                time_limit: "",
                miMesa: {},
                mysInvitados: [],
                err: "",
                is_trolley: [],
                invitado: {
                    id_invitante: this.$store.getters.uid,
                    id_invitado: "",
                    name_invitado: "",
                    phone_invitado: "",
                    email_invitado: "",
                    photo_invitado: "",
                    status_invitado: "",
                },
                horus: {
                    start: "",
                    end: "",
                },
                is_pago: false,
                type_mesa: "",
                emit: "",
                isTypeMesa: false,
                pedido: {
                    type_cart: {
                        type_cart: "Propio",
                        value: 1,
                    },
                    status: 0,
                    id_comercio: "",
                    lat: "",
                    lng: "",
                    id_cliente: "",
                    shippingForms: "",
                    created_at: "",
                    total: 0,
                    total_with_iva: 0,
                    total_delivery: 0,
                    total_wear: 0,
                    total_a_pagar: 0,
                    total_papel_of_regalo: 0,
                    iva_agrupado: [],
                    papel_of_regalo: false,
                    is_type_mesa: false,
                    address: "",
                    phone: "",
                    costos_extras: {},
                    products: []
                },
            }
        },
        async created() {
            this.prod = this.GetProd;
            await this.getMesas(this.prod.data.id_restaurant);

            this.is_trolley = this.$store.getters.trolley;
            this.fIsTypeMesa(this.is_trolley);

            EventBus.$on("EmitTrolleyUpdate", obj => {
                this.emit = obj;
                this.is_trolley = [];
                this.is_trolley = this.$store.getters.trolley;
                this.fIsTypeMesa(this.is_trolley);
            });

            EventBus.$on("NewPushOfTrolleyChangeComer", obj => {
                if (obj.ok === "OK") {
                    this.eatinrest = this.EatInRestaurant(this.prod.data.eat_in_restaurant, this.prod.data.id_restaurant);
                }
            });
        },
        methods: {
            fIsTypeMesa(obj) {
                if (obj.length) {
                    for (var i = 0; i < obj.length; i++) {
                        if (obj[i].is_type_mesa === true) {
                            this.isTypeMesa = true;
                        } else {
                            this.isTypeMesa = false;
                        }
                    }
                } else {
                    this.isTypeMesa = false;
                }
            },
            horariosMesa(e) {
                if (e.target.value != "") {
                    var _obj = JSON.parse(e.target.value);
                    this.miMesa = _obj;
                    this.time_limit = _obj.time_limit;
                    console.log("Mesa -> ", _obj);
                }

                if (e.target.value === "") {
                    this.miMesa = {};
                    this.time_limit = "";
                }
            },
            typeDePagoPorMesa(id_p) {
                var _check = document.querySelectorAll(`[name="radiosSelectMesa_${id_p}"]`);
                var _checked = "";

                _check.forEach(el => {
                    if (el.checked === true) {
                        _checked = el;
                    }
                });

                if (_checked) {
                    if (_checked.getAttribute("data-name").toLowerCase() === "pago-unico") {
                        this.is_pago = true;
                        this.type_mesa = 1;
                    }
    
                    if (_checked.getAttribute("data-name").toLowerCase() === "pago-separado") {
                        this.is_pago = true;
                        this.type_mesa = 2;
                    }
                }
            },
            deleteInvitado(index) {
                delete this.mysInvitados[index];
                this.mysInvitados.splice(index, 1);
            },
            selectUserComoInvitado(e) {
                var _el = e.target;
                var _idProd = _el.parentNode.getAttribute("data-idpro");
                var obj = JSON.parse(_el.getAttribute("data-obj"));
                document.querySelector("#searchinvitado").value = "";
                var _ms = document.querySelector("#sms_" + _idProd);

                axios.get(`https://myraus.com:8282/api/cart/get/invitado/${obj.id}`).then(res => {
                    var _result = res.data.result;

                    if (_result === true) {
                        if (_ms) {
                            if (!_ms.classList.contains("err")) {
                                _ms.classList.add("err");
                            }

                            setTimeout(() => {
                                _ms.classList.remove("err");
                            }, 3500);
                            return false;
                        }
                    } else {
                        this.mysInvitados.push(obj);
                    }
                }).catch(err => {
                    console.log(err);
                });
                
                if (document.querySelector("#searchinvitado").parentNode.classList.contains("boxListInvite__searchinvitado")) {
                    document.querySelector("#searchinvitado").parentNode.classList.remove("searching");
                }
            },
            opensearchinvitado() {
                if (document.querySelector("#searchinvitado")) {
                    if (document.querySelector("#searchinvitado").parentNode.classList.contains("boxListInvite__searchinvitado")) {
                        document.querySelector("#searchinvitado").parentNode.classList.add("searching");
                    }
                }
            },
            searchinvitado(e) {
                var _parent = e.target.parentNode;
                var _input = e.target;
                var _boxResult = _parent.children[1];
                var _datas = _boxResult.children;

                if (_parent.classList.contains("boxListInvite__searchinvitado")) {
                    if (_input.value != "") {
                        _parent.classList.add("searching");
                    }
                }

                for (var el = 0; el < _datas.length; el++) {
                    var filterEmail = JSON.parse(_datas[el].getAttribute("data-obj")).name.toLowerCase();
                    var filterName = JSON.parse(_datas[el].getAttribute("data-obj")).email.toLowerCase();
                    var obj = {data: filterEmail, data2: filterName};

                    _datas[el].classList.add("d-none");

                    if (_input.value.toLowerCase() === obj.data || _input.value.toLowerCase() === obj.data2) {
                        _datas[el].classList.remove('d-none');
                    }

                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.indexOf(" ") + 1, _input.value.length) || _input.value.toLowerCase() === obj.data2.substr(obj.data2.indexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.lastIndexOf(" ") + 1, _input.value.length) || _input.value.toLowerCase() === obj.data2.substr(obj.data2.lastIndexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
            
                    if (_input.value.toLowerCase() === obj.data.substr(0, _input.value.length) || _input.value.toLowerCase() === obj.data2.substr(0, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === '') {
                        _datas[el].classList.remove('d-none');
                    }
                }
            },
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
            ChangeComer(_id, id_comercio) {
                var _shippingFormsComer = document.querySelector(`#comer_${_id}`);

                if (_shippingFormsComer) {
                    var _btn = document.querySelector("#btn_comer");
                    if (_shippingFormsComer.checked === true) {
                        if (_btn) {
                            _btn.click();
                            this.getMesas(id_comercio);
                        }
                    }
                }
            },
            getMesas(id_comercio) {
                axios.get(`https://myraus.com:8282/api/mesas/get/${id_comercio}`).then(res => {
                    this.getMesa = res.data.data;
                    this.getMesa.sort(function(a, b) {
                        if (a.mesa < b.mesa) {
                            return -1;
                        }
                    });

                    // console.log("Mis mesas -> ", this.getMesa);
                }).catch(err => {
                    console.log(err);
                });
            },
            EatInRestaurant(comer, id_comercio) {
                var _trolley = this.$store.getters.trolley;
                if (comer === true) {
                    if (_trolley.length <= 1) {
                        for (var i = 0; i < _trolley.length; i++) {
                            if (_trolley[i].id_comercio === id_comercio) {
                                if (this.getMesa.length) {
                                    this.eatinrest = true;
                                } else {
                                    this.eatinrest = false;
                                }
                            } else {
                                this.eatinrest = false;
                            }
                        }
                    } else {
                        this.eatinrest = false;
                    }
                } else {
                    this.eatinrest = false;
                }
            },
            resetPedido() {
                this.pedido = {
                    type_cart: {
                        type_cart: "Propio",
                        value: 1,
                    },
                    status: 0,
                    id_comercio: "",
                    lat: "",
                    lng: "",
                    id_cliente: "",
                    shippingForms: "",
                    created_at: "",
                    total: 0,
                    total_with_iva: 0,
                    total_delivery: 0,
                    total_wear: 0,
                    total_a_pagar: 0,
                    total_papel_of_regalo: 0,
                    iva_agrupado: [],
                    papel_of_regalo: false,
                    is_type_mesa: false,
                    address: "",
                    phone: "",
                    costos_extras: {},
                    products: []
                }
            },
            addProductoCarrito(obj) {
                var _btnAlert = document.querySelector(`#alertdr_${obj._id}`);
                var _btnCM = document.querySelector('#closeModal_' + obj._id);

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

                for (var i = 0; i < _trolley.length; i++) {
                    if (_trolley[i].id_comercio === obj.id_restaurant) {
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

                        console.log("ANTES DE ACTUALIZAR -> ", this.$store.getters.trolley[i]);
                        axios.put("https://myraus.com:8282/api/cart/update", this.$store.getters.trolley[i]).then(res => {
                            console.log(res);
                            EventBus.$emit("NewPushOfTrolley", {ok: "OK"});
                            EventBus.$emit("NewPushOfTrolleyChangeComer", {ok: "OK"});

                            this.cantProd = 1;
                            this.resetPedido();

                            if (_btnAlert, _btnCM) {
                                _btnCM.click();
                                _btnAlert.click();
                            }
                        }).catch(err => {
                            console.log(err.response.data);
                            if (err.response.data.code === 2) {
                                this.err = err.response.data.error;

                                setTimeout(() => {
                                    this.err = "";
                                }, 4500);
                            }

                            this.resetPedido();
                        });
                    }
                }
            },
            addCarrito(obj) {
                var _shippingFormsDelivery = document.querySelector(`#delivery_${obj._id}`);
                var _shippingFormsLlevar = document.querySelector(`#llevar_${obj._id}`);
                var _shippingFormsComer = document.querySelector(`#comer_${obj._id}`);
                var _btnAlert = document.querySelector(`#alertdr_${obj._id}`);
                var _btnCM = document.querySelector('#closeModal_' + obj._id);

                if (_shippingFormsDelivery || _shippingFormsLlevar || _shippingFormsComer) {
                    if (_shippingFormsDelivery.checked != false || _shippingFormsLlevar.checked != false || _shippingFormsComer.checked != false) {
                        if (_shippingFormsDelivery.checked === true || _shippingFormsLlevar.checked === true) {
                            if (_shippingFormsDelivery.checked === true) {
                                this.pedido.shippingForms = "delivery";
                            }
                
                            if (_shippingFormsLlevar.checked === true) {
                                this.pedido.shippingForms = "wear";
                            }
                        } else if (_shippingFormsComer.checked === true) {
                            if (this.time_limit != "") {
                                // MESA ------------------------------------------------------------
                                this.pedido.shippingForms = "eat_in_restaurant";
                                this.pedido.is_type_mesa = true;
                                this.pedido.type_mesa = this.type_mesa; // 1 = unico, 2 = separado
                                    
                                this.pedido.mesa = {
                                    numero_mesa: this.miMesa.mesa,
                                    list_invitados: [], // if es igual a pago unico
                                }

                                this.mysInvitados.forEach(inv => {
                                    this.pedido.mesa.list_invitados.push({
                                        id_invitante: this.$store.getters.uid,
                                        id_invitado: inv.id,
                                        name_invitado: inv.name,
                                        phone_invitado: inv.phone,
                                        email_invitado: inv.email,
                                        photo_invitado: inv.photo ? inv.photo : "",
                                        status_invitado: "espera", // espera, aceptado, cancelado
                                    });
                                });
    
                                this.pedido.mesa.hours_start = moment(new Date()).format("HH:mm:ss a");
                                var _f = new Date();
                                var _fl = this.time_limit;
                                var _m = _f.getMinutes();
                                _f.setMinutes(_m + _fl);
                                this.pedido.mesa.hours_end = moment(_f).format("HH:mm:ss a");
                                // END MESA ----------------------------------------------------------
                            } else {
                                console.log("Por favor selecciona una mesa.");
                                return false;
                            }
                        }
                        
                        this.pedido.id_comercio = obj.id_restaurant;
                        this.pedido.lat = obj.lat;
                        this.pedido.lng = obj.lng;
                        this.pedido.id_cliente = this.$store.getters.uid;
                        this.pedido.phone = this.$store.getters.user.phone;
                        this.pedido.address = this.$store.getters.user.address;
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

                                console.log("ANTES DE ACTUALIZAR -> ", this.$store.state.trolley[i]);
                                axios.put("https://myraus.com:8282/api/cart/update", this.$store.state.trolley[i]).then(res => {
                                    console.log(res);
                                    EventBus.$emit("NewPushOfTrolley", {ok: "OK"});
                                    EventBus.$emit("NewPushOfTrolleyChangeComer", {ok: "OK"});

                                    this.cantProd = 1;
                                    this.resetPedido();

                                    if (_btnAlert, _btnCM) {
                                        _btnCM.click();
                                        _btnAlert.click();
                                    }
                                }).catch(err => {
                                    console.log(err.response.data);
                                    if (err.response.data.code === 2) {
                                        this.err = err.response.data.error;

                                        setTimeout(() => {
                                            this.err = "";
                                        }, 4500);
                                    }

                                    this.resetPedido();
                                });
                            }
                        }

                        if (_set === true) {
                            this.pedido.products.push(_prod);

                            console.log("POST DEL PRIMER CARRITO -> ", this.pedido);
                            axios.post("https://myraus.com:8282/api/cart/add", this.pedido).then(res => {
                                this.pedido._id = res.data.cart._id;
                                this.$store.state.trolley.push(this.pedido);
                                EventBus.$emit("NewPushOfTrolley", {ok: "OK"});
                                EventBus.$emit("NewPushOfTrolleyChangeComer", {ok: "OK"});

                                this.cantProd = 1;
                                this.resetPedido();

                                if (_btnAlert, _btnCM) {
                                    _btnCM.click();
                                    _btnAlert.click();
                                }
                            }).catch(err => {
                                console.log(err.response.data);
                                if (err.response.data.code === 2) {
                                    this.err = err.response.data.error;

                                    setTimeout(() => {
                                        this.err = "";
                                    }, 4500);
                                }
                                this.resetPedido();
                            });
                        }

                        console.log("trolley enviado ->", this.pedido);
                        console.log("trolley del get -> ", this.$store.getters.trolley);
                    } else {
                        console.log("Disculpe debes seleccionar un {{ shippingForms }}");
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
                    color: var(--blue);
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
                            color: var(--blue);
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
                            color: var(--blue);
                        }
                        button{
                            border:none;
                            box-shadow: none;
                            background-color: transparent;
                            color: var(--blue);
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
                                    color: var(--blue);
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
                        background-color: var(--blue);
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

    .boxMesa {
        padding: 1.5rem;

        h3 {
            display: block;
            width: 100%;
            font-size: 1.5rem;
            color: var(--blue);
            margin: 0 0 1rem;
            text-align: center;
        }

        .boxSelectMesa {
            position: relative;
            display: block;
            width: 85%;
            margin: 0 auto;
            
            .select-mesa {
                position: relative;
                width: 100%;
                margin: 0;
                border-radius: 0;
                color: var(--blue);
                background: transparent;
                outline: none;
                appearance: none;
                box-shadow: none;
                font-weight: bold;
                font-size: 1.5rem;
                height: 37px;
                line-height: 37px;
                padding: 0 36px 0 7px;
                padding-bottom: 2px;
                cursor: pointer;
                z-index: 1;
            }

            .cubo {
                display: block;
                position: absolute;
                top: 50%;
                right: 7px;
                transform: translate(0, -50%);
                width: 22px;
                height: 22px;
                background: var(--blue);
                cursor: pointer;
            }
        }

        .checboxs {
            .form-group {
                margin: 2rem auto;

                &:first-child {
                    margin-bottom: 1rem;
                }

                &:last-child {
                    margin-top: 0;
                }

                input[type=radio] {
                    display: none;
                }

                label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;

                    .a {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 50px;
                            height: 50px;
                            object-fit: contain;
                        }

                        span {
                            color: var(--blue);
                        }
                    }

                    .box {
                        width: 25px;
                        min-width: 25px;
                        height: 25px;
                        border: 1px solid #d1d1d1;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        i {
                            color: var(--blue);
                            font-size: 20px;
                            display: none;
                            opacity: 0;
                            transition: .3s ease all;
                        }
                    }
                }

                input[type=radio]:checked + label {
                    .box {
                        background: var(--blue);
                        border: 1px solid var(--blue);

                        i {
                            display: block;
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .btnConfirmar {
            display: block;
            font-size: 16px;
            background-color: var(--blue);
            color: #fff;
            border-radius: 0;
            padding: 4px 22px;
            margin: 0 auto;
            border: none;
        }
    }

    .boxHorarios {
        position: relative;
        width: 100%;
        height: max-content;

        p.title {
            margin: 0;
            width: 100%;
            text-align: center;
            padding: .5rem;
            font-size: 1rem;
            font-weight: bold;
            font-style: italic;
            color: var(--text-color);
            
            span {
                color: #9d8755;
            }
        }
    }

    .boxListInvite {
        width: 100%;
        height: max-content;
        margin: 0 0 1.25rem;
        padding: 0 0 .5rem;

        // border-bottom: 1px solid rgba(0,0,0,.25);

        &__title {
            width: 100%;
            height: max-width;

            p {
                color: #777;
                text-align: left;
                font-size: 1.25rem; 
                margin: 0 0 .5rem;
                padding: 0 0 .5rem;

                border-bottom: 1px solid rgba(0,0,0,.25);
            }
        }

        &__searchinvitado {
            position: relative;
            display: block;
            width: 100%;
            height: 40px;
            background: transparent;
            
            input {
                width: 100%;
                height: 40px;
                line-height: 40px;
                outline: none;
                box-shadow: none;
                margin: 0;
                padding: 0;
                border: none;
                border-bottom: 1px solid var(--blue);
                text-transform: uppercase;
                color: var(--blue);
            }

            .searchinvitado__result {
                position: absolute;
                top: 100%;
                left: 0;
                margin: 0;
                padding: .5rem;
                background: #fff;
                overflow-y: auto;
                overflow-x: hidden;
                width: 100%;
                max-height: 200px;
                z-index: 10;
                display: none;

                p {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0 0 .5rem;
                    // padding: 0 0 .5rem;
                    // border-bottom: 1px solid rgba(0,0,0,.15);
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    text-transform: uppercase;
                    cursor: pointer;

                    &:last-child {
                        margin: 0;
                        padding: 0;
                        border-bottom: none;
                    }

                    img {
                        display: block;
                        margin: 0;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: .5rem;
                        object-fit: cover;
                        object-position: center center;
                    }
                }
            }

            &.searching {
                .searchinvitado__result {
                    display: block;
                }
            }
        }

        &__nav {
            display: block;
            width: 100%;
            height: max-content;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: max-content;
                margin: .5rem 0;

                p {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    width: 100%;

                    img {
                        display: block;
                        margin: 0;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: .5rem;
                        object-fit: cover;
                        object-position: center center;
                    }
                }

                span {
                    img {
                        display: block;
                        margin: 0;
                        padding: 0;
                        width: 15px;
                        cursor: pointer;
                    }
                }

                .my-checkbox {
                    display: block;
                    width: 100%;
                    height: max-content;
                    cursor: pointer;

                    input[type="checkbox"] {
                        display: none;
                    }

                    .check {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        height: max-content;
                        padding: 0 0 0.25rem;
                        margin: 0 0 0.25rem;
                        border-bottom: 1px solid var(--bluePrimary);
                        cursor: pointer;

                        &:last-child {
                            padding: 0;
                            margin: 0;
                            border-bottom: none;
                        }

                        p {
                            color: var(--text-color);
                            margin: 0;
                        }

                        .box {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 20px;
                            height: 20px;
                            border: 1px solid #d1d1d1;

                            i {
                                display: none;
                                font-size: .85rem;
                                color: var(--blue);
                            }
                        }
                    }

                    input[type="checkbox"]:checked + .check {
                        .box {
                            border: 1px solid var(--blue);

                            i {
                                display: block;
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }

    .sms {
        display: none;
        color: #d33838;
        font-size: 1rem;
        margin: .5rem 0;
        padding: 0;
        text-align: center;

        &.err {
            display: block;
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

    .modal-comer .modal-dialog {
        width: 350px !important;
        max-width: 85% !important;
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