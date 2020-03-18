<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-favoritos" ref="modal-favoritos"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.show('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
            <button class="btn btnHeart"><img class="img-fluid" :src="heartred" alt=""></button>

            <div class="boxMenu">
                <div class="cardEdit">
                    <div class="row m-0">
                        <div class="col-5 col-sm-6 p-0">
                            <img src="https://picsum.photos/600/300/?image=25" class="img-fluid imgCard" alt="">
                        </div>
                        <div class="col-7 col-sm-6 p-0">
                            <div class="row bodyCard">
                                <div class="col-5">
                                    <h5>Vegetalia restaurant</h5>
                                </div>
                                <div class="col-7 pl-0">
                                    <div class="d-flex justify-content-center">
                                        <button class="btn">
                                            <img :src="heartred" alt="">
                                        </button>
                                        <button class="btn">
                                            <img :src="arrowNext" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import heartred from '../assets/img/icons/heartred.svg';
import arrowNext from '../assets/img/arrow-next.png';
import back from '../assets/img/icons/flechavolver.svg';



/* Images */

export default {
    name: 'modal-favoritos',
    components: {
    },
  data: function () {
        return {
            myclass: ['modal-favoritos'],
            back: back,
            arrowNext: arrowNext,
            heartred: heartred
        }
    },
    methods: {
    
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .btnBack{
        width: 80px;
        margin-bottom: 20px;
        @media (max-width: 480px){
            position: relative;
            top: 0;
            left: 0;
            margin-top: 0px;
        }
    }
    .btnHeart{
        width: 65px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .boxMenu{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 480px;
        margin: auto;
        .cardEdit{
            border: 1px solid #d1d1d1;
            margin-bottom: 10px;
            width: 100%;
            cursor: pointer;
            .imgCard{
                height: 90px;
                width: 100%;
                object-fit: cover;
            }
            .bodyCard{
                padding: 10px 15px;
                height: 100%;
                align-items: center;
                >div{
                    padding: 0 7.5px;
                }
                h5{
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color: var(--text-color);
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 1.4;
                }
                .btn{
                    @media (max-width: 576px){
                        padding: 4px;
                    }
                    img{
                        width: 35px;
                        object-fit: contain;
                        @media (max-width: 576px){
                            width: 25px;
                        }
                    }
                }
            }
        }
       
    }
</style>
