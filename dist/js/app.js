import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);

// O JS não modificou a propriedade interna da classe, mas adicionou mais uma dinamicamente em tempo de execução.
//negociacao.qtda = 10000;
//console.log(negociacao);

//Para acessar a leitura de uma propriedade privada, foi feito um método Getter na Classe
console.log(negociacao.volume);

//Os erros identificados no Desenvolvimento com Javascript ocorrem em tempo de execução, o que torna passível de erros