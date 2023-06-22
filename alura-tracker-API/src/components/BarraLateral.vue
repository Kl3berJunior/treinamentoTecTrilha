<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo">
    </h1>
    <button class="button" @click="alterarTema">
      <!-- As duas chaves nos permite passar informações para o HTML, sendo providos do script -->
      {{ textoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  // O emits aciona um evento na instancia atual, passando para a função ouvinte
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  // Declara as propriedades a serem expostas na instância, como por exemplo abaixo que muda o texto do botão
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      } else {
        return 'Ativar modo escuto'
      }
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      // O aoTemaAlterado esta passando peo meio do $emit o booleam resultando do click no botão, asssim sendo carregado no app.vue, para
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})

</script>

<style>
/* TODO O ESTILO DO COMPONENTE */

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}
</style>