<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-profile" ref="modal-profile"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.show('menu-modal'), $bvModal.hide('modal-profile')">
                <svg version="1.1" class="icono" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.89 595.28" enable-background="new 0 0 841.89 595.28" xml:space="preserve">
                    <g>
                        <defs>
                            <rect id="SVGID_1_" x="115.853" y="84.721" width="573.14" height="448.98"/>
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlink:href="#SVGID_1_"  overflow="visible"/>
                        </clipPath>
                        <path clip-path="url(#SVGID_2_)" fill="none" stroke="#5B7AA2" stroke-width="40" stroke-linecap="round" d="M375.237,506.363 h146.555c0,0,140.229,0,140.229-146.197v-33.74c0,0,0-146.191-140.229-146.191H155.458"/>
                        <polyline clip-path="url(#SVGID_2_)" fill="none" stroke="#5B7AA2" stroke-width="40" stroke-linecap="round" points="235.555,255.733 155.461,180.235 235.555,104.745"/>
                    </g>
                </svg>
            </button>
            <div class="bodyProfile">
                <div class="boxAvatar">
                    <img class="img-fluid" :src="avatar" alt="">
                    <label for="addPhoto">
                        <input type="file" class="d-none" id="addPhoto">
                        <img :src="lapiz" cljass="img-fluid" alt="">
                    </label>
                </div>
                <div class="bodyOptions">
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{dni}}</h5>
                        <button class="btn btn-outline-secondary" type="button" @click="change('dni')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{name}}</h5>
                        <button class="btn btn-outline-secondary" type="button" @click="change('name')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{lastname}}</h5>
                        <button class="btn btn-outline-secondary" type="button" @click="change('lastname')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{birthday}}</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('birthday')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{address}}</h5>
                        <button disabled class="btn btn-outline-secondary" type="button"  @click="change('address')"><img class="img-fluid" :src="pin" alt=""></button>
                    </div>
                </div>
                <button type="button" id="buttonSave" disabled class="btn btnConfirmar" @click="update()">
                    Guardar
                </button>
                <button type="button" id="guardoFin" v-b-modal.my-modal style="display: none;"></button>
            </div>
        </b-modal>
        <b-modal centered :modal-class="modalEdit" id="modal-edit" ref="modal-edit"  hide-footer hide-header>  
            <h5 class="titleModal">Editar</h5>
            <!-- dni -->
            <div class="form-group a"  v-if="showInput == 'dni'">
                <label class="form-control-placeholder" for="name">Ingrese el DNI</label>
                <input @change="changeText" type="text" id="dni" autocomplete="off" class="form-control" v-model="dni">
                <p class="msgError d-none">*msgError</p>
            </div>
            <!-- name -->
            <div class="form-group a"  v-if="showInput == 'name'">
                <label class="form-control-placeholder" for="name">Ingrese nombre</label>
                <input @change="changeText" type="text" id="name" autocomplete="off" class="form-control" v-model="name">
                <p class="msgError d-none">*msgError</p>
            </div>
            <!-- lastname -->
            <div class="form-group a"  v-if="showInput == 'lastname'">
                <label class="form-control-placeholder" for="lastname">Ingrese apellido</label>
                <input @change="changeText" type="text" id="lastname" autocomplete="off" class="form-control" v-model="lastname">
                <p class="msgError d-none">*msgError</p>
            </div>
            <!-- date -->
                <div class="form-group a"  v-if="showInput == 'birthday'">
                <label class="form-control-placeholder" for="birthday">Ingrese fecha de nacimiento</label>
                <input @change="changeText" type="date" id="birthday" autocomplete="off" v-model="birthday" class="form-control">
                <p class="msgError d-none">*msgError</p>
            </div>
            <!-- addres -->
            <div class="form-group a"  v-if="showInput == 'address'">
                <label class="form-control-placeholder" for="address">Ingrese dirección</label>
                <input @change="changeText" type="text" id="address" autocomplete="off" v-model="address" class="form-control">
                <p class="msgError d-none">*msgError</p>
            </div>
            <button class="btn btnConfirmar" @click="$bvModal.hide('modal-edit')">
                Listo
            </button>
        </b-modal>

        <b-modal :modal-class="myclassAlert" centered  id="my-modal" ref="my-modal"  hide-footer hide-header>  
            <div class="d-block text-center">
                <img :src="checkimg" alt="">
                <h3>¡Éxito!</h3>
                <p>Los datos se guardaron éxitosamente.</p>
            </div>
        </b-modal>
    </div>
