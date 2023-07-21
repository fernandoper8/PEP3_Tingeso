import stylePregunta from '@/components/styles/formPregunta.module.css'

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

                <div className={stylePregunta.codigo} />
            </div>
        </div>
    )
}