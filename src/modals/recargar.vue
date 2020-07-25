<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-recargar" ref="modal-recargar"  hide-footer hide-header>  
           <div class="bodyRecargar">
               <h5 class="titleRecargar"><img class="img-fluid" :src="agregar" alt="">Agregar saldo</h5>
               <div class="boxInput">
                   <span>€</span>
                   <input type="text" autocomplete="off" v-money="money" id="rSaldo" class="form-control" placeholder="0,00">
                   <p data-error="rSaldo" class="msgError d-none">*msgError</p>
               </div>
               <div class="tarjetas">
                   <h5 class="title">Seleccionar tarjeta o cuenta</h5>
                   <div v-for="targeta in this.listCreditCard" :key="'targeta_'+targeta.id" :id="'targeta_'+targeta.id" class="datosTarjetas mb-1">
                        <div class="d-flex justify-content-between dates" @click="loadRecarga(targeta.id_delete)" v-bind:class="{ 'active': active == targeta.id }" >
                           <h5 class="mb-0">{{ targeta.nombre }}</h5>
                           <h5 class="mb-0">*******{{ targeta.numero.substr(targeta.numero.length - 4) }}</h5>
                        </div>    
                        <button :id="'delete_'+targeta.id" class="btn" @click="deleteCreditCard(targeta.id_delete)">
                            <img class="img-fluid" :src="close" alt="">
                        </button>
                    </div>
                    <button id="showModalFinal" @click="$bvModal.hide('modal-recargar')" v-b-modal.modal-recargar-aviso style="display: none;"></button>
                </div>
                <button class="btn btnAgregar" v-on:click="formShow = !formShow">
                    <img :src="tarjeta" alt="">
                    Agregar tarjeta o cuenta
                </button>
                <div class="boxFormulario" v-if="formShow">
                   <form @submit.prevent>
                       <div class="row m-0">
                           <div class="col-12 p-0">
                                <div class="form-group">
                                    <input type="text" id="name" maxlength="16" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" onkeydown="return funciones.campoNumber(event);" class="form-control" placeholder="Tarjeta número / cuenta número" autocomplete="off">
                                    <p data-error="name" class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-3 p-0">
                                <div class="form-group">
                                    <select id="mes" class="form-control">
                                        <option value="" disabled selected class="d-none">Mes exp</option>
                                        <option value="Enero">Enero</option>
                                        <option value="Febrero">Febrero</option>
                                        <option value="Marzo">Marzo</option>
                                        <option value="Abril">Abril</option>
                                        <option value="Mayo">Mayo</option>
                                        <option value="Junio">Junio</option>
                                        <option value="Julio">Julio</option>
                                        <option value="Agosto">Agosto</option>
                                        <option value="Septiembre">Septiembre</option>
                                        <option value="Octubre">Octubre</option>
                                        <option value="Noviembre">Noviembre</option>
                                        <option value="Diciembre">Diciembre</option>
                                    </select>
                                    <p data-error="mes" class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-3 p-0">
                                <div class="form-group">
                                    <select id="year" class="form-control">
                                        <option value="" disabled selected class="d-none">Año exp</option>
                                        <option v-for="y in this.listYear" :key="y.year" :value="y.year">{{ y.year }}</option>
                                    </select>
                                    <p data-error="year" class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-6 p-0">
                                <div class="form-group">
                                    <input type="text" id="cvc" class="form-control" maxlength="3" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" onkeydown="return funciones.campoNumber(event);" placeholder="CVC" autocomplete="off">
                                    <p data-error="cvc" class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-12 p-0">
                                <div class="form-group">
                                    <input type="text" id="nametarget" class="form-control" placeholder="Nombre en tarjeta" autocomplete="off">
                                    <p data-error="nametarget" class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-12">
                               <div class="d-flex justify-content-center footer-btn">
                                    <button type="button" class="btn" @click="$bvModal.hide('modal-recargar'), $bvModal.show('menu-modal')">Volver</button>
                                    <button type="button" @click="asignarUser" class="btn">Agregar</button>
                               </div>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
        </b-modal>
        <b-modal :modal-class="myclass2" centered  id="modal-recargar-aviso" ref="modal-recargar-aviso"  hide-footer hide-header>  
            <div class="d-block text-center">
                <h3>Agregar</h3>
                <p id="MontoShow" class="Monto">{{ this.saldo }}€</p>
                <h3>A tu saldo Raus</h3>
                <div style="margin-top: 1rem;" class="d-flex justify-content-center footer-btn">
                    <button type="button" @click="recargar" class="btn recargarFinal">Confirmar</button>
                    <button type="button" class="btn recargarFinal" @click="cancelarTransaccion, $bvModal.hide('modal-recargar-aviso')">Cancelar</button>
                </div>
                <button type="button" @click="$bvModal.hide('modal-recargar-aviso')" id="recargaExitosa" style="display: none;"></button>
            </div>
        </b-modal>
    </div>
