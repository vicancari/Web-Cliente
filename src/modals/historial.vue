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
                    <v-button block class="btn btnHeader" v-b-toggle.collapseEgresos >
                        Egresos
                        <img class="img-fluid" :src="arrow">
                    </v-button>
                    <b-collapse id="collapseEgresos" accordion="collapseEgresos">
                        <div class="filter">
                            <button class="btn semana">Esta semana</button>
                            <button class="btn mes">Este mes</button>
                           <input type="date" class="date form-contrl">
                        </div>
                        <div class="scroll">
                            <div v-for="(egre, i) in listTransacciones.e" :key="i" class="boxcontent">
                                <v-button v-if="egre.typeTransaccion === 'envio'" block class="btn title" v-b-toggle="egre._id">
                                    {{ getComercio(egre.comercio != undefined ? egre.comercio.id : egre.id_comercio != undefined ? egre.id_comercio : 'Envio') }}
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <b-collapse :id="egre._id" :accordion="egre._id">
                                    <ul>
                                        <li v-if="egre.typeTransaccion === 'envio'">
                                            Tipo de transacción: {{ egre.typeTransaccion }}
                                        </li>
                                        <li>
                                            Id de operación: {{ egre.key }}
                                        </li>
                                        <li>
                                            Monto: {{ egre.price }}€ 
                                        </li>
                                        <li>
                                            Fecha: {{ egre.date }} Hora: {{ egre.time }}
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                        </div>
                        <div class="boxBtn">
                            <button class="btn btnConfirmar">
                                <img class="img-fluid" :src="compartir" alt="">
                            </button>
                            <button class="btn btnConfirmar">
                                <img class="img-fluid" :src="descargar" alt="">
                            </button>
                        </div>
                    </b-collapse>
                    <v-button block class="btn btnHeader" v-b-toggle.collapseingresos >
                        Ingresos
                        <img class="img-fluid" :src="arrow">
                    </v-button>
                    <b-collapse id="collapseingresos" accordion="collapseingresos">
                        <div class="filter">
                            <button class="btn semana">Esta semana</button>
                            <button class="btn mes">Este mes</button>
                           <input type="date" class="date form-contrl">
                        </div>
                        <div class="scroll">
                            <div v-for="(ingre, i) in listTransacciones.i" :key="i" class="boxcontent">
                                <v-button v-if="ingre.typeTransaccion === 'envio'" block class="btn title" v-b-toggle="ingre._id" >
                                    {{ getComercio(ingre.comercio != undefined ? ingre.comercio.id : ingre.id_comercio != undefined ? ingre.id_comercio : 'Envio') }}
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <v-button v-if="ingre.typeTransaccion === 'recarga-saldo'" block class="btn title" v-b-toggle="ingre._id" >
                                    Recarga saldo
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <b-collapse :id="ingre._id" :accordion="ingre._id">
                                    <ul>
                                        <li v-if="ingre.typeTransaccion === 'envio'">
                                            Tipo de transacción: {{ ingre.typeTransaccion }}
                                        </li>
                                        <li>
                                            Id de operación: {{ ingre.key }}
                                        </li>
                                        <li>
                                            Monto: {{ ingre.price }}€ 
                                        </li>
                                        <li>
                                            Fecha: {{ ingre.date }} Hora: {{ ingre.time }}
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                        </div>
                        <div class="boxBtn">
                                <button class="btn btnConfirmar">
                                    <img class="img-fluid" :src="compartir" alt="">
                                </button>
                                <button class="btn btnConfirmar">
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
    import config from "../config.js";
    import reloj from '../assets/img/icons/reloj.svg';
    import back from '../assets/img/icons/flechavolver.svg';
    import arrow from '../assets/img/arrow-down.png';
    import compartir from '../assets/img/icons/compartir.svg';
    import descargar from '../assets/img/icons/icondescargar.svg';

    import api from '../api.js';

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
                Uid: this.$store.getters.user.key,
                listTransacciones: {
                    i: [],
                    e: []
                }
            }
        },
        async created() {
            await api.get('transactions/list/all').then(res => {
                res.forEach(item => {
                    if (item.usuario != undefined) {
                        if (this.Uid === item.usuario.uid) {
                            if (item.mode.toLowerCase() === "ingreso") {
                                this.listTransacciones.i.push(item);
                            }
        
                            if (item.mode.toLowerCase() === "egreso") {
                                this.listTransacciones.e.push(item);
                            }
                        }
                    }
                });

                this.listTransacciones.i.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                this.listTransacciones.e.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });

                console.log("Historial -> ", this.listTransacciones);
            }).catch(err => {
                this.error = err;
            });
        },
        methods: {
            getComercio(id_comercio) {
                let _name = "";
                let _keys = this.$store.getters.listRestaurantes.ids;
                let _values = this.$store.getters.listRestaurantes.all;

                for (var i = 0; i < _values.length; i++) {
                    for (var y = 0; y < _values[i].length; y++) {
                        if (id_comercio === _keys[i][y]) {
                            _name = _values[i][y].business_name;
                        }
                    }
                }

                return _name;
            }
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
</style>
