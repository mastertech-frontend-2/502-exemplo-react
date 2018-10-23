import React, { Component } from 'react';
import './Caixa.css';
import '../contador/Contador';
import Contador from '../contador/Contador';
import MaisMenos from '../mais-menos/MaisMenos';

class Caixa extends Component{
    render = () => {
        return (
            <section className="Caixa">
                <div class="main">
                    <Contador />
                    <MaisMenos />
                </div>

                <div class="buttons">
                    <button>Iniciar</button>
                    <button>Zerar</button>
                </div>
            </section>
        );
    }
}

export default Caixa;