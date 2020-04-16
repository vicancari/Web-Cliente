<template>
    <div>
        <section class="section">
            <div class="row m-0">
                <div class="col-12 col-sm-6 col-md-6 p-0">
                    <transition name="fade" v-if="count == 1" >
                        <div class="boxText" v-bind:class="{ 'text-red': count = 1 }">
                            <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex possimus dicta maiores iste dolorum laborum reiciendis doloribus, esse molestiae nisi odit dolores commodi accusantium provident voluptates sunt! Officiis, nulla.</p>
                        </div>
                    </transition>
                    <transition name="fade" v-if="count == 2" >
                        <div class="boxText" v-bind:class="{ 'text-red': count = 2 }">
                            <p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex possimus dicta maiores iste dolorum laborum reiciendis doloribus, esse molestiae nisi odit dolores commodi accusantium provident voluptates sunt! Officiis, nulla.</p>
                        </div>
                    </transition>
                    <transition name="fade" v-if="count == 3" >
                        <div class="boxText" v-bind:class="{ 'text-red': count = 3 }">
                            <p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex possimus dicta maiores iste dolorum laborum reiciendis doloribus, esse molestiae nisi odit dolores commodi accusantium provident voluptates sunt! Officiis, nulla.</p>
                        </div>
                    </transition>
                </div>
                <div class="col-12 col-sm-6 col-md-6 p-0">
                    <div class="background">
                        <button class="btn btn-next" @click="next" v-if="count < 4">
                            <img :src="arrow" alt="" class="img-fluid">
                        </button>
                        <div class="thank" v-if="direction">
                            <img class="img-fluid" :src="checkimg" alt="">
                            <h3>Vamos!</h3>
                            <p>Bienvenid@ a Raus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import config from "../config.js";
    import Arrow from '../assets/img/arrow-next.png';
    import checkimg from "../assets/img/icons/check.svg";

    export default {
        name: 'tutorial',
        data: function () {
            return {
                arrow: Arrow,
                count: 1,
                direction: false,
                checkimg: config.rutaWeb(checkimg),
            }
        },
        methods: {
            next() {
                this.count++;  
                if (this.count >= 4) {
                    this.count = 4;
                    this.direction = true;
                    if (this.$store.getters.isLoggedIn === true || this.$store.getters.token != "" || this.$store.getters.token != null) {
                        this.$router.push("/home");
                    } else {
                        this.$store.state.isLoggedIn = false;
                        this.$store.state.token = "";
                        this.$store.state.uid = "";
                        this.$router.push("/");
                    }
                }
            },
        },
        async mounted() {
            console.log(this.$store.getters);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .section{
        height: 100vh;
        position: relative;
      
        .boxText{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity .5s;
            opacity: 0;
            max-width: 80%;
            width: 100%;
            @media (max-width: 580px){
                height: auto;
                min-height: 50vh;
                position: relative;
                max-width: 480px;
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .iconMarket{
                color: #77afde !important;
                font-size: 72px;
                cursor: pointer;
            }
            p{
                margin-bottom: 0;
                font-size: 1.3rem;
                color: var(--blue);
                margin: 20px auto;
                line-height: 1.2;
                @media (max-width: 580px){
                    font-size: 16px;
                    line-height: 1.3;
                }
            }
        }
        .boxText.text-red{
             opacity: 1;

        }
        .background{
            background-image: url("../assets/img/fondo.jpeg");
            height: 100vh;
            background-size: cover;
            background-position: center;
            position: relative;
             @media (max-width: 580px){
                height: auto;
                min-height: 50vh;
                padding: 30px;
            }
            .btn-next{
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                right: 40px;
                background: #fff;
                border-radius: 50%;
                height: 40px;
                width: 40px;
                padding: 4px;
                @media (max-width: 480px){
                    box-shadow: 1px 1px 1px #000 !important;
                    z-index: 99;
                    &:focus{
                      box-shadow: 1px 1px 1px #000 !important;  
                    }
                }
            }
            .thank{
                max-width: 320px;
                margin: auto;
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                padding: 20px;
                border: 2px solid #d1d1d1;
                @media (max-width: 580px){
                    position: relative;
                    top: initial;
                    left: initial;
                    transform: initial;
                }
                img{
                    margin-bottom: 20px;
                    max-width: 180px;
                }
                h3{
                    font-size: 32px;
                    color: var(--text-color);
                }
                p{
                    color: var(--text-color);
                    font-size: 20px;
                    line-height: 1.2;
                }
            }
        }
    }
    .btnAceptar{
        border-radius: 0;
        color: #fff !important;
        font-size: 14px;
        width: 120px;
        margin: auto;
        display: block;
        padding: 4px;
        background-color: var(--blue);
        margin: 10px auto 0;
        text-decoration: none;
        &:active, &:focus, &:hover{
            color: #fff;
        }
    }

</style>
