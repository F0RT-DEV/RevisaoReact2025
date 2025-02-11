
const ShowEvents = () => {
    const teste = (e)=>{
        console.log(e);
        console.log("Função externa ativada");
    }
  return (
    <div>
      <button onClick={teste}>teste para função externa</button>
      <br /> <br />
      <button onClick={()=>console.log("Função interna ativada")}>teste para função interna</button>
    </div>
  )
}

export default ShowEvents
