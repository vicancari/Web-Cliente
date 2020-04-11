<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-explorar" ref="modal-explorar"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.hide('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
               <h5 class="titleModal"><img :src="explorar" alt="">Explorar</h5>
            <div class="boxMenu">
                <button class="btnMenu btn">Comer</button>
                <button class="btnMenu btn">Salud</button>
                <button class="btnMenu btn">Cuidado Personal</button>
                <button class="btnMenu btn">Fuel</button>
                <button class="btnMenu btn">Entretenimiento</button>
                <button class="btnMenu btn">Kids</button>
                <button class="btnMenu btn">Deporte</button>
                <button class="btnMenu btn">Viajes Hoteles</button>
                <button class="btnMenu btn">Alimentos</button>
                <button class="btnMenu btn">Transporte</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    /* Images */
    import back from '../assets/img/icons/flechavolver.svg';
    import explorar from '../assets/img/timeline.png';

    export default {
        name: 'explorar',
        components: {},
        data: function () {
            return {
                myclass: ['modal-explorar'],
                back: config.rutaWeb(back),
                explorar: explorar
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
        @media (max-width: 767px){
            position: absolute;
            top: 15px;
            left: 0;
            margin-top: 0px;
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
    .boxMenu{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 370px;
        margin: 10px;
        .btnMenu{
            height: 90px;
            width: 90px;
            background: #f2f2f2;
            margin:5px;
            color: var(--text-color);
            border-radius: 0;
            word-break: break-word;
            padding: 5px;
            @media (max-width: 576px){
                height: 25vw;
                width: calc(33.3% - 10px);
                max-width: 33.3%;
                margin: 5px;
                max-height: 100px;
                font-size: 14px;
            }
            @media (max-width: 330px){
                padding: 0;
            }
            .price{
                display: flex;
                justify-content: center;
                align-items: flex-start;
                .a{
                    font-size: 32px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 100%;
                    @media (max-width: 480px){
                        font-size: 22px;
                    }           
                    @media (max-width: 330px){
                        font-size: 26px;
                    }                               
                }
                .b{
                    font-size: 14px;
                    position: relative;
                    top: 10px;
                    @media (max-width: 480px){
                        font-size: 11px;
                        top: 5px;
                    }
                }
            }
            p{
                margin: 0;
                color: var(--text-color);
                justify-content: center;
                align-items: center;
                margin-top: 5px;
                @media (max-width: 480px){
                    display: flex;
                    font-size: 14px;
                }
                @media (max-width: 330px){
                    font-size: 12px;
                }

                img{
                    width: 30px;
                    object-fit: contain;
                    margin-right: 5px;
                    @media (max-width: 480px){
                        width: 20px;
                    }
                }
            }
            .imgMenu{
                height: 46px;
                transform: scale(.8);
                @media (max-width: 480px){
                    width: 52px;
                }
            }
        }

        .btnMenu.active{
            background-color: var(--blue);
            color :#fff;
        }
        .btn.family{
            img{
                transform: scale(1.3);
            }
            p{
                transform: translateY(-10px);
                line-height: 1.1;
            }
        }
    }
</style>
