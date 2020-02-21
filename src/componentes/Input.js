import React, { Component } from 'react';
import TextField from '@material-ui/core/Button';

import './Input.css';

class Input extends Component
{
    esOperador = val => {
        return !isNaN (val) || val === "." || val === "=";
    }
    render() {
        return (
            <div  
            className={`button ${this.esOperador(this.props.children) ? "" : "operator"}`}
            //onClick={() => this.props.handleClick(this.props.children)}
            >
                {this.props.children}
            </div>
        );
    }
}

export default ButtonPrf;
