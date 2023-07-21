'use client'

import Link from 'next/link'
import style from './crear-evaluacion.module.css'
import FormPregunta from '../../components/formPregunta'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export default function crearEvaluacion() {
    return (
        <main className={style.main}>
            <section className={style.section}>

                <div className={style.titulo}>
                    <h1>Rellena los campos y crea una evaluacion</h1>

                    <div className={style.selectorDificultad}>
                        <label>Selecciona la dificultad</label>
                        <select>
                            <option value="basico">Básica</option>
                            <option value="intermedio">Intermedia</option>
                            <option value="dificil">Difícil</option>
                        </select>
                    </div>

                </div>

                {/* Ya estilado */}
                <div className={style.preguntas}>
                    {/* Aqui hacer llamado a 4 componentes de Pregunta */}
                    <FormPregunta numeroPregunta="1" />
                    <FormPregunta numeroPregunta="2" />
                    <FormPregunta numeroPregunta="3" />
                    <FormPregunta numeroPregunta="4" />
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