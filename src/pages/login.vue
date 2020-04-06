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
                    <label class="form-control-placeholder" for="username">Email / Telefono</label>
                </div>
                <div class="form-group  mb-0">
                    <input :type="type" id="password" class="form-control" required >
                    <label class="form-control-placeholder" for="password">Password</label>
                    <a class="btn btnShow" @click="showPassword">
                        <i :class="icon" ></i>
                    </a>
                    <p data-error="error" class="msgError d-none">*msgError</p>
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
            </form>
        </div>
    </div>
</template>

<script>
    import image from "../assets/img/logo.png";
    import Vue from "vue";
    import * as firebase from "firebase";
    
    // import funciones from "../funciones.js";
    import LoadScript from "vue-plugin-load-script";
    var Jquery = require("jquery");

    const configOptions = {
        apiKey: "AIzaSyDMMmvx93kGW0ZiHpkbqFTopre63FHogzE",
        authDomain: "raus-4de7b.firebaseapp.com",
        databaseURL: "https://raus-4de7b.firebaseio.com",
        projectId: "raus-4de7b",
        storageBucket: "raus-4de7b.appspot.com",
        messagingSenderId: "474517791609",
        appId: "1:474517791609:web:81aff774436ec0c00d45a8",
        measurementId: "G-8NV2FVKNJY"
    };
    firebase.initializeApp(configOptions);

    Vue.use(LoadScript);
    Vue.loadScript("https://maps.google.com/maps/api/js?key=AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho&libraries=places&region=es&sensor=false&amp;language=es");
    Vue.loadScript("https://code.jquery.com/jquery-3.4.1.js");

    export default {
        name: 'login',
        data: function () {
            return {
                image: image,
                showHide: true,
                type: "password",
                icon: "fas fa-eye",
                formUsername: "",
                formPassword: "",
                dataUser: {},
                dataToken: "",
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
                    url: "http://localhost:9990/api/auth/signIn/",
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
            getInfoClient(id) {
                Jquery.ajax({
                    type: "POST",
                    url: "http://localhost:9990/api/cliente/info/",
                    data: {
                        uid: id
                    },
                    dataType: "json",
                    beforeSend: function () {
                        console.log("Buscando cliente....");
                    },
                    success: function(data) {
                        window.localStorage.setItem("user", JSON.stringify(data));
                    },
                    error: function(data) {
                        console.log(data);
                    }
                });
            },
            async login() {
                this.formUsername = document.querySelector("#username");
                this.formPassword = document.querySelector("#password");

                if (this.formUsername.value.substr(0, 1) === "+") {
                    Jquery.ajax({
                        type: "GET",
                        url: "http://localhost:9990/api/cliente/list/",
                        dataType: "json",
                        beforeSend: function () {
                            console.log("buscando clintes");
                        },
                        success: function(data) {
                            var d = JSON.parse(JSON.stringify(data));
                            console.log(d);
                        },
                        error: function(data) {
                            console.log(data);
                        }
                    });
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
                            this.getInfoClient(res.user.uid);

                            setTimeout(() => {
                                if (window.localStorage.getItem("token") != "") {
                                    this.$store.state.token = window.localStorage.getItem("token");
                                    this.$store.state.isLoggedIn = true;
                                    this.$store.state.user = JSON.parse(window.localStorage.getItem("user"));
                                    window.localStorage.setItem("user", "");
                                }

                                console.log(this.$store.getters);
                                
                                this.$store.getters.isLoggedIn === true && this.$store.getters.tutorial === true
                                    ? this.$router.push("/tutorial")
                                    : this.$router.push("/home");
                            }, 1000);
                        }).catch((error) => {
                            document.querySelector("[data-error='error']").classList.remove("d-none");
                            document.querySelector("[data-error='error']").innerText = "Contraseña o Usuario incorrectos por favor verifique.";
                            console.log(error);
                        });
                }
            }
        },
        beforeMount() {
            this.$store.getters.isLoggedIn
                ? this.$router.push("/home")
                : this.$store.state.token = "", this.$store.state.isLoggedIn = false;
        },
        mounted() {
            if (window.localStorage.getItem("remember") === "true"){
                document.querySelector("#remember").checked = true;
                document.querySelector("#username").value = window.localStorage.getItem("username");
                document.querySelector("#password").value = window.localStorage.getItem("password");
            }
            console.log(this.$store.getters);
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
