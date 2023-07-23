'use client'

import Link from 'next/link'
import style from './crear-evaluacion.module.css'
import Footer from '../../components/footer'
import FormPregunta from '../../components/formPregunta'
import React from 'react'

export default function crearEvaluacion() {
    return (
        <main className={style.main}>
            <section className={style.section}>

                <section className={style.sectionContenido}>

                    <div className={style.encabezado}>

                        <div className={style.dificultad}>
                            <label>Selecciona la Dificultad: </label>
                            <select>
                                <option value="facil">Facil</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="dificil">Dificil</option>
                            </select>
                        </div>

                        <div className={style.informacion}>
                            <div className={style.avisos}>
                                algo
                            </div>
                            <div className={style.botones}>
                                <button>Ayuda</button>
                                <button>Crear</button>
                            </div>

                        </div>

                    </div>
                    <div className={style.cuerpo}>
                        <FormPregunta numeroPregunta="1"/>
                        <FormPregunta numeroPregunta="2"/>
                        <FormPregunta numeroPregunta="3"/>
                        <FormPregunta numeroPregunta="4"/>
                    </div>

                </section>


            </section>
            <Footer />
        </main>
    )
}