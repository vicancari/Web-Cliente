<template>
    <div>
        <b-modal centered :modal-class="myclass" id="alert-familia" ref="alert-familia"  hide-footer hide-header>  
            <div class="boxAlert">
                <h5>Añade familiares a tu cuenta para asignarles saldos con propositos especificos</h5>
                <button class="btn"  @click="$bvModal.hide('alert-familia'), $bvModal.show('saldo-familia')">Empezar</button>
            </div>
        </b-modal>
        <b-modal centered :modal-class="saldoFamilia" id="saldo-familia" ref="saldo-familia"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.show('menu-modal'), $bvModal.hide('saldo-familia')">
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
            <h5 class="titleModal"><img :src="rausFamilia" alt=""> Raus Family</h5>
            <div class="boxMenuSaldo">
                <div class="row align-items-center">
                    <div class="col-6">
                        <span class="text">Asignar saldo a:</span>
                    </div>
                    <div class="col-6">
                        <button class="btn float-right btnAdd"><i class="fas fa-plus"></i> Agregar Familia</button>
                    </div>
                    <div class="col-12">
                        <div class="group-checkbox">
                            <div class="mycheckbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" name="useful" id="checkbox1" />
                                <label class="m-0" for="checkbox1">
                                    <span>Juan Gonzalez</span> 
                                    <div class="check"></div>
                                </label>
                            </div>
                            <div class="mycheckbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" name="useful" id="checkbox2" />
                                <label class="m-0" for="checkbox2">
                                    <span>Juan Gonzalez</span> 
                                    <div class="check"></div>
                                </label>
                            </div>
                            <div class="mycheckbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" name="useful" id="checkbox3" />
                                <label class="m-0" for="checkbox3">
                                    <span>Juan Gonzalez</span> 
                                    <div class="check"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="boxInput">
                            <p class="title">Monto</p>
                            <span>€</span>
                            <input type="number" class="form-control maxHeight" placeholder="">
                        </div>
                        <h5 class="titleDestiny">Selecciona el destino</h5>
                    </div>
                    <div class="boxBtn">
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category1" />
                            <label class="m-0" for="category1">
                                Comer
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category2" />
                            <label class="m-0" for="category2">
                                Salud
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category3" />
                            <label class="m-0" for="category3">
                                Cuidado personal
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category4" />
                            <label class="m-0" for="category4">
                                Transporte
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category5" />
                            <label class="m-0" for="category5">
                                Fuel
                            </label>
                        </div>
                         <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category10" />
                            <label class="m-0" for="category10">
                                Entretenimiento
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category6" />
                            <label class="m-0" for="category6">
                                Kids
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category7" />
                            <label class="m-0" for="category7">
                                Alimentos
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category8" />
                            <label class="m-0" for="category8">
                                Deportes
                            </label>
                        </div>
                        <div class="mycheckbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" name="category" id="category9" />
                            <label class="m-0" for="category9">
                                Viajes Hoteles
                            </label>
                        </div>
                    </div>
                    <button class="btn btnConfirmar">
                        Confirmar
                    </button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    /* Images */
    import back from '../assets/img/icons/flechavolver.svg';
    import rausFamilia from '../assets/img/icons/icono-raus-family.svg';

    export default {
        name: 'saldo-familia',
        components: {},
        data: function () {
            return {
                myclass: ['modal-alert'],
                saldoFamilia: ['modal-saldo-familia'],
                back: config.rutaWeb(back),
                rausFamilia: config.rutaWeb(rausFamilia)
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* modalAlert */
    .boxAlert{
        h5{
            text-align: center;
            color: #fff;
            margin: 0;
            font-weight: normal;
            font-size: 24px;
            line-height: 1.3;
        }
        .btn{
            background-color: var(--yellow);
            color: #fff;
            margin: 25px auto 0;
            width: 130px;
            display: block;
            font-size: 20px;
        }
    }
    /* Saldo Familia */
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
            margin: 12px auto;
            img{
                width: 50px;
                transform: scale(1.4) translateY(-2px);
            }
        }
        .boxMenuSaldo{
            max-width: 380px;
            margin: auto; 
            span, .btnAdd{
                color:var(--text-color);
                white-space: nowrap;
                @media (max-width: 576px){
                    font-size: 14px;
                }
            }
            .group-checkbox{
                max-height: 200px;
                overflow-y: auto;
                padding-right: 10px;
                min-height: 200px;
                .mycheckbox input[type="checkbox"] {
                    display: none;
                }
                .mycheckbox {
                    border-bottom: 1px solid var(--blue);
                    padding: 15px 0;
                    cursor: pointer;
                    &:hover{
                        cursor: pointer;
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                    label{
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        align-items: center;
                        cursor: pointer;
                    }
                    input[type="checkbox"]+label {
                        span{
                            color: #d4d7c4;
                            width: 90%;
                            display: block;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            font-size: 16px;
                        }
                        .check{
                            border: 1.1px solid var(--blue);
                            border-radius: 50%;
                            width:25px;
                            height: 25px;
                        }
                    }
                    input[type="checkbox"]:checked + label {
                        .check{
                            background-image: url('../assets/img/icons/check.png');
                            background-size: 25px;
                            width: 25px;
                            height: 25px;
                            border: 1px solid transparent;
                        }
                    }
                }
            }
            .boxInput{
                position: relative;
                margin-top: 25px;
                .title{
                    margin: 0;
                    font-size: 14px;
                    text-align: center;
                    color: #b8b8b8;
                    margin-bottom: 0px;
                }
                span{
                    position: absolute;
                    top: 25px;
                    left: 0;
                    color: var(--dorado);
                    font-size: 38px;
                }
                .form-control.maxHeight{
                    border: none;
                    border-bottom: 1px solid var(--blue);
                    color: var(--dorado);
                    text-align: center;
                    font-size: 68px;
                    border-radius: 0;
                    padding: 6px 20px;
                    height: 90px;
                    &:focus{
                        box-shadow: none;
                        border-color: var(--blue);
                    }
                    &::placeholder{
                        opacity: .8;
                    }
                }
            }
            .titleDestiny{
                text-align: center;
                margin: 15px auto;
                font-weight: normal;
                font-size: 18px;
            }

            .boxBtn{
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
                @media (max-width: 576px){
                    padding: 5px;
                }
                .mycheckbox {
                    padding: 5px;
                    cursor: pointer;
                    width: 25%;
                    @media (max-width: 576px){
                        width: 33.3%;
                    }
                    &:hover{
                        cursor: pointer;
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                     input[type="checkbox"]{
                         display: none;
                     }
                    label{
                        width: 90px;
                        height: 90px;
                        background-color: #f9f9f9;
                        color: var(--text-color);
                        align-items: center;
                        cursor: pointer;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        font-size: 14px;
                        padding: 10px;
                        word-break: break-word;
                    }
             
                    input[type="checkbox"]:checked + label {
                        background-color: var(--blue);
                        color: #fff;
                    }
                }
            }
            .btnConfirmar{
                width: 120px;
                margin: 20px auto 10px;
                color: #fff;
                border-radius: 0;
                padding: 6px;
                background-color: var(--blue);
                display: block;
            }
        }
</style>
