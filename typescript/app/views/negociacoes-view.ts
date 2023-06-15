import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

    // O metodo " protected " priva o a função de ser chamada por quem não é filha da classe
    protected template(model: Negociacoes): string {
        // Ao usar o ``, podemos fazer a concatenação da string chamando elementos para dentro dela
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}
                            </td>
                            <td>
                                ${negociacao.quantidade}
                            </td>
                            <td>
                                ${negociacao.valor}
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}