import React, { Component } from 'react';
import './Caixa.css';
import '../contador/Contador';
import Contador from '../contador/Contador';
import MaisMenos from '../mais-menos/MaisMenos';
import Controles from '../controles/Controles';

class Caixa extends Component{
    constructor(){
        super();
        this.state = {
            minutos: 0,
            segundos: 0,
            botaoPause: 'Iniciar'
        };
    }

    // componentDidMount = () => {
    //     this.iniciar();
    // }

    decrementar = () =>{
        let segundosAtualmente = this.state.segundos;
        let minutosAtualmente = this.state.minutos;

        segundosAtualmente--;

        if(segundosAtualmente < 0){
            minutosAtualmente--;
            segundosAtualmente = 59;
        }

        if(minutosAtualmente < 0){
            clearInterval(this.intervalo);
            minutosAtualmente = 0;
            segundosAtualmente = 0;
        }

        this.setState({
            minutos: minutosAtualmente, 
            segundos: segundosAtualmente
        });
    }

    incrementar = () => {
        let segundosAtualmente = this.state.segundos;
        let minutosAtualmente = this.state.minutos;

        segundosAtualmente++;

        if(segundosAtualmente > 59){
            minutosAtualmente++;
            segundosAtualmente = 0;
        }

        this.setState({
            minutos: minutosAtualmente, 
            segundos: segundosAtualmente
        });
    }

    iniciar = () => {
        this.intervalo = setInterval(this.decrementar, 1000);
    }

    pausar = () => {
        if(this.intervalo){
            clearInterval(this.intervalo);
            this.intervalo = null;
            this.setState({botaoPause: 'Iniciar'});
        }else{
            this.iniciar();
            this.setState({botaoPause: 'Pausar'});
        }
    }

    zerar = () => {
        this.setState({
            minutos: 0,
            segundos: 0,
            botaoPause: 'Iniciar'
        });
    }

    render = () => {
        return (
            <section className="Caixa">
                <div className="main">
                    <Contador 
                        minutos={this.state.minutos} 
                        segundos={this.state.segundos} />
                    <MaisMenos
                        cliqueMais={this.incrementar}
                        cliqueMenos={this.decrementar}/>
                </div>
                <Controles 
                    cliquePausar={this.pausar} 
                    cliqueZerar={this.zerar}
                    botaoPausar={this.state.botaoPause}/>
            </section>
        );
    }
}

export default Caixa;