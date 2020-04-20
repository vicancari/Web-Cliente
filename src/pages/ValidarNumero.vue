<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
            <form id="form-register" @submit.prevent>
                <div class="form1" v-if="section == 1">
                    <div class="form-group">
                        <p class="msg">Introduce el codigo pin que<br>te hemos enviado por sms.</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="codigo-pin" autocomplete="off" maxlength="4" onkeyup="if(this.value.length==this.getAttribute('maxlength')) {document.querySelector('#btnRegistar').disabled = false; return false} else {document.querySelector('#btnRegistar').disabled = true;} return funciones.campoNumber(event);" class="form-control" required>
                        <button type="button" disabled id="otroCode" class="btn btn-darkblue" @click="getOtroCode">Enviar otro código... <span id="timerRegresive">120s</span></button>
                        <p data-error="codigo-pin" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera">
                        <button type="button" id="btnRegistar" disabled class="btn btnRegister" @click="verificarCodigo">Siguiente</button>
                        <button type="button" style="display: none;" id="btn-modal" v-b-modal.my-modal></button>
                        <button type="button" style="display: none;" id="stopLoader" @click="stopLoader"></button>
                        <router-link style="display: none;" id="nextLink" to="/tutorial">next</router-link>
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
    // import vue from "vue";
    import config from "../config.js";
    // import funciones from "../funciones.js";
    import checkimg from "../assets/img/icons/check.svg";
    import image from "../assets/img/logo.png";
    import axios from "axios";
    import api from "../api.js";
    var Jquery = require("jquery");

    export default {
        name: 'validarNumero',
        data: function () {
            return {
                form: "",
                btnModal: "",
                image: config.rutaWeb(image),
                checkimg: config.rutaWeb(checkimg),
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
            signIn(id) {
                Jquery.ajax({
                    type: "POST",
                    url: config.rutaApi("auth/signIn/"),
                    data: {
                        uid: id
                    },
                    dataType: "json",
                    beforeSend: function () {
                        console.log("Iniciando sesion....");
                    },
                    success: function(data) {
                        window.localStorage.setItem("token", data.token);
                    },
                    error: function(data) {
                        console.log(data);
                    }
                });
            },
            getOtroCode() {
                if (this.$store.getters.newRegister[0].phone != "") {
                    this.$store.commit("loading");
                    api.post('auth/numberVerifique', {name: `${this.$store.getters.newRegister[0].name.toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();})}`, phone: `${this.$store.getters.newRegister[0].phone}`}).then(res => {
                        if (res.status === true) {
                            document.querySelector("[data-error='codigo-pin']").innerText = "El nuevo código ya fue enviado, por favor verifique.";
                            document.querySelector("[data-error='codigo-pin']").classList.remove("msgError");
                            document.querySelector("[data-error='codigo-pin']").classList.add("mensaje-success");
                            document.querySelector("[data-error='codigo-pin']").classList.remove("d-none");
                            document.querySelector("#otroCode").disabled = true;

                            setTimeout(() => {
                                document.querySelector("[data-error='codigo-pin']").classList.add("d-none");
                                document.querySelector("[data-error='codigo-pin']").classList.remove("mensaje-success");
                                document.querySelector("[data-error='codigo-pin']").classList.add("msgError");
                            }, 3500);

                            return false;
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                }
            },
            stopLoader() { this.$store.commit("notLoading"); },
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
                    this.$store.commit("loading");
                    axios.post('https://myraus.com:9283/api/sms/VerificarCodigo', {codigo: `${this.formCodigoPin.value}`}).then(res => {
                        if (res.data.result === true) {
                            this.loadTime(true);
                            api.post('cliente/registro/', this.$store.getters.newRegister[0]).then(res => {
                                var uid = res.key;
                                if (res.next === "OK") {
                                    if (uid != "" || uid != null || uid != undefined) {
                                        var _keys = [];
                                        var _values = [];
                                        var accounts = {};
                                        api.get('planes/').then(res => {
                                            _keys = Object.keys(res);
                                            _values = Object.values(res);

                                            for (var i = 0; i < _values.length; i++) {
                                                accounts[`${_values[i].nombre}`] = {
                                                    categorias: _values[i].categorias,
                                                    establecimineto: _values[i].establecimientos,
                                                    id_plan: _keys[i],
                                                    is_base: true,
                                                    type: _values[i].type,
                                                    value: 0
                                                }
                                            }

                                            accounts['propia'] = {
                                                type: 3,
                                                value: 0
                                            }
                                            
                                            api.put('accounts/update/cliente/', {id: uid, data: accounts}).then(res => {
                                                if (res.success === true) {
                                                    this.signIn(uid);
                                                    if (window.localStorage.getItem("token") != "") {
                                                        this.$store.state.token = window.localStorage.getItem("token");
                                                        this.$store.state.isLoggedIn = true;
                                                        this.$store.state.uid = uid;
                                                        document.querySelector("#stopLoader").click();
                                                        this.btnModal = document.querySelector(`#btn-modal`);
                                                        this.btnModal.click();
    
                                                        setTimeout(() => {
                                                            if (document.querySelector("#nextLink")) {
                                                                document.querySelector("#nextLink").click();
                                                            }
                                                        }, 500);
                                                    }
                                                }
                                            });
                                        });
                                    }
                                }
                            }).catch(err => {
                                this.error = err;
                                console.log(err);
                                document.querySelector("#aqui").click();
                            });

                            return false;
                        }

                        if (res.data.result === false) {
                            document.querySelector("[data-error='codigo-pin']").innerText = "El código se ha vencido.";
                            document.querySelector("[data-error='codigo-pin']").classList.remove("d-none");
                            document.querySelector("#stopLoader").click();

                            setTimeout(() => {
                                document.querySelector("[data-error='codigo-pin']").classList.add("d-none");
                            }, 3500);

                            return false;
                        }
                    });
                }
            },
            loadTime(close) {
                if (this.$router.currentRoute.name === "validarNumero") {
                    var c = 120;

                    var l = setInterval(() => {
                        c = c - 1;
                        document.querySelector("#timerRegresive").innerText = c+"s";
                        if (c === 0) {
                            document.querySelector("#otroCode").disabled = false;
                            document.querySelector("#timerRegresive").innerText = "";
                            clearInterval(l);
                        }
                    }, 1000);

                    if (close === true) {
                        clearInterval(l);
                    }
                }
            }
        },
        mounted() {
            this.loadTime();

            this.$store.state.status = "";
            this.$store.state.newRegister = JSON.parse(window.localStorage.getItem("dataRegister"));

            console.log(this.$store.getters.newRegister);
        },
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
            // background: #fff;
            font-size: 12px;
            text-align: center;
            padding: .75rem;
            // border-radius: 5px;
            // font-weight: bold !important;
            // letter-spacing: 0.065rem;
            // text-shadow: 1px 1px 1px rgba(0, 0, 0, .45);
        }

        .mensaje-success {
            color: blue;
            // background: #fff;
            font-size: 12px;
            text-align: center;
            padding: .75rem;
            // border-radius: 5px;
            // font-weight: bold !important;
            // letter-spacing: 0.065rem;
            // text-shadow: 1px 1px 1px rgba(0, 0, 0, .45);
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

<!-- Styles Toast -->
<style scoped lang="scss">
    $toast-colors: () !default;
    $toast-colors: map-merge(
        (
        "success": #47d78a,
        "info": #1c85d5,
        "warning": #febc22,
        "error": #f7471c,
        "default": #343a40
        ),
        $toast-colors
    );

    // Animations are taken from animate.css
    // https://daneden.github.io/animate.css

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fadeOut {
        animation-name: fadeOut;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }

    .fadeInDown {
        animation-name: fadeInDown;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }

    .fadeInUp {
        animation-name: fadeInUp;
    }

    /**
    * Vue Transitions
    */

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 150ms ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .notices {
        position: fixed;
        display: flex;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 2em;
        overflow: hidden;
        z-index: 1052;
        pointer-events: none;

        .toast {
            position: fixed;
            display: inline-flex;
            align-items: center;
            animation-duration: 150ms;
            margin: 0.5em 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            border-radius: 0.25em;
            pointer-events: auto;
            opacity: 0.92;
            color: #fff;
            min-height: 3em;
            cursor: pointer;

            .toast-text {
                margin: 0;
                padding: 0.5em 1em;
                word-break: break-all;
            }

            .toast-icon {
                display: none;
            }
        }

        // Colors
        @each $color, $value in $toast-colors {
            .toast-#{$color} {
                background-color: $value;
            }
        }

        // Individual toast position
        .toast {
            &.is-top, &.is-bottom {
                left: 50%;
                transform: translate(-50%, 0);
            }

            &.is-top-right, &.is-bottom-right {
                right: 0;
            }

            &.is-top-left, &.is-bottom-left {
                left: 0;
            }
        }

        // Notice container positions
        &.is-top {
            top: 0;
        }

        &.is-bottom {
            bottom: 0;
        }

        &.is-custom-parent {
            position: fixed;
            z-index: 100;
        }

        @media screen and (max-width: 768px) {
            padding: 0;
            position: fixed !important;
        }
    }

    .notices {
        .toast {
            opacity: 1;
            min-height: 4em;

            .toast-text {
                padding: 1.5em 1em;
            }

            .toast-icon {
                display: block;
                width: 27px;
                min-width: 27px;
                height: 27px;
                margin-left: 1em;
                background: url(../assets/img/icons/info.svg) no-repeat;
            }

            &.toast-success .toast-icon {
                background: url(../assets/img/icons/success.svg) no-repeat;
            }

            &.toast-error .toast-icon {
                background: url(../assets/img/icons/error.svg) no-repeat;
            }

            &.toast-warning .toast-icon {
                background: url(../assets/img/icons/warning.svg) no-repeat;
            }
        }
    }
</style>