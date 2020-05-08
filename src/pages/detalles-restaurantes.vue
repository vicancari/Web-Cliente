<template>
    <div>
        <navbar></navbar>
        <div class="boxRestaurantes">
            <div class="header">
                <button class="btn backbutton">
                    <img class="img-fluid" :src="back" alt="">
                </button>
                <h5>Pranalú</h5>
            </div>
            <div class="header2">
                <div class="row">
                    <div class="col-md-3 col-2 px-0 px-sm-3">
                          <b-dropdown id="dropdown-1" text="" class="dropdownEdit" toggle-class="text-decoration-none" no-caret variant="link">
                            <template v-slot:button-content>
                                <img src="../assets/bars.png" alt="">
                            </template>
                            <div class="d-flex">
                                <div class="category">
                                    <b-dropdown-item>Pastas</b-dropdown-item>
                                    <b-dropdown-item>Pizzas</b-dropdown-item>
                                    <b-dropdown-item>Vegetariano</b-dropdown-item>
                                    <b-dropdown-item>Electrodomésticos</b-dropdown-item>
                                    <b-dropdown-item>Zapatos</b-dropdown-item>
                                    <b-dropdown-item v-on:mouseover="hoverF(1)">Ropa <i class="fas fa-plus"></i></b-dropdown-item>
                                </div>
                                <div class="subcategory">
                                    <b-dropdown-item>Pastas</b-dropdown-item>
                                    <b-dropdown-item>Pizzas</b-dropdown-item>
                                    <b-dropdown-item>Vegetariano</b-dropdown-item>
                                </div>
                            </div>
                        </b-dropdown>
                        <!-- <button class="btn">
                            <img src="assets/img/icons/bars.png" alt="">
                        </button> -->
                    </div>
                    <div class="col-md-6 col-6 px-0 px-sm-3">
                        <h5>Carrer de Aribau 655, 08021, Barcelona, Spain.</h5>
                    </div>
                    <div class="col-md-3 col-4 px-0 px-sm-3">
                        <div class="groupbutton">
                            <button class="btn"><img src="../assets/iconRestaurant/corazon-blue.svg" alt="" /></button>
                            <button class="btn"><img src="../assets/iconRestaurant/reloj.svg" alt="" /></button>
                            <button class="btn"><img src="../assets/iconRestaurant/llamar.svg" alt="" /></button>
                            <button class="btn"><img src="../assets/iconRestaurant/ir.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider">
                <div class="box">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="box2">
                    <carousel
                    :paginationEnabled="false"
                    :navigationEnabled="false"
                    :perPageCustom="[[0, 3], [768, 5], [1024, 7], [1250, 8]]"
                >
                    <slide>
                        <img src="../assets/img/1.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="../assets/img/2.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="../assets/img/1.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="../assets/img/2.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="../assets/img/1.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="../assets/img/2.jpg" alt="">
                    </slide>
                </carousel>
                </div>
            </div>
            <div class="search">
                <h5>Destacados</h5>
                <div class="form-group">
                    <img src="../assets/iconRestaurant/search2.png" alt="">
                    <input type="search" class="form-control" placeholder="Buscar">
                </div>
            </div>
            <!-- destacados -->
            <carousel class="carouselEdit"
                :paginationEnabled="false"
                :navigationEnabled="true"
                :perPageCustom="[[0,1], [575,2], [768, 3], [1024, 4], [1250, 4]]"
                navigationNextLabel=""
                navigationPrevLabel=""
                >
                <slide>
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
                <slide>
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
                <slide>
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
                <slide>
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
                <slide>
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </slide>
            </carousel>
            <div class="row alignHorizontal" >
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
                        v-b-modal.detalles-productos
                        >
                        <div class="body">
                            <div class="text">
                                <h5>Pizza napolitana 4 quesos</h5>
                                <p>Es una pirzza Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem consequatur quis ratione dis</p>
                            </div>
                            <div class="price">
                                <div class="number" v-b-tooltip.hover title="10.000,00 €">
                                    <p>10</p>
                                    <span>,50€</span>
                                </div>
                                <button class="btn"><img class="img-fluid img-shared" :src="shared" alt=""></button>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
        <DetallesProductos></DetallesProductos>

    </div>
</template>

<script>


/* Images */
import Navbar from '../components/navbar';
import back from '../assets/img/icons/flechavolver.svg';
import shared from '../assets/img/icons/share.png';

/* Components */
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';
import DetallesProductos from '../modals/detalles-productos';


