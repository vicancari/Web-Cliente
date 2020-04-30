<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-explorar" ref="modal-explorar"  hide-footer hide-header>  
            <button class="btn btnBack backModal" @click="$bvModal.hide('modal-explorar')"><img class="img-fluid" :src="back" alt=""></button>
            <h5 class="titleModal"><img :src="explorar" alt="">Explorar</h5>
            <div class="boxMenu" @click="filterCategory">
                <button type="button" v-for="cate in this.$store.getters.listCategorias" :key="cate.name" class="btnMenu btn btnCategory" :class="isActive" :data-cate="'#'+cate.name">{{ cate.name }}</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import config from "../config.js";
    /* Images */
    import back from '../assets/img/icons/flechavolver.svg';
    import explorar from '../assets/img/timeline.png';

    export default {
        name: 'explorar',
        components: {},
        data: function () {
            return {
                myclass: ['modal-explorar'],
                back: config.rutaWeb(back),
                explorar: explorar
            }
        },
        methods: {
            isActive() {
                var _values = Object.values(this.$store.getters.filterCategory);

                for (var i = 0; i < _values.length; i++) {
                    if (_values[i].value === true) {
                        return '_active';
                    }

                    if (_values[i].value === false) {
                        return '';
                    }
                }
            },
            filterCategory(e) {
                this.$store.commit("loading");
                var _btn = e.target;

                if (!_btn.classList.contains("_active")) {
                    _btn.classList.add("_active");

                    var _selectAll = document.querySelectorAll(`[data-category]`);
                    var _btnActives = document.querySelectorAll(`.btnCategory._active`);
                    _selectAll.forEach(item => {
                        item.classList.add("d-none");
                    });

                    var myArray2 = [];
                    
                    _btnActives.forEach(btn => {
                        var category = btn.getAttribute("data-cate");

                        myArray2.push({
                            name: category
                        });

                        this.$store.getters.listCategorias.forEach(el => {
                            if (category.toLowerCase() === '#'+el.name.toLowerCase()) {
                                var _selectAllFilter = document.querySelectorAll(`[data-category="#${el.name}"]`);

                                _selectAllFilter.forEach(item => {
                                    item.classList.remove("d-none");
                                });
                            }
                        });
                    });

                    for (var i2 = 0; i2 < myArray2.length; i2++) {
                        var _name = myArray2[i2].name.replace("#", "");
                        this.$store.state.filterCategory[`${_name}`].active = true;
                    }

                    this.$store.state.filterCategory.filter.active = true;
                    this.$store.commit("notLoading");
                } else {
                    _btn.classList.remove("_active");
                    var _cActive = 0;

                    this.$store.state.filterCategory[`${_btn.getAttribute("data-cate").replace("#", "")}`].active = false;
                    this.$store.getters.listCategorias.forEach(el => {
                        var category = _btn.getAttribute("data-cate");

                        if (category.toLowerCase() === '#'+el.name.toLowerCase()) {
                            var _selectAllFilter = document.querySelectorAll(`[data-category="#${el.name}"]`);

                            _selectAllFilter.forEach(item => {
                                item.classList.add("d-none");
                            });
                        }
                    });

                    var _btnActives2 = document.querySelectorAll(`.btnCategory._active`);
                    var myArray = [];

                    _btnActives2.forEach(btn => {
                        var category = btn.getAttribute("data-cate");
                        myArray.push({
                            name: category
                        });

                        this.$store.getters.listCategorias.forEach(el => {
                            if (category.toLowerCase() === '#'+el.name.toLowerCase()) {
                                var _selectAllFilter = document.querySelectorAll(`[data-category="#${el.name}"]`);

                                _selectAllFilter.forEach(item => {
                                    item.classList.remove("d-none");
                                });
                            }
                        });

                        _cActive = _cActive + 1;
                    });

                    for (var i = 0; i < myArray.length; i++) {
                        var _name2 = myArray[i].name.replace("#", "");
                        this.$store.state.filterCategory[`${_name2}`].active = true;
                    }

                    console.log(_cActive);
                    if (_cActive === 0) {
                        var _selectAll2 = document.querySelectorAll(`[data-category]`);

                        _selectAll2.forEach(item => {
                            item.classList.remove("d-none");
                        });

                        this.$store.state.filterCategory.filter.active = false;
                        this.$store.commit("notLoading");
                        return false;
                    }
                    this.$store.commit("notLoading");
                }

                console.log(this.$store.getters.filterCategory);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .btnBack{
        position: absolute;
        top: 15px;
        left: 15px;
        width: 80px;
        @media (max-width: 767px){
            position: absolute;
            top: 15px;
            left: 0;
            margin-top: 0px;
        }
    }
    .titleModal{
        text-align: center;
        color: var(--blue);
        margin: 30px auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        font-size: 22px;
        justify-content: center;
        font-weight: normal;
        img{
            width: 40px;
            object-fit: contain;
        }
    }
    .boxMenu{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        max-width: 100%;
        margin: 10px;

        .btnMenu {
            width: calc((100% / 3) - 20px);
            height: 100px;
            background: #f3f3f3;
            margin: 10px;
            color: var(--text-color);
            border-radius: 0;
            word-break: break-word;
            padding: 5px;
            font-size: .85rem;

            @media (max-width: 576px){
                height: 25vw;
                width: calc(33.3% - 10px);
                max-width: 33.3%;
                margin: 5px;
                max-height: 100px;
                font-size: 14px;
            }
            @media (max-width: 330px){
                padding: 0;
            }
            .price{
                display: flex;
                justify-content: center;
                align-items: flex-start;
                .a{
                    font-size: 32px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 100%;
                    @media (max-width: 480px){
                        font-size: 22px;
                    }           
                    @media (max-width: 330px){
                        font-size: 26px;
                    }                               
                }
                .b{
                    font-size: 14px;
                    position: relative;
                    top: 10px;
                    @media (max-width: 480px){
                        font-size: 11px;
                        top: 5px;
                    }
                }
            }
            p{
                margin: 0;
                color: var(--text-color);
                justify-content: center;
                align-items: center;
                margin-top: 5px;
                @media (max-width: 480px){
                    display: flex;
                    font-size: 14px;
                }
                @media (max-width: 330px){
                    font-size: 12px;
                }

                img{
                    width: 30px;
                    object-fit: contain;
                    margin-right: 5px;
                    @media (max-width: 480px){
                        width: 20px;
                    }
                }
            }
            .imgMenu{
                height: 46px;
                transform: scale(.8);
                @media (max-width: 480px){
                    width: 52px;
                }
            }
        }

        .btnMenu.active{
            background-color: var(--blue);
            color :#fff;
        }
        .btn.family{
            img{
                transform: scale(1.3);
            }
            p{
                transform: translateY(-10px);
                line-height: 1.1;
            }
        }
    }

    .btnMenu.btnCategory._active {
        background: var(--blue) !important;
        color: #ffffff !important;
    }
</style>
