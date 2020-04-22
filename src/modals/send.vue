<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-send" ref="modal-send"  hide-footer hide-header @click="closeSearching">  
            <div class="boxCalculate" @click="closeSearching">
                <div class="boxSeach" @click="closeSearching">
                    <input type="text" id="searchRestaurante" v-on:keyup="search" class="form-control search" placeholder="Buscar" v-on:focus="openSearching" autocomplete="off">
                    <p data-error="searchRestaurante" class="msgError d-none">*msgError</p>
                    <div @click="selectRestaurante" class="boxSeach__result">
                        <p v-for="res in this.restaurantes" :key="'result_'+res.id" :id="'result_'+res.id" :data-name="res.name" :data-categoria="res.categorias[0].name" :data-subcategoria="res.categorias[0].name_subcategory" class="result">{{ res.name }}</p>
                    </div>
                </div>
                <div class="priceText" @click="closeSearching">
                    <span>€</span>
                    <input type="text" id="saldoSend" class="form-control" placeholder="0,00" autocomplete="off">
                    <p data-error="saldoSend" class="msgError d-none">*msgError</p>
                </div>
                <div @click="calculadora" class="d-flex">
                    <button data-btn="1" class="btn">1</button>
                    <button data-btn="2" class="btn">2</button>
                    <button data-btn="3" class="btn">3</button>
                    <button data-btn="4" class="btn">4</button>
                    <button data-btn="5" class="btn">5</button>
                    <button data-btn="6" class="btn">6</button>
                    <button data-btn="7" class="btn">7</button>
                    <button data-btn="8" class="btn">8</button>
                    <button data-btn="9" class="btn">9</button>
                    <button data-btn="," class="btn">,</button>
                    <button data-btn="0" class="btn">0</button>
                    <button class="btn"><img class="img-fluid" :src="check" alt="" @click="Pay"></button>
                </div>
            </div>
        </b-modal>
        
         <b-modal centered :modal-class="payment" id="modal-payment" ref="modal-payment"  hide-footer hide-header>  
            <div class="boxPago">
                <h5 class="title">Selecciona un tipo de pago</h5>
                <div class="box checkedRadio">
                    <div class="checkedRadio__group">
                        <input type="radio" id="radio_propia" name="tipoPago" checked>
                        <label for="radio_propia">Propia</label>
                    </div>

                    <div id="selectCuenta" class="selectCenter"></div>

                    <div class="checkedRadio__group">
                        <input type="radio" id="radio_mix" name="tipoPago">
                        <label for="radio_mix">Mix</label>
                    </div>
                </div>
                <div class="boxPrice">
                    <p v-b-tooltip.hover :title="this.saldoSend+',00€'">{{ this.saldoSend }}<span>,00€</span></p>
                    <h5 class="name">{{ this.selectedRes.name }}</h5>
                </div>
                <div class="footer">
                    <button class="btn btn-confirmar">Confirmar</button>
                    <button class="btn btn-cancelar">Cancelar</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    import check from '../assets/img/icons/check-blanco.svg';
    import api from "../api.js";
    import funciones from "../funciones.js";

    export default {
        name: 'send',
        components: {},
        data: function () {
            return {
                myclass: ['modal-send'],
                payment: ['modal-payment'],
                check: config.rutaWeb(check),
                restaurantes: [],
                selectedRes: {},
                saldoSend: 0
            }
        },
        methods: {
            openSearching() {
                if (document.querySelector("#searchRestaurante")) {
                    if (document.querySelector("#searchRestaurante").parentNode.classList.contains("boxSeach")) {
                        document.querySelector("#searchRestaurante").parentNode.classList.add("searching");
                    }
                }
            },
            closeSearching() {
                if (document.activeElement != document.querySelector("#searchRestaurante")) {
                    if (document.querySelector("#searchRestaurante").parentNode.classList.contains("boxSeach")) {
                        document.querySelector("#searchRestaurante").parentNode.classList.remove("searching");
                    }
                }
            },
            selectRestaurante(e) {
                var _el = e.target;
                document.querySelector("#searchRestaurante").value = _el.getAttribute("data-name");
                this.selectedRes = {
                    id: _el.getAttribute("id").replace("result_", ""),
                    name: _el.getAttribute("data-name"),
                    categoria: _el.getAttribute("data-categoria"),
                    subcategoria: _el.getAttribute("data-subcategoria")
                };

                if (document.querySelector("#searchRestaurante").parentNode.classList.contains("boxSeach")) {
                    document.querySelector("#searchRestaurante").parentNode.classList.remove("searching");
                }
            },
            search(e) {
                var _parent = e.target.parentNode;
                var _input = e.target;
                var _boxResult = _parent.children[2];
                var _datas = _boxResult.children;

                if (_parent.classList.contains("boxSeach")) {
                    if (_input.value != "") {
                        _parent.classList.add("searching");
                    }
                }

                for (var el = 0; el < _datas.length; el++) {
                    var dataLower = _datas[el].innerText.toLowerCase();
                    var obj = {data: dataLower};

                    _datas[el].classList.add("d-none");

                    if (_input.value.toLowerCase() === obj.data) {
                        _datas[el].classList.remove('d-none');
                        this.selectedRes = {
                            id: _datas[el].getAttribute("id").replace("result_", ""),
                            name: _datas[el].getAttribute("data-name"),
                            categoria: _datas[el].getAttribute("data-categoria"),
                            subcategoria: _datas[el].getAttribute("data-subcategoria")
                        };
                    }

                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.indexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === obj.data.substr(obj.data.lastIndexOf(" ") + 1, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
            
                    if (_input.value.toLowerCase() === obj.data.substr(0, _input.value.length)) {
                        _datas[el].classList.remove('d-none');
                    }
                    
                    if (_input.value.toLowerCase() === '') {
                        _datas[el].classList.remove('d-none');
                    }
                }
            },
            calculadora(e) {
                var _btnClick = e.target.getAttribute("data-btn");
                if (document.querySelector("#saldoSend")) {
                    if (_btnClick === "1" || _btnClick === "2" || _btnClick === "3" || _btnClick === "4" || _btnClick === "5" || _btnClick === "6" || _btnClick === "7" || _btnClick === "8" || _btnClick === "9" || _btnClick === "," || _btnClick === "0") {
                        document.querySelector("#saldoSend").value += _btnClick;
                    }
                }
            },
            setAccounts() {
                var _box = document.querySelector("#selectCuenta");
                var _myAccounts = this.$store.getters.user.accounts;
                var _cate = this.selectedRes.categoria.replace("#", "");
                // var _subcate = this.selectedRes.subcategoria.replace("#", "");
                
                // console.log(_box);
                // console.log(_cate);
                // console.log(_subcate);
                
                _myAccounts = Object.values(_myAccounts);
                // console.log(_myAccounts);

                for (var i = 0; i < _myAccounts.length; i++) {
                    if (_myAccounts[i].name.toLowerCase() != "propia") {
                        if (_myAccounts[i].categorias) {
                            if (_myAccounts[i].categorias[0].nombre.toLowerCase() === _cate.toLowerCase()) {
                                var html2 = `
                                    <div class="checkedRadio__group">
                                        <input type="radio" id="radio_${_myAccounts[i].id_plan}" name="tipoPago">
                                        <label for="radio_${_myAccounts[i].id_plan}">${_myAccounts[i].name}</label>
                                    </div>
                                `;
    
                                _box.innerHTML += html2;
                            }
                        }
                    }
                }
            },
            Pay() {
                if (document.querySelector("#searchRestaurante").value === "") {
                    document.querySelector("[data-error='searchRestaurante']").innerText = "Debes buscar un restaurante.";
                    document.querySelector("[data-error='searchRestaurante']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='searchRestaurante']").innerText = "";
                        document.querySelector("[data-error='searchRestaurante']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#saldoSend").value === "") {
                    document.querySelector("[data-error='saldoSend']").innerText = "Debes ingresar una cantidad.";
                    document.querySelector("[data-error='saldoSend']").classList.remove("d-none");

                    setTimeout(() => {
                        document.querySelector("[data-error='saldoSend']").innerText = "";
                        document.querySelector("[data-error='saldoSend']").classList.add("d-none");
                    }, 3500);

                    return false;
                }

                if (document.querySelector("#searchRestaurante").value != "" && document.querySelector("#saldoSend").value != "") {
                    this.saldoSend = document.querySelector("#saldoSend").value.replace(",00", "");

                    this.$refs['modal-send'].hide();
                    this.$refs['modal-payment'].show();

                    setTimeout(() => {
                        this.setAccounts();
                    }, 950);
                }
            },
            async getRestaurantes(myLat, myLng) {
                await api.get(`restaurantes/list/`).then(res => {
                    var _keys = Object.keys(res);
                    var _values = Object.values(res);

                    var _list = [];
                    for (var i = 0; i < _values.length; i++) {
                        if (funciones.getKilometros(myLat, myLng, _values[i].lat, _values[i].lng) <= 20.000) {
                            _list.push({
                                id: _keys[i],
                                categorias: Object.values(_values[i].categories),
                                direccion: _values[i].direction,
                                name: _values[i].name,
                                phone: _values[i].phone,
                                photo: _values[i].photo,
                                rating: _values[i].rating,
                                reviews: Object.values(_values[i].reviews),
                                slider: Object.values(_values[i].slider),
                                lat: _values[i].lat,
                                lng: _values[i].lng,
                                km: funciones.getKilometros(myLat, myLng, _values[i].lat, _values[i].lng)
                            });
                        }
                    }

                    _list.sort(function(a, b){ 
                        if (a.name < b.name) {
                            return -1;
                        }
                    });

                    this.restaurantes = _list;
                }).catch(err => {
                    console.log(err);
                });
            },
        },
        mounted() {
            var coords = this.$store.getters.coords;
            this.getRestaurantes(coords.lat, coords.lng);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .checkedRadio__group {
        width: 30% !important;
        margin-bottom: 0 !important;

        input {
            display: none !important;
        }

        label {
            background: transparent !important;
            text-align: center !important;
            display: block !important;
            margin-bottom: 0 !important;
            padding: 4px !important;
            color: var(--bluePrimary) !important;
            cursor: pointer !important;
        }

        input[type=radio]:checked + label {
            background-color: var(--blue-opacity) !important;
            color: #fff !important;
        }
    }

    .checkedRadio {
        width: max-content;
        
        .selectCenter {
            width: max-content !important;

            .checkedRadio__group {
                width: max-content !important;
            }
        }
    }

    // boxSearch
    .boxSeach {
        position: relative;
        width: 100%;
        height: max-content;

        input[type="text"].form-control.search {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            outline: none;
            border: none;
            box-shadow: none;
            text-transform: uppercase !important;

            transition: all .15s ease-in-out;

            &:focus {
                outline: none;
                border: none;
                box-shadow: none;
            }
        }

        &__result {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #fff;
            z-index: 100;
            height: max-content;
            padding: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            overflow: hidden;

            p.result {
                display: block;
                margin: 0;
                width: 100%;
                height: max-content;
                padding: .5rem 1rem;
                border-bottom: 1px solid rgba(0,0,0,.25);
                text-transform: uppercase !important;
                transition: all .15s ease-in-out;
                cursor: pointer;

                &:hover {
                    background: rgba(0,0,0,.15);
                }

                &:last-child {
                    border-bottom: none;
                }
            }
        }

        &.searching {
            .boxSeach__result {
                display: block;
            }

            input[type="text"].form-control.search {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;

                &:focus {
                    border-bottom: 1px solid rgba(0,0,0,.25);
                }
            }
        }
    }

    // send modal
    .boxCalculate{
        .search{
            border-radius: 0;
            border: 1px solid #d1d1d1;
            text-align: center;
            color: var(--text-color);
            &:focus{
                box-shadow: none;
                border-color:#89addc;
            }
            &::placeholder{
                text-align: center;
            }
        }

        .priceText{
            position: relative;
            margin: 10px -15px 0;
            padding: 0 15px;
            border-bottom: 1px dashed #fff;
            span{
                position: absolute;
                left: 15px;
                top: 20px;
                font-size: 26px;
                color: #fff;
            }
            input{
                background: transparent;
                border: none;
                box-shadow: none;
                color: #fff;
                text-align: center;
                font-size: 52px;
                padding: 0 16px;
                 &:focus{
                    box-shadow: none;
                    border-color:#89addc;
                }
                &::placeholder{
                    text-align: center;
                    color: #fff;
                    opacity: .7;
                    font-size: 32px;
                }
            }
        }

        .d-flex{
            flex-wrap: wrap;
            .btn{
                width: 33.3%;
                height: 60px;
                color: #fff;
                font-size: 28px;
                img{
                    transform: scale(1.3);
                    height: 100%;
                }
            }
        }
    }
    //modal tipo pago
    .boxPago{
        .title{
            color: var(--bluePrimary);
            text-align: center;
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 15px;
        }
        .box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 10px auto 0;

            .form-group{
                width: 30%;
                margin-bottom: 0;
                input{
                    display: none;
                }
                label{
                    background: transparent;
                    text-align: center;
                    display: block;
                    margin-bottom: 0;
                    padding: 4px;   
                    color: var(--bluePrimary);
                    cursor: pointer;
                }
                input[type="radio"]:checked+label{
                    background-color: var(--blue-opacity);
                    color: #fff;
                } 
            }

        }
        .boxPrice{
            text-align: center;
            p{
                margin: 0;
                text-align: center;
                color: #9d8755;
                font-size: 52px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span{
                    font-size: 32px;
                }
            }
            .name{
                text-align: center;
                color: var(--bluePrimary);
                font-size: 20px;
                font-weight: normal;
            }
        }
        .footer{
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            button{
                color: #fff;
                width: 45%;
                border-radius: 0;
            }
            .btn-confirmar{
                background-color: var(--blue)
            }
            .btn-cancelar{
                background-color: var(--blue-opacity)
            }
        }
    }
</style>
