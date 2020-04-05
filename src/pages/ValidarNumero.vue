<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
            <form id="form-register">
                <div class="form1" v-if="section == 1">
                    <div class="form-group">
                        <p class="msg">Introduce el codigo pin que<br>te hemos enviado por sms.</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="codigo-pin" maxlength="4" onkeyup="if(this.value.length==this.getAttribute('maxlength')) {document.querySelector('#btnRegistar').disabled = false; return false} else {document.querySelector('#btnRegistar').disabled = true;} return funciones.campoNumber(event);" class="form-control" required>
                        <p data-error="codigo-pin" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera">
                        <button type="button" id="btnRegistar" disabled class="btn btnRegister" @click="verificarCodigo">Siguiente</button>
                        <button type="button" style="display: none;" id="btn-modal" v-b-modal.my-modal></button>
                        <router-link style="display: none;" id="nextLink" to="/">next</router-link>
                    </div>
                </div>
            </form>
        </div>

        <b-modal :modal-class="myclass" centered  id="my-modal" ref="my-modal"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img :src="checkimg" alt="">
                <h3>¡Éxito!</h3>
                <p>El número de teléfono fue verificado exitosamente.</p>
            </div>
        </b-modal>
    </div>
</template>

<script>
    // import funciones from "../funciones.js";
    import checkimg from "../assets/img/icons/check.svg";
    import image from "../assets/img/logo.png";
    var $ = require("jquery");

    export default {
        name: 'validarNumero',
        data: function () {
            return {
                form: "",
                btnModal: "",
                image: image,
                checkimg: checkimg,
                showHide: true,
                type: "password",
                icon: "fas fa-eye",
                type2: "password",
                icon2: "fas fa-eye",
                section: 1,
                myclass: ['alert'],
                formCodigoPin: ""
            }
        },
        methods: {
            verificarCodigo() {
                this.formCodigoPin = document.querySelector("#codigo-pin");

                if (this.formCodigoPin.value === "") {
                    document.querySelector("[data-error='codigo-pin']").innerText = "Por favor rellene el campo de código.";
                    document.querySelector("[data-error='codigo-pin']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='codigo-pin']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formCodigoPin.value.length < 4) {
                    document.querySelector("[data-error='codigo-pin']").innerText = "El codigo debe tener 4 números.";
                    document.querySelector("[data-error='codigo-pin']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='codigo-pin']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formCodigoPin.value != "" && this.formCodigoPin.value.length === 4) {
                    console.log(this.formCodigoPin.value);
                    $.post('https://myraus.com:9283/api/sms/VerificarCodigo', {codigo: `${this.formCodigoPin.value}`}, function(resp) {
                        console.log(resp);
                        if (resp.result === true) {
                            this.btnModal = document.querySelector(`#btn-modal`);
                            this.btnModal.click();
                            setTimeout(() => {
                                if (document.querySelector("#nextLink")) {
                                    document.querySelector("#nextLink").click();
                                }
                            }, 1000);
                        }
                    });
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .box-login{
        background-image: url('../assets/img/fondo.jpeg');
        min-height: 100vh;
        height: 100%;
        background-size: cover;
        object-fit: cover;
        background-position: center center;
        position: relative;
        .container{
            height: 100%;
            min-height: 100vh;
            background-color: rgba(255, 255, 255, .7);
            max-width: 580px;
            width: 100%;
            padding: 30px 0;
            .boxText{
                margin-bottom: 50px;
                .logo{
                    width: 190px;
                    margin: 0px auto;
                }
                h5{
                    font-size: 28px;
                    max-width: 50%;
                    margin: 20px auto;
                    line-height: 1.4;
                    color: var(--blue);
                    @media (max-width: 767px){
                        font-size: 26px;
                        max-width: 80%;
                    }
                }
            }
        }

        /* floatin-label */
        form{
            max-width: 70%;
            margin: auto auto 1.5rem;
             @media (max-width: 767px){
                max-width: 380px;
            }
             @media (max-width: 480px){
                max-width: 90%;
            }
            .form-group {
                position: relative;
                margin-bottom: 30px;
                .btnShow, .mapMarket{
                    position: absolute;
                    top: 0;
                    right: 0;
                    
                }
                .mapMarket{
                    top: 5px;
                    color: #77afde !important;
                    i{
                        font-size: 22px;
                    }
                }
                input.date{
                    padding-left: 45px;
                }
                .form-control{
                    background-color: transparent;
                    opacity: 1;
                    border: none;
                    border-bottom: 1px solid #c1c1c1;
                    border-radius: 0;
                    box-shadow: none;
                    text-align : center;
                    border-color: var(--blue);
                    &:focus{
                        border-color: var(--blue);
                    }
                    label{
                        color: var(--primary);
                    }
                }

                .form-control-placeholder {
                    position: absolute;
                    top: 5px;
                    padding: 0;
                    transition: all 200ms;
                    opacity: 1;
                    transform: translateX(-50%);
                    left: 50%;
                }

                .form-control:focus + .form-control-placeholder,
                .form-control:valid + .form-control-placeholder {
                    font-size: 75%;
                    transform: translate3d(-50%, -100%, 0);
                    opacity: 1;
                    padding: 0;
                    left: 50%;
                }
            }
            .form-group.a{
                margin-bottom: 50px;
            }

            .btnNew{
                margin-top: 5px !important;
                float: right;
                @media (max-width: 767px){
                    font-size: 14px;
                    padding: 0;
                }
                @media (max-width: 320px){
                  font-size: 12px;
                    padding: 0;
                }
            }

            .md-checkbox{
                label{
                    @media (max-width: 767px){
                        font-size: 14px;
                    }
                    @media (max-width: 320px){
                        font-size: 12px;
                    }  
                }
            }

            /* botonera */
            .botonera{
                display: flex;
                flex-direction: column;
                a, button {
                    border-radius: 0;
                    color: #fff;
                    font-size: 14px;
                    width: 120px;
                    margin: auto;
                    padding: 4px;
                }
                .btnEntrar{
                    background-color: var(--blue);

                }
                .btnRegister{
                    background-color: var(--yellow);
                    margin-top: 40px;

                }
            }
        }

        .msgError{
            color: red;
            background: #fff;
            font-size: 12px;
            text-align: center;
            padding: .75rem;
            border-radius: 5px;
            font-weight: bold !important;
            letter-spacing: 0.065rem;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, .45);
        }
    }
</style>

<style lang="css">
    #GmapMark .modal.show .modal-dialog {
        max-width: 100vw !important;
    }
    #GmapMark .modal.show .modal-dialog .modal-content {
        height: 70vh !important;
    }
</style>
