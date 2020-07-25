<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-search" ref="modal-search"  hide-footer hide-header>  
            <div class="body">
                <h5 class="title">Buscar <img :src="searchImg" alt=""></h5>
                <div class="boxSearch2">
                    <input type="text" v-on:keyup="search2" v-on:focus="openSearching2" id="searchRestaurante2" class="form-control" v-model="textsearch" autocomplete="off">
                    <div @click="selectRestaurante2" class="boxSearch2__result">
                        <p v-for="res in this.refSearch" :key="'result_'+res.id" :id="'result_'+res.id" :data-name="res.name" :data-categoria="res.categoria" :data-subcategoria="res.subcategoria" class="result">{{ res.name }}</p>
                    </div>
                </div>
                <button type="button" class="btn btnIr" @click="searching()">Ir</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    // import config from "../config.js";
    /* Images */
    import searchImg from '../assets/img/search.png';
    import { EventBus } from "../main.js";

    export default {
        name: 'search',
        components: {},
        data: function () {
            return {
                myclass: ['modal-search'],
                searchImg: searchImg,
                textsearch: "",
                refSearch: [],
            }
        },
        created() {
            EventBus.$on('listRestauranteSearch', (obj) => {
                this.refSearch = obj;
            });
        },
        methods: {
            searching() {
                var _conv = this.textsearch.split(" ").join("-");
                this.$router.push(`/home/searching=${_conv}`);
            },
            selectRestaurante2(e) {
                var _el = e.target;
                document.querySelector("#searchRestaurante2").value = _el.getAttribute("data-name");
                var _conv = _el.getAttribute("data-name").split(" ").join("-");
                this.$router.push(`/home/searching=${_conv}`);
                
                if (document.querySelector("#searchRestaurante2").parentNode.classList.contains("boxSearch2")) {
                    document.querySelector("#searchRestaurante2").parentNode.classList.remove("searching2");
                }
            },
            openSearching2() {
                if (document.querySelector("#searchRestaurante2")) {
                    if (document.querySelector("#searchRestaurante2").parentNode.classList.contains("boxSearch2")) {
                        document.querySelector("#searchRestaurante2").parentNode.classList.add("searching2");
                    }
                }
            },
            search2(e) {
                var _parent = e.target.parentNode;
                var _input = e.target;
                var _boxResult = _parent.children[1];
                var _datas = _boxResult.children;

                if (_parent.classList.contains("boxSearch2")) {
                    if (_input.value != "") {
                        _parent.classList.add("searching2");
                    }
                }

                for (var el = 0; el < _datas.length; el++) {
                    var dataLower = _datas[el].innerText.toLowerCase();
                    var obj = {data: dataLower};

                    _datas[el].classList.add("d-none");

                    if (_input.value.toLowerCase() === obj.data) {
                        _datas[el].classList.remove('d-none');
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body{    
    .title{
        text-align: center;
        color: var(--text-color);
        align-items: center;
        display: flex;
        justify-content: center;
        img{
            width: 25px;
            margin-left: 5px;
        }
    }
    .boxSearch2 {
        position: relative;

        input {
            border:none;
            border-bottom: 1px solid #d1d1d1;
            padding: 3px 15px;
            color: var(--blue);
            box-shadow: none;
            border-radius: 0;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            
            &:focus{
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
            max-height: 292px;
            padding: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            overflow: hidden;
            overflow-y: auto;
            box-shadow: 1px 1px 10px 0 rgba(0,0,0,.45);
            border-left: 1px solid #666666;
            border-right: 1px solid #666666;
            border-bottom: 1px solid #666666;

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

        &.searching2 {
            .boxSearch2__result {
                display: block !important;
            }
        }
    }

    .btnIr {
        background-color: var(--blue);
        color: #fff;
        width: 45%;
        margin: auto;
        display: block;
        border-radius: 0;
    }
}
</style>
