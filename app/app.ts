import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController;
const form: HTMLInputElement | null = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event =>{
        event.preventDefault();
        controller.adiciona();
    });
} else{
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

//const negociacoesView = new NegociacoesView();
//const template = negociacoesView.template();
//console.log(template);

const botaoImportar = document.querySelector('#botao-importa');
if(botaoImportar){
    botaoImportar.addEventListener('click', ()=>{
        controller.importarDados();
    });
}
else
    throw Error('Não foi possivel encontrar o botão');