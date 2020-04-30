<template>
    <div v-if="this.$store.getters.balanceIncentivos != 0">
        <b-modal centered :modal-class="myclass" id="modal-incentivos" ref="modal-incentivos"  hide-footer hide-header>  
            <ul>
                <li v-for="l in this.$store.getters.listIncentivo" :key="l.name">
                    <p>{{ l.name }}</p>
                    <span>{{ l.saldo }}€</span>
                </li>
            </ul>
        </b-modal>
    </div>
</template>

<script>


/* Images */

export default {
    name: 'modal-incentivos',
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
