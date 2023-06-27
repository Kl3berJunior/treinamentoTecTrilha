// Com o "<T>" nos tornamos a classe mais abrangente, sendo assim, fica por conta de quem chamar ela dizer qual sera seu tipo

// O termo abstract quando é usado na classe, faz com que não seja permitido instanciar ela, mas não inpede que seja instanciado classes filhas dela
export abstract class View<T> {

    // O metodo " protected " priva o a função de ser chamada por quem não é filha da classe
    protected elemento: HTMLElement;
    private escapar = false;

    // Com o elemento"?" nos tiramos a obrigação de ser passada duas declaraçõs
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            // throw é para lançar um erro personalizado caso ocorra no console.
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    // Quando o " abstract " é usado em um metodo, não permite que ninguem fora da propria classe veja esse metodo se não a propria classe
    protected abstract template(model: T): string;
}