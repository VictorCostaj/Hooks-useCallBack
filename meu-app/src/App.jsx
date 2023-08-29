/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  /*esse hook funciona com dois argumentos
  1 - O primeiro é a função que queremos memorizar
  2 -  Segundo é um array de dependência
  
      TODOS OS VALORES QUE FOREM PASSADOS PARA ESSE ARRAY, SEMPRE QUE SEU VALOR FOR ALTERADO OU REDECLARADO. A MINHA FUNÇÃO CALLBACK VAI EXECUTAR NOVAMENTE. 

      <> Criando uma nova instância do meu HandlePlus
  
  */
  const handlePlus = useCallback(() => {
    //arrow function 
    setCounter((prevState) => prevState + 1);
  }, []) //2

  // quando utilizar?  -> compontente filhos
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  ); //passando a função para um componente filho, função de CallBack
  //usamos quando precisamos passar a função para um compontente filho.
}

function Button(props) {
  return (
    <button onClick={props.onClick}>+</button>
  )
}

export default App
