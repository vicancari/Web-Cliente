<template>
    <div>
        <b-modal :modal-class="myclass" id="menu-modal" ref="menu-modal"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.hide('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
            <div class="boxMenu">
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')"  v-b-modal.modal-beneficios>
                    <div class="price" v-b-tooltip.hover title="0,00€">
                        <span class="a">0</span>
                        <span class="b">,00€</span>
                    </div>
                    <p>Beneficios</p>
                </button>
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')"  v-b-modal.modal-incentivos>
                      <div class="price" v-b-tooltip.hover itle="0,00€">
                        <span class="a">0</span>
                        <span class="b">,00€</span>
                    </div>
                    <p>Incentivos</p>
                </button>
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')"  v-b-modal.modal-propio>
                      <div class="price" v-b-tooltip.hover :title="this.$store.getters.user.accounts.propia.value+',00€'">
                        <span class="a">{{ this.$store.getters.user.accounts.propia.value }}</span>
                        <span class="b">,00€</span>
                    </div>
                    <p>Propio</p>
                </button>
                <button class="btn btnMenu">
                    <div class="price" v-b-tooltip.hover title="0,00€">
                        <span class="a">0</span>
                        <span class="b">,00€</span>
                    </div>
                    <p> <img class="img-fluid" :src="hearthfavorite" alt="">Puntos</p>
                </button>
                 <button class="btn btnMenu">
                      <div class="price" v-b-tooltip.hover title="0,00€">
                        <span class="a">0</span>
                        <span class="b">,00€</span>
                    </div>
                    <p> <img class="img-fluid" :src="point">Puntos</p>
                </button>
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')" v-b-modal.modal-favoritos>
                    <img class="imgMenu" :src="heartred" alt="">
                    <p>Favoritos</p>
                </button>
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')" v-b-modal.modal-recargar>
                    <img class="imgMenu" :src="recharge" alt="">
                    <p>Recargar</p>
                </button>
                <button class="btn btnMenu family"  @click="$bvModal.hide('menu-modal')" v-b-modal.alert-familia>
                    <img class="imgMenu" :src="rausFamilia" alt="">
                    <p>Raus<br> Familia</p>
                </button>
                <button class="btn btnMenu"  @click="$bvModal.hide('menu-modal')" v-b-modal.modal-profile>
                    <img class="imgMenu" :src="perfil" alt="">
                    <p>Perfil</p>
                </button>
                 <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')" v-b-modal.modal-historial>
                    <img class="imgMenu" :src="history" alt="">
                    <p>Historial</p>
                </button>
                <button class="btn btnMenu" @click="$bvModal.hide('menu-modal')" v-b-modal.modal-configuracion>
                    <img class="imgMenu" :src="config" alt="">
                    <p>Config</p>
                </button>
                <button class="btn btnMenu" @click="logout">
                    <img class="imgMenu" :src="salirazul" alt="">
                    <p>Salir</p>
                </button>
                <router-link to="/" id="nextLogout" style="display: none;"></router-link>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    /* Images */
    import hearthfavorite from '../assets/img/icons/menu/heart-favorite.png';
    import point from '../assets/img/icons/menu/point.png';
    import heartred from '../assets/img/icons/heartred.svg';
    import recharge from '../assets/img/icons/menu/agregarazul.svg';
    import rausFamilia from '../assets/img/icons/icono-raus-family.svg';
    import perfil from '../assets/img/icons/menu/perfilazul.svg';
    import history from '../assets/img/icons/menu/historialazul.svg';
    import settings from '../assets/img/icons/menu/configuracionazul.svg';
    import salirazul from '../assets/img/icons/menu/salirazul.svg';
    import back from '../assets/img/icons/flechavolver.svg';

    export default {
        name: 'menu',
        data: function () {
            return {
                myclass: ['modal-menu'],
                hearthfavorite: hearthfavorite,
                point: point,
                heartred: config.rutaWeb(heartred),
                recharge: config.rutaWeb(recharge),
                rausFamilia: config.rutaWeb(rausFamilia),
                perfil: config.rutaWeb(perfil),
                history: config.rutaWeb(history),
                config: config.rutaWeb(settings),
                salirazul: config.rutaWeb(salirazul),
                back: config.rutaWeb(back)
            }
        },
        methods: {
            logout() {
                if (this.$store.getters.isLoggedIn === true) {
                    this.$store.state.isLoggedIn = false;
                    this.$store.state.token = "";
                    this.$store.state.user = {};
                    this.$store.state.myBalance = 0;
                    this.$router.push("/");
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
     .modal-menu{
        .btnBack{
            position: absolute;
            top: 15px;
            left: 15px;
            width: 80px;
            @media (max-width: 767px){
                position: relative;
                top: 0;
                left: 0;
                margin-top: 0px;
            }
        }
         .boxMenu{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 480px;
            margin: auto;
             .btnMenu{
                height: 110px;
                width: 110px;
                background: #f2f2f2;
                margin:15px;
                color: var(--blue);
                border-radius: 0;
                @media (max-width: 576px){
                    height: 25vw;
                    width: calc(33.3% - 10px);
                    max-width: 33.3%;
                    margin: 5px;
                    max-height: 100px;
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
    }
</style>
