/*
    - Regras da Negociação
        *Não pode ser modificada depois de criada
        *Obrigatoriamente tem uma data, quantidade e valor
        *Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado
 */

export class Negociacao{
    // # - Indica um atributo privado
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    //Métodos Getters
    get data(){
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.valor;
    }

    get volume(){
        return this.#quantidade * this.#valor;
    }
}