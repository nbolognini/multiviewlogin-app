import logo from './logo.svg';
import './App.css';

function App() {

  function pausar(){
    const ariel="ariel"
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>USUARIO </code> 
          <input className="usuario" type="text" name="buscar"></input> 
          <code> PASSWORD </code> 
          <input className="password" type="text" name="buscar"></input>
          <button onClick={pausar}>Login</button>

          <button>HOLA</button>


        </p>
      </header>
    </div>
  );
  
}

export default App;
