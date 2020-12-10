import './App.css';

function App() {
  return (
    <header>
      <div className="parteSuperior"><h4>¡10% OFF EN TODO CON CODIGO REACT!</h4></div>
      <div className="navSuperior">
        <img src="./public/kikuyo.png" alt="logo"/>
        <input className="inputBusqueda" type="text" placeholder="¿Que estas buscando?"></input>
      <div className="carrito">
        <div className="carro">Carrito de compras</div>
        <div className="cuenta">Tu cuenta</div>

      </div>

      </div>
      <div>
        <ul className="nav">
          <li className="itemNav">ITEM1</li>
          <li className="itemNav">ITEM2</li>
          <li className="itemNav">ITEM3</li>
          <li className="itemNav">ITEM4</li>
          <li className="itemNav">ITEM5</li>
          <li className="itemNav">ITEM6</li>
          <li className="itemNav">ITEM7</li>
          <li className="itemNav">ITEM8</li>

        </ul>
      </div>
    </header>

  )
}

export default App;
