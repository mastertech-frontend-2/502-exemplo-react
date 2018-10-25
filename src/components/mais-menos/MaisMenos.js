import React, { Component } from 'react';
import Botao from '../botao/Botao';

class MaisMenos extends Component{
    render = () => {
        return (
            <div className="MaisMenos">
                <Botao conteudo="+" aoClicar={this.props.cliqueMais} />
                <Botao conteudo="-&nbsp;" aoClicar={this.props.cliqueMenos} />
            </div>
        );
    }
}

export default MaisMenos;