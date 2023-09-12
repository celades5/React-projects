import logo from './logo.svg';
import './App.css';
import App2 from './App2.js';
import Videogame from './Videojuegos.js';

function App() {
  let text = "<"
  return (
    <div className="App">
      
        {/*  esto si tiene hijos o props */}
         {/* <App2></App2> */}
        {/* <App2></App2>   */}
        {/* esto si no tiene props o hijos */}
        <Videogame
          imagen='rdr2'
          title='RDR2'
          añolanz='October 26, 2018'
          puntuacion='Masterpiece'
        ></Videogame>

        <Videogame
          imagen='tw3'
          title='RDR2'
          añolanz='May 15, 2015'
          puntuacion='My favourite game ever'
        ></Videogame>

        <Videogame
          imagen='sidemen'
          title='RDR2'
          añolanz='2020'
          puntuacion='A YT channel, they are funny tho:)'
        ></Videogame>
        
        

    </div>
  );
}

export default App;
