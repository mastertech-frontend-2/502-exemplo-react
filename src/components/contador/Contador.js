import React, { Component } from 'react';
import './Contador.css';

class Contador extends Component{
    render = () => {
        return (
            <div className="Contador">
                <span>{this.props.minutos}</span>
                <span>{this.props.segundos}</span>
            </div>
        );
    }
}

export default Contador;