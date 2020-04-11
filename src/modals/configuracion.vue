<template>
    <div>
        <b-modal  :modal-class="myclass" id="modal-configuracion" ref="modal-configuracion"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.hide('modal-configuracion'), $bvModal.show('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
            <h5 class="titleModal"><img :src="config" alt=""> Configuración</h5>
            <div class="boxConfig">
                <div class="form-group">
                    <h5>Notificaciones</h5>
                    <label class="switch" for="notification">
                        <input type="checkbox" id="notification" class="switch-input">
                        <span class="switch-label" data-on="On" data-off="Off"></span>
                        <span class="switch-handle"></span>
                    </label>
                </div>
                 <div class="form-group">
                    <h5>Vibración</h5>
                    <label class="switch" for="vibracion">
                        <input type="checkbox" id="vibracion" class="switch-input">
                        <span class="switch-label" data-on="On" data-off="Off"></span>
                        <span class="switch-handle"></span>
                    </label>
                </div>
                <div class="form-group">
                    <h5>Soporte</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Sobre Raus</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>FAQ</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Cerrar cuenta</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Condiciones y términos</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Políticas de privacidad</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Acerca de</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
                <div class="form-group">
                    <h5>Salir de Raus</h5>
                    <img class="img-fluid" :src="arrow">
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    /* Images */
    import back from '../assets/img/icons/flechavolver.svg';
    import settings from '../assets/img/icons/menu/configuracionazul.svg';
    import arrow from '../assets/img/arrow-down.png';

    export default {
        name: 'configuracion',
        components: {},
        data: function () {
            return {
                myclass: ['modal-configuracion'],
                back: config.rutaWeb(back),
                config: config.rutaWeb(settings),
                arrow: arrow
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
        z-index: 999;
        @media (max-width: 480px){
            left: 0;
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
    .boxConfig{
        padding: 0 30px;
        @media (max-width: 576px){
            padding: 0 5px;
        }
        .form-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--blue);
            padding: 16px 0;
            margin-bottom: 0;
            &:last-child{
                border-bottom: none;
            }
            cursor: pointer;
            h5{
                color: var(--text-color);
                margin: 0;
            }

            img{
                width: 25px;
                transform: rotate(270deg);
                margin-right: 10px;
            }
        }
    }
</style>
