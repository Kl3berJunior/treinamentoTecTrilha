<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">

      <!-- O @ nos indica o tipo de evente que sera chamado -->
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <!-- AQUI VAI A VIEW CORRESPONDENTE -->
      <!-- o routerView || router-view nos para carregar o conteudo das paginas declarada no roteador  -->
      <routerView></routerView>
    </div>
  </main>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue'

export default defineComponent({
  name: "App",
  components: { BarraLateral, Notificacoes },
  // Data é o metodo que delcara o estado local do componente
  data() {
    // Sempre retornando um objeto
    return {
      modoEscuroAtivo: false
    }
  },
  // as funções que serão usadas na aplicação presisam ser declardas em methods
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
