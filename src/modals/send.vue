<template>
    <div>
        <b-modal v-bind="GetRest" centered :modal-class="myclass" id="modal-send" ref="modal-send"  hide-footer hide-header @click="closeSearching">  
            <div class="boxCalculate" @click="closeSearching">
                <div class="boxSeach" @click="closeSearching">
                    <div class="input-search">
                        <input v-if="this.GetRest.searching === true" type="text" id="searchRestaurante" v-on:keyup="search" class="form-control search" placeholder="Buscar" v-on:focus="openSearching" autocomplete="off">
                        <p v-else id="searchRestaurante" class="form-control search">{{ this.GetRest.data.val.business_name }}</p>
                        <img class="input-search__icon" src="../assets/img/icons/search.png" alt="search">
                    </div>
                    <p v-if="this.GetRest.searching === true" data-error="searchRestaurante" class="msgError d-none">*msgError</p>
                    <div v-if="this.GetRest.searching === true" @click="selectRestaurante" class="boxSeach__result">
                        <p v-for="res in this.listRestSearch.filters" :key="'result_'+res.id" :id="'result_'+res.id" :data-name="res.name" :data-categoria="res.categorias ? res.categorias[0].name : ''" :data-subcategoria="res.categorias ? res.categorias[0].name_subcategory : ''" class="result">{{ res.name }}</p>
                    </div>
                </div>
                <div class="priceText" @click="closeSearching">
                    <span>€</span>
                    <input v-on:focus="disabledCampo" v-money="money" v-model.lazy="price" v-on:keyup="disabledCampo" v-on:keydown="disabledCampo" type="text" id="saldoSend" class="form-control" placeholder="0,00" autocomplete="off">
                    <img @click="borrarNumber" id="borrarNumber" class="priceText__borrarNumber d-none" src="../assets/img/icons/borrar-teclado.svg" alt="borrar">
                    <p data-error="saldoSend" class="msgError d-none">*msgError</p>
                </div>
                <div @click="calculadora" class="d-flex">
                    <button data-btn="1" class="btn">1</button>
                    <button data-btn="2" class="btn">2</button>
                    <button data-btn="3" class="btn">3</button>
                    <button data-btn="4" class="btn">4</button>
                    <button data-btn="5" class="btn">5</button>
                    <button data-btn="6" class="btn">6</button>
                    <button data-btn="7" class="btn">7</button>
                    <button data-btn="8" class="btn">8</button>
                    <button data-btn="9" class="btn">9</button>
                    <button data-btn="," class="btn">,</button>
                    <button data-btn="0" class="btn">0</button>
                    <button class="btn"><img class="img-fluid" :src="check" alt="" @click="Pay"></button>
                </div>
            </div>
        </b-modal>
        
         <b-modal centered :modal-class="payment" id="modal-payment" ref="modal-payment"  hide-footer hide-header>  
            <div class="boxPago">
                <h5 class="title">Selecciona un tipo de pago</h5>
                <div class="box checkedRadio" id="selectCuenta"></div>
                <div class="boxPrice">
                    <p v-b-tooltip.hover :title="this.saldoSend+'€'">{{ this.saldoSend }}<span>€</span></p>
                    <h5 class="name">{{ this.selectedRes.name }}</h5>
                </div>
                <div class="footer">
                    <button class="btn btn-confirmar" @click="enviarSaldo">Confirmar</button>
                    <button class="btn btn-cancelar" @click="$bvModal.hide('modal-payment')">Cancelar</button>
                    <button type="button" @click="$bvModal.hide('modal-payment')" id="pagoExitoso" style="display: none;"></button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {VMoney} from 'v-money';
    import config from "../config.js";
    import check from '../assets/img/icons/check-blanco.svg';
    import api from "../api.js";
    // import funciones from "../funciones.js";
    import { EventBus } from "../main.js";

    export default {
        name: 'send',
        components: {},
        props: {
            GetRest: {type: Object}
        },
        directives: {money: VMoney},
        data: function () {
            return {
                myclass: ['modal-send'],
                payment: ['modal-payment'],
                check: config.rutaWeb(check),
                restaurantes: [],
                selectedRes: {},
                pagoMix: [],
                saldoSend: 0,
                miSaldoTotal: 0,
                pxT: 52,
                price: 0.00,
                money: {
                    decimal: ',',
                    thousands: '.',
                    precision: 2,
                    masked: true
                },
                listRestSearch: {
                    filters: []
                },
                transaction: {
                    price: "",
                    typeTransaccion: "envio",
                    mode: "egreso",
                    typeAccount: "",
                    nameAccount: "",
                    nameapp: "web-personas",
                    name: "",
                    uid: "",
                    phone: "",
                    id_comercio: "",
                    id_empresa: "",
                }
            }
        },
        created() {
            console.log(this.GetRest);
            if (this.GetRest.searching === false) {
                var _cate = Object.values(this.GetRest.data.val.categories);
                this.selectedRes = {
                    id: this.GetRest.data.key,
                    name: this.GetRest.data.val.business_name,
                    categoria: _cate[0].name,
                    subcategoria: _cate[0].name_subcategory
                };

                console.log(this.selectedRes);
            }

            EventBus.$on('listRestauranteSearch', (obj) => {
                this.listRestSearch.filters = obj;
            });
        },
        methods: {
            openSearching() {
                if (document.querySelector("#searchRestaurante")) {
                    if (document.querySelector("#searchRestaurante").parentNode.parentNode.classList.contains("boxSeach")) {
                        document.querySelector("#searchRestaurante").parentNode.parentNode.classList.add("searching");
                    }
                }
            },
            disabledCampo(e) {
                e.target.focus = false;
                e.preventDefault();
                return false;
            },
            closeSearching() {
                if (document.activeElement != document.querySelector("#searchRestaurante")) {
                    if (document.querySelector("#searchRestaurante").parentNode.parentNode.classList.contains("boxSeach")) {
                        document.querySelector("#searchRestaurante").parentNode.parentNode.classList.remove("searching");
                    }
                }
            },
            selectRestaurante(e) {
                var _el = e.target;
                document.querySelector("#searchRestaurante").value = _el.getAttribute("data-name");
                this.selectedRes = {
                    id: _el.getAttribute("id").replace("result_", ""),
                    name: _el.getAttribute("data-name"),
                    categoria: _el.getAttribute("data-categoria"),
                    subcategoria: _el.getAttribute("data-subcategoria")
                };

                if (document.querySelector("#searchRestaurante").parentNode.classList.contains("boxSeach")) {
                    document.querySelector("#searchRestaurante").parentNode.classList.remove("searching");
                }
            },
            search(e) {
                var _parent = e.target.parentNode.parentNode;
                var _input = e.target;
                var _boxResult = _parent.children[2];
                var _datas = _boxResult.children;

                if (_parent.classList.contains("boxSeach")) {
                    if (_input.value != "") {
                        _parent.classList.add("searching");
                    }
                }

                for (var el = 0; el < _datas.length; el++) {
                    var dataLower = _datas[el].innerText.toLowerCase();
                    var obj = {data: dataLower};

                    _datas[el].classList.add("d-none");

                    if (_input.value.toLowerCase() === obj.data) {
                        _datas[el].classList.remove('d-none');

                        this.selectedRes = {
                            id: _datas[el].getAttribute("id").replace("result_", ""),
                            name: _datas[el].getAttribute("data-name"),
                            categoria: _datas[el].getAttribute("data-categoria"),
                            subcategoria: _datas[el].getAttribute("data-subcategoria")
                        };
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
            borrarNumber(e) {
                var _box = e.target.parentNode;
                var _input = _box.children[1];

                if (_input) {
                    if (this.price != "0,0") {
                        var fArray = _input.value.split(/(\d)/);
                        var sArray = [];

                        for (var i = 0; i < fArray.length; i++) {
                            if (fArray[i] != "") {
                                sArray.push(fArray[i]);
                            }
                        }

                        sArray.pop();
                        var unirText = "";

                        for (var i2 = 0; i2 < sArray.length; i2++) {
                            unirText = unirText + sArray[i2];
                        }

                        this.price = unirText;

                        // _input.value = unirText;

                        if (_input.value.length > 8) {
                            if (this.pxT < 52) {
                                this.pxT = this.pxT + 6;
                            }

                            _input.setAttribute("style", `font-size: ${this.pxT}px !important; padding-left: 1.45rem !important; padding-right: 2.65rem !important;`);
                        }

                        if (this.price === "0,0") {
                            this.pxT = this.pxT + 6;
                            _input.setAttribute("style", `font-size: ${this.pxT}px !important; padding-left: 1.45rem !important; padding-right: 2.65rem !important;`);
                            e.target.classList.add("d-none");
                            _input.removeAttribute("style");
                        }
                    }

                    if (this.price === "0,0") {
                        e.target.classList.add("d-none");
                        _input.removeAttribute("style");
                    }
                }
            },
            calculadora(e) {
                var _btnClick = e.target.getAttribute("data-btn");
                var _inputSaldo = document.querySelector("#saldoSend");
                var _tBorrar = document.querySelector("#borrarNumber");

                if (_inputSaldo) {
                    if (_btnClick === "1" || _btnClick === "2" || _btnClick === "3" || _btnClick === "4" || _btnClick === "5" || _btnClick === "6" || _btnClick === "7" || _btnClick === "8" || _btnClick === "9" || _btnClick === "," || _btnClick === "0") {
                        this.price += parseInt(_btnClick);
                        // _inputSaldo.value += _btnClick;

                        if (_inputSaldo.value.length > 8) {
                            this.pxT = this.pxT - 6;
                            _inputSaldo.setAttribute("style", `font-size: ${this.pxT}px !important; padding-left: 1.45rem !important; padding-right: 2.65rem !important;`);
                        }

                        if (this.price != "0,0") {
                            if (_tBorrar.classList.contains("d-none")) {
                                _tBorrar.classList.remove("d-none");
                                _inputSaldo.setAttribute("style", "padding-left: 1.45rem !important; padding-right: 2.65rem !important;");
                            }
                        }
                    }
                }
            },
            setAccounts() {
                var _box = document.querySelector("#selectCuenta");
                var _myAccounts = this.$store.getters.user.accounts;
                var _cate = this.selectedRes.categoria.replace("#", "");
                var _businessname = this.selectedRes.name;
                // var _subcate = this.selectedRes.subcategoria.replace("#", "");
                var _m = this.saldoSend.replace(".", "");
                var _miSaldoSend = _m.replace(",", ".");
                this.pagoMix = [];

                var _myAccountsKeys = Object.keys(_myAccounts);
                _myAccounts = Object.values(_myAccounts);

                var otroHTML = {
                    propia: `
                        <div class="checkedRadio__group">
                            <input type="radio" data-radio="propio" id="radio_propio" name="tipoPago" checked>
                            <label for="radio_propio">Propio</label>
                        </div>
                    `,
                    mix: `
                        <div class="checkedRadio__group">
                            <input type="radio" data-radio="mix" id="radio_mix" name="tipoPago">
                            <label for="radio_mix">Mix</label>
                        </div>
                    `
                }

                var _mix = false;
                var _mixChecked = false;

                if (parseFloat(_miSaldoSend) <= parseFloat(_myAccounts[_myAccounts.length - 1].value)) {
                    _box.innerHTML += otroHTML.propia;
                }
                
                for (var i = 0; i < _myAccounts.length; i++) {
                    if (_myAccountsKeys[i].toLowerCase() != "propio") {
                        if ((_myAccounts[i].categorias || _myAccounts[i].establecimientos) &&  _myAccounts[i].value > 0) {
                            if (parseFloat(_miSaldoSend) <= parseFloat(this.miSaldoTotal)) {
                                if (parseFloat(_miSaldoSend) <= parseFloat(_myAccounts[i].value)) {
                                    if (_myAccounts[i].categorias) {
                                        for (var y = 0; y < _myAccounts[i].categorias.length; y++) {
                                            if (_myAccounts[i].categorias[y].nombre.toLowerCase() === _cate.toLowerCase()) {
                                                var html3 = `
                                                    <div class="checkedRadio__group">
                                                        <input type="radio" data-radio="${_myAccounts[i].id_plan}" id="radio_${_myAccounts[i].id_plan}" name="tipoPago">
                                                        <label for="radio_${_myAccounts[i].id_plan}">${_myAccountsKeys[i]}</label>
                                                    </div>
                                                `;
                    
                                                _box.innerHTML += html3;
                                            }
                                        }
                                    }

                                    if (_myAccounts[i].establecimientos) {
                                        for (var b = 0; b < _myAccounts[i].establecimientos.length; b++) {
                                            if (_myAccounts[i].establecimientos[b].business_name.toLowerCase() === _businessname.toLowerCase()) {
                                                var html2 = `
                                                    <div class="checkedRadio__group">
                                                        <input type="radio" data-radio="${_myAccounts[i].id_plan}" id="radio_${_myAccounts[i].id_plan}" name="tipoPago">
                                                        <label for="radio_${_myAccounts[i].id_plan}">${_myAccountsKeys[i]}</label>
                                                    </div>
                                                `;
                    
                                                _box.innerHTML += html2;
                                            }
                                        }
                                    }
                                } else {
                                    if (parseFloat(this.miSaldoTotal) > parseFloat(_miSaldoSend)) {
                                        if (_myAccounts[i].categorias) {
                                            for (var z = 0; z < _myAccounts[i].categorias.length; z++) {
                                                if (_myAccounts[i].categorias[z].nombre.toLowerCase() === _cate.toLowerCase()) {
                                                    this.pagoMix.push({
                                                        name: _myAccountsKeys[i]
                                                    });
                                                }
                                            }
                                        }

                                        if (_myAccounts[i].establecimientos) {
                                            for (var z23 = 0; z23 < _myAccounts[i].establecimientos.length; z23++) {
                                                if (_myAccounts[i].establecimientos[z23].business_name.toLowerCase() === _businessname.toLowerCase()) {
                                                    this.pagoMix.push({
                                                        name: _myAccountsKeys[i]
                                                    });
                                                }
                                            }
                                        }

                                        console.log(this.pagoMix);
                                        _mix = true;
                                    }
                                }
                            } else {
                                if (parseFloat(_myAccounts[i].value) < parseFloat(_miSaldoSend)) {
                                    if (_myAccounts[i].categorias) {
                                        for (var x = 0; x < _myAccounts[i].categorias.length; x++) {
                                            if (_myAccounts[i].categorias[x].nombre.toLowerCase() === _cate.toLowerCase()) {
                                                this.pagoMix.push({
                                                    name: _myAccountsKeys[i]
                                                });
                                            }
                                        }
                                    }

                                    if (_myAccounts[i].establecimientos) {
                                        for (var z2 = 0; z2 < _myAccounts[i].establecimientos.length; z2++) {
                                            if (_myAccounts[i].establecimientos[z2].business_name.toLowerCase() === _businessname.toLowerCase()) {
                                                this.pagoMix.push({
                                                    name: _myAccountsKeys[i]
                                                });
                                            }
                                        }
                                    }

                                    _mix = true;
                                    _mixChecked = true;
                                }
                            }
                        }
                        
                        if (!_myAccounts[i].establecimientos) {
                            for (var y9 = 0; y9 < _myAccounts[i].categorias.length; y9++) {
                                if (_myAccounts[i].categorias[y9].nombre.toLowerCase() === _cate.toLowerCase()) {
                                    if (_myAccounts[i].value === 0) {
                                        _mix = false;
                                    }
                                }
                            }
                        } else {
                            for (var i9 = 0; i9 < _myAccounts[i].establecimientos.length; i9++) {
                                if (_myAccounts[i].establecimientos[i9].business_name.toLowerCase() === _businessname.toLowerCase()) {
                                    if (_myAccounts[i].value === 0) {
                                        _mix = false;
                                    }
                                }
                            }
                        }
                    }
                }

                if (_mix === true) {
                    _box.innerHTML += otroHTML.mix;

                    if (_mixChecked === true) {
                        document.querySelector("#radio_mix").checked = true;
                    }
                }
            },
            enviarSaldo() {
                var _uid = this.$store.getters.uid;
                if (_uid != "" || _uid != null || _uid != undefined) {
                    this.$store.commit("loading");
                    var _myAccountsKeys = [];
                    var _myAccounts = [];
                    var accountActual = this.$store.getters.user.accounts;
                    
                    var _idRes = this.selectedRes.id;
                    var _m = this.saldoSend.replace(".", "");
                    var _monto = _m.replace(",", ".");
                    var _allRadiosTypePago = document.querySelectorAll("[name='tipoPago']");
                    // var _typePago = "";
                    var _dataradio = "";
                    _allRadiosTypePago.forEach(el => {
                        if (el.checked === true) {
                            // _typePago = el;
                            _dataradio = el.getAttribute("data-radio");
                        }
                    });

                    this.transaction.name = this.$store.getters.user.name + " " + this.$store.getters.user.lastname;
                    this.transaction.uid = this.$store.getters.user.key;
                    this.transaction.phone = this.$store.getters.user.phone;
                    this.transaction.id_comercio = _idRes;

                    api.get(`restaurante/${_idRes}`).then(res => {
                        var _balanceResActual = 0;
                        _balanceResActual = parseFloat(res.balance);
                        var sendMonto = _balanceResActual + parseFloat(_monto);

                        if (_dataradio === "propio") {
                            api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto}).then(res => {
                                if (res.msg === "OK") {
                                    if (parseFloat(_monto) <= parseFloat(accountActual.propio.value)) {
                                        accountActual.propio.value = parseFloat(accountActual.propio.value) - parseFloat(_monto);
                                        this.transaction.typeAccount = accountActual.propio.type;
                                        this.transaction.nameAccount = accountActual.propio.name;
                                        this.transaction.price = _monto;
                                    }

                                    api.put('update/saldo/propia/', {id: _uid, data: accountActual}).then(res => {
                                        console.log(res);
                                        console.log("se envio el dinero con exito.");
                                        
                                        api.post('transactions/add', this.transaction).then(res => {
                                            console.log("Transaction -> ", res);
                                            document.querySelector("#pagoExitoso").click();
                                            this.stopLoader();
                                        }).catch(err => {
                                            console.log(err);
                                            this.stopLoader();
                                        });

                                        this.stopLoader();
                                    }).catch(err => {
                                        console.log(err);
                                        this.stopLoader();
                                    });
                                } else {
                                    console.log("Ocurrio un problema.");
                                    api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto - parseFloat(_monto)});
                                    this.stopLoader();
                                    return false;
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                        }

                        if (_dataradio != "propio" && _dataradio != "mix") {
                            console.log("Otras cuentas.");
                            _myAccountsKeys = Object.keys(accountActual);
                            _myAccounts = Object.values(accountActual);
                            for (var i = 0; i < _myAccounts.length; i++) {
                                if (_myAccountsKeys[i].toLowerCase() != "propio") {
                                    if (_myAccounts[i].id_plan === _dataradio) {
                                        if (parseFloat(_monto) <= parseFloat(accountActual[`${_myAccountsKeys[i]}`].value)) {
                                            accountActual[`${_myAccountsKeys[i]}`].value = parseFloat(accountActual[`${_myAccountsKeys[i]}`].value) - parseFloat(_monto);
                                            this.transaction.typeAccount = accountActual[`${_myAccountsKeys[i]}`].type;
                                            this.transaction.nameAccount = accountActual[`${_myAccountsKeys[i]}`].name;
                                            this.transaction.price = _monto;
                                        } else {
                                            console.log("El monto es insuficiente, le recomendamos pago mix.");
                                        }

                                        api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto}).then(res => {
                                            if (res.msg === "OK") {
                                                if (parseFloat(_monto) <= parseFloat(accountActual.propio.value)) {
                                                    accountActual.propio.value = parseFloat(accountActual.propio.value) - parseFloat(_monto);
                                                }

                                                api.put('update/saldo/propia/', {id: _uid, data: accountActual}).then(res => {
                                                    console.log(res);
                                                    console.log("se envio el dinero con exito.");

                                                    api.post('transactions/add', this.transaction).then(res => {
                                                        console.log("Transaction -> ", res);
                                                        document.querySelector("#pagoExitoso").click();
                                                        this.stopLoader();
                                                    }).catch(err => {
                                                        console.log(err);
                                                        this.stopLoader();
                                                    });
                                                    
                                                    this.stopLoader();
                                                }).catch(err => {
                                                    console.log(err);
                                                    this.stopLoader();
                                                });
                                            } else {
                                                console.log("Ocurrio un problema.");
                                                api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto - parseFloat(_monto)});
                                                this.stopLoader();
                                                return false;
                                            }
                                        }).catch(err => {
                                            console.log(err);
                                            this.stopLoader();
                                        });
                                    }
                                }
                            }
                        }

                        if (_dataradio === "mix") {
                            var _accountsMixs = this.pagoMix;

                            api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto}).then(res => {
                                if (res.msg === "OK") {
                                    if (parseFloat(_monto) <= parseFloat(accountActual.propio.value)) {
                                        var montoFirst = 0;
                                        var miMonto = _monto;
                                        var resto = 0;
                                        for (var w = 0; w < _accountsMixs.length; w++) {
                                            var n = parseFloat(accountActual[_accountsMixs[w].name].value);
                                            var n2 = montoFirst == 0 ? parseFloat(miMonto) : ((resto * resto)**0.5);
                                            var total = n - n2;

                                            if (total < 0) {
                                                accountActual[_accountsMixs[w].name].value = 0;
                                                resto = parseFloat(total);
                                            } else {
                                                accountActual[_accountsMixs[w].name].value = ((total * total)**0.5);
                                                resto = parseFloat(total);

                                                if (total > 0) {
                                                    miMonto = 0;
                                                }
                                            }

                                            montoFirst = montoFirst + 1;
                                            miMonto = miMonto - ((resto * resto)**0.5);
                                        }

                                        resto = ((resto * resto)**0.5);
                                        if (miMonto > 0) {
                                            accountActual.propio.value = parseFloat(accountActual.propio.value) - parseFloat(resto);
                                        }
                                    }

                                    api.put('update/saldo/propia/', {id: _uid, data: accountActual}).then(res => {
                                        console.log(res);
                                        console.log("se envio el dinero con exito.");

                                        document.querySelector("#pagoExitoso").click();
                                        this.stopLoader();
                                    }).catch(err => {
                                        console.log(err);
                                    });
                                } else {
                                    console.log("Ocurrio un problema.");
                                    api.put('restaurante/send/saldo/', {idRes: _idRes, balance: sendMonto - parseFloat(_monto)});
                                    return false;
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                }
            },
            Pay() {
                var _myAccounts = this.$store.getters.user.accounts;
                console.log(_myAccounts);
                var _keys = Object.keys(_myAccounts);
                _myAccounts = Object.values(_myAccounts);
                var _cate = "";
                var _myBalanceTotal = 0;

                if (this.GetRest.searching === false) {
                    if (document.querySelector("#searchRestaurante").innerText != "") {
                        _cate = this.selectedRes.categoria.replace("#", "");

                        for (var i2 = 0; i2 < _myAccounts.length; i2++) {
                            if (_keys[i2].toLowerCase() != "propio") {
                                if (_myAccounts[i2].categorias && _myAccounts[i2].value > 0) {
                                    for (var y2 = 0; y2 < _myAccounts[i2].categorias.length; y2++) {
                                        if (_myAccounts[i2].categorias[y2].nombre.toLowerCase() === _cate.toLowerCase()) {
                                            _myBalanceTotal = _myBalanceTotal + parseFloat(_myAccounts[i2].value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (this.GetRest.searching === true) {
                    if (document.querySelector("#searchRestaurante").value != "") {
                        _cate = this.selectedRes.categoria.replace("#", "");

                        for (var i = 0; i < _myAccounts.length; i++) {
                            if (_keys[i].toLowerCase() != "propio") {
                                if (_myAccounts[i].categorias && _myAccounts[i].value > 0) {
                                    for (var y = 0; y < _myAccounts[i].categorias.length; y++) {
                                        if (_myAccounts[i].categorias[y].nombre.toLowerCase() === _cate.toLowerCase()) {
                                            _myBalanceTotal = _myBalanceTotal + parseFloat(_myAccounts[i].value);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (document.querySelector("#searchRestaurante").value === "") {
                        document.querySelector("[data-error='searchRestaurante']").innerText = "Debes buscar un restaurante.";
                        document.querySelector("[data-error='searchRestaurante']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='searchRestaurante']").innerText = "";
                            document.querySelector("[data-error='searchRestaurante']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }
                }

                if (document.querySelector("#saldoSend").value === "") {
                    document.querySelector("[data-error='saldoSend']").innerText = "Debes ingresar una cantidad.";
                    document.querySelector("[data-error='saldoSend']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='saldoSend']").innerText = "";
                        document.querySelector("[data-error='saldoSend']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                _myBalanceTotal = _myBalanceTotal + parseFloat(this.$store.getters.user.accounts.propio.value);
                if (parseFloat(document.querySelector("#saldoSend").value.replace(",", ".")) > parseFloat(_myBalanceTotal)) {
                    document.querySelector("[data-error='saldoSend']").innerText = `El saldo es insuficiente. su monto actual es de: ${_myBalanceTotal.toFixed(2)}€`;
                    document.querySelector("[data-error='saldoSend']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='saldoSend']").innerText = "";
                        document.querySelector("[data-error='saldoSend']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (this.GetRest.searching === false) {
                    if (document.querySelector("#searchRestaurante").innerText != "" && document.querySelector("#saldoSend").value != "" && parseFloat(document.querySelector("#saldoSend").value.replace(",", ".")) <= parseFloat(_myBalanceTotal)) {
                        this.miSaldoTotal = _myBalanceTotal;
                        this.saldoSend = document.querySelector("#saldoSend").value;
                        this.price = 0.00;
    
                        this.$refs['modal-send'].hide();
                        this.$refs['modal-payment'].show();
    
                        setTimeout(() => {
                            this.setAccounts();
                        }, 950);
                    }
                }

                if (this.GetRest.searching === true) {
                    if (document.querySelector("#searchRestaurante").value != "" && document.querySelector("#saldoSend").value != "" && parseFloat(document.querySelector("#saldoSend").value.replace(",", ".")) <= parseFloat(_myBalanceTotal)) {
                        this.miSaldoTotal = _myBalanceTotal;
                        this.saldoSend = document.querySelector("#saldoSend").value;
                        this.price = 0.00;
    
                        this.$refs['modal-send'].hide();
                        this.$refs['modal-payment'].show();
    
                        setTimeout(() => {
                            this.setAccounts();
                        }, 950);
                    }
                }
            },
            stopLoader() { this.$store.commit("notLoading"); },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .checkedRadio__group {
        width: 30% !important;
        margin-bottom: 0 !important;

        input {
            display: none !important;
        }

        label {
            background: transparent !important;
            text-align: center !important;
            display: block !important;
            margin-bottom: 0 !important;
            padding: 4px !important;
            color: var(--bluePrimary) !important;
            cursor: pointer !important;
        }

        input[type=radio]:checked + label {
            background-color: var(--blue-opacity) !important;
            color: #fff !important;
        }
    }

    .checkedRadio {
        width: max-content;
        
        .selectCenter {
            width: max-content !important;

            .checkedRadio__group {
                width: max-content !important;
            }
        }
    }

    // boxSearch
    .boxSeach {
        position: relative;
        width: 100%;
        height: max-content;

        .form-control.search {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            outline: none;
            border: none;
            box-shadow: none;
            text-transform: uppercase !important;

            transition: all .15s ease-in-out;
            padding-right: 2.2rem;

            &:focus {
                outline: none;
                border: none;
                box-shadow: none;
            }
        }

        &__result {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #fff;
            z-index: 100;
            height: max-content;
            max-height: 292px;
            padding: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            overflow: hidden;
            overflow-y: auto;

            p.result {
                display: block;
                margin: 0;
                width: 100%;
                height: max-content;
                padding: .5rem 1rem;
                border-bottom: 1px solid rgba(0,0,0,.25);
                text-transform: uppercase !important;
                transition: all .15s ease-in-out;
                cursor: pointer;

                &:hover {
                    background: rgba(0,0,0,.15);
                }

                &:last-child {
                    border-bottom: none;
                }
            }
        }

        &.searching {
            .boxSeach__result {
                display: block;
            }

            .form-control.search {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;

                &:focus {
                    border-bottom: 1px solid rgba(0,0,0,.25);
                }
            }
        }
    }

    // send modal
    .boxCalculate{
        .search{
            border-radius: 0;
            border: 1px solid #d1d1d1;
            text-align: center;
            color: var(--text-color);
            &:focus{
                box-shadow: none;
                border-color:#89addc;
            }
            &::placeholder{
                text-align: center;
            }
        }

        .priceText{
            position: relative;
            margin: 10px -15px 0;
            padding: 0 15px;
            border-bottom: 1px dashed #fff;
            span{
                position: absolute;
                left: 15px;
                top: 20px;
                font-size: 26px;
                color: #fff;
            }
            input{
                background: transparent;
                border: none;
                box-shadow: none;
                color: transparent !important;
                text-shadow: 0 0 0 #fff !important;
                text-align: center;
                font-size: 52px;
                padding: 0;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
                height: 93px !important;

                &:focus{
                    box-shadow: none;
                    border-color:#89addc;
                    outline: none !important;
                }
                &::placeholder{
                    text-align: center;
                    color: #fff;
                    opacity: .7;
                    font-size: 52px;
                }
            }
            &__borrarNumber {
                position: absolute;
                top: 55%;
                right: 1.05rem;
                transform: translate(0, -50%);
                display: block;
                height: 55%;
                object-fit: contain;
                object-position: center center;
                cursor: pointer;
            }
        }

        .d-flex{
            flex-wrap: wrap;
            .btn{
                width: 33.3%;
                height: 60px;
                color: #fff;
                font-size: 28px;
                img{
                    transform: scale(1.3);
                    height: 100%;
                }
            }
        }
    }
    //modal tipo pago
    .boxPago{
        .title{
            color: var(--bluePrimary);
            text-align: center;
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 15px;
        }
        .box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 10px auto 0;

            .form-group{
                width: 30%;
                margin-bottom: 0;
                input{
                    display: none;
                }
                label{
                    background: transparent;
                    text-align: center;
                    display: block;
                    margin-bottom: 0;
                    padding: 4px;   
                    color: var(--bluePrimary);
                    cursor: pointer;
                }
                input[type="radio"]:checked+label{
                    background-color: var(--blue-opacity);
                    color: #fff;
                } 
            }

        }
        .boxPrice {
            margin: 2rem 0 2.5rem;
            text-align: center;
            
            p {
                margin: 0;
                text-align: center;
                color: #9d8755;
                font-size: 52px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span{
                    font-size: 32px;
                }
            }
            .name {
                text-align: center;
                color: var(--bluePrimary);
                font-size: 20px;
                font-weight: normal;
                text-transform: uppercase;
            }
        }
        .footer{
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            button{
                color: #fff;
                width: 45%;
                border-radius: 0;
            }
            .btn-confirmar{
                background-color: var(--blue)
            }
            .btn-cancelar{
                background-color: var(--blue-opacity)
            }
        }
    }

    .modal-payment .modal-dialog {
        max-width: 450px !important;
    }

    .input-search {
        position: relative;
        width: 100%;
        height: max-content;

        &__icon {
            position: absolute;
            top: 50%;
            right: .75rem;
            transform: translate(0, -50%);
            display: block;
            height: 65%;
            object-fit: contain;
            object-position: center center;
        }
    }
</style>