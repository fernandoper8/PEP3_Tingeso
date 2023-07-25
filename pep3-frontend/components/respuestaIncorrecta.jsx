import style from './styles/respuestaIncorrecta.module.css'

export default function RespuestaCorrecta(props){
    const {respuesta} = props;

    return(
        <div className={style.respuestaIncorrecta}>
            <h2>Respuesta equivocada. La respuesta era {respuesta}</h2>
        </div>
    )
}