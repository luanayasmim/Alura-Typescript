/*
    - Regras da Negociação
        *Não pode ser modificada depois de criada
        *Obrigatoriamente tem uma data, quantidade e valor
        *Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
 */

export class Negociacao{
    //Propriedade Privadas
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Métodos Getters
    get data(): Date{
        return this._data;
    }

    get quantidade(): Number{
        return this._quantidade;
    }

    get valor(): Number{
        return this._valor;
    }

    get volume(): Number{
        return this._quantidade * this._valor;
    }
}