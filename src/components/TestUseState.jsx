import { useState } from 'react'
const TestUseState = () => {
    let numero = 10;
    console.log(numero);

    const [number , setNumber] = useState(7);//declarando o estado inicial atraves do useState
  return (
    <div>
       
      <h2>Teste de para troca de numero</h2>
      <h3>Valor atual: {numero}</h3>
      <button onClick={()=>(numero = 20, console.log(numero))}>trocar</button>

      <h2>Teste de para troca de numero com UseState</h2>
      <h3>Valor atual: {number}</h3>
      <button style={{backgroundColor: "purple", color:"yellow", marginRight:"10px"}} onClick={()=>{setNumber (number - 1)}}>Tira</button>
      <button style={{backgroundColor: "purple", color:"yellow", marginRight:"10px"}} onClick={()=>{setNumber (number + 1)}}>Coloca</button>
      <button style={{backgroundColor: "purple", color:"yellow"}} onClick={()=> {setNumber(7)}}>Ctrl Z</button>
    </div>
  )
}

export default TestUseState
