<template>
    <div>
        <Navbar></Navbar>
        <div class="navSearch">
            <h5>Que hay de comer?</h5>
            <div class="">
                <button class="btn btnSearch" type="button" v-b-modal.modal-search>
                    Buscar
                    <img class="img-fluid" :src="searchImg" alt="">
                </button>
            </div>
        </div>
        <div class="bodySection">
            <div class="box">
                <h5 class="titlePromotions">Promociones</h5>
                <carousel class="carouselEdit"
                    :autoplay="false" 
                    :nav="false" 
                    :items="3"
                    :dots="false"
                    :responsive = "{
                        0:{items:1},
                        576:{items:2},
                        768:{items:3},
                        1200:{items:4},
                        1500:{items:5}
                    }"
                    >
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2 cardStyle"
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
                   <template slot="prev">
                       <span class="prev carouselPrev">
                           <img class="img-fluid" :src="arrowPrev" alt="">
                       </span>
                    </template>
                    <template slot="next">
                        <span class="next carouselNext">
                            <img class="img-fluid" :src="arrowNext" alt="">
                        </span>
                    </template>
                </carousel>
                <div class="row navSection">
                    <div class="col-5">
                        <button class="btn btnProductos" @click="showSectionHome(1)" v-bind:class="{ 'active': activeSection == 1, '': activeSection == 2 }">
                            <span></span>
                            <span></span>
                            Productos
                        </button>
                    </div>
                    <div class="col-2">
                        <img class="img-fluid" :src="imgPin" alt="">
                    </div>
                    <div class="col-5">
                        <button class="btn btnRestaurantes" @click="showSectionHome(2)" v-bind:class="{ 'active': activeSection == 2, '': activeSection == 1 }">
                            <span></span>
                            Restaurates
                        </button>   
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 2">
                    <div class="col-md-6 col-12 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="card-horizontal"
                            >
                            <div class="body">
                                <div class="text">
                                    <h5 class="title">Pizza napolitana 4 quesos</h5>
                                    <button class="btn">Ir <img :src="chevRight" alt=""></button>
                                    <div class="star-content">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Sabor</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Atención</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Lugar</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>5/5</span>
                                                    <h6>Tiempo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="card-horizontal"
                            >
                            <div class="body">
                                <div class="text">
                                    <h5 class="title">Pizza napolitana 4 quesos</h5>
                                    <button class="btn">Ir <img :src="chevRight" alt=""></button>
                                    <div class="star-content">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Sabor</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Atención</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Lugar</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>5/5</span>
                                                    <h6>Tiempo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="card-horizontal"
                            >
                            <div class="body">
                                <div class="text">
                                    <h5 class="title">Pizza napolitana 4 quesos</h5>
                                    <button class="btn">Ir <img :src="chevRight" alt=""></button>
                                    <div class="star-content">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Sabor</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Atención</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Lugar</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>5/5</span>
                                                    <h6>Tiempo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="card-horizontal"
                            >
                            <div class="body">
                                <div class="text">
                                    <h5 class="title">Pizza napolitana 4 quesos</h5>
                                    <button class="btn">Ir <img :src="chevRight" alt=""></button>
                                    <div class="star-content">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Sabor</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Atención</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>4/5</span>
                                                    <h6>Lugar</h6>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                 <div class="box">
                                                    <img :src="star" alt="">
                                                    <span>5/5</span>
                                                    <h6>Tiempo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                    </div>
                </div>
                <div class="row alignHorizontal" v-if="activeSection == 1">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0 mb-4">
                        <b-card
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2 cardStyle"
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
        </div>
        <!-- modals -->
        <search></search>
    </div>
</template>

<script>

/* Components */
import carousel from 'vue-owl-carousel'
import Navbar from '../components/navbar';
/* Modals */
import search from '../modals/search';
/* Images */
import searchImg from '../assets/img/search.png';
import shared from '../assets/img/icons/share.png';
import arrowPrev from '../assets/img/icons/arrow-prev.png';
import arrowNext from '../assets/img/icons/arrow-next.png';
import imgPin from '../assets/img/icons/pin.png';
import star from '../assets/img/icons/star.png';
import chevRight from '../assets/img/icons/chev-right.png';

