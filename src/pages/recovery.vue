<template>
	<div class="bg-login">
		<div class="box inputsFloating">
			<div class="position d-block justify-content-center align-items-center">
				<div class="text-center">
					<img class="imgLogo" src="../assets/img/logo.png" alt="logo"> 
				</div>
				<p class="container textP mt-2">
					Hola!, bienvenido a <br>
					Raus Cliente, <br>
					Restaurar contraseña
				</p>
				<div class="px-0 px-sm-4">
					<div class="inputBox">
						<input placeholder="Nueva contraseña" :type="!showd?'password':'text'" v-model="$v.forget.password.$model" :class="$v.forget.password.$error?'has-error':''" required>
						<label></label>
					</div>
					<div class="inputBox">
						<input placeholder="Conirmar contraseña" :type="!showt?'password':'text'" v-model="$v.forget.passwordtwo.$model" :class="$v.forget.passwordtwo.$error?'has-error':''" required>
						<label></label>
					</div>
					<div class="text-center">
						<button @click="changePass" class="btn btn-darkblue btnResponsive">Crear nueva contraseña</button>
					</div>
					<p v-if="errd" class="pError">{{errd}}</p>
					<p v-if="errt" class="" style="color:blue;">{{errt}}</p>
					<p class="pError mb-2" v-if="$v.forget.password.$error || $v.forget.passwordtwo.$error">La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una letra minuscula y un caracter especial.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from "../config.js";
	import api from '../api.js';
	import { required } from 'vuelidate/lib/validators';
	var Jquery = require("jquery");

	export default {
		name: 'recovery',
		data () {
			return {
				recuperar: {
					email: '',
					waitcode: false,
					codigo: '',
					type: '0',
					formulario: "1"
				},
				defaultrecuperar:{
					email: '',
					waitcode: false,
					codigo: '',
					type: '0',
					formulario: "1"
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
		validations:{
			forget:{
				password:{
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
				passwordtwo:{
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
			async changePass() {
				this.$v.forget.$touch()
				if (!this.$v.forget.$invalid) { 
					var t = this;
					if (t.forget.password != t.forget.passwordtwo) {
						t.errd = "Las contraseñas no coinciden";
						setTimeout(function() {
							t.errd = "";				
						}, 5000);
						return;
					}
					
					t.forget.uid = t.recuperar.waitcode;
					t.forget.new_password = t.forget.passwordtwo;
					t.forget.token = t.$route.params.token;
					
					await api.post("auth/recoveryPass" , t.forget).then(resp => {
						if (resp.data.uid) {
							t.errt = "Contraseña reestablecida con éxito.";
							sessionStorage.uidRestaurante = resp.data.uid
							setTimeout(function() {
								t.errt = "";
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
                                
                                this.signIn(resp.data.uid);

                                if (window.localStorage.getItem("token") != "") {
                                    this.$store.state.token = window.localStorage.getItem("token");
                                    this.$store.state.isLoggedIn = true;
                                    this.$store.state.uid = resp.data.uid;
                                }
                                setTimeout(() => {
									this.$store.getters.isFirstTime === true
										? this.$router.push("/tutorial")
										: this.$router.push("/home");
								}, 1000);
							}, 5000);
						} else {
							t.errd = "Intente de nuevo, ocurrió un error.";
							setTimeout(function() {
								t.errd = "";
							}, 5000);
						}
					}).catch(error => {
						t.errd = error;
						t.errd = "Intente de nuevo."; 
						setTimeout(function() {
								t.errd = "";
						}, 5000);
					});
				}
			}
		}
	}
</script>

<style>
.red{
	color:#c70000;
}
</style>