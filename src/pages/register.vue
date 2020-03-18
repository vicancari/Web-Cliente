<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
            <form action="">
                <div class="form1" v-if="section == 1">
                    <div class="form-group">
                        <input type="text" id="name" class="form-control" required>
                        <label class="form-control-placeholder" for="name">Nombre</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" class="form-control" required >
                        <label class="form-control-placeholder" for="lastname">Apellido</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="dni" class="form-control" required >
                        <label class="form-control-placeholder" for="dni">Dni</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" class="form-control" required >
                        <label class="form-control-placeholder" for="lastname">Apellido</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <a class="btn btnRegister" @click=" section = 2">Siguiente</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 2">
                    <div class="form-group">
                        <input type="date" id="date" class="form-control date" required value="2020-02-03">
                        <label class="form-control-placeholder" for="date">Fecha denacimiento</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="country" class="form-control" required>
                        <label class="form-control-placeholder" for="country">País</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="city" class="form-control" required>
                        <label class="form-control-placeholder" for="city">Ciudad</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="address" class="form-control" required>
                        <label class="form-control-placeholder" for="address">Direccion</label>
                        <a class="mapMarket" href="#"><i class="fas fa-map-marker-alt"></i></a>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <a class="btn btnRegister" @click="section = 3">Siguiente</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 3">
                    <div class="form-group">
                        <input type="text" id="code-postal" class="form-control" required>
                        <label class="form-control-placeholder" for="code-postal">Código postal</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" class="form-control" required>
                        <label class="form-control-placeholder" for="email">Email</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="number" id="telephone" class="form-control" required>
                        <label class="form-control-placeholder" for="telephone">Teléfono</label>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input :type="type" id="password" class="form-control" required >
                        <label class="form-control-placeholder" for="password">Contraseña</label>
                        <a class="btn btnShow" @click="showPassword">
                            <i :class="icon" ></i>
                        </a>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input :type="type2" id="conf-password" class="form-control" required >
                        <label class="form-control-placeholder" for="conf-password">Confirmar contraseña</label>
                        <a class="btn btnShow" @click="showPassword2">
                            <i :class="icon2" ></i>
                        </a>
                        <p class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <a class="btn btnRegister" v-b-modal.my-modal>Entrar a raus</a>
                    </div>
                </div>
            </form>
        </div>

         <b-modal :modal-class="myclass" centered  id="my-modal" ref="my-modal"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img :src="checkimg" alt="">
                <h3>Gracias!</h3>
                <p>por unirte a la nueva era de la conexión comercial!</p>
            </div>
        </b-modal>
    </div>
</template>

<script>
import checkimg from "../assets/img/icons/check.svg";
import image from "../assets/img/logo.png";


export default {
    
  name: 'register',
  data: function () {
        return {
            image: image,
            checkimg: checkimg,
            showHide: true,
            type: "password",
            icon: "fas fa-eye",
            type2: "password",
            icon2: "fas fa-eye",
            section: 1,
            myclass: ['alert']
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
        showPassword2() {
            if(this.type === "password") {
                this.type2 = "text"
                this.icon2 = "fas fa-eye"
            } else {
                this.type2 = "password"
                this.icon2 = "fas fa-eye-slash"
            }
        },
        register(){
            this.$router.push('/HelloWorld');
        },
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
                a{
                    border-radius: 0;
                    color: #fff;
                    font-size: 14px;
                    width: 120px;
                    margin: auto;
                    padding: 4px;
                }
                a.btnEntrar{
                    background-color: var(--blue);

                }
                a.btnRegister{
                    background-color: var(--yellow);
                    margin-top: 40px;

                }
            }
        }

        .msgError{
            color: red;
            font-size: 12px;
            text-align: center;
        }
    }   
</style>
