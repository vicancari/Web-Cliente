<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
                <h5>Hola!, bienvenida y bienvenido a Raus, haz login o registrate para unirte a la nueva era de la conexión comercial</h5>
            </div>
            <form>
                <div class="form-group a">
                    <input type="text" id="username" class="form-control" required>
                    <label class="form-control-placeholder" for="username">Email / Telefono (+000000)</label>
                    <p data-error="username" class="msgError d-none">*msgError</p>
                </div>
                <div class="form-group  mb-0">
                    <input :type="type" id="password" class="form-control" required >
                    <label class="form-control-placeholder" for="password">Password</label>
                    <a class="btn btnShow" @click="showPassword">
                        <i :class="icon" ></i>
                    </a>
                    <p data-error="password" class="msgError d-none">*msgError</p>
                </div>
                <div class="form-group">
                    <div class="row d-flex align-items-center">
                        <div class="col-6">
                            <div class="md-checkbox my-2">
                                <input id="remember" type="checkbox">
                                <label for="remember" class="color-blue ">Recuerdame</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn color-blue my-2 btnNew">Nueva contraseña</button>
                        </div>
                    </div>
                </div>
                <div class="form-group botonera">
                    <button type="button" class="btn btnEntrar" @click="login">Ingresar</button>
                    <router-link style="display: none;" id="nextLink" to="/tutorial"></router-link>
                    <router-link style="display: none;" id="nextLink2" to="/home"></router-link>
                    <a class="btn btnRegister"><router-link to="/register">Registrarse</router-link></a>
                </div>

                <div class="modal fade" id="recuperar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content sizeModal3 py-1" style="max-width: 100% !important;">
                            <a href="">
                                <img class="iconBackModalMap" data-dismiss="modal" src="img/icons/flechavolver.svg" width="30px" alt="" @click="recuperar=defaultrecuperar">
                            </a>
                            <div class="modal-body text-lightblue paddingModalBody-fide">
                                <h4 class="text-center mt-2">Recuperar contraseña</h4>
                                <div class="row text-center mt-4 rowbutton">
                                    <div class="col-12">
                                        <div class="text-center" v-if="recuperar.type=='0'">
                                            <button @click="recuperar.type = 1" class="btn btn-darkblue btnResponsive" >Email</button>
                                        </div>

                                        <div class="text-center" v-if="recuperar.type=='0'">
                                            <button @click="recuperar.type = 2" class="btn btn-darkblue btnResponsive" >Teléfono</button>
                                        </div>

                                        <div class="inputBox" v-if="recuperar.type==1">
                                            <input type="text" placeholder="Eje: raus@raus.com" v-model="recuperar.email">
                                            <label></label>
                                        </div>
                                        
                                        <div class="inputBox" v-if="recuperar.type==2">
                                            <input type="text" placeholder="Eje: +10000000" v-model="recuperar.email" :readonly="recuperar.waitcode">
                                            <label></label>
                                        </div>
                                        <div class="inputBox" v-if="recuperar.waitcode && recuperar.type==2 && recuperar.formulario=='0'">
                                            <input type="text" v-model="recuperar.codigo" @input="recuperar.codigo = $event.target.value.toUpperCase()" placeholder="Ingresa el código enviado aquí" maxlength="4">
                                            <label></label>
                                        </div>
                                        <div class="text-center" v-if="!recuperar.waitcode && recuperar.type==1">
                                            <button @click="Sendmail" class="btn btn-darkblue btnResponsive" >Enviar correo</button>
                                        </div>
                                        <div class="text-center" v-if="!recuperar.waitcode && recuperar.type==2 && recuperar.formulario=='0'">
                                            <button @click="singinPhone(2)" class="btn btn-darkblue btnResponsive" >Verificar teléfono</button>
                                        </div>
                                        <div class="text-center" v-if="recuperar.waitcode && recuperar.type==2 && recuperar.formulario=='0'">
                                            <button @click="VerifycodeRecuperar" class="btn btn-darkblue btnResponsive" >Verificar código</button>
                                        </div>
                                        <div class="inputBox" v-if="recuperar.formulario==1">
                                            <input placeholder="Nueva contraseña" :type="!showd?'password':'text'" v-model="$v.forget.password.$model" :class="$v.forget.password.$error?'has-error':''" required>
                                            <label></label>
                                        </div>
                                        <div class="inputBox" v-if="recuperar.formulario==1">
                                            <input placeholder="Conirmar contraseña" :type="!showt?'password':'text'" v-model="$v.forget.passwordtwo.$model" :class="$v.forget.passwordtwo.$error?'has-error':''" required>
                                            <label></label>
                                        </div>
                                        <div class="text-center" v-if="recuperar.formulario==1">
                                            <button @click="changePass" class="btn btn-darkblue btnResponsive">Crear nueva contraseña</button>
                                        </div>
                                        <p v-if="errd" class="pError">{{errd}}</p>
                                        <p v-if="errt" class="" style="color:blue;">{{errt}}</p>
                                        <p class="pError mb-2" v-if="$v.forget.password.$error || $v.forget.passwordtwo.$error">La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una letra minuscula y un caracter especial.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    var Jquery = require("jquery");
    import config from "../config.js";
    import image from  "../assets/img/logo.png";
    import * as firebase from "firebase";
    import { required, minLength } from 'vuelidate/lib/validators'
    import axios from "axios";

    export default {
        name: 'login',
        data: function () {
            return {
                image: config.rutaWeb(image),
                showHide: true,
                type: "password",
                icon: "fas fa-eye",
                formUsername: "",
                formPassword: "",
                dataUser: {},
                dataToken: "",
                recuperar: {
                    email: '',
                    waitcode: false,
                    codigo: '',
                    type: '0',
                    formulario: "0"
                },
                defaultrecuperar:{
                    email: '',
                    waitcode: false,
                    codigo: '',
                    type: '0',
                    formulario: "0"
                },
                forget: {
                    password: '',
                    passwordtwo: ''
                },
                codigo: '',
                err:'',
                show:false,
                showd:false,
                showt:false,
                Recordarme: false,
                showM: false,
                errd: '',
                errt: '',
                waitcode: false
            }
        },
        watch:{
            showM() {
                var $ = Jquery;
                if (this.showM) {
                    $('#modalphone').modal('show');
                    this.codigo = "";
                    this.waitcode = false;
                } else {
                    $('#modalphone').modal('hide');
                }
            }
        },
        validations: {
            forget: {
                password: {
                    required,
                    strongPassword(password) {
                        return password.length >= 8 &&
                        password.length < 15 &&
                        /[a-z]/.test(password) &&
                        /[A-Z]/.test(password) &&
                        /[0-9]/.test(password) &&
                        /\W|_/.test(password)
                    }
                },
                passwordtwo: {
                    required,
                    strongPassword(passwordtwo) {
                        return passwordtwo.length >= 8 &&
                        passwordtwo.length < 15 &&
                        /[a-z]/.test(passwordtwo) &&
                        /[A-Z]/.test(passwordtwo) &&
                        /[0-9]/.test(passwordtwo) &&
                        /\W|_/.test(passwordtwo)
                    }
                }
            },
            user: {
                email: {
                    required,
                    minLength: minLength(5)
                },
                password: {
                    required,
                    strongPassword(password) {
                        return password.length >= 8 &&
                        password.length < 15 &&
                        /[a-z]/.test(password) &&
                        /[A-Z]/.test(password) &&
                        /[0-9]/.test(password) &&
                        /\W|_/.test(password)
                    }
                }
            }
        },
        methods: {
            showPassword() {
                if(this.type === "password") {
                    this.type = "text"
                    this.icon = "fas fa-eye"
                } else {
                    this.type = "password"
                    this.icon = "fas fa-eye-slash"
                }
            },
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
            OpenModr(op) {
                var $ = Jquery;
                this.recuperar = {
                    email: '',
                    waitcode: false,
                    codigo: '',
                    type: '0',
                    formulario: "0"
                };
                if (op==1) {
                    $('#recuperar').modal('show');
                } else {
                    $('#recuperar').modal('hide');
                }
            },
            async login() {
                this.formUsername = document.querySelector("#username");
                this.formPassword = document.querySelector("#password");

                if (this.formUsername.value === "") {
                    document.querySelector("[data-error='username']").innerText = "Introduzca un correo electrónico válido, o ingrese su número de telefono con el código de area.";
                    document.querySelector("[data-error='username']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='username']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (this.formPassword.value === "") {
                    document.querySelector("[data-error='password']").innerText = "La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una letra minuscula y un caracter especial.";
                    document.querySelector("[data-error='password']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='password']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (this.formUsername.value != "" && this.formPassword != "") {
                    this.$store.commit("loading");
                    if (this.formUsername.value.substr(0, 1) === "+") {
                        // Sesion por numberPhone.
                    } else {
                        firebase.auth().signInWithEmailAndPassword(this.formUsername.value, this.formPassword.value)
                            .then((res) => {
                                if (document.querySelector("#remember")) {
                                    if (document.querySelector("#remember").checked === true) {
                                        window.localStorage.setItem("remember", "true");
                                    } else {
                                        window.localStorage.setItem("remember", "false");
                                    }
                                }

                                if (window.localStorage.getItem("remember") === "true"){
                                    window.localStorage.setItem("username", document.querySelector("#username").value);
                                    window.localStorage.setItem("password", document.querySelector("#password").value);
                                }

                                if (window.localStorage.getItem("remember") === "false"){
                                    window.localStorage.setItem("username", document.querySelector("#username").value);
                                    window.localStorage.setItem("password", document.querySelector("#password").value);
                                }
                                
                                this.signIn(res.user.uid);

                                if (window.localStorage.getItem("token") != "") {
                                    this.$store.state.token = window.localStorage.getItem("token");
                                    this.$store.state.isLoggedIn = true;
                                    this.$store.state.uid = res.user.uid;
                                }
                                setTimeout(() => {
                                    this.$store.commit("done");
                                    this.$store.getters.isFirstTime === true
                                        ? this.$router.push("/tutorial")
                                        : this.$router.push("/home");
                                }, 1000);
                            }).catch((error) => {
                                document.querySelector("[data-error='error']").classList.remove("d-none");
                                document.querySelector("[data-error='error']").innerText = "Contraseña o Usuario incorrectos por favor verifique.";
                                console.log(error);
                                this.$store.commit("error");
                            });
                    }
                }
            },
            async Verifycode() {
                await axios.post("https://myraus.com:9283/api/sms/VerificarCodigo" , {codigo: this.codigo}).then(resp => {
                    if(resp.data.result){
                        Jquery('#modalphone').modal('hide');
                        this.$store.state.uid = this.waitcode;
                        this.errt = resp.data.message;

                        setTimeout(function() {
                            this.errt = "";
                        }, 5000);
                    } else {
                        this.$store.commit('notLoading');
                        this.errd = resp.data.message;

                        setTimeout(function() {
                            this.errd = "";
                        }, 5000);
                    }
                }).catch(error => {
                    console.log(error);
                    this.errd = "Hubo un error validando el código intente nuevamente.";

                    setTimeout(function() {
                        this.errd = "";
                    }, 5000);
                    this.$store.commit("notLoading");
                });
            },
            async VerifycodeRecuperar() {
                this.$store.commit('loading');
                await axios.post("https://myraus.com:9283/api/sms/VerificarCodigo" , {codigo: this.recuperar.codigo}).then(resp => {
                    this.$store.commit('notLoading')
                    if(resp.data.result) {
                        this.recuperar.formulario = 1;
                        this.errt = resp.data.message;

                        setTimeout(function() {
                            this.errt = "";
                        }, 3000);
                    } else {
                        this.errd = resp.data.message;
                        setTimeout(function() {
                            this.errd = "";
                        }, 5000);
                    }
                }).catch(error => {
                    console.log(error);
                    this.errd = "Hubo un error validando el código intente nuevamente.";

                    setTimeout(function() {
                        this.errd = "";
                    }, 5000);
                    this.$store.commit('notLoading');
                });
            },
            async Sendmail() {
                this.$store.commit('loading')
                var url = config.rutaWeb("/#/recovery/");

                await axios.post("/auth/ByEmail" , {email: this.recuperar.email, url: url}).then(resp => {
                    this.$store.dispatch('desactiveloading')
                    if(resp.data.uid){
                        this.errt = "Se le ha enviado un correo con instrucciones para restaurar su contraseña.";

                        setTimeout(function() {
                            this.errt = "";
                            this.OpenModr(2);
                        }, 5000);
                    } else {
                        this.errd = "No existe ningun usuario con este correo, o verifique e intente de nuevo.";

                        setTimeout(function() {
                            this.errd = "";
                        }, 5000);
                    }
                }).catch(error => {
                    this.errd = "No existe ningun usuario con este correo, o verifique e intente de nuevo.";
                    console.log(error);
                    setTimeout(function() {
                        this.errd = "";
                    }, 5000);
                    this.$store.commit('notLoading');
                });
            },
            async changePass() {
                this.$v.forget.$touch();
                if (!this.$v.forget.$invalid) {
                    if (this.forget.password != this.forget.passwordtwo) {
                        this.errd = "Las contraseñas no coinciden";
                        setTimeout(function() {
                            this.errd = "";
                        }, 5000);
                        return;
                    }

                    this.$store.commit('loading')
                    this.forget.uid = this.recuperar.waitcode;
                    this.forget.new_password = this.forget.passwordtwo;
                    await axios.post("/auth/resetPasswordLog" , this.forget).then(resp => {
                        this.$store.commit('notLoading');
                        if(resp.data.uid){
                            this.errt = "Contraseña reestablecida con éxito.";
                            setTimeout(function() {
                                this.errt = "";
                                this.OpenModr(2);
                            }, 5000);
                        } else {
                            this.errd = "Intente de nuevo, ocurrió un error.";
                            setTimeout(function() {
                                this.errd = "";
                            }, 5000);
                        }
                    }).catch(error => {
                        console.log(error);
                        this.errd = "Intente de nuevo.";

                        setTimeout(function() {
                            this.errd = "";
                        }, 5000);
                        this.$store.commit('notLoading');
                    });
                }
            }
        },
        async mounted() {
            if (this.$store.getters.isLoggedIn === true) {
                this.$router.push("/home");
            } else {
                window.localStorage.clear();
                this.$store.state.isLoggedIn = false;
                this.$store.state.token = "";
                this.$store.state.uid = "";
                this.$store.state.isFirstTime = this.$store.state.isFirstTime === false ? false : true;
                this.$store.commit("notLoading");
                return false;
            }

            if (window.localStorage.getItem("remember") === "true"){
                document.querySelector("#remember").checked = true;
                document.querySelector("#username").value = window.localStorage.getItem("username");
                document.querySelector("#password").value = window.localStorage.getItem("password");
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
                .btnShow{
                    position: absolute;
                    top: 0;
                    right: 0;
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
                a, button{
                    border-radius: 0;
                    color: #fff;
                    font-size: 14px;
                    width: 120px;
                    margin: auto;
                    padding: 4px;
                    text-decoration: none;
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
    }   
</style>
