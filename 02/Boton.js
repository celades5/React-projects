import './App.css';

const Boton = ({texto, BotonClick, Click}) => {
    return (
        <button className={ BotonClick ? "boton-clic" : "boton-reiniciar" }
                onClick={Click}>
            {texto}
        </button>
    )
};

export default Boton;