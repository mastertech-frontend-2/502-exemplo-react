import React, { Component } from 'react';
import './Botao.css';

class Botao extends Component{
    render = () => {
        return (
            <button className="Botao" onClick={this.props.aoClicar}>
                {this.props.conteudo}
            </button>
        );
    }
}

export default Botao;