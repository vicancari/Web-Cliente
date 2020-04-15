<template>
	<div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
			<p class="textP mt-2">Hola!, bienvenido a<br>Raus Cliente,<br>Restaurar contraseña</p>
            <form id="form-register">
                <div class="form1">
                    <div class="form-group">
                        <input placeholder="Nueva contraseña" :type="!showd?'password':'text'" v-model="$v.forget.password.$model" class="form-control" :class="$v.forget.password.$error?'has-error':''" required>
                        <p data-error="codigo-pin" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input placeholder="Confirmar contraseña" :type="!showt?'password':'text'" v-model="$v.forget.passwordtwo.$model" class="form-control" :class="$v.forget.passwordtwo.$error?'has-error':''" required>
                        <p data-error="codigo-pin" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera">
                        <button type="button" @click="changePass" class="btn btn-darkblue btnResponsive">Crear nueva contraseña</button>
						<router-link style="display: none;" id="nextLink" to="/"></router-link>
                    </div>
					<br>
					<p v-if="errd" class="pError">{{errd}}</p>
					<p v-if="errt" class="" style="color:blue;">{{errt}}</p>
					<p class="pError mb-2" v-if="$v.forget.password.$error || $v.forget.passwordtwo.$error">La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una letra minuscula y un caracter especial.</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
	import config from "../config.js";
	import api from '../api.js';
	import { required } from 'vuelidate/lib/validators';
	import image from "../assets/img/logo.png";

	export default {
		name: 'recovery',
		data () {
			return {
				image: config.rutaWeb(image),
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
			async changePass() {
				this.$v.forget.$touch()
				if (!this.$v.forget.$invalid) { 
					var t = this;
					if (t.forget.password != t.forget.passwordtwo) {
						t.errd = "Las contraseñas no coinciden";
						setTimeout(function() {
							t.errd = "";				
						}, 3500);
						return false;
					}
					
					t.forget.uid = t.recuperar.waitcode;
					t.forget.new_password = t.forget.passwordtwo;
					t.forget.token = t.$route.params.token;
					
					this.$store.commit("loading");
					setTimeout(() => {
						this.$store.commit("notLoading");
					}, 1000);
					await api.post("auth/recoveryPass" , t.forget).then(resp => {
						if (resp.uid) {
							t.errt = "Contraseña reestablecida con éxito.";
							setTimeout(function() {
								t.errt = "";
                                if (document.querySelector("#nextLink")) {
									document.querySelector("#nextLink").click();
								}
							}, 1500);
						} else {
							t.errd = "Intente de nuevo, ocurrió un error.";
							setTimeout(function() {
								t.errd = "";
							}, 1500);
						}
					}).catch(error => {
						t.errd = error;
						t.errd = "Intente de nuevo."; 
						setTimeout(function() {
								t.errd = "";
						}, 1000);
					});
				}
			}
		}
	}
</script>

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

<style>
	.red{
		color:#c70000;
	}
</style>