<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-favoritos" ref="modal-favoritos"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.show('menu-modal'), $bvModal.hide('modal-favoritos')">
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
            <button class="btn btnHeart"><img class="img-fluid" :src="heartred" alt=""></button>

            <div class="boxMenu">
                <div v-for="(f, i) in this.myFavory" :key="i" class="cardEdit">
                    <div class="row m-0">
                        <div class="col-5 col-sm-6 p-0">
                            <img :src="f.comercio.photo" class="img-fluid imgCard" :alt="f.comercio.business_name">
                        </div>
                        <div class="col-7 col-sm-6 p-0">
                            <div class="row bodyCard">
                                <div class="col-5">
                                    <h5>{{ f.comercio.business_name }}</h5>
                                </div>
                                <div class="col-7 pl-0">
                                    <div class="d-flex justify-content-center">
                                        <button @click="removeFavory(f.id, f.id_comercio)" class="btn">
                                            <img :src="heartred" alt="">
                                        </button>
                                        <router-link :to="'/restaurante/' + f.id_comercio" class="btn">
                                            <img :src="arrowNext" alt="">
                                        </router-link>
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
    import config from "../config";
    import heartred from '../assets/img/icons/heartred.svg';
    import arrowNext from '../assets/img/arrow-next.png';
    import back from '../assets/img/icons/flechavolver.svg';

    import api from "../api.js";
    import { EventBus } from "../main.js";

    export default {
        name: 'modal-favoritos',
        components: {},
        data: function () {
            return {
                myclass: ['modal-favoritos'],
                back: config.rutaWeb(back),
                arrowNext: arrowNext,
                heartred: config.rutaWeb(heartred),
                myFavory: []
            }
        },
        created() {
            EventBus.$on("addFavory", obj => {
                if (obj.ok === "OK") {
                    this.loadFavory();
                }
            });
        },
        methods: {
            loadFavory() {
                this.myFavory = [];

                api.get('favory/list/' + this.$store.getters.uid).then(res => {
                    res.forEach(item => {
                        api.get('restaurante/' + item.id_comercio).then(res => {
                            this.myFavory.push({
                                id: item._id,
                                id_comercio: item.id_comercio,
                                comercio: res,
                                date: item.date,
                                time: item.time
                            });
                        });
                    });
                });

                this.myFavory.sort(function(a, b){ 
                    if (a.date && a.time < b.date && b.time) {
                        return -1;
                    }
                });
            },
            removeFavory(id, id_restaurante) {
                api.post('favory/delete/', {id: id, id_user: this.$store.getters.uid}).then(res => {
                    console.log(res);
                    EventBus.$emit("removeFavory", {id_comercio: id_restaurante});
                    this.loadFavory();
                }).catch(err => {
                    console.log("Error al eliminar -> ", err);
                });
            }
        },
        async beforeMount() {
            if (this.$store.getters.isLoggedIn === true) {
                if (this.$store.getters.uid != "" || this.$store.getters.uid != null || this.$store.getters.uid != undefined) {
                   await this.loadFavory();
                }
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
        margin-top: 4rem;

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
