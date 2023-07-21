import Link from 'next/link'
import style from './crear-evaluacion.module.css'
import stylePregunta from './pregunta.module.css'


export default function crearEvaluacion() {
    return (
        <main className={style.main}>
            <section className={style.section}>

                {/* Ya estilado */}
                <div className={style.titulo}>
                    <div className={style.tituloContenido}>
                        <h1>Rellena los datos y crea una evaluación</h1>
                        <div className={style.selectorDificultad}>
                            <label>Selecciona la dificultad</label>
                            <select>
                                <option value="basico">Básica</option>
                                <option value="intermedio">Intermedia</option>
                                <option value="dificil">Difícil</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Ya estilado */}
                <div className={style.preguntas}>
                    {/* Aqui hacer llamado a 4 componentes de Pregunta */}
                    <div className={stylePregunta.card}>
                        <div className={stylePregunta.title}>
                            <h1>Pregunta 1</h1>
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

                    {/* BORRAR */}
                    <div className={stylePregunta.card}>
                        <div className={stylePregunta.title}>
                            <h1>Pregunta 2</h1>
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

                    {/* BORRAR */}
                    <div className={stylePregunta.card}>
                        <div className={stylePregunta.title}>
                            <h1>Pregunta 3</h1>
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

                    {/* BORRAR */}
                    <div className={stylePregunta.card}>
                        <div className={stylePregunta.title}>
                            <h1>Pregunta 4</h1>
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
                </div>

                {/* ya estilado */}
                <div className={style.contenedorBotones}>
                    <div className={style.botones}>
                        <Link href="/">Ayuda</Link>
                        <button>Crear</button>
                    </div>
                </div>



            </section>
            <footer className={style.footer} />
        </main>
    )
}