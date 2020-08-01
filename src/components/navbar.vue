<template>
    <div>
        <div class="NotShowMobile">
            <div class="row navbar">
                <div class="col-md-4 col-4 order">
                <div class="d-flex saldo">
                    <img class="img-fluid logo" :src="image" alt="">
                    <p>Saldo:</p>
                    <span id="myBalance">{{ this.$store.getters.myBalance }}€</span>
                    </div> 
                </div>
                <div class="col-md-4 col-4 order">
                    <div class="d-flex justify-content-center align-items-center menu">
                        <h5 style="user-seleted: none;">{{ this.$store.getters.user.name }} {{ this.$store.getters.user.lastname }}</h5>
                        <button class="btn"  v-b-modal.menu-modal style="padding-right: 0;"><i class="fas fa-bars"></i></button>
                    </div>
                </div>
                <div class="col-md-4 col-4 order">
                    <div class="botonera">
                        <button class="btn" v-if="!this.$store.getters.trolley.length" v-b-modal.modal-trolley><img class="img-fluid" :src="trolley" alt=""></button>
                        <button class="btn" v-if="this.$store.getters.trolley.length" v-b-modal.modal-trolley><img class="img-fluid" :src="trolleyPlus" alt=""></button>
                        <button class="btn"><img class="img-fluid" :src="notification" alt=""></button>
                        <button class="btn"><img class="img-fluid" :src="message" alt=""></button>
                        <button class="btn" v-b-modal.modal-explorar @click="reloadActiveCategory"><img class="img-fluid" :src="timeline" alt=""></button>
                    </div>
                </div>
            </div>
            
            <div class="navbar--bottom">
                <button class="navbar--bottom__btn" v-b-modal.modal-recargar><img class="icon" :src="recharge" alt="recargar"> Recargar</button>
                <button class="navbar--bottom__btn _blue" v-b-modal.modal-send><img class="icon" :src="caretRight" alt="Envio"> Enviar</button>
            </div>
        </div>

        <div class="NotShowWeb">
            <div class="boxNav">
                <div class="boxNav__top">
                    <div class="logo">
                        <img class="img" :src="image" alt="Raus">
                    </div>
                    <div class="op">
                        <button class="btn" v-if="!this.$store.getters.trolley.length" v-b-modal.modal-trolley><img class="icon" :src="trolley" alt=""></button>
                        <button class="btn" v-if="this.$store.getters.trolley.length" v-b-modal.modal-trolley><img class="icon" :src="trolleyPlus" alt=""></button>
                        <button class="btn"><img class="icon" :src="notification"></button>
                        <button class="btn"><img class="icon" :src="message"></button>
                        <button class="btn" v-b-modal.modal-explorar @click="reloadActiveCategory"><img class="icon" :src="timeline"></button>
                    </div>
                </div>
                <div class="boxNav__bottom">
                    <div class="left">
                        <div class="hamburguesa" v-b-modal.menu-modal>
                            <i class="fas fa-bars"></i>
                        </div>
                        <p class="saldo">Saldo: <span>{{ this.$store.getters.myBalance }}€</span></p>
                    </div>
                    <div class="right">
                        <div class="navbar--bottom">
                            <button class="navbar--bottom__btn" v-b-modal.modal-recargar><img class="icon" :src="recharge" alt="recargar"> Recargar</button>
                            <button class="navbar--bottom__btn _blue" v-b-modal.modal-send><img class="icon" :src="caretRight" alt="Envio"> Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modals -->
        <Menu></Menu>    
        <Send></Send> 
        <modalBeneficios></modalBeneficios>
        <modalBIncentivos></modalBIncentivos>
        <modalPropio></modalPropio>
        <modalFavoritos></modalFavoritos>
        <Recargar></Recargar>
        <saldoFamilia></saldoFamilia>
        <Profile></Profile>
        <Historial></Historial>
        <Configuracion></Configuracion>
        <Explorar></Explorar>
        <ModalTrolley></ModalTrolley>
    </div>
</template>

