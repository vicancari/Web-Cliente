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
                    <input type="password" id="password" class="form-control" required >
                    <label class="form-control-placeholder" for="password">Password</label>
                    <a style="padding-left: 0; padding-right: 0;" class="btn btnShow" @click="showPassword">
                        <i style="display: inline-block; width: 40px; padding: .5rem 0; cursor: pointer;" class="fas fa-eye" ></i>
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
                            <button type="button" class="btn color-blue my-2 btnNew" @click="OpenModr(1)">Nueva contraseña</button>
                        </div>
                    </div>
                </div>
                <div class="form-group botonera">
                    <button type="button" class="btn btnEntrar" @click="login">Ingresar</button>
                    <router-link style="display: none;" id="nextLink" to="/tutorial"></router-link>
                    <router-link style="display: none;" id="nextLink2" to="/home"></router-link>
                    <a class="btn btnRegister"><router-link to="/register">Registrarse</router-link></a>
                </div>
            </form>

            <div class="modal" id="recuperar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content sizeModal3 py-1" style="max-width: 100% !important;">
                        <a>
                            <img class="iconBackModalMap" src="../assets/img/icons/flechavolver.svg" width="30px" alt="" @click="OpenModr(2)">
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
    // import store from "../store/store.js";
    import api from "../api.js";

    export default {
        name: 'login',
        data: function () {
            return {
                image: config.rutaWeb(image),
                event: "",
                showHide: true,
                type: "password",
                icon: "fas fa-eye",
                formUsername: "",
                formPassword: "",
                dataUser: {},
                dataToken: "",
                isNaN: NaN,
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
                user: {
                    email : '',
                    password: ''
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
                if (this.showM) {
                    document.querySelector('#modalphone').modal('show');
                    this.codigo = "";
                    this.waitcode = false;
                } else {
                    document.querySelector('#modalphone').modal('hide');
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
        async created() {
            await this.geo();
        },
        methods: {
            showPassword(e) {
                var _parent = e.target.parentNode.parentNode;
                var _input = _parent.firstElementChild;
                var _icon = e.target;

                if (_input.getAttribute("type") === "password") {
                    if (_icon.classList.contains("fa-eye")) {
                        _input.setAttribute("type", "text");
                        _icon.classList.remove("fa-eye");
                        _icon.classList.add("fa-eye-slash");

                        return false;
                    }
                }

                if (_input.getAttribute("type") === "text") {
                    if (_icon.classList.contains("fa-eye-slash")) {
                        _input.setAttribute("type", "password");
                        _icon.classList.remove("fa-eye-slash");
                        _icon.classList.add("fa-eye");

                        return false;
                    }
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
                this.recuperar = {
                    email: '',
                    waitcode: false,
                    codigo: '',
                    type: '0',
                    formulario: "0"
                };
                if (op==1) {
                    document.querySelector('#recuperar').classList.add("__show");
                } else {
                    document.querySelector('#recuperar').classList.remove('__show');
                }
            },
            OpenModr2(op) {
                if (op==1) {
                    document.querySelector('#modalphone').classList.add("__show");
                } else {
                    document.querySelector('#modalphone').classList.remove('__show');
                }
            },
            OpenMod(e) { this.event = e },
            stopLoader() { this.$store.commit("notLoading"); },
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
                    var isNumber = isNaN(document.querySelector("#username").value);
                    if (!isNumber) {
                        if (document.querySelector("#username").value.substr(0, 1) != "+") {
                            document.querySelector("[data-error='username']").innerText = "Lo sentimos pero el número de telefono debe llevar el codigo de area al inicio del país de origen de la cuenta. Ejemplo: +000 seguido de tu número de telefono.";
                            document.querySelector("[data-error='username']").classList.remove("d-none");

                            setTimeout(() => {
                                document.querySelector("[data-error='username']").classList.add("d-none");
                            }, 3500);

                            return false;
                        } else {
                            this.$store.commit("loading");
                            setTimeout(() => {
                                this.$store.commit("notLoading");
                            }, 3000);

                            api.get(`auth/signInPhone/${this.formUsername.value.trim()}`).then(res => {
                                // console.log(res);
                                if (res.msg) {
                                    document.querySelector("[data-error='username']").innerText = "El número de telefono que introdujo no existe.";
                                    document.querySelector("[data-error='username']").classList.remove("d-none");
    
                                    setTimeout(() => {
                                        document.querySelector("[data-error='username']").classList.add("d-none");
                                    }, 3500);
                                    this.stopLoader();
                                    return false;
                                } else {
                                    firebase.auth().signInWithEmailAndPassword(res.email, this.formPassword.value.trim()).then((res) => {
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
                                            this.stopLoader();
                                            this.$store.commit("done");
                                            this.$router.push("/home");
                                        }, 1000);
                                    }).catch((error) => {
                                        this.stopLoader();
                                        document.querySelector("[data-error='password']").classList.remove("d-none");
                                        document.querySelector("[data-error='password']").innerText = "Contraseña o Usuario incorrectos por favor verifique.";
                                        this.err = error;
                                    });
                                }
                            }).catch(err => {
                                var _er = err.msg;
                                setTimeout(() => {
                                    if (_er === true) {
                                        this.stopLoader();
                                        document.querySelector("[data-error='username']").innerText = "El número de telefono que introdujo no existe.";
                                        document.querySelector("[data-error='username']").classList.remove("d-none");
        
                                        setTimeout(() => {
                                            document.querySelector("[data-error='username']").classList.add("d-none");
                                        }, 3500);
        
                                        return false;
                                    }
                                }, 950);
                            });
                        }
                    } else {
                        this.$store.commit("loading");
                        setTimeout(() => {
                            this.$store.commit("notLoading");
                        }, 3000);

                        firebase.auth().signInWithEmailAndPassword(this.formUsername.value.trim(), this.formPassword.value.trim()).then((res) => {
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
                                this.stopLoader();
                                this.$store.commit("done");
                                this.$router.push("/home");
                            }, 1000);
                        }).catch((error) => {
                            this.stopLoader();
                            document.querySelector("[data-error='password']").classList.remove("d-none");
                            document.querySelector("[data-error='password']").innerText = "Contraseña o Usuario incorrectos por favor verifique.";
                            this.err = error;
                        });
                    }
                }
            },
            async singinPhone(op){
                var t = this;
                this.$store.commit("loading");
                setTimeout(() => {
                    this.$store.commit("notLoading");
                }, 1500);
                await api
                    .post("auth/Bynumber" , {name: "", phone: op ==1 ? t.user.email : t.recuperar.email})
                    .then(resp => {
                        if (resp.uid) {
                            if(op ==1)
                                t.waitcode = resp.uid;
                            else if(op ==2)
                                t.recuperar.waitcode = resp.uid;

                            return false;
                        } else {
                            t.errd = "El teléfono no existe, o verifique e intente de nuevo.";
                            setTimeout(function() {
                                t.errd = "";
                            }, 1500);
                            return false;
                        }
                    })
                    .catch(error => {
                        t.errd = error;
                        t.errd = "El teléfono no existe, o verifique e intente de nuevo.";

                        setTimeout(function() {
                            t.errd = "";
                        }, 1500);
                    });
            },
            async VerifycodeRecuperar() {
                this.$store.commit("loading");
                setTimeout(() => {
                    this.$store.commit("notLoading");
                }, 1500);
                await axios.post("https://myraus.com:9283/api/sms/VerificarCodigo" , {codigo: this.recuperar.codigo}).then(resp => {
                    this.$store.commit('notLoading')
                    if(resp.data.result) {
                        this.recuperar.formulario = 1;
                        this.errt = resp.data.message;

                        setTimeout(function() {
                            this.errt = "";
                        }, 1500);
                    } else {
                        this.errd = resp.data.message;
                        setTimeout(function() {
                            this.errd = "";
                        }, 1500);
                    }
                }).catch(error => {
                    console.log(error);
                    this.errd = "Hubo un error validando el código intente nuevamente.";

                    setTimeout(function() {
                        this.errd = "";
                    }, 5000);
                });
            },
            async Sendmail() {
                this.$store.commit("loading");
                setTimeout(() => {
                    this.$store.commit("notLoading");
                }, 1500);
                var url = "";

                if (config.ModeRUN === 1) {
                    url = config.rutaWeb("#/recovery/");
                } else {
                    url = config.rutaWeb("/#/recovery/");
                }

                await api.post("auth/ByEmail", {email: this.recuperar.email, url: url}).then(resp => {
                    if (resp.uid) {
                        this.errt = "Se le ha enviado un correo con instrucciones para restaurar su contraseña.";

                        setTimeout(function() {
                            this.errt = "";
                            document.querySelector('#recuperar').classList.remove('__show');
                        }, 1500);
                    } else {
                        this.errd = "No existe ningun usuario con este correo, o verifique e intente de nuevo.";

                        setTimeout(function() {
                            this.errd = "";
                        }, 1500);
                    }
                }).catch(error => {
                    this.errd = "No existe ningun usuario con este correo, o verifique e intente de nuevo.";
                    console.log(error);
                    setTimeout(function() {
                        this.errd = "";
                    }, 1500);
                });
            },
            async changePass() {
                this.$v.forget.$touch();
                if (!this.$v.forget.$invalid) {
                    if (this.forget.password != this.forget.passwordtwo) {
                        this.errd = "Las contraseñas no coinciden";
                        setTimeout(function() {
                            this.errd = "";
                        }, 1500);
                        return;
                    }

                    this.forget.uid = this.recuperar.waitcode;
                    this.forget.new_password = this.forget.passwordtwo;
                    
                    this.$store.commit("loading");
                    setTimeout(() => {
                        this.$store.commit("notLoading");
                    }, 1500);
                    await api.post("auth/resetPasswordLog" , this.forget).then(resp => {
                        this.$store.commit('notLoading');
                        if(resp.uid){
                            this.errt = "Contraseña reestablecida con éxito.";
                            setTimeout(function() {
                                this.errt = "";
                                document.querySelector('#recuperar').classList.remove('__show');
                            }, 1500);
                        } else {
                            this.errd = "Intente de nuevo, ocurrió un error.";
                            setTimeout(function() {
                                this.errd = "";
                            }, 1500);
                        }
                    }).catch(error => {
                        console.log(error);
                        this.errd = "Intente de nuevo.";

                        setTimeout(function() {
                            this.errd = "";
                        }, 1500);
                    });
                }
            },
            async geo() {
                return new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        async function(pos) {
                            resolve({
                                lat: pos.coords.latitude,
                                lon: pos.coords.longitude
                            });
                        },
                        function(error) {
                            console.log(error);
                            reject();
                        }
                    );
                });
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

<style scoped lang="css">
    #recuperar.modal.__show {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        display: block !important;
        z-index: 900;
    }

    #recuperar.modal.__show .iconBackModalMap {
        top: 0 !important;
        left: 0 !important;
    }

    #modalphone.modal.__show {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        display: block !important;
        z-index: 900;
    }

    #modalphone.modal.__show .iconBackModalMap {
        top: 0 !important;
        left: 0 !important;
    }

    .btn.btn-darkblue {
        display: block !important;
        width: 200px !important;
        margin: .5rem auto !important;
    }
</style>