import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';

import './ButtonPrf.css';

class ButtonPrf extends Component
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
