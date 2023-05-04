export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if(elemento)
            this.elemento = <HTMLElement> elemento;
        else
            throw Error(`Seletor ${selector} não existe no dom`);
            
        if(escapar)
            this.escapar = escapar;
        
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar == true){
            template =template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}