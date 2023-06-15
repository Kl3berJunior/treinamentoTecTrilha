import { Negociacao } from './negociacao.js';

export class Negociacoes {
    // Metodo para criar um " Array PRIVADO ", no caso abaixo um Array TIPADO com a classe NEGOCIACAO
    private negociacoes: Negociacao[] = [];

    // Sendo possivel adicionar novos elementos a ele apenas atraves de seu metodo " adicionar "
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // Por conta da função readonly, que nos permite apenas ler a lista e não alterala diretamente.
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
