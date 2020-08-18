<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-historial" ref="modal-historial"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.show('menu-modal'), $bvModal.hide('modal-historial')">
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
            <h5 class="titleModal"><img :src="reloj" alt=""> Historial</h5>
            <div class="bodyHistorial">
                <div class="bodyCollapse">
                    <button type="button" block class="btn btnHeader" v-b-toggle.collapseEgresos name="egresos">
                        Egresos
                        <img class="img-fluid" :src="arrow">
                    </button>
                    <b-collapse id="collapseEgresos" visible accordion="collapseEgresos">
                        <div class="filter">
                            <button @click="getEstaSemanaEgresos()" class="btn semana filter__item" :class="is_fSemanaE === true ? 'active' : ''">Esta semana</button>
                            <button @click="getEsteMesEgresos()" class="btn mes filter__item" :class="is_fEsteMesE === true ? 'active' : ''">Este mes</button>
                            <select @change="filterMesAnteriorEgresos()" id="select_egreso" style="width: 250px" class="form-control filter__item" :class="is_fOtroMesE === true ? 'active' : ''">
                                <option value="" selected disabled>Otro mes</option>
                                <option v-for="(m, i) in this.selectMesesAntesActual" :key="i" :value="m.datefirst" :style="m.actual === true ? 'display: none;' : 'display: block;'">{{ m.mes }}</option>
                            </select>
                        </div>
                        <div class="scroll">
                            <div v-for="(egre, i) in this.listTransacciones.e.filter" :key="i" class="boxcontent">
                                <button type="button" v-if="egre.typeTransaccion === 'envio'" block class="btn title" v-b-toggle="egre._id" :name="egre._id">
                                    <p class="text">{{ getComercio(egre.comercio != undefined ? egre.comercio.id : egre.id_comercio != undefined ? egre.id_comercio : 'Envio') }} <span class="time">{{ dateNow(egre.date + " " + egre.time) }}</span></p>
                                    <img class="img-fluid" :src="arrow">
                                </button>
                                <button type="button" v-if="egre.typeTransaccion === 'trolley'" block class="btn title" v-b-toggle="egre._id" :name="egre._id">
                                    <p class="text">{{ egre.comercio.name }} <span class="time">{{ dateNow(egre.date + " " + egre.time) }}</span></p>
                                    <img class="img-fluid" :src="arrow">
                                </button>
                                <b-collapse :id="egre._id" :accordion="egre._id">
                                    <ul>
                                        <li v-if="egre.typeTransaccion === 'envio'">
                                            Tipo de transacción: {{ egre.typeTransaccion }}
                                        </li>
                                        <li v-if="egre.typeTransaccion === 'trolley'">
                                            Tipo de transacción: {{ egre.typeTransaccion }}
                                        </li>
                                        <li>
                                            Id de operación: {{ egre.key }}
                                        </li>
                                        <li>
                                            Monto: {{ egre.price | money }}€ 
                                        </li>
                                        <li>
                                            Enviado de: {{ egre.nameAccount }}
                                        </li>
                                        <li>
                                            Fecha: {{ egre.date }} Hora: {{ egre.time }}
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                            <div v-if="this.listTransacciones.e.filter.length === 0" class="mensaje-nodata">
                                <p class="text">No se encontraron egresos.</p>
                            </div>
                        </div>
                        <div class="boxBtn">
                            <button type="button" class="btn btnConfirmar">
                                <img class="img-fluid" :src="compartir" alt="">
                            </button>
                            <button type="button" class="btn btnConfirmar">
                                <img class="img-fluid" :src="descargar" alt="">
                            </button>
                        </div>
                    </b-collapse>
                    <button type="button" block class="btn btnHeader" v-b-toggle.collapseingresos name="ingresos">
                        Ingresos
                        <img class="img-fluid" :src="arrow">
                    </button>
                    <b-collapse id="collapseingresos" accordion="collapseingresos">
                        <div class="filter">
                            <button @click="getEstaSemanaIngresos()" class="btn semana filter__item" :class="is_fSemanaI === true ? 'active' : ''">Esta semana</button>
                            <button @click="getEsteMesIngresos()" class="btn mes filter__item" :class="is_fEsteMesI === true ? 'active' : ''">Este mes</button>
                            <select @change="filterMesAnteriorIngresos()" id="select_ingreso" style="width: 250px" class="form-control filter__item" :class="is_fOtroMesI === true ? 'active' : ''">
                                <option value="" selected disabled>Otro mes</option>
                                <option v-for="(m, i) in this.selectMesesAntesActual" :key="i" :value="m.datefirst" :style="m.actual === true ? 'display: none;' : 'display: block;'">{{ m.mes }}</option>
                            </select>
                        </div>
                        <div class="scroll">
                            <div v-for="(ingre, i) in listTransacciones.i.filter" :key="i" class="boxcontent">
                                <button type="button" v-if="ingre.typeTransaccion === 'envio'" block class="btn title" v-b-toggle="ingre._id" :name="ingre._id">
                                    <p class="text">{{ getComercio(ingre.comercio != undefined ? ingre.comercio.id : ingre.id_comercio != undefined ? ingre.id_comercio : 'Envio') }} <span class="time">{{ dateNow(ingre.date + " " + ingre.time) }}</span></p>
                                    <img class="img-fluid" :src="arrow">
                                </button>
                                <button type="button" v-if="ingre.typeTransaccion === 'recarga-saldo'" block class="btn title" v-b-toggle="ingre._id" :name="ingre._id">
                                    <p class="text">Recarga de saldo <span class="time">{{ dateNow(ingre.date + " " + ingre.time) }}</span></p>
                                    <img class="img-fluid" :src="arrow">
                                </button>
                                <b-collapse :id="ingre._id" :accordion="ingre._id">
                                    <ul>
                                        <li v-if="ingre.typeTransaccion === 'envio'">
                                            Tipo de transacción: {{ ingre.typeTransaccion }}
                                        </li>
                                        <li>
                                            Id de operación: {{ ingre.key }}
                                        </li>
                                        <li>
                                            Monto: {{ ingre.price | money }}€ 
                                        </li>
                                        <li>
                                            Recivido en: {{ ingre.nameAccount }}
                                        </li>
                                        <li>
                                            Fecha: {{ ingre.date }} Hora: {{ ingre.time }}
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                            <div v-if="this.listTransacciones.i.filter.length === 0" class="mensaje-nodata">
                                <p class="text">No se encontraron ingresos.</p>
                            </div>
                        </div>
                        <div class="boxBtn">
                            <button type="button" class="btn btnConfirmar">
                                <img class="img-fluid" :src="compartir" alt="">
                            </button>
                            <button type="button" class="btn btnConfirmar">
                                <img class="img-fluid" :src="descargar" alt="">
                            </button>
                        </div>
                    </b-collapse>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    // import Vue from 'vue';
    import config from "../config.js";
    import reloj from '../assets/img/icons/reloj.svg';
    import back from '../assets/img/icons/flechavolver.svg';
    import arrow from '../assets/img/arrow-down.png';
    import compartir from '../assets/img/icons/compartir.svg';
    import descargar from '../assets/img/icons/icondescargar.svg';
    import { EventBus } from '../main.js';

    import api from '../api.js';
    import moment from "moment";
    require('moment/locale/es');

    export default {
        name: 'historial',
        components: {},
        data: function () {
            return {
                myclass: ['modal-historial'],
                reloj: config.rutaWeb(reloj),
                back: config.rutaWeb(back),
                arrow: arrow,
                compartir: config.rutaWeb(compartir),
                descargar: config.rutaWeb(descargar),
                error: "",
                listTransacciones: {
                    i: {
                        all: [],
                        filter: []
                    },
                    e: {
                        all: [],
                        filter: []
                    }
                },
                selectMesesAntesActual: [],
                is_fSemanaE: false,
                is_fEsteMesE: false,
                is_fOtroMesE: false,
                is_fSemanaI: false,
                is_fEsteMesI: false,
                is_fOtroMesI: false,
            }
        },
        async created() {
            if (this.$store.getters.isLoggedIn === true) {
                if (this.$store.getters.uid != "" || this.$store.getters.uid != null || this.$store.getters.uid != undefined) {
                    await this.mesesAntesActual();

                    var Uid = this.$store.getters.uid;
                    await api.get('transactions/list/all/' + Uid).then(res => {
                        res.forEach(item => {
                            if (item.usuario != undefined) {
                                if (item.mode.toLowerCase() === "ingreso") {
                                    this.listTransacciones.i.all.push(item);
                                    this.listTransacciones.i.filter.push(item);
                                }
            
                                if (item.mode.toLowerCase() === "egreso") {
                                    this.listTransacciones.e.all.push(item);
                                    this.listTransacciones.e.filter.push(item);
                                }
                            }
                        });
        
                        this.getEstaSemanaIngresos();
                        this.getEstaSemanaEgresos();
                    }).catch(err => {
                        this.error = err;
                    });
        
                    EventBus.$on('IngresoReady', (data) => {
                        this.listTransacciones.i.all.forEach(item => {
                            if (item.key != data.key) {
                                this.listTransacciones.i.all.push(data);
                                this.listTransacciones.i.filter.push(data);
                                this.listTransacciones.i.filter.sort(function(a, b) {
                                    if (a.date && a.time < b.date && b.time) {
                                        return -1;
                                    }
                                });
                            }
                        });
                    });
        
                    EventBus.$on('EgresoReady', (data) => {
                        this.listTransacciones.e.all.forEach(item => {
                            if (item.key != data.key) {
                                this.listTransacciones.e.all.push(data);
                                this.listTransacciones.e.filter.push(data);
                                this.listTransacciones.e.filter.sort(function(a, b) {
                                    if (a.date && a.time < b.date && b.time) {
                                        return -1;
                                    }
                                });
                            }
                        });
                    });
                }
            }
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
            getEstaSemanaEgresos() {
                this.resetFilterSelect();
                var curr = new Date;
                var lunes = (curr.getDate() - curr.getDay()) + 1;
                var martes = lunes + 1;
                var miercoles = martes + 1;
                var jueves = miercoles + 1;
                var viernes = jueves + 1;
                var sabado = viernes + 1;
                var domingo = curr.getDate() - curr.getDay();

                var semana = [
                    new Date(curr.setDate(domingo)).toISOString().split("T")[0],
                    new Date(curr.setDate(lunes)).toISOString().split("T")[0],
                    new Date(curr.setDate(martes)).toISOString().split("T")[0],
                    new Date(curr.setDate(miercoles)).toISOString().split("T")[0],
                    new Date(curr.setDate(jueves)).toISOString().split("T")[0],
                    new Date(curr.setDate(viernes)).toISOString().split("T")[0],
                    new Date(curr.setDate(sabado)).toISOString().split("T")[0],
                ];

                this.listTransacciones.e.filter = [];
                this.listTransacciones.e.all.forEach(data => {
                    var fR = data.date;
                    
                    for (var i = 0; i < semana.length; i++) {
                        if (fR === semana[i]) {
                            this.listTransacciones.e.filter.push(data);
                        }
                    }
                });

                this.listTransacciones.e.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaE = true;
                this.is_fEsteMesE = false;
                this.is_fOtroMesE = false;
                console.log("historial -> ", this.listTransacciones);
            },
            getEstaSemanaIngresos() {
                this.resetFilterSelect();
                var curr = new Date;
                var lunes = (curr.getDate() - curr.getDay()) + 1;
                var martes = lunes + 1;
                var miercoles = martes + 1;
                var jueves = miercoles + 1;
                var viernes = jueves + 1;
                var sabado = viernes + 1;
                var domingo = curr.getDate() - curr.getDay();

                var semana = [
                    new Date(curr.setDate(domingo)).toISOString().split("T")[0],
                    new Date(curr.setDate(lunes)).toISOString().split("T")[0],
                    new Date(curr.setDate(martes)).toISOString().split("T")[0],
                    new Date(curr.setDate(miercoles)).toISOString().split("T")[0],
                    new Date(curr.setDate(jueves)).toISOString().split("T")[0],
                    new Date(curr.setDate(viernes)).toISOString().split("T")[0],
                    new Date(curr.setDate(sabado)).toISOString().split("T")[0],
                ];

                this.listTransacciones.i.filter = [];
                this.listTransacciones.i.all.forEach(data => {
                    var fR = data.date;
                    
                    for (var i = 0; i < semana.length; i++) {
                        if (fR === semana[i]) {
                            this.listTransacciones.i.filter.push(data);
                        }
                    }
                });

                this.listTransacciones.i.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaI = true;
                this.is_fEsteMesI = false;
                this.is_fOtroMesI = false;
            },
            getEsteMesEgresos() {
                this.resetFilterSelect();
                var curr = new Date;
                var _esteMes = curr.getMonth() + 1;
                var _mes = _esteMes <= 9 ? `0${_esteMes}` : _esteMes;

                this.listTransacciones.e.filter = [];
                this.listTransacciones.e.all.forEach(data => {
                    var fR = data.date.split("-")[1];
                    
                    if (fR === _mes) {
                        this.listTransacciones.e.filter.push(data);
                    }
                });

                this.listTransacciones.e.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaE = false;
                this.is_fEsteMesE = true;
                this.is_fOtroMesE = false;
            },
            getEsteMesIngresos() {
                this.resetFilterSelect();
                var curr = new Date;
                var _esteMes = curr.getMonth() + 1;
                var _mes = _esteMes <= 9 ? `0${_esteMes}` : _esteMes;

                this.listTransacciones.i.filter = [];
                this.listTransacciones.i.all.forEach(data => {
                    var fR = data.date.split("-")[1];
                    
                    if (fR === _mes) {
                        this.listTransacciones.i.filter.push(data);
                    }
                });

                this.listTransacciones.i.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaI = false;
                this.is_fEsteMesI = true;
                this.is_fOtroMesI = false;
            },
            filterMesAnteriorEgresos() {
                var _mes = document.querySelector("#select_egreso").value.split("-")[1];

                this.listTransacciones.e.filter = [];
                this.listTransacciones.e.all.forEach(data => {
                    var fR = data.date.split("-")[1];
                    
                    if (fR === _mes) {
                        this.listTransacciones.e.filter.push(data);
                    }
                });

                this.listTransacciones.e.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaE = false;
                this.is_fEsteMesE = false;
                this.is_fOtroMesE = true;
            },
            filterMesAnteriorIngresos() {
                var _mes = document.querySelector("#select_ingreso").value.split("-")[1];

                this.listTransacciones.i.filter = [];
                this.listTransacciones.i.all.forEach(data => {
                    var fR = data.date.split("-")[1];
                    
                    if (fR === _mes) {
                        this.listTransacciones.i.filter.push(data);
                    }
                });

                this.listTransacciones.i.filter.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.is_fSemanaI = false;
                this.is_fEsteMesI = false;
                this.is_fOtroMesI = true;
            },
            dateNow(date) {
                var _r = moment(date).fromNow();

                if (_r.substr(0, 2).toLowerCase() === "en") {
                    _r = _r.replace("en", "hace", _r);
                }
                
                return _r;
            },
            resetFilterSelect() {
                var _s1 = document.querySelector("#select_ingreso");
                var _s2 = document.querySelector("#select_egreso");

                if (_s1) {
                    _s1.value = "";
                }
                if (_s2) {
                    _s2.value = "";
                }
            },
            async mesesAntesActual() {
                var _dateActual = new Date();
                var _annioActual = _dateActual.getFullYear();
                var _mesesActual = _dateActual.getMonth() + 1;
                var _diaActual = _dateActual.getDate();

                var _fechaActual = _annioActual + "-" + _mesesActual <= 9 ? "0"+_mesesActual : _mesesActual + "-" + _diaActual <= 9 ? "0"+_diaActual : _diaActual;

                this.input_egreso = _fechaActual;
                this.input_interna = _fechaActual;
                this.input_ingreso = _fechaActual;
                this.input_factura = _fechaActual;
                this.input_factura_empleado = _fechaActual;

                if (_mesesActual === 1) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO", actual: _mesesActual === 1 ? true : false}
                    ]
                }
                if (_mesesActual === 2) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO", actual: _mesesActual === 2 ? true : false}
                    ]
                }
                if (_mesesActual === 3) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO", actual: _mesesActual === 3 ? true : false}
                    ]
                }
                if (_mesesActual === 4) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL", actual: _mesesActual === 4 ? true : false}
                    ]
                }
                if (_mesesActual === 5) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO", actual: _mesesActual === 5 ? true : false}
                    ]
                }
                if (_mesesActual === 6) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO", actual: _mesesActual === 6 ? true : false}
                    ]
                }
                if (_mesesActual === 7) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO", actual: _mesesActual === 7 ? true : false}
                    ]
                }
                if (_mesesActual === 8) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO"},
                        {mes: "Agosto", datefirst: `${_annioActual}-08-01`, lc: "agosto", uc: "AGOSTO", actual: _mesesActual === 8 ? true : false}
                    ]
                }
                if (_mesesActual === 9) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO"},
                        {mes: "Agosto", datefirst: `${_annioActual}-08-01`, lc: "agosto", uc: "AGOSTO"},
                        {mes: "Septiembre", datefirst: `${_annioActual}-09-01`, lc: "septiembre", uc: "SEPTIEMBRE", actual: _mesesActual === 9 ? true : false}
                    ]
                }
                if (_mesesActual === 10) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO"},
                        {mes: "Agosto", datefirst: `${_annioActual}-08-01`, lc: "agosto", uc: "AGOSTO"},
                        {mes: "Septiembre", datefirst: `${_annioActual}-09-01`, lc: "septiembre", uc: "SEPTIEMBRE"},
                        {mes: "Octubre", datefirst: `${_annioActual}-10-01`, lc: "octubre", uc: "OCTUBRE", actual: _mesesActual === 10 ? true : false}
                    ]
                }
                if (_mesesActual === 11) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO"},
                        {mes: "Agosto", datefirst: `${_annioActual}-08-01`, lc: "agosto", uc: "AGOSTO"},
                        {mes: "Septiembre", datefirst: `${_annioActual}-09-01`, lc: "septiembre", uc: "SEPTIEMBRE"},
                        {mes: "Octubre", datefirst: `${_annioActual}-10-01`, lc: "octubre", uc: "OCTUBRE"},
                        {mes: "Noviembre", datefirst: `${_annioActual}-11-01`, lc: "noviembre", uc: "NOVIEMBRE", actual: _mesesActual === 11 ? true : false}
                    ]
                }
                if (_mesesActual === 12) {
                    this.selectMesesAntesActual = [
                        {mes: "Enero", datefirst: `${_annioActual}-01-01`, lc: "enero", uc: "ENERO"},
                        {mes: "Febrero", datefirst: `${_annioActual}-02-01`, lc: "febrero", uc: "FEBRERO"},
                        {mes: "Marzo", datefirst: `${_annioActual}-03-01`, lc: "marzo", uc: "MARZO"},
                        {mes: "Abril", datefirst: `${_annioActual}-04-01`, lc: "abril", uc: "ABRIL"},
                        {mes: "Mayo", datefirst: `${_annioActual}-05-01`, lc: "mayo", uc: "MAYO"},
                        {mes: "Junio", datefirst: `${_annioActual}-06-01`, lc: "junio", uc: "JUNIO"},
                        {mes: "Julio", datefirst: `${_annioActual}-07-01`, lc: "julio", uc: "JULIO"},
                        {mes: "Agosto", datefirst: `${_annioActual}-08-01`, lc: "agosto", uc: "AGOSTO"},
                        {mes: "Septiembre", datefirst: `${_annioActual}-09-01`, lc: "septiembre", uc: "SEPTIEMBRE"},
                        {mes: "Octubre", datefirst: `${_annioActual}-10-01`, lc: "octubre", uc: "OCTUBRE"},
                        {mes: "Noviembre", datefirst: `${_annioActual}-11-01`, lc: "noviembre", uc: "NOVIEMBRE"},
                        {mes: "Diciembre", datefirst: `${_annioActual}-12-01`, lc: "diciembre", uc: "DICIEMBRE", actual: _mesesActual === 12 ? true : false}
                    ]
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .btnBack {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 70px;
        background: transparent;
        border: none;
        padding: 0;
        z-index: 100;

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
    .bodyHistorial{
        position: relative;
        .bodyCollapse{
            padding: 0 30px;
            @media (max-width: 576px){
                padding: 0;
            }
            .btnHeader{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #263f91;
                font-size: 22px;
                padding: 0;
                margin-top: 20px;
                img{
                    width: 25px;
                    height: 25px;
                    object-fit: contain;
                }
            }
            .btnHeader.collapsed{
                img{
                    -webkit-transform: rotate(270deg);
                    -moz-transform: rotate(270deg);
                    -o-transform: rotate(270deg);
                    -ms-transform: rotate(270deg);
                    transform: rotate(270deg);
                }
            }
        }
        .filter{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
            @media (max-width: 576px){
                font-size: 14px;
            }
            .semana{
                text-align: left;
                width: 33.3%;
                padding: 6px 0;
            }
            .mes{
                text-align: center;
                width: 33.3%;
                padding: 6px 0;
            }
            .date{
                text-align: left;
                width: 33.3%;
                border: none;
            }
        }
        .scroll{
            overflow-y: hidden;
            margin: 0 -30px;
            padding: 0 30px;
            max-height: max-content;
            .boxcontent{
                border: 1px solid var(--bluePrimary);
                border-bottom: 0;
                padding: 10px 0;
                border-right: 0;
                border-left: 0;
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--text-color);
                    font-size: 16px;
                    padding: 0;
                    @media (max-width: 576px){
                        font-size: 14px;
                    }

                    .text {
                        margin: 0;

                        span.time {
                            font-size: .75rem;
                            color: rgba(0,0,0,.45);
                        }
                    }

                    img{
                        width: 25px;
                        height: 25px;
                        object-fit: contain;
                    }
                }
                .title.collapsed{
                    img{
                        -webkit-transform: rotate(270deg);
                        -moz-transform: rotate(270deg);
                        -o-transform: rotate(270deg);
                        -ms-transform: rotate(270deg);
                        transform: rotate(270deg);
                    }
                }
                ul{
                    padding: 0;
                    list-style: none;
                    margin-bottom: 0;
                    li{
                        font-size: 14px;
                        line-height: 1.3;
                        @media (max-width: 576px){
                            font-size: 12px;
                        }
                    }

                }
            }
        }
        .boxBtn{
            display: flex;
            justify-content: center;
            button{
                margin: 0px 10px;
                height: 70px;
                &:nth-child(2){
                    transform: scale(1.6);
                }
                img{
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }
            }
        }
    }

    .bodyHistorial .bodyCollapse .btnHeader, .bodyHistorial .scroll .boxcontent .title {
        width: 100%;
    }

    .filter {
        padding: 1rem 0;
        
        &__item {
            display: block;
            width: calc(100% / 3) !important;
            height: 40px!important;
            text-align: center !important;
            margin: 0 1rem;
            border: 1px solid rgba(0,0,0,.25);
            background: #fff;
            color: #000;
            padding-left: 0 !important;
            line-height: 1.05 !important;
            cursor: pointer !important;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            &.form-control {
                padding-left: .75rem !important;
                outline: none !important;
            }

            &.active {
                border-color: #435463;
                color: #435463;
                font-weight: bold !important;
                box-shadow: 0 0 0 5px rgba(67, 84, 99, 0.15) !important;
            }
        }
    }

    .mensaje-nodata {
        width: 100%;
        height: max-content;
        margin: 1rem 0;

        .text {
            width: 100%;
            margin: 0;
            text-align: center;
            color: #666666;
            font-size: 1.2rem;
        }
    }
</style>
