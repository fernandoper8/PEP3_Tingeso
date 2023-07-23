import style from '@/components/styles/formPregunta.module.css'

import Head from 'next/head'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function formPregunta(props) {
    const { numeroPregunta } = props;
    const texto = "def suma(a, b):\n\treturn a + b\n\nprint(suma(1, 2))"
    return (

        <div className={style.card}>

            <div className={style.izquierda}>
                <div className={style.izquierdaTitulo}>
                    <h1>Pregunta {numeroPregunta}</h1>
                </div>
                <div className={style.izquierdaInputs}>
                    <div className={style.form}>
                        <label>Ingresa la pregunta</label>
                        <input type="text" placeholder="Escribe la pregunta" />
                    </div>

                    <div className={style.form}>
                        <label>Ingresa la respuesta</label>
                        <input type="text" placeholder="Escribe la respuesta" />
                    </div>
                    <div className={style.formArchivo}>
                        <input id="file" type="file" accept=".py" placeholder="Ingresa el archivo"></input>
                        <label for="file">Ingresa el archivo .py</label>
                    </div>
                </div>

            </div>


            <div className={style.derecha}>
                <SyntaxHighlighter language="python" style={tema} showLineNumbers={true} className={style.codigo} breaks="false">
                    {texto}
                </SyntaxHighlighter>
            </div>
        </div>

    )
}