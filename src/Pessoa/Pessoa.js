//criado no video8

import React from 'react';

const pessoa = (props) => {
   return (
      <div>
         <p>Eu sou {props.nome}, Eu sou uma Pessoa e tenho {props.idade} anos !</p>
         <p>{props.children}</p>
      </div>
      
   )
}

export default pessoa;

//Eu sou {props.nome}, Eu sou uma Pessoa e tenho {Math.floor(Math.random()*30)} anos !