</template>
<script>
    import {VMoney} from 'v-money';
    import config from "../config.js";
    /* Images */
    import agregar from '../assets/img/icons/menu/agregarazul.svg';
    import close from '../assets/img/icons/close.svg';
    import tarjeta from '../assets/img/icons/iconotarjetag.svg';
    import api from "../api.js";
    import * as firebase from "firebase";

    export default {
        name: 'recargar',
        components: {},
        directives: {money: VMoney},
        data: function () {
            return {
                myclass: ['modal-recargar'],
                myclass2: ['modal-recargar-aviso'],
                agregar: config.rutaWeb(agregar),
                tarjeta: config.rutaWeb(tarjeta),
                close: config.rutaWeb(close),
                active: '',
                formShow: false,
                saldo: "0",
                listAccountsActual: {},
                listYear: [],
                listCreditCard: [],
                newCreditCard: {
                    cvc: "",
                    fechaExp: "",
                    id: "",
                    nombre: "",
                    numero: "",
                    yearExp: ""
                },
                money: {
                    decimal: ',',
                    thousands: '.',
                    precision: 2,
                    masked: false
                },
                tranRecarga: {
                    price: "",
                    typeTransaccion: "recarga-saldo",
                    mode: "ingreso",
                    typeAccount: "",
                    nameAccount: "",
                    nameapp: "web-personas",
                    name: "",
                    uid: "",
                    phone: "",
                }
            }
        },
        methods: {
            yearExpActual() {
                var yearActual = new Date();
                yearActual = yearActual.getFullYear();
                var maxYear = 13;
                var optionYear = [];

                for (var i = 0; i < maxYear; i++) {
                    optionYear.push({
                        year: yearActual + 1
                    });
                    yearActual = yearActual + 1;
                }

                this.listYear = optionYear;
            },
            createId(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;

                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                return result;
            },
            stopLoader() { this.$store.commit("notLoading"); },
            recargar() {
                var _uid = this.$store.getters.uid;
                var accountActual = this.$store.getters.user.accounts;
                var _m = this.saldo.replace(".", "");
                var miSaldo = _m.replace(",", ".");
                accountActual.propio.value = parseFloat(accountActual.propio.value) + parseFloat(miSaldo);

                if (_uid != "" || _uid != null || _uid != undefined) {
                    this.$store.commit("loading");
                    api.put('update/saldo/propia/', {id: _uid, data: accountActual}).then(res => {
                        this.tranRecarga.price = miSaldo;
                        this.tranRecarga.typeAccount = accountActual.propio.type;
                        this.tranRecarga.nameAccount = accountActual.propio.name;
                        this.tranRecarga.name = this.$store.getters.user.name + " " + this.$store.getters.user.lastname;
                        this.tranRecarga.uid = this.$store.getters.user.key;
                        this.tranRecarga.phone = this.$store.getters.user.phone;
                        console.log("Update saldo -> ", res);
                        console.log("trans -> ", this.tranRecarga);

                        api.post('transactions/add', this.tranRecarga).then(res => {
                            console.log("Transaction -> ", res);
                            document.querySelector("#recargaExitosa").click();
                            this.stopLoader();
                        }).catch(err => {
                            console.log(err);
                            this.stopLoader();
                        });
                    }).catch(err => {
                        console.log(err);
                        this.stopLoader();
                    });
                }
            },
            loadRecarga(id) {
                this.active = id;
                var _modal = document.querySelector("#showModalFinal");
                var _saldo = document.querySelector("#rSaldo");

                if (_saldo.value === "") {
                    document.querySelector("[data-error='rSaldo']").innerText = "Debes ingresar una cantidad.";
                    document.querySelector("[data-error='rSaldo']").classList.remove("d-none");
                    this.active = "";
                    return false;
                }

                if (_saldo.value != "") {
                    _modal.click();
                    this.saldo = `${_saldo.value}`;
                }
            },
            cancelarTransaccion() {
                this.saldo = `0`;
                this.active = "";
            },
            asignarUser() {
                let dbFireBase = firebase.database();

                var _uid = this.$store.getters.uid;

                if (_uid != "" || _uid != null || _uid != undefined) {
                    var name = document.querySelector("#name").value;
                    var cvc = document.querySelector("#cvc").value;
                    var nametarget = document.querySelector("#nametarget").value;
                    var mes = document.querySelector("#mes").value;
                    var year = document.querySelector("#year").value;

                    if (name === "") {
                        document.querySelector("[data-error='name']").innerText = "El número de la targeta esta vacío, por favor verifique.";
                        document.querySelector("[data-error='name']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='name']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (name.length <= 15) {
                        document.querySelector("[data-error='name']").innerText = "El número de la targeta debe ser mayor que 15, por favor verifique.";
                        document.querySelector("[data-error='name']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='name']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (mes === "") {
                        document.querySelector("[data-error='mes']").innerText = "Por favor seleccione el mes de la targeta.";
                        document.querySelector("[data-error='mes']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='mes']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (year === "") {
                        document.querySelector("[data-error='year']").innerText = "Por favor seleccione el año de la targeta.";
                        document.querySelector("[data-error='year']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='year']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (cvc === "") {
                        document.querySelector("[data-error='cvc']").innerText = "El CVC esta vacío, por favor llenelo.";
                        document.querySelector("[data-error='cvc']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='cvc']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (nametarget === "") {
                        document.querySelector("[data-error='nametarget']").innerText = "El nombre de la targeta esta vacío, por favor llenelo.";
                        document.querySelector("[data-error='nametarget']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='nametarget']").classList.add("d-none");
                        }, 3500);

                        return false;
                    }

                    if (name != "" && name.length > 15 && mes != "" && year != "" && cvc != "" && nametarget != "") {
                        this.$store.commit("loading");
                        this.newCreditCard.cvc = cvc;
                        this.newCreditCard.fechaExp = mes;
                        this.newCreditCard.id = this.createId(20);
                        this.newCreditCard.nombre = nametarget;
                        this.newCreditCard.numero = name;
                        this.newCreditCard.yearExp = year;

                        var db = dbFireBase.ref('creditcard/' + _uid);
                        db.child(this.newCreditCard.id).set(this.newCreditCard);
                        document.querySelector("#name").value = "";
                        document.querySelector("#cvc").value = "";
                        document.querySelector("#nametarget").value = "";
                        document.querySelector("#mes").value = "";
                        document.querySelector("#year").value = "";

                        this.newCreditCard = {
                            cvc: "",
                            fechaExp: "",
                            id: "",
                            nombre: "",
                            numero: "",
                            yearExp: ""
                        }
                        this.stopLoader();
                    }
                }
            },
            deleteCreditCard(idTargeta) {
                let dbFireBase = firebase.database();
                var _uid = this.$store.getters.uid;

                if (_uid != "" || _uid != null || _uid != undefined) {
                    this.$store.commit("loading");
                    var db = dbFireBase.ref('creditcard/' + _uid);
                    db.child(idTargeta).remove();
                    this.stopLoader();
                }
            },
            getListCreditCard() {
                this.$store.commit("loading");
                firebase.database().ref("creditcard").child(this.$store.getters.uid).on("value", (res) => {
                    // console.log(res.val());
                    var _keys = [];
                    var _values = [];
                    var _listFinal = [];
                    if (res.val() != null) {
                        _keys = res.val() === null || res.val() === undefined ? [] : Object.keys(res.val());
                        _values = res.val() === null || res.val() === undefined ? [] : Object.values(res.val());
                        
                        for (var i = 0; i < _values.length; i++) {
                            _listFinal.push({
                                id_delete: _keys[i],
                                id: _values[i].id,
                                nombre: _values[i].nombre,
                                numero: _values[i].numero.toString(),
                                fechaExp: _values[i].fechaExp,
                                yearExp: _values[i].yearExp,
                                cvc: _values[i].cvc
                            });
                        }

                        _listFinal.sort(function(a, b){ 
                            if (a.nombre < b.nombre) {
                                return -1;
                            }
                        });

                        this.listCreditCard = _listFinal;
                        this.stopLoader();
                    } else {
                        this.listCreditCard = [];
                        this.stopLoader();
                        return false;
                    }
                });
            },
        },
        mounted() {
            this.yearExpActual();
            this.getListCreditCard();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .bodyRecargar{
        padding: 0 25px;
        @media (max-width: 576px){
            padding: 0px;
        }
        .titleRecargar{
            color: var(--blue);
            margin: 0 auto;
            text-align: center;
            img{
                width: 30px;
                object-fit: contain;
                margin-right: 10px;
            }
        }
        .boxInput{
            position: relative;
            margin-top: 25px;
            span{
                position: absolute;
                top: 25px;
                left: 0;
                color: var(--blue);
                font-size: 38px;
            }
            .form-control{
                border: none;
                border-bottom: 1px solid var(--blue);
                color: var(--blue);
                text-align: center;
                font-size: 68px;
                border-radius: 0;
                padding: 6px 20px;
                &:focus{
                    box-shadow: none;
                    border-color: var(--blue);
                }
                &::placeholder{
                    opacity: .8;
                }
            }
        }
        .tarjetas{
            max-width: 100%;
            margin: auto;
            .title{
                text-align: center;
                color: var(--text-color);
                margin-bottom: 0;
                font-size: 16px;
                margin-top: 10px;
                margin-bottom: 30px;
            }
            .datosTarjetas{
                display: flex;
                align-items: center;
                max-width: 85%;
                margin: auto;
                cursor: pointer;
                &:hover{
                    .dates{
                        background-color: #b8b6aa;
                    }
                }
                .dates.active{
                    background-color: #b8b6aa;
                }
                .dates{
                    width: 80%;
                    h5{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        color: var(--blue);
                        font-size: 16px;
                        max-width: 50%;
                        padding: 8px 10px;
                        &:nth-child(2){
                            text-align: right;
                        }
                    }
                }
                .btn{
                    width: 20%;
                    img{
                        width: 15px;
                    }
                }
            }
        }
        .btnAgregar{
            text-align: center;
            margin: 20px auto 0px;
            display: block;
            color: var(--blue);
            img{
                width: 40px;
                font-size: 16px;
            }
        }
        .boxFormulario{
            max-width: 90%;
            margin: 20px auto 0;
            form{
                .form-group{
                    margin-bottom: 25px;
                    .form-control{
                        background-color: transparent;
                        opacity: 1;
                        border: none;
                        border-bottom: 1px solid #d1d1d1;
                        border-radius: 0;
                        box-shadow: none;
                        text-align : center;
                        color: var(--text-color);
                        text-align: center;
                        &:focus{
                            border-color: var(--blue);
                        }
                        &::placeholder{
                            opacity: .8;
                        }
                    }
                }
            }
            .footer-btn {
                margin: 15px auto;
                .btn {
                    width: 120px;
                    margin: auto 20px;
                    color: #fff;
                    border-radius: 0;
                    padding: 6px;
                    &:nth-child(1){
                        background-color: var(--blue-opacity);
                    }
                    &:nth-child(2){
                        background-color: var(--blue);
                    }
                }
            }
        }
    }
    
    .btn.recargarFinal {
        width: 120px;
        margin: auto 20px;
        color: #fff;
        border-radius: 0;
        padding: 6px;

        &:nth-child(2){
            background-color: var(--blue-opacity);
        }
        &:nth-child(1){
            background-color: var(--blue);
        }
    }

    p.Monto {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold !important;
        color: #9d8755;
    }
</style>
