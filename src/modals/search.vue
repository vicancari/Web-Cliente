<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-search" ref="modal-search"  hide-footer hide-header>  
            <div class="body">
                <h5 class="title">Buscar <img :src="searchImg" alt=""></h5>
                <div class="boxInput">
                    <input type="text" class="form-control" v-model="search">
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

    export default {
        name: 'search',
        components: {},
        data: function () {
            return {
                myclass: ['modal-search'],
                searchImg: searchImg,
                search: ""
            }
        },
        methods: {
            searching() {
                var _conv = this.search.split(" ").join("-");
                this.$router.push(`/home/searching=${_conv}`);
            }
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
    .boxInput{
        input{
            border:none;
            border-bottom: 1px solid #d1d1d1;
            padding: 3px 15px;
            color: var(--blue);
            box-shadow: none;
            border-radius: 0;
            margin-bottom: 1.5rem;
            
            &:focus{
                box-shadow: none;
            }
        }
    }
    .btnIr{
        background-color: var(--blue);
        color: #fff;
        width: 45%;
        margin: auto;
        display: block;
        border-radius: 0;
    }
}
</style>
