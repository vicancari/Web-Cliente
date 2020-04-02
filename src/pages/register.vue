<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
            <form id="form-register">
                <div class="form1" v-if="section == 1">
                    <div class="form-group">
                        <input type="email" id="email" class="form-control" required>
                        <label class="form-control-placeholder" for="email">Email</label>
                        <p data-error="email" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="name" class="form-control" required>
                        <label class="form-control-placeholder" for="name">Nombre</label>
                        <p data-error="name" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" class="form-control" required >
                        <label class="form-control-placeholder" for="lastname">Apellido</label>
                        <p data-error="lastname" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" maxlength="12" id="dni" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false; return funciones.campoNumber(event);" class="form-control" required >
                        <label class="form-control-placeholder" for="dni">Dni</label>
                        <p data-error="dni" class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <a class="btn btnRegister" @click="nextForm">Siguiente</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 2">
                    <div class="form-group">
                        <input type="date" id="birthdate" class="form-control date" required>
                        <label class="form-control-placeholder" for="date">Fecha denacimiento</label>
                        <p data-error="birthdate" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="country" class="form-control" required>
                        <label class="form-control-placeholder" for="country">País</label>
                        <p data-error="country" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="city" class="form-control" required>
                        <label class="form-control-placeholder" for="city">Ciudad</label>
                        <p data-error="city" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="address" onkeyup="funciones.searchDirection(this, new google.maps.places.Autocomplete(this));" class="form-control" required>
                        <label class="form-control-placeholder" for="address">Direccion</label>
                        <span style="outline: none; cursor: pointer;" class="mapMarket"><i class="fas fa-map-marker-alt"></i></span>
                        <p data-error="address" class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <a class="btn btnRegister" @click="nextFormTwo">Siguiente</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 3">
                    <div class="form-group">
                        <input type="text" id="code-postal" onkeypress="return funciones.campoNumber(event);" class="form-control" required>
                        <label class="form-control-placeholder" for="code-postal">Código postal</label>
                        <p data-error="code-postal" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="number" id="telephone" onkeypress="return funciones.campoNumber(event);" class="form-control" required>
                        <label class="form-control-placeholder" for="telephone">Teléfono</label>
                        <p data-error="telephone" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input :type="type" id="password" maxlength="15" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" onkeyup="return funciones.validar_clave(this);" class="form-control" required >
                        <label class="form-control-placeholder" for="password">Contraseña</label>
                        <a class="btn btnShow" @click="showPassword">
                            <i :class="icon" ></i>
                        </a>
                        <p data-error="password" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input :type="type2" id="confPassword" maxlength="15" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" class="form-control" required >
                        <label class="form-control-placeholder" for="confPassword">Confirmar contraseña</label>
                        <a class="btn btnShow" @click="showPassword2">
                            <i :class="icon2" ></i>
                        </a>
                        <p data-error="confPassword" class="msgError d-none">*msgError</p>
                    </div>
                     <div class="form-group botonera">
                        <button type="button" id="btnRegistar" disabled class="btn btnRegister" @click="register">Entrar a raus</button>
                        <button type="button" style="display: none;" id="btn-modal" v-b-modal.my-modal></button>
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
    import Vue from "vue";
    import funciones from "../funciones.js";
    import checkimg from "../assets/img/icons/check.svg";
    import image from "../assets/img/logo.png";
    import LoadScript from "vue-plugin-load-script";
    var $ = require("jquery");

    Vue.use(LoadScript);
    Vue.loadScript("https://maps.google.com/maps/api/js?key=AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho&libraries=places&region=es&sensor=false&amp;language=es");

    export default {
        name: 'register',
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
                formEmail: "",
                formName: "",
                formLastname: "",
                formDni: "",
                formBirthdate: "",
                formCountry: "",
                formCity: "",
                formAddress: "",
                formCodiPostal: "",
                formTel: "",
                formPass: "",
                formConf: "",
                allCampoNumber: "",
                autocomplete: "",
                geocoder: "",
                ubiLat: "",
                ubiLong: "",
                fechaPermitida: "",
                dateActualValue: "",
                password: "",
                cArea: "",
                confPass: "",
            }
        },
        async created() {
            var ubicacion = await this.geo();
            this.ubiLat = ubicacion.lat;
            this.ubiLong = ubicacion.lon;
            this.getStreetAddressFrom(ubicacion.lat, ubicacion.lon);
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
            nextForm() {
                this.formEmail = document.querySelector("#email");
                this.formName = document.querySelector("#name");
                this.formLastname = document.querySelector("#lastname");
                this.formDni = document.querySelector("#dni");

                if (this.formEmail.value === "") {
                    document.querySelector("[data-error='email']").innerText = "El email esta vacio, por favor completelo.";
                    document.querySelector("[data-error='email']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='email']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formName.value === "") {
                    document.querySelector("[data-error='name']").innerText = "El nombre esta vacio, por favor completelo.";
                    document.querySelector("[data-error='name']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='name']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formLastname.value === "") {
                    document.querySelector("[data-error='lastname']").innerText = "El apellido esta vacio, por favor completelo.";
                    document.querySelector("[data-error='lastname']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='lastname']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formDni.value === "") {
                    document.querySelector("[data-error='dni']").innerText = "El dni esta vacio, por favor completelo.";
                    document.querySelector("[data-error='dni']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='dni']").classList.add("d-none");
                    }, 2500);

                    return false;
                } else {
                    if (this.formDni.value.length <= 7) {
                        document.querySelector("[data-error='dni']").innerText = "El dni debe de ser menor a 8. Introduzca un dni valido.";
                        document.querySelector("[data-error='dni']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='dni']").classList.add("d-none");
                        }, 2500);

                        return false;
                    } else {
                        if (this.formEmail.value != "" && this.formName.value != "" && this.formLastname.value != "" && this.formDni.value != "" && this.formDni.value.length >= 8) {
                            this.section = 2;
                            this.getStreetAddressFrom(this.ubiLat, this.ubiLong);
                        }
                    }
                }
            },
            nextFormTwo() {
                this.formBirthdate = document.querySelector("#birthdate");
                this.formCountry = document.querySelector("#country");
                this.formCity = document.querySelector("#city");
                this.formAddress = document.querySelector("#address");

                if (this.formBirthdate.value === "") {
                    document.querySelector("[data-error='birthdate']").innerText = "La fecha de nacimiento esta vacio, por favor seleccione su fecha.";
                    document.querySelector("[data-error='birthdate']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='birthdate']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (parseInt(this.formBirthdate.value.split("-")[0]) > parseInt(this.fechaPermitida.split("-")[0])) {
                    document.querySelector("[data-error='birthdate']").innerText = "La fecha de nacimiento no es valida. debe ser mayor de 15 años en adelante.";
                    document.querySelector("[data-error='birthdate']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='birthdate']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formCountry.value === "") {
                    document.querySelector("[data-error='country']").innerText = "El pais esta incompleto por favor escriba su dirección.";
                    document.querySelector("[data-error='country']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='country']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formCity.value === "") {
                    document.querySelector("[data-error='city']").innerText = "La ciudad esta incompleta por favor escriba su dirección.";
                    document.querySelector("[data-error='city']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='city']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formAddress.value === "") {
                    document.querySelector("[data-error='address']").innerText = "La dirección esta incompleta por favor escriba su dirección.";
                    document.querySelector("[data-error='address']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='address']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formBirthdate.value != "" || parseInt(this.formBirthdate.value.split("-")[0]) <= parseInt(this.fechaPermitida.split("-")[0]) || this.formCountry.value != "" || this.formCity.value != "" || this.formAddress.value != "") {
                    this.section = 3;
                }
            },
            register() {
                this.formCodiPostal = document.querySelector("#code-postal");
                this.formTel = document.querySelector("#telephone");
                this.formPass = document.querySelector("#password");
                this.formConf = document.querySelector("#confPassword");

                if (this.formCodiPostal.value === "") {
                    document.querySelector("[data-error='code-postal']").innerText = "El codigo postal o codigo zip esta vacio, por favor completelo.";
                    document.querySelector("[data-error='code-postal']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='code-postal']").classList.add("d-none");
                    }, 2500);

                    return false;
                }
                
                if (this.formTel.value === "") {
                    document.querySelector("[data-error='telephone']").innerText = "El teléfono esta vacio, por favor completelo.";
                    document.querySelector("[data-error='telephone']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='telephone']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formPass.value === "") {
                    document.querySelector("[data-error='password']").innerText = "La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una minuscula y un caracter especial.";
                    document.querySelector("[data-error='password']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='password']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formConf.value === "") {
                    document.querySelector("[data-error='confPassword']").innerText = "Confirme la contraseña por favor.";
                    document.querySelector("[data-error='confPassword']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='confPassword']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                if (this.formPass.value != this.formConf.value) {
                    document.querySelector("[data-error='confPassword']").innerText = "Las contraseñas no coinciden, por favor verifique.";
                    document.querySelector("[data-error='confPassword']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='confPassword']").classList.add("d-none");
                    }, 2500);

                    return false;
                }

                var date = new Date();
                var Dia = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
                var mes = date.getMonth() + 1;
                var Mes = mes <= 9 ? "0" + mes : mes;
                var AnnoActual = date.getFullYear();

                $.post(
                    'http://localhost:9990/api/cliente/registro/',
                    {
                        email: this.formEmail.value,
                        password: this.formConf.value,
                        address: this.formAddress.value,
                        birthday: this.formBirthdate.value,
                        city: this.formCity.value,
                        country: this.formCountry.value,
                        createt_ad: `${AnnoActual}-${Mes}-${Dia}`,
                        dni: this.formDni.value,
                        lastname: this.formLastname.value,
                        name: this.formName.value,
                        phone: `+${funciones.codigoArea(this.formCountry.value)}${this.formTel.value}`,
                        zipcode: this.formCodiPostal.value
                    },
                    function(response) {
                        var json = response;
                        if (json.uid != "" || json.uid != "Null" || json.uid != "None") {
                            this.btnModal = document.querySelector(`#btn-modal`);
                            this.btnModal.click();
                        }
                    }
                );
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
            },
            async getStreetAddressFrom(lat, long) {
                $.post("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho", function(data) {
                    this.formAddress = document.querySelector("#address");
                    this.formCountry = document.querySelector("#country");
                    this.formCity = document.querySelector("#city");
                    this.formCountry.value = `${data.results[0].address_components[5].long_name}`;
                    this.formCity.value = `${data.results[0].address_components[3].long_name}`;
                    this.formAddress.value = `${data.results[0].formatted_address}`;

                    this.cArea = "+"+funciones.codigoArea(data.results[0].address_components[5].long_name);
                    
                    var date = new Date();
                    var Dia = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
                    var mes = date.getMonth() + 1;
                    var Mes = mes <= 9 ? "0" + mes : mes;
                    var AnnoActual = date.getFullYear();
                    this.fechaPermitida = `${AnnoActual - 15}-${Mes}-${Dia}`;
                    document.querySelector("#birthdate").value = this.fechaPermitida;
                });
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
