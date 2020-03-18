<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-recargar" ref="modal-recargar"  hide-footer hide-header>  
           <div class="bodyRecargar">
               <h5 class="titleRecargar"><img class="img-fluid" :src="agregar" alt="">Agregar saldo</h5>
               <div class="boxInput">
                   <span>€</span>
                   <input type="number" class="form-control" placeholder="Monto">
               </div>
               <div class="tarjetas">
                   <h5 class="title">Seleccionar tarjeta o cuenta</h5>
                   <div class="datosTarjetas mb-1" v-on:click="active = 1 ">
                       <div class="d-flex justify-content-between dates" v-bind:class="{ 'active': active == 1 }" >
                           <h5 class="mb-0">Visa</h5>
                           <h5 class="mb-0">*******3512</h5>
                        </div>    
                        <button class="btn">
                            <img class="img-fluid" :src="close" alt="">
                        </button >
                   </div>
                   <div class="datosTarjetas mb-1" v-on:click="active = 2">
                       <div class="d-flex justify-content-between dates" v-bind:class="{ 'active': active == 2 }" >
                           <h5 class="mb-0">Caixa</h5>
                           <h5 class="mb-0">*******3512</h5>
                        </div>    
                        <button class="btn">
                            <img class="img-fluid" :src="close" alt="">
                        </button >
                   </div>
                   <div class="datosTarjetas mb-1" v-on:click="active = 3">
                       <div class="d-flex justify-content-between dates" v-bind:class="{ 'active': active == 3 }" >
                           <h5 class="mb-0">Master</h5>
                           <h5 class="mb-0">*******3512</h5>
                        </div>    
                        <button class="btn">
                            <img class="img-fluid" :src="close" alt="">
                        </button >
                   </div>
               </div>
               <button class="btn btnAgregar" v-on:click="formShow = !formShow">
                   <img :src="tarjeta" alt="">
                   Agregar tarjeta o cuenta
               </button>
               <div class="boxFormulario" v-if="formShow">
                   <form action="">
                       <div class="row m-0">
                           <div class="col-12 p-0">
                                <div class="form-group">
                                    <input type="number" id="name" class="form-control" required placeholder="Tarjeta número / cuenta númer">
                                    <p class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-6 p-0">
                                <div class="form-group">
                                    <input type="text" id="date" class="form-control" required placeholder="Fecha exp" onfocus="(this.type='date')" onblur="(this.type='text')">
                                    <p class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-6 p-0">
                                <div class="form-group">
                                    <input type="number" id="cvc" class="form-control" required placeholder="CVC">
                                    <p class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-12 p-0">
                                <div class="form-group">
                                    <input type="text" id="nametarget" class="form-control" required placeholder="Nombre en tarjeta">
                                    <p class="msgError d-none">*msgError</p>
                                </div>
                           </div>
                           <div class="col-12">
                               <div class="d-flex justify-content-center footer-btn">
                                    <button class="btn" @click="$bvModal.hide('modal-recargar'), $bvModal.show('menu-modal')  ">Volver</button>
                                    <button class="btn">Agregar</button>
                               </div>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
        </b-modal>
    </div>
</template>
<script>

/* Images */
import agregar from '../assets/img/icons/menu/agregarazul.svg';
import close from '../assets/img/icons/close.svg';
import tarjeta from '../assets/img/icons/iconotarjetag.svg';

export default {
    name: 'recargar',
    components: {
    },
  data: function () {
        return {
            myclass: ['modal-recargar'],
            agregar: agregar,
            tarjeta: tarjeta,
            close: close,
            active: '',
            formShow: false
        }
    },
    methods: {
    
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .bodyRecargar{
        padding: 0 25px;
        @media (max-width: 576px){
            padding: 0px;
        }
        .titleRecargar{
            color: var(--blue);
            margin: 0 auto;
            text-align: center;
            img{
                width: 30px;
                object-fit: contain;
                margin-right: 10px;
            }
        }
        .boxInput{
            position: relative;
            margin-top: 25px;
            span{
                position: absolute;
                top: 25px;
                left: 0;
                color: var(--blue);
                font-size: 38px;
            }
            .form-control{
                border: none;
                border-bottom: 1px solid var(--blue);
                color: var(--blue);
                text-align: center;
                font-size: 68px;
                border-radius: 0;
                padding: 6px 20px;
                &:focus{
                    box-shadow: none;
                    border-color: var(--blue);
                }
                &::placeholder{
                    opacity: .8;
                }
            }
        }
        .tarjetas{
            max-width: 100%;
            margin: auto;
            .title{
                text-align: center;
                color: var(--text-color);
                margin-bottom: 0;
                font-size: 16px;
                margin-top: 10px;
                margin-bottom: 30px;
            }
            .datosTarjetas{
                display: flex;
                align-items: center;
                max-width: 85%;
                margin: auto;
                cursor: pointer;
                &:hover{
                    .dates{
                        background-color: #b8b6aa;
                    }
                }
                .dates.active{
                    background-color: #b8b6aa;
                }
                .dates{
                    width: 80%;
                    h5{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        color: var(--blue);
                        font-size: 16px;
                        max-width: 50%;
                        padding: 8px 10px;
                        &:nth-child(2){
                            text-align: right;
                        }
                    }
                }
                .btn{
                    width: 20%;
                    img{
                        width: 15px;
                    }
                }
            }
        }
        .btnAgregar{
            text-align: center;
            margin: 20px auto 0px;
            display: block;
            color: var(--blue);
            img{
                width: 40px;
                font-size: 16px;
            }
        }
        .boxFormulario{
            max-width: 90%;
            margin: 20px auto 0;
            form{
                .form-group{
                    margin-bottom: 25px;
                    .form-control{
                        background-color: transparent;
                        opacity: 1;
                        border: none;
                        border-bottom: 1px solid #d1d1d1;
                        border-radius: 0;
                        box-shadow: none;
                        text-align : center;
                        color: var(--text-color);
                        text-align: center;
                        &:focus{
                            border-color: var(--blue);
                        }
                        &::placeholder{
                            opacity: .8;
                        }
                    }
                }
            }
            .footer-btn{
                margin: 15px auto;
                .btn{
                    width: 120px;
                    margin: auto 20px;
                    color: #fff;
                    border-radius: 0;
                    padding: 6px;
                    &:nth-child(1){
                        background-color: var(--blue-opacity);
                    }
                    &:nth-child(2){
                        background-color: var(--blue);
                    }
                }
            }
        }
    }
    
</style>
