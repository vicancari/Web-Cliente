<template>
    <div>
        <b-modal :modal-class="myclass" id="detalles-productos" ref="detalles-productos" centered hide-footer hide-header>  
            <div class="contentCaracteristics">
                <div class="boxImage">
                    <carousel class="carouselEdit"
                        :paginationEnabled="true"
                        :navigationEnabled="false"
                        :perPage= 1
                        navigationNextLabel=""
                        navigationPrevLabel="">
                        <slide>
                            <img class="img-fluid imgEdit" src="../assets/img/plato1.jpg" alt="item.alt">
                        </slide>
                        <slide>
                            <img class="img-fluid imgEdit" src="../assets/img/plato2.jpg" alt="item.alt">
                        </slide>
                        <slide>
                            <img class="img-fluid imgEdit" src="../assets/img/plato1.jpg" alt="item.alt">
                        </slide>
                        <slide>
                            <img class="img-fluid imgEdit" src="../assets/img/plato2.jpg" alt="item.alt">
                        </slide>
                    </carousel>
                </div>
                <div class="boxInfo">
                    <div class="title">
                        <h4>Picadillo criollo </h4>
                        <div class="price text-truncate">
                            5,00€
                        </div>
                        <p class="text">Descripcion del plato</p>
                    </div>
                    <div class="carac">
                        <div class="info">
                            <div class="box">
                                <p class="title">Ingredientes:</p>
                                <b-list-group>
                                    <b-list-group-item>Carne</b-list-group-item>
                                    <b-list-group-item>Aliños</b-list-group-item>
                                    <b-list-group-item>Vegetales</b-list-group-item>
                                    <b-list-group-item>Condimentos</b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="box">
                                <p class="title">Alergenos:</p>
                                    <b-list-group>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Proteínas:</b-list-group-item>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Carbohidratos:</b-list-group-item>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Total calorias</b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="box">
                                <p class="title">Valores nutricionales:</p>
                                <b-list-group>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Grasas: <span>200</span></b-list-group-item>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Proteínas: <span>40</span></b-list-group-item>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Carbohidratos: <span>50</span></b-list-group-item>
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">Total calorias:<span>200</span></b-list-group-item>
                                </b-list-group>
                            </div>
                        </div>
                        <div class="groupSelect">
                             <div class="quality">
                                 <h5>Cantidad</h5>
                                 <b-button v-on:click="click()">-</b-button>
                                 <input type="text" class="form-control" v-model="quality">
                                 <b-button v-on:click="more()">+</b-button>
                             </div>
                            <div class="groupRadio">
                                <div class="form-grou">
                                    <input type="radio" name="radiosSelect" id="delivery">
                                    <label for="delivery">
                                        <div class="a">
                                            <img src="../assets/moto.png" alt="">
                                            <span>Delivery</span>
                                        </div>
                                        <div class="box">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-grou">
                                    <input type="radio" name="radiosSelect" id="llevar">
                                    <label for="llevar">
                                        <div class="a">
                                            <img src="../assets/take.png" alt="">
                                            <span>Para llevar</span>
                                        </div>
                                        <div class="box">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </label>
                                </div>
                                <div class="form-grou">
                                    <input type="radio" name="radiosSelect" id="comer">
                                    <label for="comer">
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
                            <b-button class="btnComprar">
                                Comprar
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from 'vue-carousel';
Vue.use(VueCarousel);

    export default {
        name: 'detalles-productos',
        components: {
            Carousel,
            Slide,
        },
        data: function () {
            return {
                myclass: ['detalles-productos'],
                dataImg: [],
                quality: 0
            }
        },
        methods: {
        }
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
                    color: var(--bluePrimary);
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
                            color: var(--bluePrimary);
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
                            color: var(--bluePrimary);
                        }
                        button{
                            border:none;
                            box-shadow: none;
                            background-color: transparent;
                            color: var(--bluePrimary);
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
                                    color: var(--bluePrimary);
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
                        background-color: var(--bluePrimary);
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
</style>
