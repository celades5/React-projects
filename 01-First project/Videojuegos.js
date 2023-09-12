function Videogame (props){
    return(
        <div className="Videogame">
            <img className="Videojuego"
                 src={require(`./images/profile-${props.imagen}.jpg`)}
                 alt='Profile-pic'>

            </img>
            <div className='Info-videojuego'>
                <p className='Titulo'><strong>Title: </strong>{props.title}</p>
                <p className='año-lanz'><strong>Release year: </strong>{props.añolanz}</p>
                <p className='puntuacion'><strong>Opinion: </strong>{props.puntuacion}</p>
            </div>




        </div>
    );
}

export default Videogame;