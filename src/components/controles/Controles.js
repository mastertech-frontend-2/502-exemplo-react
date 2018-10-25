import React, { Component } from 'react';
import Botao from '../botao/Botao';

class Controles extends Component{
    render = () => {
        return (
            <div className="Controles">
                <Botao conteudo={this.props.botaoPausar} aoClicar={this.props.cliquePausar}/>
                <Botao conteudo="Zerar" aoClicar={this.props.cliqueZerar}/>
            </div>
        );
    }
}

export default Controles;