<template>
    <div>
        <b-modal v-bind="GetTrolley" centered :modal-class="myclass" id="modal-send-2" ref="modal-send-2"  hide-footer hide-header>  
            <div class="boxCalculate2">
                <p class="title-pago-trolley">Monto a pagar</p>
                <div class="priceText2">
                    <span>€</span>
                    <p id="saldoSend" class="form-control">{{ price.total | money }}</p>
                    <button class="btn-next" type="button"><img class="img-fluid" :src="check" alt="" @click="Pay"></button>
                </div>
            </div>
        </b-modal>
        
         <b-modal centered :modal-class="payment" id="modal-payment-2" ref="modal-payment-2"  hide-footer hide-header>  
            <div class="boxPago2">
                <div class="x" v-for="(t, i) in this.GetTrolley.data" :key="i">
                    <h5 class="title">Selecciona un tipo de pago</h5>
                    <div class="box checkedRadio" :id="'selectCuenta_' + t.id_comercio"></div>
                    <div class="boxPrice">
                        <p>Sub Total: {{ t.total | money }}€</p>
                        <p v-for="pr in price.iva" :key="pr.id_c"><span v-if="pr.id_c === t.id_comercio">IVA: {{ pr.porcentaje }}%: <span>{{ pr.monto | money }}€</span></span></p>
                        <h5 class="name">{{ getComercio(t.id_comercio) }}</h5>
                    </div>
                </div>
                
                <div class="footer">
                    <button class="btn btn-confirmar" @click="enviarSaldo">Confirmar</button>
                    <button class="btn btn-cancelar" @click="$bvModal.hide('modal-payment-2')">Cancelar</button>
                    <button type="button" @click="$bvModal.hide('modal-payment-2')" id="pagoExitoso" style="display: none;"></button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    import check from '../assets/img/icons/check-blanco.svg';
    // import api from "../api.js";
    // import funciones from "../funciones.js";
    // import { EventBus } from "../main.js";
    import moment from "moment";
    import axios from "axios";

    export default {
        name: 'pagar-trolley',
        components: {},
        props: {
            GetTrolley: {type: Object}
        },
        data: function () {
            return {
                myclass: ['modal-send-2'],
                payment: ['modal-payment-2'],
                check: config.rutaWeb(check),
                selectedRes: [],
                pagoMix: [],
                saldoSend: 0,
                miSaldoTotal: [],
                pxT: 52,
                price: {
                    iva: [],
                    subTotal: 0.00,
                    total: 0.00
                },
                listRestSearch: {
                    filters: []
                },
                listSubTotal: [],
            }
        },
        async created() {
            this.price = await this.GetTrolley.price;
            console.log("PAGO TROLLEY", this.price);
        },
        methods: {
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
            getCategoria(id_comercio) {
                let _name = "";
                let _values = this.$store.getters.listRestaurantes.all;

                for (var i = 0; i < _values.length; i++) {
                    for (var y = 0; y < _values[i].length; y++) {
                        if (id_comercio === _values[i][y].key) {
                            _name = _values[i][y].data.categories;
                        }
                    }
                }

                return _name;
            },
            setAccounts() {
                this.GetTrolley.data.forEach(item => {
                    var _box = document.querySelector("#selectCuenta_" + item.id_comercio);
                    var _myAccounts = this.$store.getters.user.accounts;
                    var categories = Object.values(this.getCategoria(item.id_comercio));
                    var _cate = categories.length ? categories[0].name.replace("#", "") : "";
                    var _businessname = this.getComercio(item.id_comercio);
                    var _miSaldoSend = "";
                    
                    this.price.iva.forEach(p => {
                        _miSaldoSend = parseFloat(item.total) + parseFloat(p.monto);
                    });

                    console.log(_miSaldoSend);
                    this.miSaldoTotal = parseFloat(_miSaldoSend) + parseFloat(this.miSaldoTotal);

                    this.pagoMix = [];
    
                    var _myAccountsKeys = Object.keys(_myAccounts);
                    _myAccounts = Object.values(_myAccounts);
    
                    var otroHTML = {
                        propia: `
                            <div class="checkedRadio__group">
                                <input type="radio" data-idcomercio="${item.id_comercio}" data-radio="propio_${item.id_comercio}" id="radio_propio_${item.id_comercio}" name="tipoPago_${item.id_comercio}" checked>
                                <label for="radio_propio_${item.id_comercio}">Propio</label>
                            </div>
                        `,
                        mix: `
                            <div class="checkedRadio__group">
                                <input type="radio" data-idcomercio="${item.id_comercio}" data-radio="mix_${item.id_comercio}" id="radio_mix_${item.id_comercio}" name="tipoPago_${item.id_comercio}">
                                <label for="radio_mix_${item.id_comercio}">Mix</label>
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
                                if (parseFloat(_miSaldoSend) <= parseFloat(_myAccounts[i].value)) {
                                    if (parseFloat(_miSaldoSend) <= parseFloat(_myAccounts[i].value)) {
                                        if (_myAccounts[i].categorias) {
                                            for (var y = 0; y < _myAccounts[i].categorias.length; y++) {
                                                if (_myAccounts[i].categorias[y].nombre.toLowerCase() === _cate.toLowerCase()) {
                                                    var html3 = `
                                                        <div class="checkedRadio__group">
                                                            <input type="radio" data-idcomercio="${item.id_comercio}" data-radio="${_myAccounts[i].id_plan}_${item.id_comercio}" id="radio_${_myAccounts[i].id_plan}_${item.id_comercio}" name="tipoPago_${item.id_comercio}">
                                                            <label for="radio_${_myAccounts[i].id_plan}_${item.id_comercio}">${_myAccountsKeys[i]}</label>
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
                                                            <input type="radio" data-idcomercio="${item.id_comercio}" data-radio="${_myAccounts[i].id_plan}_${item.id_comercio}" id="radio_${_myAccounts[i].id_plan}_${item.id_comercio}" name="tipoPago_${item.id_comercio}">
                                                            <label for="radio_${_myAccounts[i].id_plan}_${item.id_comercio}">${_myAccountsKeys[i]}</label>
                                                        </div>
                                                    `;
                        
                                                    _box.innerHTML += html2;
                                                }
                                            }
                                        }
                                    } else {
                                        if (parseFloat(_myAccounts[i].value) > parseFloat(_miSaldoSend)) {
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
                            document.querySelector("#radio_mix_" + item.id_comercio).checked = true;
                        }
                    }
                });
            },
            enviarSaldo() {
                this.$store.commit("loading");
                var accountActual = this.$store.getters.user.accounts;
                var _myAccounts, _myAccountsKeys;
                var _pago = {
                    id_cliente: this.$store.getters.uid,
                    appname: "web-personas",
                    date: moment(new Date()).format("YYYY-MM-DD"),
                    time: moment(new Date()).format("HH:mm"),
                    carritos: this.GetTrolley.data
                }

                var _allRadiosTypePago = document.querySelectorAll(`[name*='tipoPago_']`);
                var _idActual = [];
                var _dataradio = [];
                for (var i = 0; i < _pago.carritos.length; i++) {
                    _allRadiosTypePago.forEach(el => {
                        if (el.checked === true) {
                            _dataradio.push(el.getAttribute("data-radio").replace(`_${_pago.carritos[i].id_comercio}`, ""));
                            _idActual.push(el.getAttribute("data-idcomercio"));
                        }
                    });

                    if (_idActual[i] === _pago.carritos[i].id_comercio) {
                        if (_dataradio[i] === "propio") {
                            _pago.carritos[i].typeAccount = String(accountActual[_dataradio[i]].type);
                            _pago.carritos[i].nameAccount = accountActual[_dataradio[i]].name;
                        }
    
                        if (_dataradio[i] != "propio" && _dataradio[i] != "mix_" + _pago.carritos[i].id_comercio) {
                            _myAccountsKeys = Object.keys(accountActual);
                            _myAccounts = Object.values(accountActual);
                            for (var i2 = 0; i2 < _myAccounts.length; i2++) {
                                if (_myAccountsKeys[i2].toLowerCase() != "propio") {
                                    if (_myAccounts[i2].id_plan === _dataradio[i]) {
                                        _pago.carritos[i].typeAccount = String(accountActual[`${_myAccountsKeys[i2]}`].type);
                                        _pago.carritos[i].nameAccount = accountActual[`${_myAccountsKeys[i2]}`].name;
                                    }
                                }
                            }
                        }

                        if (_dataradio[i] === "mix_" + _pago.carritos[i].id_comercio) {
                            _pago.carritos[i].typeAccount = "0";
                            _pago.carritos[i].nameAccount = "mix";
                        }
                    }
                }

                console.log("Pagando -> ", _pago);
                axios.post("https://myraus.com:8282/api/orders/add-y-pago", _pago).then(res => {
                    console.log(res);
                    this.stopLoader();
                }).catch(err => {
                    console.log(err);
                    this.stopLoader();
                });
            },
            Pay() {
                this.$refs['modal-send-2'].hide();
                this.$refs['modal-payment-2'].show();

                setTimeout(() => {
                    this.setAccounts();
                }, 950);
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

    // send modal
    .boxCalculate2{
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

        .priceText2{
            position: relative;
            margin: 10px -15px 0;
            padding: 0 15px;
            // border-bottom: 1px dashed #fff;
            span{
                position: absolute;
                left: 15px;
                top: 20px;
                font-size: 26px;
                color: #fff;
            }
            .form-control {
                background: transparent;
                border: none;
                box-shadow: none;
                color: transparent !important;
                text-shadow: 0 0 0 #fff !important;
                text-align: center;
                font-size: 52px;
                margin: 0;
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
    .boxPago2{
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
                font-size: 1.25rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span{
                    font-size: 1.25rem;
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

    .modal-payment-2 .modal-dialog {
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

    .btn-next {
        position: absolute;
        top: 50%;
        right: -5px;
        transform: translate(0, -50%);
        width: 60px;
        height: 60px;
        background: transparent;
        border: none;
        box-shadow: none;
        outline: none;

        img {
            display: block;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center center;
        }
    }

    .title-pago-trolley {
        font-size: 1.5rem;
        color: #ffffff;
        margin: 0;
        padding: 0;
        border-bottom: 1px dashed #fff;
        padding-bottom: 1.25rem;
    }
</style>

<style lang="scss">
    .modal-send-2 .modal-dialog {
        width: 90%;
        max-width: 320px;
        margin: auto;
    }

    .modal-send-2 .modal-dialog .modal-content {
        background-color: #77afde;
        border-radius: 0;
    }
</style>