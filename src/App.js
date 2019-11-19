import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pessoa from './Pessoa/Pessoa'; 

class App extends Component {

  state = {  
    pessoas: [
     {nome: 'Tom', idade: 21},
     {nome: 'Julia', idade: 22},
     {nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor'
  }  

  switchManipuladorNome = (novoNome) => {  
    
    this.setState({
      pessoas: [
        {nome: novoNome, idade: 15},
        {nome: 'Jefferson', idade: 20},
        {nome: 'Esther', idade: 19}
      ]
    })
  }

  nomeManipuladorAlterado = (event) => {
    this.setState({
      pessoas: [
        {nome: 'Tomas', idade: 15},
        {nome: event.target.value, idade: 20},
        {nome: 'Esther', idade: 25}
      ]
    })
  }

  render() {
    const estilo = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Olá, Sou um aplicativo React</h1>
        <p>Isto está funcionando</p>
        <button 
        style={estilo}
        onClick={() => this.switchManipuladorNome('Samuel')}>Alterar nome
        </button> 
        <Pessoa 
        nome={this.state.pessoas[0].nome} 
        idade={this.state.pessoas[0].idade}/> 
        <Pessoa 
        nome={this.state.pessoas[1].nome} 
        idade={this.state.pessoas[1].idade}
        click={this.switchManipuladorNome.bind(this, 'Enoch!')}
        changed={this.nomeManipuladorAlterado}>Meu hobbie : Xadrez</Pessoa> 
        <Pessoa
        nome={this.state.pessoas[2].nome} 
        idade={this.state.pessoas[2].idade}/> 
      </div> 

    ); 
    
    
  }
}

export default App;

