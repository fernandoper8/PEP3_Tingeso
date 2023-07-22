'use client'

import Link from 'next/link'
import style from './realizarEvaluacion.module.css'
import React from 'react'

import EvaluacionPregunta from '@/components/evaluacionPregunta'
import Footer from '@/components/footer'

export default function crearEvaluacion() {
    return (
        <main className={style.main}>
            <section className={style.section}>

                <div className={style.izquierda}>
                    <div className={style.contenedorPreguntas}>
                        <EvaluacionPregunta
                            numeroPregunta="1"
                            pregunta="¿Cuál es la salida del siguiente código?"
                        />

                        <EvaluacionPregunta
                            numeroPregunta="2"
                            pregunta="¿Cuál es la salida del siguiente código?"
                        />

                        <EvaluacionPregunta
                            numeroPregunta="3"
                            pregunta="¿Cuál es la salida del siguiente código?"
                        />

                        <EvaluacionPregunta
                            numeroPregunta="4"
                            pregunta="¿Cuál es la salida del siguiente código?"
                        />
                    </div>
                    
                </div>
                <div className={style.derecha}>

                    <div className={style.derechaSuperior}>
                        <div className={style.contenedorCronometro}>
                            <div className={style.tituloCronometro}>
                                <h1>Tiempo Transcurrido</h1>
                            </div>
                            <div className={style.contenidoCronometro}>
                                <h2>00:00:00</h2>    
                            </div>
                            
                        </div>
                        <div className={style.contenedorIndice}>
                            <h2>Pregunta 1</h2>
                            <h2>Pregunta 2</h2>
                            <h2>Pregunta 3</h2>
                            <h2>Pregunta 4</h2>
                        </div>
                    </div>

                    <div className={style.derechaInferior}>
                        <button>Finalizar Prueba</button>
                    </div>
                    
                </div>


            </section>
            <Footer />
        </main>
    )
}