export default {
    name: 'home',
    components: {
        carousel,
        Navbar,
        search
    },
  data: function () {
        return {
            searchImg: searchImg,
            shared: shared,
            arrowPrev: arrowPrev,
            arrowNext: arrowNext, 
            imgPin: imgPin,
            star: star,
            chevRight: chevRight,
            slide: 0,
            sliding: null,
            responsive : "{0:{items:1,nav:false},600:{items:3,nav:true}}",
            activeSection: 1
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
        showSectionHome(id){
            console.log(id);
            if (id == 1){
                this.activeSection= 1
            }else if ( id == 2){
                this.activeSection= 2
            }
        }
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
     //search nav
    .navSearch{
        display: flex;
        justify-content: center;
        position:relative;
        margin: auto;
        border-bottom: 1px solid #c1c1c1;
        padding: 5px 50px;
        @media (max-width: 576px){
            padding: 5px 15px;
            justify-content: space-between;
            align-items: center;
        }
        h5{
            margin:5px 0;
            color: var(--bluePrimary);
        }
        .btnSearch{
            border: none;
            position: absolute;
            right: 15px;    
            @media (max-width: 576px){
                position: initial;
            }
            img{
                width: 25px;
            }
        }
    }

    .bodySection{
        margin: auto 30px 30px;
        @media (max-width: 576px){
            margin: auto 15px;
        }
        .titlePromotions{
            text-align: center;
            color: var(--bluePrimary);
            margin: 15px 0 5px;
        }
        .carouselEdit{
            margin: auto;
            position: relative;
        }
        .navSection{
            margin: 30px auto;
            align-items: center;
            .btn{
                color: var(--text-color);
                font-size: 22px;
                @media (max-width: 576px){
                    display: flex;
                    margin: auto;
                    font-size: 13px;
                    padding: 4px 0;
                }
                 @media (max-width: 320px){
                    font-size: 11px;
                }
                span{
                     background-color: #d1d1d1;
                    display: inline-block;
                    vertical-align: middle;
                    margin: -2px 2.5px 0;
                    height: 20px;
                    @media (max-width: 576px){
                        height: 15px;
                    }
                }
            }
            .btn.active{
                color: var(--bluePrimary);
                span{
                    background-color:  var(--bluePrimary); 
                }
            }
            .btnProductos{
                span{
                    width: 20px;
                    @media (max-width: 576px){
                        width: 15px;
                    }
                }
            }
            .btnRestaurantes{
                 span{
                    width: 50px;
                    @media (max-width: 576px){
                        width: 35px;
                    }
                }
            }
            .img-fluid{
                width: 55px;
                text-align: center;
                @media (max-width: 576px){
                    transform: scale(1.5);
                }
            }
        }
        .alignHorizontal{
            margin: auto 0px;
            .card-horizontal{
                display: flex;
                flex-direction: row;
                border-radius: 0;
                .card-img-top{
                    width: 50%;
                    object-fit: cover;
                    border-radius: 0;
                    @media (max-width: 992px){
                        width: 40%
                    }
                }
                .card-body{
                    padding: 15px;
                    .body{
                        .text{
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            height: 160px;
                            align-items: center;
                             @media (max-width: 992px){
                                height: 120px;
                            }
                            @media (max-width: 576px){
                                height: 90px;
                            }
                            .title{
                                width: 70%;
                                font-size: 20px;
                                color: var(--text-color);
                                text-align: left;
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                max-height: 48px;
                                 @media (max-width: 992px){
                                    font-size: 18px;
                                }
                                @media (max-width: 576px){
                                    font-size: 16px;
                                }
                            }
                            .btn{
                                width: 30%;
                                display: flex;
                                align-items: center;
                                 @media (max-width: 992px){
                                    font-size: 18px;
                                }
                                @media (max-width: 576px){
                                    font-size: 16px;
                                }
                                img{
                                    width: 20px;
                                    margin-left: 10px;
                                }
                            }
                            .star-content{
                                width: 100%;
                                margin-top: auto;
                                .box{
                                    text-align: center;
                                    color: var(--text-color);
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    img{
                                        width: 20px;
                                        height: 20px;
                                        object-fit: contain;
                                        margin: auto
                                    }
                                    span, h6{
                                        font-size: 14px;
                                        margin: 0;
                                        @media (max-width: 992px){
                                            font-size: 12px;
                                        }
                                        @media (max-width: 576px){
                                            font-size: 11px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
