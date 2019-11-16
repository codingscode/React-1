import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pessoa from './Pessoa/Pessoa'; //(+) video8

class App extends Component {
  
  state = {  //criado em video < 16
    pessoas: [
     {nome: 'Tom', idade: 21},
     {nome: 'Julia', idade: 22},
     {nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor'
  }  //até aqui

  switchManipuladorNome = () => {  //(+)video16
    //console.log('foi clicado');
    // Não faça issothis.state.pessoas[0].nome = 'Samuel';
    this.setState({
      pessoas: [
        {nome: 'Samuel', idade: 15},
        {nome: 'Jefferson', idade: 20},
        {nome: 'Esther', idade: 19}
      ]
    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>Olá, Sou um aplicativo React</h1>
        <p>Isto está funcionando</p>
        <button onClick={this.switchManipuladorNome}>Alterar nome</button> 
        <Pessoa nome={this.state.pessoas[0].nome} idade={this.state.pessoas[0].idade}/> 
        <Pessoa nome={this.state.pessoas[1].nome} idade={this.state.pessoas[1].idade}>Meu hobbie : Xadrez</Pessoa> 
        <Pessoa nome={this.state.pessoas[2].nome} idade={this.state.pessoas[2].idade}/> 
      </div> 

    ); 
    //return React.createElement('div', null, 'h1', 'Olá, Eu sou um aplicativo React')  //n fica legal
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Olá, Eu sou um aplicativo React'))
  }
}

export default App;

/* tirado do div comentado <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */
// ver Elements 