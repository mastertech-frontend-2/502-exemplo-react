import React, { Component } from 'react';
import Botao from '../botao/Botao';

class Controles extends Component{
    render = () => {
        return (
            <div className="Controles">
                <Botao conteudo="Iniciar"/>
                <Botao conteudo="Zerar"/>
            </div>
        );
    }
}

export default Controles;