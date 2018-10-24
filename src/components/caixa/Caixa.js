import React, { Component } from 'react';
import './Caixa.css';
import '../contador/Contador';
import Contador from '../contador/Contador';
import MaisMenos from '../mais-menos/MaisMenos';
import Controles from '../controles/Controles';

class Caixa extends Component{
    render = () => {
        return (
            <section className="Caixa">
                <div className="main">
                    <Contador />
                    <MaisMenos />
                </div>
                <Controles />
            </section>
        );
    }
}

export default Caixa;