export class View{

    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: string): void{
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }

    templete(model: string): string{
        throw Error("Classe filha precisa inplementar o meto")
    }
}