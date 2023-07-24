import style from '@/components/styles/formPregunta.module.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useState, useEffect } from 'react';

export default function formPregunta(props) {
    const { numeroPregunta } = props;

    const [archivo, setArchivo] = useState(null);
    const [codigo, setCodigo] = useState("");
    const [pregunta, setPregunta] = useState("");
    const [respuesta, setRespuesta] = useState("");

    const cambioArchivo = (e) => {
        const archivoSubido = e.target.files[0];

        if(archivoSubido && archivoSubido.name.endsWith(".py")){
            setArchivo(e.target.files[0]);
            localStorage.setItem("archivo"+numeroPregunta, e.target.files[0])
        }else{
            alert("Recuerda que debes subir un archivo .py!")
        }

    }

    useEffect(() => {
        localStorage.setItem("archivo"+numeroPregunta, archivo);
        localStorage.setItem("pregunta"+numeroPregunta, pregunta);
        localStorage.setItem("respuesta"+numeroPregunta, respuesta);
    });

    useEffect(() => {
        if (archivo) {
            obtenerCodigo();
        }
    }, [archivo]);

    const obtenerCodigo = async () => {
        const reader = new FileReader();
        reader.readAsText(archivo);
        reader.onload = async () => {
            setCodigo(reader.result);
        }
    }

    const cambioPregunta = (e) => {
        setPregunta(e.target.value);
        localStorage.setItem("pregunta"+numeroPregunta, e.target.value)
    }

    const cambioRespuesta = (e) => {
        setRespuesta(e.target.value);
        localStorage.setItem("respuesta"+numeroPregunta, e.target.value)
    }

    return (
        <div className={style.card}>

            <div className={style.izquierda}>
                <div className={style.izquierdaTitulo}>
                    <h1>Pregunta {numeroPregunta}</h1>
                </div>
                <div className={style.izquierdaInputs}>
                    <div className={style.form}>
                        <label>Ingresa la pregunta</label>
                        <input onChange={cambioPregunta} type="text" placeholder="Escribe la pregunta" />
                    </div>

                    <div className={style.form}>
                        <label>Ingresa la respuesta</label>
                        <input onChange={cambioRespuesta} type="text" placeholder="Escribe la respuesta" />
                    </div>
                    <div className={style.form}>
                        <label>Ingresa el archivo .py</label>
                        <input onChange={cambioArchivo} id="file" type="file" accept=".py" placeholder="Ingresa el archivo"></input>
                    </div>
                </div>

            </div>


            <div className={style.derecha}>
                <SyntaxHighlighter language="python" style={tema} showLineNumbers={true} className={style.codigo} breaks="false">
                    {codigo}
                </SyntaxHighlighter>
            </div>
        </div>

    )
}