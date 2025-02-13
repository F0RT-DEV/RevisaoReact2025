import UseProps from "./UseProps"
import styles from './AulaQuatro.module.css'
import { useState} from 'react'


const AulaQuatro = () => {
    const imgPadrao = "https://i.imgur.com/TnUlQ9F.jpeg"

    const [cards] = useState([
        {titulo:"anciã", descricao:"testeando", imagem: imgPadrao},
        {titulo:"BigHero", descricao:"Fazendo um bico", imagem:imgPadrao},
        {titulo:"Um homem de terno", descricao:"apostei uma corrida contra um onibus no mar e olha o que deu", imagem:imgPadrao},
        {titulo:"Homem de terno", descricao:"apostei uma corrida contra um onibus no mar e olha o que deu", imagem:imgPadrao},
    ])
  return (
    <div>
      <h1> Tudo Certo </h1>
        {cards.map((item, index) => (
            <div className={styles.card} key={index}>
            <UseProps 
            key={index}
            imagem={item.imgPadrao} 
            titulo= {item.titulo}
            descricao={item.descricao}
            />
            </div>
        ))}
       

        {/* <UseProps 
        id="1" 
        imagem={imgPadrao} 
        titulo="Anciã" 
        descricao="testeando minhas habilidades horrendamente boas"/>

        <UseProps 
        id="3" 
        imagem="https://i.imgur.com/NqLZDuK.jpeg"
        titulo="Um homem de terno" 
        descricao="apostei uma corrida contra um onibus no mar e olha o que deu"/>

        <UseProps 
        id="2" 
        imagem="https://i.imgur.com/xNq6Rtd.jpeg" 
        titulo="BigHero" 
        descricao="Fazendo um bico"/> */}
      </div>
  )
}

export default AulaQuatro
