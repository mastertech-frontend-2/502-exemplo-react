import React, { Component } from 'react';
import './Caixa.css';
import '../contador/Contador';
import Contador from '../contador/Contador';
import MaisMenos from '../mais-menos/MaisMenos';

class Caixa extends Component{
    render = () => {
        return (
            <section className="Caixa">
                <div className="main">
                    <Contador />
                    <MaisMenos />
                </div>

                <div className="buttons">
                    <button>Iniciar</button>
                    <button>Zerar</button>
                </div>
            </section>
        );
    }
}

export default Caixa;