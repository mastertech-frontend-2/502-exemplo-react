import React, { Component } from 'react';
import './Contador.css';

class Contador extends Component{
    render = () => {
        return (
            <div class="timer">
                <span>00</span>
                <span>00</span>
            </div>
        );
    }
}

export default Contador;