<script>
    // import config from "../config.js";
    /* IMG */
    import image from "../assets/img/logo.png";
    import notification from "../assets/img/notification.png";
    import message from "../assets/img/message.png";
    import timeline from "../assets/img/timeline.png";
    import caretRight from "../assets/img/caret-right.png";
    import trolley from "../assets/trolley.svg";
    import trolleyPlus from "../assets/trolleyPlus.svg";
    /* Components */
    import Menu from '../modals/menu';
    import Send from '../modals/send';
    import ModalTrolley from '../modals/trolley';
    import modalBeneficios from '../modals/modal-beneficios';
    import modalBIncentivos from '../modals/modal-incentivos';
    import modalPropio from '../modals/modal-propio';
    import modalFavoritos from '../modals/modal-favoritos';
    import Recargar from '../modals/recargar';
    import saldoFamilia from '../modals/saldo-familia';
    import Profile from '../modals/profile';
    import Historial from '../modals/historial';
    import Configuracion from '../modals/configuracion';
    import Explorar from '../modals/explorar';
    import recharge from '../assets/img/icons/menu/agregarazul.svg';

    export default {
        name: 'navbar',
        data: function () {
            return {
                myBalance: 0,
                image: image,
                notification: notification,
                message: message,
                timeline: timeline,
                caretRight: caretRight,
                recharge: recharge,
                trolley: trolley,
                trolleyPlus: trolleyPlus,
            }
        },
        components: {
            Menu,
            Send,
            modalBeneficios,
            modalBIncentivos,
            modalPropio,
            modalFavoritos,
            Recargar,
            saldoFamilia,
            Profile,
            Historial,
            Configuracion,
            Explorar,
            ModalTrolley
        },
        methods: {
            reloadActiveCategory() {
                setTimeout(() => {
                    var _keys = Object.keys(this.$store.getters.filterCategory);
                    var _values = Object.values(this.$store.getters.filterCategory);
    
                    for (var i = 0; i < _values.length; i++) {
                        if (_keys[i] != "filter") {
                            if (_values[i].active === true) {
                                document.querySelector(`[data-cate="#${_keys[i]}"]`).classList.add("_active");
                                console.log(document.querySelector(`[data-cate="#${_keys[i]}"]`));
                            }
                        }
                    }
                }, 500);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
    .navbar {
        &--bottom {
            width: 100%;
            height: max-content;
            display: flex;
            justify-content: center;
            align-items: center;

            &__btn {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: calc(100% / 2);
                height: max-content;
                background: #fdfdfd;
                color: var(--bluePrimary);
                margin: 0 .25rem;
                padding: .5rem 0;
                border: 1px solid var(--bluePrimary);
                box-shadow: none !important;
                outline: none !important;

                .icon {
                    display: block;
                    margin: 0;
                    padding: 0;
                    width: 30px;
                }

                &._blue {
                    background: var(--bluePrimary);
                    color: #fdfdfd;

                    .icon {
                        width: 20px;
                    }
                }

                &::before, &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 0;
                    height: 100%;
                    background: rgba(0,0,0,.025);
                    transition: width .25s ease-in-out;
                }

                &::before {
                    left: 0;
                }

                &::after {
                    right: 0;
                }

                &:hover {
                    &::before, &:after {
                        width: 100%;
                    }
                }
            }
        }

        align-items: center;
         margin: auto 15px;
         @media (max-width: 767px){
             margin: 0;
         }
         .order{
             @media (max-width: 767px){
                 padding: 0;
                 &:nth-child(1){
                    order: 1;
                 }
                 &:nth-child(2){
                    order: 3;
                 }
                 &:nth-child(3){
                    order: 2;
                 }
             }
         }
        .saldo{
            .logo{
                width: 80px;
                object-fit: contain;
            }
            p{
                margin: 0 5px 0 20px;
                font-size: 16px;
                @media (max-width: 767px){
                    display: none;
                }
            }
            span{
                font-size: 16px;
                color: #9d8755;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                 @media (max-width: 767px){
                    display: none;
                }
            }
        }
        .menu{
            h5{
                margin-bottom: 0;
                color: var(--blue);
                font-size: 16px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .botonera{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            @media (max-width: 767px){
                justify-content: flex-end;
            }
            .btn{
                padding: 0px;
                img{
                    object-fit: contain;
                    width: 30px;
                }
            }
        }
    }
    .NavBtnSend{
        background-color: var(--bluePrimary);
        color: #fff;
        display: block;
        border-radius: 0;
        border: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        img{
            width: 20px;
            margin: 5px auto;
        }
        &:hover, &:active, &:focus{
            color: #fff;
        }
    }

    .boxNav {
        position: relative;
        width: 100%;
        height: max-content;

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: max-content;
            padding: .5rem;

            .logo {
                width: max-content;
                height: max-content;
                background: transparent;
                border: none;

                .img {
                    display: block;
                    margin: 0;
                    padding: 0;
                    width: 80px;
                    object-fit: contain;
                    object-position: center center;
                }
            }

            .op {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: calc(100% - 80px);

                .btn {
                    display: block;
                    width: max-content;
                    height: max-content;
                    padding: 0 .25rem;

                    &:last-child {
                        padding-right: 0;
                    }

                    .icon {
                        width: 30px;
                    }
                }
            }
        }

        &__bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: max-content;

            .left, .right {
                width: calc(100% / 2);
            }

            .left {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 0 .25rem;
                height: 46px;
                background: #fdfdfd;
                color: #607381;

                .hamburguesa {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 35px;
                    height: 35px;
                    color: #000;
                    outline: none;
                    cursor: pointer;

                    i {
                        font-size: 1.35rem;
                    }
                }

                .saldo {
                    width: calc(100% - (35px));
                    margin: 0 0 0 .25rem;
                    text-align: left;

                    span {
                        color: #9d8755;
                    }
                }
            }
        }
    }

    .NotShowMobile, .NotShowWeb {
        width: 100%;
        height: max-content;
    }

    @media only screen and (min-width: 992px) {
        .NotShowMobile {
            display: block;
        }

        .NotShowWeb {
            display: none;
        }
    }

    @media only screen and (max-width: 992px) {
        .NotShowMobile {
            display: none;
        }

        .NotShowWeb {
            display: block;
        }

        .navbar {
            &--bottom {
                &__btn {
                    border: none;
                    font-size: .75rem;

                    .icon {
                        width: 18px;
                    }

                    &._blue {
                        margin: 0;

                        .icon {
                            width: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
