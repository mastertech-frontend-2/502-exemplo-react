import React, { Component } from 'react';
import './Contador.css';

class Contador extends Component{
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
        let intervalo = setInterval(() => {
            let segundosAtualmente = this.state.segundos;
            let minutosAtualmente = this.state.minutos;

            segundosAtualmente--;

            if(segundosAtualmente < 0){
                minutosAtualmente--;
                segundosAtualmente = 59;
            }

            if(minutosAtualmente < 0){
                clearInterval(intervalo);
                minutosAtualmente = 0;
                segundosAtualmente = 0;
            }

            this.setState({
                minutos: minutosAtualmente, 
                segundos: segundosAtualmente
            });
        }, 1000);
    }

    render = () => {
        return (
            <div className="Contador">
                <span>{this.state.minutos}</span>
                <span>{this.state.segundos}</span>
            </div>
        );
    }
}

export default Contador;