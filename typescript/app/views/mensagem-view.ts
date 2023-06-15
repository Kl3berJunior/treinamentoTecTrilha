
import { View } from './view.js';

export class MensagemView extends View<string> {
    // O metodo " protected " priva o a função de ser chamada por quem não é filha da classe
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}