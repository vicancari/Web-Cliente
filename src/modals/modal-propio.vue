<template>
    <div>
        <b-modal centered :modal-class="myclass" id="modal-propio" ref="modal-propio"  hide-footer hide-header>  
            <ul>
                <li>
                    <p>Novo Sushi </p>
                    <span>8</span>
                </li>
                 <li>
                    <p>Santa Gloria  </p>
                    <span>12</span>
                </li>
                 <li>
                    <p>Cinesa</p>
                    <span>6</span>
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
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
