<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-historial" ref="modal-historial"  hide-footer hide-header>  
           <button class="btn btnBack" @click="$bvModal.hide('modal-profile'), $bvModal.show('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
            <h5 class="titleModal"><img :src="reloj" alt=""> Historial</h5>
            <div class="bodyHistorial">
                <div class="bodyCollapse">
                    <v-button block class="btn btnHeader" v-b-toggle.collapseEgresos >
                        Egresos
                        <img class="img-fluid" :src="arrow">
                    </v-button>
                    <b-collapse id="collapseEgresos" visible accordion="my-accordion">
                        <div class="filter">
                            <button class="btn semana">Esta semana</button>
                            <button class="btn mes">Este mes</button>
                           <input type="date" class="date form-contrl">
                        </div>
                        <div class="scroll">
                            <div class="boxcontent">
                                <v-button block class="btn title" v-b-toggle.articleEgresos >
                                    Pizza Free
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <b-collapse id="articleEgresos" accordion="articleEgresos">
                                    <ul>
                                        <li>
                                            Id de operación: 59649
                                        </li>
                                        <li>
                                            Monto: 19,00€ 
                                        </li>
                                        <li>
                                            Fecha: 25/09/2019 Hora: 13:30
                                        </li>
                                        <li>
                                            Origen: Mediaset
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                            <div class="boxcontent">
                                <v-button block class="btn title" v-b-toggle.articleEgresos2 >
                                    Teresa Carles
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <b-collapse id="articleEgresos2" accordion="articleEgresos2">
                                    <ul>
                                        <li>
                                            Id de operación: 59649
                                        </li>
                                        <li>
                                            Monto: 19,00€ 
                                        </li>
                                        <li>
                                            Fecha: 25/09/2019 Hora: 13:30
                                        </li>
                                        <li>
                                            Origen: Mediaset
                                        </li>
                                    </ul>
                                </b-collapse>     
                            </div>
                            <div class="boxcontent">
                                <v-button block class="btn title" v-b-toggle.articleEgresos3 >
                                    Onbo Sushi
                                    <img class="img-fluid" :src="arrow">
                                </v-button>
                                <b-collapse id="articleEgresos3" accordion="articleEgresos3">
                                    <ul>
                                        <li>
                                            Id de operación: 59649
                                        </li>
                                        <li>
                                            Monto: 19,00€ 
                                        </li>
                                        <li>
                                            Fecha: 25/09/2019 Hora: 13:30
                                        </li>
                                        <li>
                                            Origen: Mediaset
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
                    <b-collapse id="collapseingresos" accordion="my-accordion2">
                        <div class="filter">
                            <button class="btn semana">Esta semana</button>
                            <button class="btn mes">Este mes</button>
                           <input type="date" class="date form-contrl">
                        </div>
                        <div class="scroll">
                            <div class="boxcontent">
                                    <v-button block class="btn title" v-b-toggle.articleIngresos >
                                        Pizza Free
                                        <img class="img-fluid" :src="arrow">
                                    </v-button>
                                    <b-collapse id="articleIngresos" accordion="articleIngresos">
                                        <ul>
                                            <li>
                                                Id de operación: 59649
                                            </li>
                                            <li>
                                                Monto: 19,00€ 
                                            </li>
                                            <li>
                                                Fecha: 25/09/2019 Hora: 13:30
                                            </li>
                                            <li>
                                                Origen: Mediaset
                                            </li>
                                        </ul>
                                    </b-collapse>     
                            </div>
                                <div class="boxcontent">
                                    <v-button block class="btn title" v-b-toggle.articleIngresos2 >
                                        Teresa Carles
                                        <img class="img-fluid" :src="arrow">
                                    </v-button>
                                    <b-collapse id="articleIngresos2" accordion="articleIngresos2">
                                        <ul>
                                            <li>
                                                Id de operación: 59649
                                            </li>
                                            <li>
                                                Monto: 19,00€ 
                                            </li>
                                            <li>
                                                Fecha: 25/09/2019 Hora: 13:30
                                            </li>
                                            <li>
                                                Origen: Mediaset
                                            </li>
                                        </ul>
                                    </b-collapse>     
                            </div>
                                <div class="boxcontent">
                                    <v-button block class="btn title" v-b-toggle.articleIngresos3 >
                                        Onbo Sushi
                                        <img class="img-fluid" :src="arrow">
                                    </v-button>
                                    <b-collapse id="articleIngresos3" accordion="articleIngresos3">
                                        <ul>
                                            <li>
                                                Id de operación: 59649
                                            </li>
                                            <li>
                                                Monto: 19,00€ 
                                            </li>
                                            <li>
                                                Fecha: 25/09/2019 Hora: 13:30
                                            </li>
                                            <li>
                                                Origen: Mediaset
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
                descargar: config.rutaWeb(descargar)
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .btnBack{
        position: absolute;
        top: 15px;
        left: 15px;
        width: 80px;
        z-index: 999;
        @media (max-width: 480px){
            left: 0;
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
                max-height: 300px;
                overflow-y: auto;
                margin: 0 -30px;
                padding: 0 30px;
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
