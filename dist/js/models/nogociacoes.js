export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
        // Dessa forma a lista não pode ser modificada de forma indevida
        //return [...this.negociacoes];
    }
}
