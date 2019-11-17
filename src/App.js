import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pessoa from './Pessoa/Pessoa'; 


const app = props => {
    
    const [pessoasState, setPessoasState] = useState({  
      pessoas: [
       {nome: 'Tom', idade: 21},
       {nome: 'Julia', idade: 22},
       {nome: 'William', idade: 23}
      ],
      //outroState: 'algum outro valor'
    });

    const [outroState, setOutroState] = useState('algum outro valor');

    console.log(pessoasState, outroState)

    const switchManipuladorNome = () => {  
  
      setPessoasState({
        pessoas: [
          {nome: 'Samuel', idade: 15},
          {nome: 'Jefferson', idade: 20},
          {nome: 'Esther', idade: 19}
        ],
        outroState: pessoasState.outroState
      })
    }

    return (
      <div className="App">
        <h1>Olá, Sou um aplicativo React</h1>
        <p>Isto está funcionando</p>
        <button onClick={switchManipuladorNome}>Alterar nome</button> 
        <Pessoa nome={pessoasState.pessoas[0].nome} idade={pessoasState.pessoas[0].idade}/> 
        <Pessoa nome={pessoasState.pessoas[1].nome} idade={pessoasState.pessoas[1].idade}>Meu hobbie : Xadrez</Pessoa> 
        <Pessoa nome={pessoasState.pessoas[2].nome} idade={pessoasState.pessoas[2].idade}/> 
      </div> 

    ); 
  
}

export default app;


