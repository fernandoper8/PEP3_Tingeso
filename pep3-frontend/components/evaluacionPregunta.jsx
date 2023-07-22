import style from './styles/evaluacionPregunta.module.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function realizarPregunta(props) {
    const { numeroPregunta, pregunta } = props;
    const texto = "def suma(a, b):\n\treturn a + b\n\nprint(suma(1, 2))"

    return (
        <div className={style.card}>

            <div className={style.cardTitulo}>
                <h1>{numeroPregunta}. {pregunta}</h1>
            </div>
            
            <SyntaxHighlighter language="python" style={tema} showLineNumbers={true} className={style.codigo} breaks="false">
                {texto}
            </SyntaxHighlighter>

            <input type="text" placeholder="Ingresa la respuesta..."/>

        </div>
    )
}