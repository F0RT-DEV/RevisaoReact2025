import { useState } from 'react'
const UseList = () => {
    const [list] = useState(["João", "Maria", "José"]);// declarando um array de nomes

    const [usuarios] = useState([//declarando um array de objetos
        {id:1, nome: "Dougras", login: "DougrasFB1@gmail.com"},
        {id:2, nome: "Lucas", login: "LucasFB1@gmail.com"},
        {id:3, nome: "Julio", login: "Julio@gmail.com"}
    ]);
  return (
    <div>
      <p>Nomes: {list[0]}</p> {/* acessando os nomes do array pelo indice*/}
      <p>Nomes: {list[1]}</p>
      <p>Nomes: {list[2]}</p>

      <ul>
        {list.map((valorItem, neumeroIndice) => (//mapeando os nomes
          <li style={{listStyle:"none"}} key={neumeroIndice}>
            Nome {neumeroIndice}:{valorItem}
            </li>//exibindo os nomes
        ))}
      </ul>

        <h3>Lista objetos</h3>
        {/* <ul>
            {usuarios.map((Item, Index) => (
            <li style={{listStyle:"none"}} key={Index}>
               Nome: {Item.nome} - Login: {Item.login}
                </li>
            ))}
        </ul> */}
        <ul>
            {usuarios.map((user) => (
            <li style={{listStyle:"none"}} key={user.id}> 
            Nome: {user.nome} - Login: {user.login}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default UseList
