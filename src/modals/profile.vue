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
                    <!-- <button class="btn"><img :src="lapiz" cljass="img-fluid" alt=""></button> -->
                </div>
                <div class="bodyOptions">
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{name}}</h5>
                        <button class="btn btn-outline-secondary" type="button" @click="change('name')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{lastname}}</h5>
                        <button class="btn btn-outline-secondary" type="button" @click="change('lastname')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{email}}</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('email')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{telephone}}</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('telephone')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{date}}</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('date')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">{{addres}}</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('address')"><img class="img-fluid" :src="pin" alt=""></button>
                    </div>
                    <div class="form-group">
                        <h5 class="text-truncate m-0">Cambiar contraseña</h5>
                        <button class="btn btn-outline-secondary" type="button"  @click="change('password')"><img class="img-fluid" :src="lapiz" alt=""></button>
                    </div>
                </div>
                <button class="btn btnConfirmar">
                    Listo
                </button>
            </div>
        </b-modal>
        <b-modal centered :modal-class="modalEdit" id="modal-edit" ref="modal-edit"  hide-footer hide-header>  
            <h5 class="titleModal">Editar</h5>
                <!-- name -->
                <div class="form-group a"  v-if="showInput == 'name'">
                    <label class="form-control-placeholder" for="name">Ingrese nombre</label>
                    <input type="text" id="name" class="form-control" v-model="name">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- lastname -->
                <div class="form-group a"  v-if="showInput == 'lastname'">
                    <label class="form-control-placeholder" for="lastname">Ingrese apellido</label>
                    <input type="text" id="lastname" class="form-control" v-model="lastname">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- email -->
                 <div class="form-group a"  v-if="showInput == 'email'">
                    <label class="form-control-placeholder" for="email">Ingrese email</label>
                    <input type="email" id="email" v-model="email" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- telephone -->
                <div class="form-group a"  v-if="showInput == 'telephone'">
                    <label class="form-control-placeholder" for="phone">Ingrese Teléfono</label>
                    <input type="number" id="phone" v-model="telephone" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- date -->
                 <div class="form-group a"  v-if="showInput == 'date'">
                    <label class="form-control-placeholder" for="birthday">Ingrese fecha de nacimiento</label>
                    <input type="date" id="birthday" v-model="date" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- addres -->
                <div class="form-group a"  v-if="showInput == 'address'">
                    <label class="form-control-placeholder" for="address">Ingrese dirección</label>
                    <input type="text" id="address" v-model="date" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- password -->
                <div class="boxPassword" v-if="showInput == 'password'">
                    <div class="form-group a" >
                        <label class="form-control-placeholder" for="n_pass">Nueva contraseña</label>
                        <input :type="type2" id="n_pass" v-model="oldPassword" class="form-control">
                        <a class="btn btnShow" @click="showPassword2">
                            <i :class="icon2" ></i>
                        </a>
                    </div>
                    <p class="msgError d-none">*msgError</p>
                    <div class="form-group a" >
                        <label class="form-control-placeholder" for="cn_pass">Repetir Contraseña</label>
                        <input :type="type3" id="cn_pass" v-model="confPassword" class="form-control">
                        <a class="btn btnShow" @click="showPassword3">
                            <i :class="icon3" ></i>
                        </a>
                    </div>
                    <p class="msgError d-none">*msgError</p>
                </div>
            <button class="btn btnConfirmar" @click="$bvModal.hide('modal-edit')">
                Listo
            </button>
        </b-modal>
    </div>
</template>
<script>
    import config from "../config.js";
    /* Images */
    import avatar from '../assets/img/avatar.png';
    import back from '../assets/img/icons/flechavolver.svg';
    import lapiz from '../assets/img/icons/lapizeditar.svg';
    import pin from '../assets/img/icons/pin-blue.png';


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
            pin: pin,
            showInput: '',
            icon: "fas fa-eye",
            type: "password",
            showHide: true,
             icon2: "fas fa-eye",
            type2: "password",
            showHide2: true,
             icon3: "fas fa-eye",
            type3: "password",
            showHide3: true,
            name: this.$store.getters.user.name,
            lastname: this.$store.getters.user.lastname,
            email: this.$store.getters.user.email,
            telephone: this.$store.getters.user.phone,
            date: this.$store.getters.user.birthday,
            addres: this.$store.getters.user.address,
            password: 1234123,
            oldPassword: '',
            confPassword: '',
        }
    },
    methods: {
        change(type){
            this.$refs['modal-edit'].show();
            this.showInput = type;
            console.log(type);
            console.log(this.showInput);
        },
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
            if(this.type2 === "password") {
                this.type2 = "text"
                this.icon2 = "fas fa-eye"
            } else {
                this.type2 = "password"
                this.icon2 = "fas fa-eye-slash"
            }
        },
        showPassword3() {
            if(this.type3 === "password") {
                this.type3 = "text"
                this.icon3 = "fas fa-eye"
            } else {
                this.type3 = "password"
                this.icon3 = "fas fa-eye-slash"
            }
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
