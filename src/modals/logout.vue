<template>
    <div >
        <b-modal centered :modal-class="myclass" id="modalLogout" ref="modalLogout"  hide-footer hide-header>  
            <h5 class="text-center font">¿Estas seguro que deseas salir de Raus?</h5>
            <div class="buttons d-flex align-items-center justify-content-center">
                <button class="btn" @click="$bvModal.hide('modalLogout')">Cancelar</button>
                <button class="btn">Aceptar</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'logout',
        components: {},
        data: function () {
            return {
                myclass: ['logout'],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .font{
        color: var(--bluePrimary);
        margin-bottom: 30px;
        font-size: 22px;
    }
    .buttons{
        button{
        color: #fff;
        margin: auto 10px;
        border-radius: 0;
        font-size: 16px;
        padding: 4px 20px;
            &:nth-child(1){
                background-color: var(--blue-opacity);
            }
            &:nth-child(2){
                background-color: var(--blue);
            }
        }
    }
</style>
