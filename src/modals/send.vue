<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-send" ref="modal-send"  hide-footer hide-header>  
            <div class="boxCalculate">
                <input type="text" class="form-control search" placeholder="Buscar" >
                <div class="priceText">
                   <span>€</span>
                     <input type="number" class="form-control" placeholder="Monto">
                </div>
                <div class="d-flex">
                    <button class="btn">1</button>
                    <button class="btn">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button>
                    <button class="btn">5</button>
                    <button class="btn">6</button>
                    <button class="btn">7</button>
                    <button class="btn">8</button>
                    <button class="btn">9</button>
                    <button class="btn">,</button>
                    <button class="btn">0</button>
                    <button class="btn"><img class="img-fluid" :src="check" alt="" @click="Pay"></button>
                </div>
            </div>
        </b-modal>
        
         <b-modal centered :modal-class="payment" id="modal-payment" ref="modal-payment"  hide-footer hide-header>  
            <div class="boxPago">
                <h5 class="title">Selecciona un tipo de pago</h5>
                <div class="box">
                    <div class="form-group">
                        <input type="radio" id="radio1" name="tipoPago" checked>
                        <label for="radio1">Raus Eat</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="radio2" name="tipoPago">
                        <label for="radio2">Propio </label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="radio3" name="tipoPago">
                        <label for="radio3">Mix</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="radio4" name="tipoPago">
                        <label for="radio4">Puntos</label>
                    </div>
                </div>
                <div class="boxPrice">
                    <p v-b-tooltip.hover title="111.11,00€">11<span>,00€</span></p>
                    <h5 class="name">Casa Carmen Restaurant</h5>
                </div>
                <div class="footer">
                    <button class="btn btn-confirmar">Confirmar</button>
                    <button class="btn btn-cancelar">Cancelar</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    import check from '../assets/img/icons/check-blanco.svg';

    export default {
        name: 'send',
        components: {},
        data: function () {
            return {
                myclass: ['modal-send'],
                payment: ['modal-payment'],
                check: config.rutaWeb(check),
            }
        },
        methods: {
            Pay(){
                this.$refs['modal-send'].hide();
                this.$refs['modal-payment'].show();            
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
     //send modal
    .boxCalculate{
        .search{
            border-radius: 0;
            border: 1px solid #d1d1d1;
            text-align: center;
            color: var(--text-color);
            &:focus{
                box-shadow: none;
                border-color:#89addc;
            }
            &::placeholder{
                text-align: center;
            }
        }

        .priceText{
            position: relative;
            margin: 10px -15px 0;
            padding: 0 15px;
            border-bottom: 1px dashed #fff;
            span{
                position: absolute;
                left: 15px;
                top: 20px;
                font-size: 26px;
                color: #fff;
            }
            input{
                background: transparent;
                border: none;
                box-shadow: none;
                color: #fff;
                text-align: center;
                font-size: 52px;
                padding: 0 16px;
                 &:focus{
                    box-shadow: none;
                    border-color:#89addc;
                }
                &::placeholder{
                    text-align: center;
                    color: #fff;
                    opacity: .7;
                    font-size: 32px;
                }
            }
        }

        .d-flex{
            flex-wrap: wrap;
            .btn{
                width: 33.3%;
                height: 60px;
                color: #fff;
                font-size: 28px;
                img{
                    transform: scale(1.3);
                    height: 100%;
                }
            }
        }
    }
    //modal tipo pago
    .boxPago{
        .title{
            color: var(--bluePrimary);
            text-align: center;
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 15px;
        }
        .box{
            display: flex;
            width: 100%;
            margin: 10px auto 0;
            .form-group{
                width: 30%;
                margin-bottom: 0;
                input{
                    display: none;
                }
                label{
                    background: transparent;
                    text-align: center;
                    display: block;
                    margin-bottom: 0;
                    padding: 4px;   
                    color: var(--bluePrimary);
                    cursor: pointer;
                }
                input[type="radio"]:checked+label{
                    background-color: var(--blue-opacity);
                    color: #fff;
                } 
            }

        }
        .boxPrice{
            text-align: center;
            p{
                margin: 0;
                text-align: center;
                color: #9d8755;
                font-size: 52px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span{
                    font-size: 32px;
                }
            }
            .name{
                text-align: center;
                color: var(--bluePrimary);
                font-size: 20px;
                font-weight: normal;
            }
        }
        .footer{
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            button{
                color: #fff;
                width: 45%;
                border-radius: 0;
            }
            .btn-confirmar{
                background-color: var(--blue)
            }
            .btn-cancelar{
                background-color: var(--blue-opacity)
            }
        }
    }
</style>
