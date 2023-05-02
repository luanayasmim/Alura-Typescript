/*
    - Regras da Negociação
        *Não pode ser modificada depois de criada
        *Obrigatoriamente tem uma data, quantidade e valor
        *Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
 */

export class Negociacao{
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): Number{
        return this.quantidade * this.valor;
    }
}