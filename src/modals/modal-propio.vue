<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-propio" ref="modal-propio"  hide-footer hide-header>  
            <ul>
                <li v-for="l in this.$store.getters.listPropio" :key="l.name">
                    <p>{{ l.name }}</p>
                    <span>{{ l.saldo }},00€</span>
                </li>
            </ul>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'modal-propio',
        components: {},
        data: function () {
            return {
                myclass: ['modal-beneficios'],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
