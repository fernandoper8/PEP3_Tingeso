import stylePregunta from '@/components/styles/formPregunta.module.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as tema } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function formPregunta(props) {
    const { numeroPregunta } = props;
    return (
        <div className={stylePregunta.card}>
            <div className={stylePregunta.title}>
                <h1>Pregunta {numeroPregunta}</h1>
            </div>

            <div className={stylePregunta.content}>
                <label>Ingresa la pregunta</label>
                <input type="text" placeholder="Escribe la pregunta" />

                <label>Ingresa la respuesta</label>
                <input type="text" placeholder="Escribe la respuesta" />

                <label>Ingresa el archivo .py</label>
                <input type="file" placeholder="Escribe la respuesta" />

                {/* <div className={stylePregunta.codigo} /> */}
                <SyntaxHighlighter language="python" style={tema} showLineNumbers={true} className={stylePregunta.codigo}>
                    "print('daigo putero')"
                </SyntaxHighlighter>
            </div>
        </div>
    )
}