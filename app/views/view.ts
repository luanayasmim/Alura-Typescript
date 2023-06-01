export abstract class View<T>{
    protected elemento: HTMLElement;

    constructor(selector: string) {
        const elemento = document.querySelector(selector);
        if(elemento)
            this.elemento = <HTMLElement> elemento;
        else
            throw Error(`Seletor ${selector} não existe no dom`);
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}