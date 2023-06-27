<template>
    <div class="box has-text-weight-bold" :style="estilo">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Box',
    data() {
        return {
            // Pra quem gosta de manipular o estilo do elemento, há a opção de fazer isso diretamente pelo TS
            // Passando as informções a serem adicionadas no data() e depois fazendo referencia no elemente a ser manipulado
            // Lembrando que o nome tem que ser em camelCase ou declarando no estilo css entre aspas
            estilo: {
                backgroundColor: '#faf0ca'
            }
        }
    },

})
</script>
