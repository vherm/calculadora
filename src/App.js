import React from 'react';
import 
import './App.css';
import ButtonPrf from  './componentes/ButtonPrf';

function App() {
  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="row">
          <Input></Input>

        </div>
        <div className="row">
          <ButtonPrf> C</ButtonPrf>
          <ButtonPrf>Del</ButtonPrf>
          <ButtonPrf>%</ButtonPrf>
          <ButtonPrf>/</ButtonPrf>
        </div>
        
        <div className="row">
          <ButtonPrf>7</ButtonPrf>
          <ButtonPrf>8</ButtonPrf>
          <ButtonPrf>9</ButtonPrf>
          <ButtonPrf>X</ButtonPrf>
        </div>        
        <div className="row">
          <ButtonPrf>4</ButtonPrf>
          <ButtonPrf>5</ButtonPrf>
          <ButtonPrf>6</ButtonPrf>
          <ButtonPrf>-</ButtonPrf>
        </div>        
        <div className="row">
          <ButtonPrf>1</ButtonPrf>
          <ButtonPrf>2</ButtonPrf>
          <ButtonPrf>3</ButtonPrf>
          <ButtonPrf>+</ButtonPrf>
        </div>        
        <div className="row">
          <ButtonPrf>0</ButtonPrf>
          <ButtonPrf>.</ButtonPrf>
          <ButtonPrf>=</ButtonPrf>
        </div>                
      </div>
    
    </div>
  );
}

export default App;
