<template>
    <div>
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
                    <h5 v-b-modal.modalLogout>{{ this.$store.getters.user.name }} {{ this.$store.getters.user.lastname }}</h5>
                    <button class="btn"  v-b-modal.menu-modal style="padding-right: 0;"><i class="fas fa-bars"></i></button>
                </div>
            </div>
            <div class="col-md-4 col-4 order">
                <div class="botonera">
                    <button class="btn"><img class="img-fluid" :src="notification" alt=""></button>
                    <button class="btn"><img class="img-fluid" :src="message" alt=""></button>
                    <button class="btn" v-b-modal.modal-explorar @click="reloadActiveCategory"><img class="img-fluid" :src="timeline" alt=""></button>
                </div>
            </div>
        </div>
        <button disabled class="btn NavBtnSend" v-b-modal.modal-send>
           <!--  <i class="fas fa-caret-right"></i><br> -->
           <img :src="caretRight" alt="">
            Enviar
        </button>
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
        <logout></logout>
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
    /* Components */
    import Menu from '../modals/menu';
    import Send from '../modals/send';
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
    import logout from '../modals/logout';


    export default {
        name: 'navbar',
        data: function () {
            return {
                myBalance: 0,
                image: image,
                notification: notification,
                message: message,
                timeline: timeline,
                caretRight: caretRight
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
            logout
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
    .navbar{
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
</style>
