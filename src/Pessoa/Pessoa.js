//criado no video8

import React from 'react';

const pessoa = (props) => {
   return (
      <div>
         <p onClick={props.click}>Eu sou {props.nome}, Eu sou uma Pessoa e tenho {props.idade} anos !</p>
         <p>{props.children}</p>
      </div>
      
   )
}

export default pessoa;
