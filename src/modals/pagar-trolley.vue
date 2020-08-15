<template>
    <div>
        <b-modal v-bind="GetTrolley" centered :modal-class="payment" id="modal-payment-2" ref="modal-payment-2"  hide-footer hide-header>  
            <div class="boxPago2">
                <div class="x" v-for="(t, i) in this.GetTrolley.data" :key="i">
                    <h5 class="title">Selecciona un tipo de pago</h5>
                    <div class="box checkedRadio" :id="'selectCuenta_' + t.id_comercio">
                        <div v-for="(c, y) in t.cuentas" :key="y" class="checkedRadio__group">
                            <input v-if="c.name === 'propio'" type="radio" :data-idcomercio="`${t.id_comercio}`" :data-radio="`${c.name}_${t.id_comercio}`" :id="`radio_${c.name}_${t.id_comercio}`" :name="`tipoPago_${t.id_comercio}`" checked>
                            <label v-if="c.name === 'propio'" :for="`radio_${c.name}_${t.id_comercio}`">{{ c.name }}</label>

                            <input v-if="c.name != 'propio' && c.name != 'mix'" type="radio" :data-idcomercio="`${t.id_comercio}`" :data-radio="`${c.id_plan}_${t.id_comercio}`" :id="`radio_${c.id_plan}_${t.id_comercio}`" :name="`tipoPago_${t.id_comercio}`">
                            <label v-if="c.name != 'propio' && c.name != 'mix'" :for="`radio_${c.id_plan}_${t.id_comercio}`">{{ c.name }}</label>

                            <input v-if="c.name === 'mix'" type="radio" :data-idcomercio="`${t.id_comercio}`" :data-radio="`${c.name}_${t.id_comercio}`" :id="`radio_${c.name}_${t.id_comercio}`" :name="`tipoPago_${t.id_comercio}`">
                            <label v-if="c.name === 'mix'" :for="`radio_${c.name}_${t.id_comercio}`">{{ c.name }}</label>
                        </div>
                    </div>
                    <div class="boxPrice">
                        <p>Sub Total: {{ t.total | money }}€</p>
                        <p v-for="pr in price.iva" :key="pr.id_c"><span v-if="pr.id_c === t.id_comercio">IVA: {{ pr.porcentaje }}%: <span>{{ pr.monto | money }}€</span></span></p>
                        <h5 class="name">{{ getComercio(t.id_comercio) }}</h5>
                    </div>
                </div>
                
                <div class="footer">
                    <button class="btn btn-confirmar" @click="enviarSaldo">Confirmar</button>
                    <button class="btn btn-cancelar" @click="$bvModal.hide('modal-payment-2')">Cancelar</button>
                </div>
            </div>
        </b-modal>

        <button type="button" :id="'successPago_'" @click="$bvModal.hide('modal-payment-2'), $bvModal.hide('modal-trolley')" v-b-modal="'modal-successPago_'" style="display: none;"></button>
        <b-modal modal-class="modal-alertdr" centered :id="'modal-successPago_'" :ref="'modal-successPago_'"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img style="width: 150px; margin-bottom: 1rem;" :src="checkimg" alt="">
                <h3>¡Éxito!</h3>
                <p>El pago fue elavorado éxitosamente.</p>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    import check from '../assets/img/icons/check-blanco.svg';
    // -> IMAGE STATIC
    import checkimg from "../assets/img/icons/check.svg";
    import { EventBus } from "../main.js";
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
                checkimg: checkimg,
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
            enviarSaldo() {
                this.$store.commit("loading");
                var _btn = document.querySelector("#successPago_");
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

                _allRadiosTypePago.forEach(el => {
                    if (el.checked === true) {
                        _dataradio.push(el.getAttribute("data-radio"));
                        _idActual.push(el.getAttribute("data-idcomercio"));
                    }
                });

                for (var i = 0; i < _pago.carritos.length; i++) {
                    console.log(_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, ""), _idActual[i], _pago.carritos[i].id_comercio);

                    if (_idActual[i] === _pago.carritos[i].id_comercio) {
                        if (_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "") === "propio") {
                            _pago.carritos[i].typeAccount = String(accountActual[_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "")].type);
                            _pago.carritos[i].nameAccount = accountActual[_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "")].name;
                        }
    
                        if (_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "") != "propio" && _dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "") != "mix") {
                            _myAccountsKeys = Object.keys(accountActual);
                            _myAccounts = Object.values(accountActual);
                            for (var i2 = 0; i2 < _myAccounts.length; i2++) {
                                if (_myAccountsKeys[i2].toLowerCase() != "propio") {
                                    if (_myAccounts[i2].id_plan === _dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "")) {
                                        _pago.carritos[i].typeAccount = String(accountActual[`${_myAccountsKeys[i2]}`].type);
                                        _pago.carritos[i].nameAccount = accountActual[`${_myAccountsKeys[i2]}`].name;
                                    }
                                }
                            }
                        }

                        if (_dataradio[i].replace(`_${_pago.carritos[i].id_comercio}`, "") === "mix") {
                            _pago.carritos[i].typeAccount = "0";
                            _pago.carritos[i].nameAccount = "mix";
                        }
                    }
                }

                console.log("Pagando -> ", _pago);
                axios.post("https://myraus.com:8282/api/orders/add-y-pago", _pago).then(res => {
                    console.log(res);
                    this.stopLoader();
                    if (_btn) {
                        EventBus.$emit("TrolleyPagado", {ok: "OK"});
                        _btn.click();
                    }
                }).catch(err => {
                    console.log(err);
                    this.stopLoader();
                });
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