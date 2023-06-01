import { NegociacoesService } from './../services/negociacoes-service.js';
import { domInjector } from "../decorator/dom-injector.js";
import { Inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/nogociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Imprimir } from '../utils/imprimir.js';

export class NegociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); // Quando se atribui o valor o typescript já resolve o tipo
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    //decorator
    @Inspect
    @logarTempoDeExecucao()
    public adiciona(): void{
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );

        //Verificação de dia útil
        if(!this.verificaDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this.negociacoes.adiciona(negociacao);

        Imprimir(negociacao, this.negociacoes);

        this.atualizaView();
        this.limparFormulario();
    }

    public importarDados() : void {
        this.negociacoesService.obterNegociacoesDoDia()
        .then(negociacoesDeHoje =>{
            return negociacoesDeHoje.filter(negociacoesDeHoje =>{
                return this.negociacoes.lista().some(negociacao => negociacao.ehIgual(negociacoesDeHoje))
            })
        })
        .then(negociacoesDeHoje =>{
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus(); 
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação cadastrada :)');
    }

    private verificaDiaUtil(data: Date) : Boolean{
        return data.getDay()>DiasDaSemana.Domingo && data.getDay()<DiasDaSemana.Sabado
    }
}