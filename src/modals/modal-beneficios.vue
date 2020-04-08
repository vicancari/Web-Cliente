<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-beneficios" ref="modal-beneficios"  hide-footer hide-header>  
            <ul>
                <li>
                    <p>Raus Eat </p>
                    <span>11,00€</span>
                </li>
                 <li>
                    <p>Raus Fuel </p>
                    <span>25,00€</span>
                </li>
                 <li>
                    <p>Raus Kids </p>
                    <span>150,00€</span>
                </li>
            </ul>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'modal-beneficios',
        components: {},
        data: function () {
            return {
                myclass: ['modal-beneficios'],
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
