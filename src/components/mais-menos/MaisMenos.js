import React, { Component } from 'react';
import Botao from '../botao/Botao';

class MaisMenos extends Component{
    render = () => {
        return (
            <div className="MaisMenos">
                <Botao conteudo="+" />
                <Botao conteudo="-&nbsp;" />
            </div>
        );
    }
}

export default MaisMenos;