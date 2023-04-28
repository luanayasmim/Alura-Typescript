/*
    - Regras da Negociação
        *Não pode ser modificada depois de criada
        *Obrigatoriamente tem uma data, quantidade e valor
        *Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
 */

export class Negociacao{
    //Propriedade Privadas
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Métodos Getters
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this.valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}