<template>
    <div class="box-login">
        <div class="container">
            <div class="boxText">
                <img class="logo" :src="image" alt="" />
            </div>
            <form id="form-register">
                <div class="form1" v-if="section == 1">
                    <div class="form-group">
                        <input type="email" id="email" autocomplete="off" class="form-control" v-model="dataForm.email" required>
                        <label class="form-control-placeholder" for="email">Email</label>
                        <p data-error="email" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="name" autocomplete="off" class="form-control" v-model="dataForm.name" required>
                        <label class="form-control-placeholder" for="name">Nombre</label>
                        <p data-error="name" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" autocomplete="off" class="form-control" v-model="dataForm.lastname" required >
                        <label class="form-control-placeholder" for="lastname">Apellido</label>
                        <p data-error="lastname" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" maxlength="25" autocomplete="off" id="dni" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" class="form-control" v-model="dataForm.dni" required >
                        <label class="form-control-placeholder" for="dni">Dni</label>
                        <p data-error="dni" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera formRegister">
                        <a class="btn btnRegister" @click="nextForm">Siguiente</a>
                        <a class="btn btnBack" @click="irAllogin">Cancelar</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 2">
                    <div class="form-group">
                        <datepicker id="birthday" @cleared="valorRemove" value="DD/MM/YYYY" autocomplete="off" :class="pickerClass" :language="es" :format="dateFormat" required></datepicker>
                        <label style="opacity: 1 !important; font-size: 75% !important; left: 50% !important; transform: translate3d(-50%, -100%, 0) !important;" class="form-control-placeholder" for="date">Fecha denacimiento</label>
                        <p data-error="birthday" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="country" autocomplete="off" class="form-control" required>
                        <label class="form-control-placeholder" for="country">País</label>
                        <p data-error="country" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="city" autocomplete="off" class="form-control" required>
                        <label class="form-control-placeholder" for="city">Ciudad</label>
                        <p data-error="city" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="code-postal" autocomplete="off" onkeypress="return funciones.campoNumber(event);" class="form-control" required>
                        <label class="form-control-placeholder" for="code-postal">Código postal</label>
                        <p data-error="code-postal" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="text" id="address" autocomplete="off" v-on:keyup="geoAddress" v-on:change="geoAddress" class="form-control" required>
                        <label class="form-control-placeholder" for="address">Direccion</label>
                        <span style="outline: none; cursor: pointer;" class="mapMarket"><i class="fas fa-map-marker-alt" id="loadMap" v-b-modal.modal-map v-on:click="loadMap"></i></span>
                        <p data-error="address" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera formRegister">
                        <a class="btn btnRegister" @click="nextFormTwo">Siguiente</a>
                        <a class="btn btnBack" @click="backOne">Volver</a>
                    </div>
                </div>
                <div class="form1" v-if="section == 3">
                    <div class="form-group">
                        <div class="boxTelephone">
                            <div class="boxTelephone__left">
                                <div class="code-area">
                                    <img id="bandera" src="https://myraus.com/flag-icons/Peru.png" class="code-area_img">
                                    <span id="cArea" class="code-area_code">+000</span>
                                </div>
                            </div>
                            <div class="boxTelephone__right">
                                <input type="number" id="telephone" autocomplete="off" onkeypress="return funciones.campoNumber(event);" class="form-control" v-model="dataForm.phone" required>
                                <label class="form-control-placeholder" for="telephone">Teléfono</label>
                            </div>
                        </div>
                        <p data-error="telephone" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="password" id="password" maxlength="15" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" autocomplete="off" onkeyup="return funciones.validar_clave(this);" v-on:keyup="valiPass" class="form-control" v-model="dataForm.password" required >
                        <label class="form-control-placeholder" for="password">Contraseña</label>
                        <a style="padding-left: 0; padding-right: 0;" class="btn btnShow" @click="showPassword">
                            <i style="display: inline-block; width: 40px; padding: .5rem 0;" class="fas fa-eye"></i>
                        </a>
                        <p data-error="password" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group">
                        <input type="password" id="confPassword" maxlength="15" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" v-on:keyup="valiPass" autocomplete="off" class="form-control" v-model="dataForm.cPass" required >
                        <label class="form-control-placeholder" for="confPassword">Confirmar contraseña</label>
                        <a style="padding-left: 0; padding-right: 0;" class="btn btnShow" @click="showPassword">
                            <i style="display: inline-block; width: 40px; padding: .5rem 0;" class="fas fa-eye"></i>
                        </a>
                        <p data-error="confPassword" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group d-none">
                        <input type="password" id="cPass" maxlength="15" onkeypress="if(this.value.length==this.getAttribute('maxlength')) return false;" autocomplete="off" class="form-control" required >
                        <label class="form-control-placeholder" for="cPass">Contraseña</label>
                        <a style="padding-left: 0; padding-right: 0;" class="btn btnShow" @click="showPassword">
                            <i style="display: inline-block; width: 40px; padding: .5rem 0;" class="fas fa-eye"></i>
                        </a>
                        <p data-error="cPass" class="msgError d-none">*msgError</p>
                    </div>
                    <div class="form-group botonera formRegister">
                        <button type="button" id="btnRegistar" disabled class="btn btnRegister _cBlue" @click="register">Entrar a raus</button>
                        <button type="button" class="btn btnBack" @click="backTwo">Volver</button>
                        <button type="button" style="display: none;" id="btn-modal" v-b-modal.my-modal></button>
                        <router-link style="display: none;" @click="okRegister" id="nextLink" to="/validar-numero">next</router-link>
                        <router-link style="display: none;" @click="reload" id="aqui" to="/register">next</router-link>
                    </div>
                </div>
                <div class="d-none">
                    <input id="input-flag">
                    <input id="input-carea">
                    <input id="input-address">
                    <input id="lat">
                    <input id="lng">
                </div>
            </form>
        </div>

        <b-modal id="modal-map" centered hide-footer hide-header>
            <div @click="$bvModal.hide('modal-map')">
                <img data-dismiss="modal" :src="arrowLeft" alt="" class="iconBackModalMap">
            </div>
            <div style="width: 100%;">
                <div style="width: 100%; height: 400px; background: #eee;" id="GMaps"></div>
            </div>
            <div class="row text-center row-googlemaps">
                <div class="col-12">
                    <input id="pac-input" v-on:keyup="geoAddressMap" v-on:change="geoAddressMap" type="text" name="" class="form-control input-googlemaps" placeholder="Ingresa una ubicación" autocomplete="off">
                </div>
                <div class="col-12 mt-3">
                    <button @click="$bvModal.hide('modal-map')" type="button" data-dismiss="modal" class="btn btn-darkblue">Ok</button>
                </div>
            </div>
        </b-modal>

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
    import config from "../config.js";
    import GoogleMapsApiLoader from "google-maps-api-loader";
    // import Vue from "vue";
    import funciones from "../funciones.js";
    import checkimg from "../assets/img/icons/check.svg";
    import image from "../assets/img/logo.png";
    import arrowLeft from "../assets/img/icons/flechavolver.svg";

    import Datepicker from 'vuejs-datepicker';
    import { es } from 'vuejs-datepicker/dist/locale'
    import api from "../api.js"
    // import LoadScript from "vue-plugin-load-script";
    var Jquery = require("jquery");

    export default {
        name: 'register',
        components: {Datepicker},
        data: function () {
            return {
                apiKey: "AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho",
                es: es,
                form: "",
                pickerClass: "form-control date",
                btnModal: "",
                dateFormat: 'dd-MM-yyyy',
                image: image,
                checkimg: config.rutaWeb(checkimg),
                arrowLeft: config.rutaWeb(arrowLeft),
                section: 1,
                myclass: ['alert'],
                allCampoNumber: "",
                autocomplete: "",
                geocoder: "",
                ubiLat: "",
                ubiLng: "",
                fechaPermitida: "",
                dateActualValue: "",
                errorUserExist: false,
                password: "",
                cArea: "",
                google: "",
                map: "",
                marke: "",
                flagImg: "",
                error: "",
                markers: [],
                dataForm: {
                    email: "",
                    carea: "",
                    phone: "",
                    password: "",
                    cPass: "",
                    address: "",
                    birthday: "",
                    city: "",
                    zipcode: "",
                    country: "",
                    createt_ad: "",
                    dni: "",
                    lastname: "",
                    lat: "",
                    lng: "",
                    name: "",
                }
            }
        },
        async created() {
            var ubicacion = await this.geo();
            this.ubiLat = ubicacion.lat;
            this.ubiLng = ubicacion.lon;

            if (this.section == 2) {
                if (ubicacion) {
                    this.getStreetAddressFrom(ubicacion.lat, ubicacion.lon);
                }
            }

            document.querySelector("#lat").value = ubicacion.lat;
            document.querySelector("#lng").value = ubicacion.lon;

            this.$store.state.coords = {
                lat: ubicacion.lat,
                lng: ubicacion.lon
            }
        },
        methods: {
            valiPass(e) {
                if (e.target.getAttribute("id") === "confPassword") {
                    if (e.target.value.length >= 8) {
                        if (document.querySelector("#password").value != document.querySelector("#confPassword").value) {
                            document.querySelector("[data-error='confPassword']").innerText = "Las contraseñas no coinciden, por favor verifique.";
                            document.querySelector("[data-error='confPassword']").classList.remove("d-none");
                            document.querySelector("#btnRegistar").disabled = true;
        
                            return false;
                        }
    
                        if (document.querySelector("#password").value === document.querySelector("#confPassword").value) {
                            document.querySelector("[data-error='confPassword']").innerText = "";
                            document.querySelector("[data-error='confPassword']").classList.add("d-none");
                            document.querySelector("#btnRegistar").disabled = false;
        
                            return false;
                        }
                    }
                }

                if (e.target.getAttribute("id") === "password") {
                    if (document.querySelector("#confPassword").value === "") {
                        if (document.querySelector("#password").value != document.querySelector("#confPassword").value) {
                            document.querySelector("#btnRegistar").disabled = true;
        
                            return false;
                        }
                    } else {
                        if (document.querySelector("#password").value != document.querySelector("#confPassword").value) {
                            document.querySelector("[data-error='confPassword']").innerText = "Las contraseñas no coinciden, por favor verifique.";
                            document.querySelector("[data-error='confPassword']").classList.remove("d-none");
                            document.querySelector("#btnRegistar").disabled = true;
        
                            return false;
                        }
                    }

                    if (document.querySelector("#password").value === document.querySelector("#confPassword").value) {
                        document.querySelector("[data-error='confPassword']").innerText = "";
                        document.querySelector("[data-error='confPassword']").classList.add("d-none");
                        document.querySelector("#btnRegistar").disabled = false;
    
                        return false;
                    }
                }
            },
            valorRemove: function() {
                if (document.querySelector("#birthday")) {
                    document.querySelector("#birthday").value = this.fechaPermitida;
                }
            },
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
            irAllogin() {
                this.$router.push("/");
            },
            backOne() { this.section = 1 },
            backTwo() { this.section = 2 },
            nextForm() {
                if (document.querySelector("#email").value === "") {
                    document.querySelector("[data-error='email']").innerText = "El email esta vacio, por favor completelo.";
                    document.querySelector("[data-error='email']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='email']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#name").value === "") {
                    document.querySelector("[data-error='name']").innerText = "El nombre esta vacio, por favor completelo.";
                    document.querySelector("[data-error='name']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='name']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#lastname").value === "") {
                    document.querySelector("[data-error='lastname']").innerText = "El apellido esta vacio, por favor completelo.";
                    document.querySelector("[data-error='lastname']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='lastname']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#dni").value === "") {
                    document.querySelector("[data-error='dni']").innerText = "El dni esta vacio, por favor completelo.";
                    document.querySelector("[data-error='dni']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='dni']").classList.add("d-none");
                    }, 3500);

                    return false;
                } else {
                    if (document.querySelector("#dni").value.length <= 7) {
                        document.querySelector("[data-error='dni']").innerText = "El dni debe de ser menor a 8. Introduzca un dni valido.";
                        document.querySelector("[data-error='dni']").classList.remove("d-none");

                        setTimeout(() => {
                            document.querySelector("[data-error='dni']").classList.add("d-none");
                        }, 3500);

                        return false;
                    } else {
                        if (document.querySelector("#email").value != "" && document.querySelector("#name").value != "" && document.querySelector("#lastname").value != "" && document.querySelector("#dni").value != "" && document.querySelector("#dni").value.length >= 8) {
                            this.section = 2;
                            this.getStreetAddressFrom(this.ubiLat, this.ubiLng);
                        }
                    }
                }
            },
            nextFormTwo() {
                if (document.querySelector("#birthday").value === "") {
                    document.querySelector("[data-error='birthday']").innerText = "La fecha de nacimiento esta vacio, por favor seleccione su fecha.";
                    document.querySelector("[data-error='birthday']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='birthday']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (parseInt(document.querySelector("#birthday").value.split("-")[2]) > parseInt(window.localStorage.getItem("fPermitida").split("-")[2])) {
                    document.querySelector("[data-error='birthday']").innerText = "La fecha de nacimiento no es valida. debe ser mayor de 15 años en adelante.";
                    document.querySelector("[data-error='birthday']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='birthday']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#code-postal").value === "") {
                    document.querySelector("[data-error='code-postal']").innerText = "El codigo postal o codigo zip esta vacio, por favor completelo.";
                    document.querySelector("[data-error='code-postal']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='code-postal']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#country").value === "") {
                    document.querySelector("[data-error='country']").innerText = "El pais esta incompleto por favor escriba su dirección.";
                    document.querySelector("[data-error='country']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='country']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#city").value === "") {
                    document.querySelector("[data-error='city']").innerText = "La ciudad esta incompleta por favor escriba su dirección.";
                    document.querySelector("[data-error='city']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='city']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#address").value === "") {
                    document.querySelector("[data-error='address']").innerText = "La dirección esta incompleta por favor escriba su dirección.";
                    document.querySelector("[data-error='address']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='address']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#birthday").value != "" && document.querySelector("#country").value != "" && document.querySelector("#city").value != "" && document.querySelector("#address").value != "" && document.querySelector("#code-postal").value != "") {
                    this.dataForm.address = document.querySelector("#address").value;
                    this.dataForm.birthday = `${document.querySelector("#birthday").value.split("-")[2]}-${document.querySelector("#birthday").value.split("-")[1]}-${document.querySelector("#birthday").value.split("-")[0]}`;
                    this.dataForm.city = document.querySelector("#city").value;
                    this.dataForm.zipcode = document.querySelector("#code-postal").value;
                    this.dataForm.country = document.querySelector("#country").value;
                    this.section = 3;
                }
            },
            register() {
                if (document.querySelector("#telephone").value === "") {
                    document.querySelector("[data-error='telephone']").innerText = "El teléfono esta vacio, por favor completelo.";
                    document.querySelector("[data-error='telephone']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='telephone']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#password").value === "") {
                    document.querySelector("[data-error='password']").innerText = "La contraseña debe contener mínimo 8 y máximo 15 caracteres, al menos un dígito, una letra mayúscula, una minuscula y un caracter especial.";
                    document.querySelector("[data-error='password']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='password']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#confPassword").value === "") {
                    document.querySelector("[data-error='confPassword']").innerText = "Confirme la contraseña por favor.";
                    document.querySelector("[data-error='confPassword']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='confPassword']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#password").value != document.querySelector("#confPassword").value) {
                    document.querySelector("[data-error='confPassword']").innerText = "Las contraseñas no coinciden, por favor verifique.";
                    document.querySelector("[data-error='confPassword']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='confPassword']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                var date = new Date();
                var Dia = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
                var mes = date.getMonth() + 1;
                var Mes = mes <= 9 ? "0" + mes : mes;
                var AnnoActual = date.getFullYear();

                this.dataForm.createt_ad = `${AnnoActual}-${Mes}-${Dia}`;
                this.dataForm.lat = document.querySelector("#lat").value;
                this.dataForm.lng = document.querySelector("#lng").value;
                this.dataForm.carea = document.querySelector("#input-carea").value;
                console.log(this.dataForm);

                if (document.querySelector("#telephone").value != "" && document.querySelector("#password").value != "" && document.querySelector("#confPassword").value != "") {
                    this.$store.commit("loading");
                    var data = {
                        email: this.dataForm.email,
                        phone: this.dataForm.carea + this.dataForm.phone,
                        password: this.dataForm.cPass,
                        address: this.dataForm.address,
                        birthday: this.dataForm.birthday,
                        city: this.dataForm.city,
                        country: this.dataForm.country,
                        createt_ad: this.dataForm.createt_ad,
                        dni: this.dataForm.dni,
                        lastname: this.dataForm.lastname,
                        lat: this.dataForm.lat,
                        lng: this.dataForm.lng,
                        name: this.dataForm.name,
                        zipcode: this.dataForm.zipcode
                    };
                    api.post('cliente/registro/', data).then(res => {
                        if (res.next === "OK") {
                            api.post('auth/Bynumber', {name: `${res.name.toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();})}`, phone: `${res.phone}`}).then(res => {
                                if (res.disabled === false) {
                                    this.btnModal = document.querySelector(`#btn-modal`);
                                    this.btnModal.click();
                                    setTimeout(() => {
                                        if (document.querySelector("#nextLink")) {
                                            document.querySelector("#nextLink").click();
                                        }
                                    }, 1000);
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                        }
                    }).catch(err => {
                        this.error = err;
                        console.log(err);
                        document.querySelector("#aqui").click();
                    });
                }
            },
            okRegister() {
                this.$store.commit("done");
            },
            reload() {
                this.$store.commit("notLoading");
            },
            initMap(_lat, _lng, _address) {
                if (this.section == 2) {
                    this.myMap = document.querySelector("#GMaps");
                    this.map = new this.google.maps.Map(this.myMap, {
                        center: {
                            lat: parseFloat(_lat),
                            lng: parseFloat(_lng)
                        },
                        zoom: 15,
                        mapTypeId: 'roadmap',
                    });

                    this.marker = new this.google.maps.Marker({
                        position: {
                            lat: parseFloat(_lat),
                            lng: parseFloat(_lng)
                        },
                        map: this.map
                    });

                    this.markers.push({position: {
                        lat: parseFloat(_lat),
                        lng: parseFloat(_lng)
                    }});

                    this.map.addListener('click', function(e) {
                        var coords = {
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng()
                        }

                        Jquery.post("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords.lat + "," + coords.lng + "&key=AIzaSyANVVkDC6JNomt7PHT2tj4a8m1qjaKCPho", function(data) {
                            if (document.querySelector("#lat") && document.querySelector("#lng")) {
                                document.querySelector("#lat").value = coords.lat;
                                document.querySelector("#lng").value = coords.lng;
                            }

                            if (document.querySelector("#address")) document.querySelector("#address").value = data.results[0].formatted_address;
                            if (document.querySelector("#pac-input")) document.querySelector("#pac-input").value = data.results[0].formatted_address;
                            if (document.querySelector("#input-address")) document.querySelector("#input-address").value = data.results[0].formatted_address;

                            data.results[0].address_components.forEach(_getType => {
                                if (_getType.types[0] === "country") {
                                    if (document.querySelector("#country")) {
                                        document.querySelector("#country").value = _getType.long_name;
                                        this.cArea = "+"+funciones.codigoArea(document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                                        if (this.cArea != "" || this.cArea != undefined) {
                                            this.flagImg = `https://myraus.com/flag-icons/${document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();}).split(" ").join("-")}.png`;
                                            document.querySelector("#input-flag").value = this.flagImg;
                                            document.querySelector("#input-carea").value = this.cArea;
                                        }
                                    }
                                }


                                if (_getType.types[0] === "locality") {
                                    if (document.querySelector("#city")) document.querySelector("#city").value = _getType.long_name;
                                }

                                if (_getType.types[0] === "postal_code") {
                                    if (document.querySelector("#code-postal")) document.querySelector("#code-postal").value = _getType.long_name;
                                }
                            });
                        });

                        document.querySelector("#loadMap").click();
                    });

                    var input = document.getElementById('pac-input');
                    input.value = _address;
                    var searchBox = new this.google.maps.places.SearchBox(input);
                    // this.map.controls[this.google.maps.ControlPosition.TOP_LEFT].push(input);

                    searchBox.addListener('places_changed', function() {
                        var places = searchBox.getPlaces();
                        input.addEventListener("onchange", () => {
                            if (!places) {
                                console.log("Error de localización.");
                            } else {
                                document.querySelector("#loadMap").click();
                            }
                        });

                        if (!places) {
                            console.log("Error de localización.");
                        } else {
                            document.querySelector("#loadMap").click();
                        }
                    });
                }
            },
            loadImg() {
                return config.rutaWeb(this.flagImg);
            },
            geoAddress() {
                if (this.section == 2) {
                    var e = document.getElementById('address');
                    var geocoder = new this.google.maps.Geocoder();

                    geocoder.geocode({"address": e.value}, function(results, status) {
                        if (status === "OK") {
                            if (document.querySelector("#lat") && document.querySelector("#lng")) {
                                document.querySelector("#lat").value = results[0].geometry.location.lat();
                                document.querySelector("#lng").value = results[0].geometry.location.lng();
                            }
                            results[0].address_components.forEach(_getType => {
                                if (document.querySelector("#input-address")) document.querySelector("#input-address").value = results[0].formatted_address;

                                if (_getType.types[0] === "country") {
                                    if (document.querySelector("#country")) {
                                        document.querySelector("#country").value = _getType.long_name;
                                        this.cArea = "+"+funciones.codigoArea(document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                                        if (this.cArea != "" || this.cArea != undefined) {
                                            this.flagImg = `https://myraus.com/flag-icons/${document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();}).split(" ").join("-")}.png`;
                                            document.querySelector("#input-flag").value = this.flagImg;
                                            document.querySelector("#input-carea").value = this.cArea;
                                        }
                                    }
                                }

                                if (_getType.types[0] === "locality") {
                                    if (document.querySelector("#city")) document.querySelector("#city").value = _getType.long_name;
                                }

                                if (_getType.types[0] === "postal_code") {
                                    if (document.querySelector("#code-postal")) document.querySelector("#code-postal").value = _getType.long_name;
                                }
                            });
                        }
                    });
                }
            },
            geoAddressMap() {
                if (this.section == 2) {
                    var e = document.getElementById('pac-input');
                    var geocoder = new this.google.maps.Geocoder();

                    geocoder.geocode({"address": e.value}, function(results, status) {
                        if (status === "OK") {
                            if (document.querySelector("#lat") && document.querySelector("#lng")) {
                                document.querySelector("#lat").value = results[0].geometry.location.lat();
                                document.querySelector("#lng").value = results[0].geometry.location.lng();
                            }
                            results[0].address_components.forEach(_getType => {
                                if (document.querySelector("#address")) document.querySelector("#address").value = results[0].formatted_address;
                                if (document.querySelector("#input-address")) document.querySelector("#input-address").value = results[0].formatted_address;

                                if (_getType.types[0] === "country") {
                                    if (document.querySelector("#country")) {
                                        document.querySelector("#country").value = _getType.long_name;
                                        this.cArea = "+"+funciones.codigoArea(document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                                        if (this.cArea != "" || this.cArea != undefined) {
                                            this.flagImg = `https://myraus.com/flag-icons/${document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();}).split(" ").join("-")}.png`;
                                            document.querySelector("#input-flag").value = this.flagImg;
                                            document.querySelector("#input-carea").value = this.cArea;
                                        }
                                    }
                                }

                                if (_getType.types[0] === "locality") {
                                    if (document.querySelector("#city")) document.querySelector("#city").value = _getType.long_name;
                                }

                                if (_getType.types[0] === "postal_code") {
                                    if (document.querySelector("#code-postal")) document.querySelector("#code-postal").value = _getType.long_name;
                                }
                            });
                        }
                    });
                }
            },
            loadPlace() {
                if (this.section == 2) {
                    new this.google.maps.places.Autocomplete(document.querySelector("#address"));
                }
            },
            loadMap() {
                setTimeout(() => {
                    this.initMap(document.querySelector("#lat").value, document.querySelector("#lng").value, document.querySelector("#input-address").value);
                    console.log("ready");
                }, 950);
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
                if (this.section == 2) {
                    var geocoder = new this.google.maps.Geocoder();

                    geocoder.geocode({"latLng": new this.google.maps.LatLng(lat, long)}, function(results, status) {
                        if (document.querySelector("#lat") && document.querySelector("#lng")) {
                            document.querySelector("#lat").value = results[0].geometry.location.lat();
                            document.querySelector("#lng").value = results[0].geometry.location.lng();
                        }
                        if (status === "OK") {
                            var date = new Date();
                            var Dia = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
                            var mes = date.getMonth() + 1;
                            var Mes = mes <= 9 ? "0" + mes : mes;
                            var AnnoActual = date.getFullYear();
                            this.fechaPermitida = `${Dia}-${Mes}-${AnnoActual - 15}`;

                            if (document.querySelector("#birthday")) {
                                document.querySelector("#birthday").value = this.fechaPermitida;
                                window.localStorage.setItem("fPermitida", this.fechaPermitida);
                            }

                            if (document.querySelector("#address")) document.querySelector("#address").value = results[0].formatted_address;
                            if (document.querySelector("#input-address")) document.querySelector("#input-address").value = results[0].formatted_address;

                            results[0].address_components.forEach(_getType => {
                                if (_getType.types[0] === "country") {
                                    if (document.querySelector("#country")) {
                                        document.querySelector("#country").value = _getType.long_name;
                                        this.cArea = "+"+funciones.codigoArea(document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                                        if (this.cArea != "" || this.cArea != undefined) {
                                            this.flagImg = `https://myraus.com/flag-icons/${document.querySelector("#country").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\b./g, function(a){return a.toUpperCase();}).split(" ").join("-")}.png`;
                                            document.querySelector("#input-flag").value = this.flagImg;
                                            document.querySelector("#input-carea").value = this.cArea;
                                        }
                                    }
                                }


                                if (_getType.types[0] === "locality") {
                                    if (document.querySelector("#city")) document.querySelector("#city").value = _getType.long_name;
                                }

                                if (_getType.types[0] === "postal_code") {
                                    if (document.querySelector("#code-postal")) document.querySelector("#code-postal").value = _getType.long_name;
                                }
                            });
                        }
                    });
                }
            }
        },
        async mounted() {
            const googleMapApi = await GoogleMapsApiLoader({
                apiKey: this.apiKey,
                libraries: ['places']
            });
            this.google = googleMapApi;
            this.$store.state.status = "";

            var t = setInterval(() => {
                if (this.section === 2) {
                    this.loadPlace();
                    clearInterval(t);
                }
            }, 500);

            var c = setInterval(() => {
                if (this.section === 3) {
                    if (document.querySelector("#bandera") && document.querySelector("#cArea")) {
                        document.querySelector("#bandera").setAttribute("src", document.querySelector("#input-flag").value);
                        document.querySelector("#cArea").innerText = document.querySelector("#input-carea").value;
                        clearInterval(c);
                    }
                }
            }, 500);
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

    .boxTelephone {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__left {
            position: relative;
            width: 80px;
            margin-right: 0;

            .code-area {
                width: 100%;
                background: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                border: 0px;
                border-bottom: 1px solid #435463;
                padding: 0 .25rem 0px 0;
                overflow: hidden;
                height: 38px;
                
                &_img {
                    display: block;
                    width: auto;
                    height: 75%;
                    margin-right: 2px;
                    object-fit: cover;
                    object-position: center center;
                }

                &_code {
                    font-size: .85rem;
                    margin-left: .15rem;
                }
            }
        }

        &__right {
            position: relative;
            width: calc((100% - 80px));
        }
    }
</style>

<style lang="css">
    #modal-map .modal-dialog {
        width: 80vw !important;
        min-width: 80vw !important;
    }

    #description {
        font-family: var(--font);
        font-size: 15px;
        font-weight: 300;
    }

    #infowindow-content .title {
        font-weight: bold;
    }

    #infowindow-content {
        display: none;
    }

    #map #infowindow-content {
        display: inline;
    }

    .pac-card {
        margin: 10px 10px 0 0;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        font-family: var(--font);
    }

    #pac-container {
        padding-bottom: 12px;
        margin-right: 12px;
    }

    .pac-controls {
        display: inline-block;
        padding: 5px 11px;
    }

    .pac-controls label {
        font-family: var(--font);
        font-size: 13px;
        font-weight: 300;
    }

    .searchBox {
        position: absolute;
        z-index: 500;
        left: .75rem;
        bottom: 1.45rem;
        width: max-content;
    }

    #pac-input {
        display: inline-block;
        background-color: #fff;
        font-family: var(--font);
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        outline: none !important;
        width: 80%;
        box-shadow: none !important;
        background: #fff;
        border: 0px;
        border-bottom: 2px solid #435463;
        border-radius: 0px !important;
    }

    .btn.btn-darkblue {
        color: #fff;
        background-color: #435463;
        border-color: #435463;
        border-radius: 0px;
        padding: 0px 30px;
        cursor: pointer;
    }

    .btn.btnBack {
        background-color: white;
        border-radius: 0px;
        border-color: #455d6b;
        padding: 0px 30px;
        color: #455d6b !important;
        margin-left: .5rem;
    }

    .btn.btn-darkblue:hover {
        color: #fff !important;
    }

    #title {
        color: #fff;
        background-color: #4d90fe;
        font-size: 25px;
        font-weight: 500;
        padding: 6px 12px;
    }

    .row-googlemaps {
        position: absolute;
        top: 70%;
        width: calc(100% - 58px);
        margin: 0 !important;
        z-index: 1;
    }

    .iconBackModalMap {
        position: absolute;
        top: .55rem;
        left: 11.5rem;
        z-index: 1055;
        width: 60px;
        height: 40px;
        background: #FFF;
        border-left: solid 0.1px #ddd;
        cursor: pointer;
    }

    #target {
        width: 345px;
    }

    #modal-map .modal-body {
        padding: 0 !important;
    }

    .boxTelephone .boxTelephone__right .form-control {
        text-align: left !important;
    }

    .boxTelephone .boxTelephone__right .form-control-placeholder {
        left: 0 !important;
        transform: translate(0, 0) !important;
    }

    .boxTelephone .boxTelephone__right .form-control:focus + .form-control-placeholder, .boxTelephone__right .form-control:valid + .form-control-placeholder {
        left: 0 !important; transform: translate3d(0, -100%, 0) !important;
    }

    .vdp-datepicker * {
        box-sizing: border-box;
        width: 100%;
        background: transparent;
        border: 0;
        box-shadow: none;
        border-radius: 0;
        outline: none !important;
        text-align: center;
    }

    .vdp-datepicker__calendar {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        background: #fff;
        width: 300px;
        border: 1px solid #ccc;
    }

    .box-login form .botonera.formRegister {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        flex-direction: row !important;
        padding-top: 40px !important;
    }

    .btn.btnRegister._cBlue {
        background-color: var(--blue) !important;
    }

    .box-login form .botonera.formRegister .btn {
        margin: 0 !important;
    }

    .box-login form .botonera.formRegister .btn.btnBack {
        margin-left: .5rem !important;
    }
</style>
