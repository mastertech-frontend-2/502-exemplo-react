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
            minutos: 5,
            segundos: 59
        };
    }

    componentDidMount = () => {
        this.decrementar();
    }

    decrementar = () =>{
        this.intervalo = setInterval(() => {
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
        }, 1000);
    }

    pausar = () => {
        if(this.intervalo){
            clearInterval(this.intervalo);
            this.intervalo = null;
        }else{
            this.decrementar();
        }
        
    }

    render = () => {
        return (
            <section className="Caixa">
                <div className="main">
                    <Contador 
                        minutos={this.state.minutos} 
                        segundos={this.state.segundos} />
                    <MaisMenos />
                </div>
                <Controles pausar={this.pausar} />
            </section>
        );
    }
}

export default Caixa;