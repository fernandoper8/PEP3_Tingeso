import style from './styles/evaluacionPregunta.module.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';

import RespuestaCorrecta from './respuestaCorrecta';
import RespuestaIncorrecta from './respuestaIncorrecta';

export default function realizarPregunta(props) {
    const [respuesta, setRespuesta] = useState("");
    const { numeroPregunta, pregunta, texto, respuestaReal, flag, setFlag, condicion, setCondicion } = props;

    useEffect(() => {
        localStorage.setItem("respuesta" + numeroPregunta, "");
    }, []);

    const inputAction = (e) => {
        setRespuesta(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem("respuesta" + numeroPregunta, respuesta);
    }, [respuesta]);


    return (
        <div className={style.card}>

            <div className={style.cardTitulo}>
                <h1>{numeroPregunta}. {pregunta}</h1>
            </div>

            <SyntaxHighlighter language="python" style={tema} showLineNumbers={true} className={style.codigo} breaks="false">
                {texto}
            </SyntaxHighlighter>

            <input onChange={inputAction} type="text" placeholder="Ingresa la respuesta..." />

            {flag ? (
                <>
                    {
                        condicion ? (
                            <RespuestaCorrecta />
                        ) : (
                            <RespuestaIncorrecta 
                                respuesta = {respuestaReal}
                            />
                        )
                    }
                </>
            ) : (
                <div></div>
            )}

        </div>
    )
}