<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-incentivos" ref="modal-incentivos"  hide-footer hide-header>  
            <ul>
                <li>
                    <p>Raus Gym </p>
                    <span>11,00€</span>
                </li>
                 <li>
                    <p>Raus Books </p>
                    <span>25,00€</span>
                </li>
                 <li>
                    <p>Raus Trips </p>
                    <span>150,00€</span>
                </li>
            </ul>
        </b-modal>
    </div>
</template>

<script>


/* Images */

export default {
    name: 'modal-incentivos',
    components: {
    },
  data: function () {
        return {
            myclass: ['modal-beneficios'],
        }
    },
    methods: {
    
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
