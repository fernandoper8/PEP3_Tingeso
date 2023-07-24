'use client'

import Link from 'next/link'
import style from './crear-evaluacion.module.css'
import Footer from '../../components/footer'
import FormPregunta from '../../components/formPregunta'

import React, { useState, useEffect } from 'react'
import PruebaService from '../services/pruebaService'


export default function crearEvaluacion() {
    const [dificultad, setDificultad] = useState("facil");

    let faltante = "";

    useEffect( () => {
        localStorage.setItem("dificultad", dificultad)
    }, [dificultad]);

    const verificarVacio = (lista) => {
        for(let i = 0; i < lista.length; i++){
            if(lista[i] == "" || lista[i] == "null"){
                faltante = i+1;
                return false;
            }
        }
        return true;
    }

    const crearPrueba = () => {
        let preguntas = [];
        let respuestas = [];
        let archivos = [];

        preguntas.push(localStorage.getItem("pregunta1"));
        preguntas.push(localStorage.getItem("pregunta2"));
        preguntas.push(localStorage.getItem("pregunta3"));
        preguntas.push(localStorage.getItem("pregunta4"));

        respuestas.push(localStorage.getItem("respuesta1"));
        respuestas.push(localStorage.getItem("respuesta2"));
        respuestas.push(localStorage.getItem("respuesta3"));
        respuestas.push(localStorage.getItem("respuesta4"));

        archivos.push(localStorage.getItem("archivo1"));
        archivos.push(localStorage.getItem("archivo2"));
        archivos.push(localStorage.getItem("archivo3"));
        archivos.push(localStorage.getItem("archivo4"));

        if(!verificarVacio(preguntas)){
            alert("Ingrese la pregunta "+faltante);
            return;
        }
        if(!verificarVacio(respuestas)){
            alert("Ingrese la respuesta de la pregunta "+faltante);
            return;
        }
        if(!verificarVacio(archivos)){
            alert("Ingrese el archivo archivo de la pregunta "+faltante);
            return;
        }
        PruebaService.crearPrueba(preguntas, respuestas, archivos, dificultad);
    }

    const cambioDificultad = (e) => {
        setDificultad(e.target.value)
    }

    return (
        <main className={style.main}>
            <section className={style.section}>

                <section className={style.sectionContenido}>

                    <div className={style.encabezado}>

                        <div className={style.dificultad}>
                            <label>Selecciona la Dificultad: </label>
                            <select onChange={cambioDificultad}>
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
                                <button onClick={crearPrueba}>Crear</button>
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