</template>
<script>
    import config from "../config.js";
    import checkimg from "../assets/img/icons/check.svg";
    /* Images */
    import avatar from '../assets/img/avatar.png';
    import back from '../assets/img/icons/flechavolver.svg';
    import lapiz from '../assets/img/icons/lapizeditar.svg';
    import pin from '../assets/img/icons/pin-blue.png';

    import { EventBus } from "../main.js";
    import api from "../api.js";

    export default {
        name: 'profile',
        components: {},
        data: function () {
            return {
                myclass: ['modal-profile'],
                modalEdit: ['modal-edit'],
                avatar: avatar,
                back: config.rutaWeb(back),
                lapiz: config.rutaWeb(lapiz),
                checkimg: checkimg,
                myclassAlert: ['alert'],
                pin: pin,
                showInput: '',
                dni: "",
                name: "",
                lastname: "",
                birthday: "",
                address: "",
                updateClt: {
                    address: "",
                    birthday: "",
                    city: "",
                    country: "",
                    dni: "",
                    email: "",
                    lat: "",
                    lng: "",
                    lastname: "",
                    name: "",
                    phone: "",
                }
            }
        },
        created() {
            if (this.$store.getters.isLoggedIn === true) {
                if (this.$store.getters.uid != "" || this.$store.getters.uid != null || this.$store.getters.uid != undefined) {
                    var _uid = this.$store.getters.uid;
                    api.post("cliente/info/", {uid: _uid}).then(res => {
                        var _user = res;
                        // console.log("Perfil -> ", _user);

                        if (_user) {
                            this.dni = _user.dni;
                            this.name = _user.name;
                            this.lastname = _user.lastname;
                            this.birthday = _user.birthday;
                            this.address = _user.address;
                        }
                    });

                    EventBus.$on("user", res => {
                        var _user = res;
                        // console.log("Perfil -> ", _user);

                        if (_user) {
                            this.dni = _user.dni;
                            this.name = _user.name;
                            this.lastname = _user.lastname;
                            this.birthday = _user.birthday;
                            this.address = _user.address;
                        }
                    });
                }
            }
        },
        methods: {
            change(type) {
                this.$refs['modal-edit'].show();
                this.showInput = type;
            },
            changeText(e) {
                var _input = e.target;
                var _id = _input.getAttribute("id");
                var _btn = document.querySelector("#buttonSave");
                
                if (_id === "dni") {
                    if (_input.value.toLowerCase() != this.$store.getters.user.dni) {
                        _btn.disabled = false;
                    } else {
                        _btn.disabled = true;
                    }
                }

                if (_id === "name") {
                    if (_input.value.toLowerCase() != this.$store.getters.user.name) {
                        _btn.disabled = false;
                    } else {
                        _btn.disabled = true;
                    }
                }

                if (_id === "lastname") {
                    if (_input.value.toLowerCase() != this.$store.getters.user.lastname) {
                        _btn.disabled = false;
                    } else {
                        _btn.disabled = true;
                    }
                }

                if (_id === "birthday") {
                    if (_input.value.toLowerCase() != this.$store.getters.user.birthday) {
                        _btn.disabled = false;
                    } else {
                        _btn.disabled = true;
                    }
                }

                if (_id === "address") {
                    if (_input.value.toLowerCase() != this.$store.getters.user.address) {
                        _btn.disabled = false;
                    } else {
                        _btn.disabled = true;
                    }
                }

                if (this.dni === this.$store.getters.user.dni && this.name === this.$store.getters.user.name && this.lastname === this.$store.getters.user.lastname && this.birthday === this.$store.getters.user.birthday) {
                    _btn.disabled = true;
                }
            },
            update() {
                var _btn = document.querySelector("#buttonSave");
                this.updateClt.uid = this.$store.getters.uid;
                this.updateClt.dni = this.dni;
                this.updateClt.name = this.name;
                this.updateClt.lastname = this.lastname;
                this.updateClt.birthday = this.birthday;

                this.updateClt.address = this.$store.getters.user.address;
                this.updateClt.city = this.$store.getters.user.city;
                this.updateClt.country = this.$store.getters.user.country;
                this.updateClt.lat = this.$store.getters.user.lat;
                this.updateClt.lng = this.$store.getters.user.lng;
                this.updateClt.email = this.$store.getters.user.email;
                this.updateClt.phone = this.$store.getters.user.phone;

                api.put("cliente/update/", this.updateClt).then(res => {
                    console.log(res);
                    _btn.disabled = true;

                    setTimeout(() => {
                        if (document.querySelector("#guardoFin")) {
                            document.querySelector("#guardoFin").click();
                        }
                    }, 500);
                }).catch(err => {
                    console.log("Error -> ", err);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">  
    .btnBack {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 70px;
        background: transparent;
        border: none;
        padding: 0;
        z-index: 100;

        .icono {
            display: block;
            margin: 0;
            padding: 0;
            width: 70px;
        }
    }
    .bodyProfile{
        position: relative;
        .boxAvatar{
            position: relative;
            width: 120px;
            height: 120px;
            margin: 20px auto;
            display: block;
            border-radius: 50%;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            label{
                position: absolute;
                bottom: 5px;
                right: 5px;
                background: #fff;
                padding: 0;
                border: 1px solid #d1d1d1;
                box-shadow: .5px .5px 3px #343434;
                border-radius: 50px;
                width: 40px;
                height: 40px;
                text-align: center;
                margin: 0;
                cursor: pointer;
                img{
                    width: 38px;
                    height: 38px;
                    object-fit: contain;
                    margin: auto;
                    display: block;
                    padding: 1px;
                }
            }
        }
        .bodyOptions{
            max-width: 90%;
            margin: auto;
            .form-group{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid var(--bluePrimary);
                padding: 8px 0;
                margin: 0;
                h5{
                    color: #b8b8b8;
                    max-width: 80%;
                    font-size: 16px;
                    margin: 0;
                }
                button{
                    border:none;
                    img{
                        width: 45px;
                        height: 40px;
                        object-fit: contain;
                    }
                    &:focus, &:hover, &:active{
                        background-color: transparent;
                    }
                }
            }
        }
    }

    .modal-edit{
        .titleModal{
            color: var(--blue);
            text-align: center;
        }
        .form-group{
            position: relative;
             .btnShow{
                    position: absolute;
                    bottom: 0;
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
                padding: 0;
                transition: all 200ms;
                opacity: 1;
                display: block;
                margin: auto;
                margin-top: 20px;
                text-align: center;
            }
        }
    }
    .btnConfirmar{
        width: 120px;
        margin: 40px auto 10px;
        color: #fff;
        border-radius: 0;
        padding: 6px;
        background-color: var(--blue);
        display: block;
         &:focus, &:hover, &:active{
            color: #fff;
        }
    }

</style>
