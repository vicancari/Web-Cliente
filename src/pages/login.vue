<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
                <h5>Hola!, bienvenida y bienvenido a Raus, haz login o registrate para unirte a la nueva era de la conexión comercial</h5>
            </div>
            <form action="">
                <div class="form-group a">
                    <input type="text" id="name" class="form-control" required>
                    <label class="form-control-placeholder" for="name">Email / Telefono</label>
                    <p class="msgError d-none">*msgError</p>
                </div>
                <div class="form-group  mb-0">
                    <input :type="type" id="password" class="form-control" required >
                    <label class="form-control-placeholder" for="password">Password</label>
                    <a class="btn btnShow" @click="showPassword">
                        <i :class="icon" ></i>
                    </a>
                    <p class="msgError d-none">*msgError</p>
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
                            <button class="btn color-blue my-2 btnNew">Nueva contraseña</button>
                        </div>
                    </div>
                </div>
                <div class="form-group botonera">
                    <a class="btn btnEntrar"><router-link to="/tutorial">Ir a raus</router-link></a>
                    <a class="btn btnRegister"><router-link to="/register">Registrarse</router-link></a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import image from "../assets/img/logo.png";



export default {
    
  name: 'login',
  data: function () {
        return {
            image: image,
            showHide: true,
            type: "password",
            icon: "fas fa-eye",
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
     register(){
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
                a{
                    border-radius: 0;
                    color: #fff;
                    font-size: 14px;
                    width: 120px;
                    margin: auto;
                    padding: 4px;
                    text-decoration: none;
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
