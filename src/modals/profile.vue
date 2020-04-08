<template>
    <div>
        <b-modal :modal-class="myclass" id="modal-profile" ref="modal-profile"  hide-footer hide-header>  
            <button class="btn btnBack" @click="$bvModal.hide('modal-profile'), $bvModal.show('menu-modal')"><img class="img-fluid" :src="back" alt=""></button>
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
                        <button class="btn btn-outline-secondary" type="button"  @click="change('addres')"><img class="img-fluid" :src="pin" alt=""></button>
                    </div>
                     <div class="form-group">
                        <h5 class="text-truncate m-0">{{password}}</h5>
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
                <!-- email -->
                 <div class="form-group a"  v-if="showInput == 'email'">
                    <label class="form-control-placeholder" for="email">Ingrese email</label>
                    <input type="email" id="email" v-model="email" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- telephone -->
                <div class="form-group a"  v-if="showInput == 'telephone'">
                    <label class="form-control-placeholder" for="telephone">Ingrese Teléfono</label>
                    <input type="number" id="telephone" v-model="telephone" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- date -->
                 <div class="form-group a"  v-if="showInput == 'date'">
                    <label class="form-control-placeholder" for="date">Ingrese fecha de nacimiento</label>
                    <input type="date" id="date" v-model="date" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- addres -->
                <div class="form-group a"  v-if="showInput == 'addres'">
                    <label class="form-control-placeholder" for="addres">Ingrese dirección</label>
                    <input type="text" id="addres" v-model="date" class="form-control">
                    <p class="msgError d-none">*msgError</p>
                </div>
                <!-- password -->
                <div class="boxPassword" v-if="showInput == 'password'">
                    <div class="form-group a" >
                        <label class="form-control-placeholder" for="addres">Ingrese contraseña actual</label>
                        <input :type="type" id="addres" v-model="password" class="form-control">
                        <a class="btn btnShow" @click="showPassword">
                            <i :class="icon" ></i>
                        </a>
                    </div>
                    <p class="msgError d-none">*msgError</p>
                    <div class="form-group a" >
                        <label class="form-control-placeholder" for="addres">Nueva contraseña</label>
                        <input :type="type2" id="addres" v-model="oldPassword" class="form-control">
                        <a class="btn btnShow" @click="showPassword2">
                            <i :class="icon2" ></i>
                        </a>
                    </div>
                    <p class="msgError d-none">*msgError</p>
                    <div class="form-group a" >
                        <label class="form-control-placeholder" for="addres">Repetir Contraseña</label>
                        <input :type="type3" id="addres" v-model="confPassword" class="form-control">
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
            avatar: config.rutaWeb(avatar),
            back: config.rutaWeb(back),
            lapiz: config.rutaWeb(lapiz),
            pin: config.rutaWeb(pin),
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
            name: 'example',
            email: 'email',
            telephone: '+573217180243',
            date: '11/07/1991',
            addres: 'Carrer de Aribau 35',
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
    .btnBack{
        position: absolute;
        top: 35px;
        left: 15px;
        width: 80px;
        z-index: 999;
        @media (max-width: 480px){
            left: 0;
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
