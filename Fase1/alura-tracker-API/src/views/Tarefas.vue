<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />

    <div class="lista">
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Digite para filtrar" v-model="filtro">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>

        <Box v-if="ListaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>

        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa" />

        <Modal :mostrarModal="tarefaSelecionada != null" v-if="tarefaSelecionada">
            <template v-slot:cabecalho>
                <p class="modal-card-title">Editando Tarefa</p>
                <button class="delete" aria-label="close" @click="fecharModal"></button>
            </template>
            <template v-slot:corpo>
                <!-- Content ... -->
                <div class="field">
                    <label for="descricaoDaTarefa" class="label">
                        Descrição
                    </label>
                    <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa">
                </div>
            </template>
            <template v-slot:rodape >
                <button class="button is-success" @click="alterarTarefa">Salvar Alterações</button>
                <button class="button" @click="fecharModal">Cancelar</button>
            </template>
        </Modal>

    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefas'
import Box from '../components/Box.vue';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import { useStore } from '@/store';
import Modal from '@/components/Modal.vue';



export default defineComponent({
    name: "App",
    components: {
        Formulario,
        Tarefa,
        Box,
        Modal
    },
    computed: {
        ListaEstaVazia(): boolean {
            if (this.tarefas == undefined) return false
            return this.tarefas.length === 0

        }
    },
    setup() {
        const store = useStore();
        store.dispatch(OBTER_TAREFAS);
        store.dispatch(OBTER_PROJETOS);

        const tarefas = computed(() => store.state.tarefa.tarefas)
        const tarefaSelecionada = ref(null as ITarefa | null);

        const salvarTarefa = (tarefa: ITarefa) => {
            store.dispatch(CADASTRAR_TAREFA, tarefa);
        }

        const selecionarTarefa = (tarefa: ITarefa) => {
            tarefaSelecionada.value = tarefa;
        }

        const fecharModal = () => {
            tarefaSelecionada.value = null;
        }

        const alterarTarefa = () => {
            store.dispatch(ALTERAR_TAREFA, tarefaSelecionada.value?.id)
                .then(() => {
                    fecharModal()
                });
        }

        // Filtro
        const filtro = ref('');
        watchEffect(() => {
            store.dispatch(OBTER_TAREFAS, filtro.value)
        })

        return {
            tarefas,
            store,
            tarefaSelecionada,
            filtro,
            salvarTarefa,
            selecionarTarefa,
            fecharModal,
            alterarTarefa
        }
    }
});
</script>

