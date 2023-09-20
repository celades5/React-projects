import './App.css';
import ProjectRedFoto from './images/projeckt-red.jpg'
import Boton from './Boton';
import Contador from './Counter';
import { useState } from 'react';

function App() {
  let text = "<"

  const [numClics, setNumClics] = useState(0);


  const Click = () => {
    setNumClics(numClics + 1);
  };

  const Reiniciar = () => {
    setNumClics(0);
  };

  return (

   <div className="App">
      
      <div className='logo'>
        <img className='Foto-Perfil'
           src={ProjectRedFoto}
           alt='foto perfil'
      />
      </div>

      <div className='Contenedor-Principal'>
        <Contador NumClicks={numClics}>
        </Contador>

        <Boton texto='Click' 
                BotonClick={true} 
                Click={Click}>
          </Boton>
          { <Boton texto='Reiniciar Clicks' 
                BotonClick={false} 
                Click={Reiniciar}>
        </Boton> }

      </div>

      {/* < div className='Buttons'>
        <Boton texto='Click' 
                BotonClick={true} 
                Click={Click}>
          </Boton>
          { <Boton texto='Reiniciar Clicks' 
                BotonClick={false} 
                Click={Reiniciar}>
        </Boton> }
      </div> */}

    </div>
  );
}

export default App;