export default {
    name: 'restaurante',
    components: {
        Navbar,
        Carousel,
        Slide,
        DetallesProductos
    },
    data: function () {
        return {
            back: back,
            shared: shared
        }
    },
    method: {
        hoverF(id){
            console.log(id);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .boxRestaurantes{
        position: relative;
        max-width: 90%;
        margin: auto;
        .header{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            @media (max-width: 767px){
                margin-top: 15px;
            }
            .backbutton{
                position: absolute;
                left: 0;
                padding: 8px 0;
                img{
                    width: 50px;
                }
            }
            h5{
                margin: 0;
                margin-top: 3px;
                color: var(--text-color);
                width: 100%;
                max-width: 80%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .header2{
                margin-top: 20px;
                margin: 20px auto 0;
            .row{
                align-items: center;
                @media (max-width: 767px){
                    .dropdownEdit{
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                    h5{
                        font-size: 14px !important;
                        text-align: left;
                    }
                    .groupbutton{
                        .btn{
                            padding: 0;
                            margin-left: 0px;
                            img{
                                width: 25px;
                                height: 25px;   
                            }
                        }
                    }
                }
                .dropdownEdit{
                    padding: 0;
                    width: 40px;
                    display: flex;
                    ::v-deep .dropdown-toggle{
                        padding: 0;
                    }
                    ::v-deep .dropdown-menu{
                        padding: 0;
                        border: none;
                        border-radius: 0px;
                        @media (max-width: 767px){
                            zoom: .9;
                        }
                        .dropdown-item{
                            &:hover{
                                background-color: transparent;
                            }
                        }
                    }
                    img{
                        height: 40px;
                        width: 40px;
                        object-fit: contain;
                    }
                    .category{
                        background: #f9f9f9;
                        padding: 8px 0;
                        li{
                            display: flex;
                            align-items: center;
                             ::v-deep .dropdown-item{
                                color: var(--text-color);
                                &:hover, &:focus{
                                    color: var(--text-color);
                                }
                                i{
                                    color: var(--bluePrimary);
                                    margin-left: 5px;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .subcategory{
                        background-color: var(--bluePrimary);
                        padding: 8px 0;
                        li{
                            color: #fff;
                            ::v-deep .dropdown-item{
                                color: #fff;
                                &:hover, &:focus{
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
                h5{
                    color: var(--text-color);
                    font-size: 16px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin: 0;
                }
                .groupbutton{
                    display: flex;
                    justify-content: flex-end;
                    button{
                        padding: 4px;
                        margin-left: 5px;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
        }
        .slider{
            display: flex;
            margin-top: 10px;
            .box{
                width: 80px;
                min-width: 80px;
                height: 80px;
                margin-right: 5px;
                @media (max-width: 767px){
                    width: 60px;
                    min-width: 60px;
                    height: 60px;
                }
                img{
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                    /* @media (max-width: 767px){
                        padding-right: 5px !important;
                    } */
                }
            }
            .box2{
                width: calc(100% - 100px);
                @media (max-width: 767px){
                    width: calc(100% - 60px);
                }
                ::v-deep .VueCarousel-slide{
                    max-width: 120px;
                }
            }
            img{
                max-width: 100%;
                height: 80px;
                @media (max-width: 767px){
                    height: 60px;
                    padding-right: 5px !important;
                }
            }
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
            margin-bottom: 5px;
            @media (max-width: 767px){
                margin-top: 20px;
                margin-bottom: 20px;
            }
            h5{
                margin: 0;
                color: var(--text-color);
                font-size: 18px;
            }
            .form-group{
                position: relative;
                @media (max-width: 767px){
                    zoom: .7;
                    max-width: 210px;
                    margin: 0;
                }
                img{
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    width: 30px;
                }
                input{
                    padding-right: 40px;
                    color: var(--text-color);
                    font-size: 18px;
                    box-shadow: none;
                    border-radius: 0;
                    border-color: #d1d1d1;
                    &:active, &:focus, &hover{
                        box-shadow: none;
                        border-color: #d1d1d1;
                    }
                }
            }
        }
        .alignHorizontal{
            margin-top: 30px;
        }
        @media (min-width: 1024px){
            .carouselEdit{
                .VueCarousel-slide{
                    transform: scaleX(.97);
                }
            }
            .carouselEdit .cardStyle{
                width: 100%!important;
                max-width: 100%;
                margin: 0;
            }
        }
        @media (max-width: 767px){
            .cardStyle .card-img-top{
                zoom: .8;
                height: 160px;
            }
             .card-body{
                padding: 10px;
                zoom: .8;
                .price .number{
                    p{
                        font-size: 24px;
                    }
                    span{
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>
