import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src="https://i.ytimg.com/vi/ouXK2eTP01o/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDMDw-K9-51Z6hodrvAZfr-DQRrRg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dancing Rat + React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        expedita sed quibusdam minima, iure placeat enim quidem corrupti quasi
        veniam autem adipisci fugiat, iusto eligendi, illum dolorem? Atque, ut
        expedita.
      </p>
    </>
  );
}

export default App;
