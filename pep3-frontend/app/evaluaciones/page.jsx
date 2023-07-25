'use client'

import style from './evaluaciones.module.css'

import PruebaService from '../services/pruebaService'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

export default function evaluaciones() {
    let cantidadPruebas = 0;

    const [pruebas, setPruebas] = useState([]);

    useEffect(() => {
        const pruebasExistentes = [];
        PruebaService.getPruebas()
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setPruebas(res.data);
                    localStorage.setItem("pruebas", JSON.stringify(res.data));
                } else {
                    console.log("No hay pruebas");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main className={style.main}>

            <section className={style.sectionContenido}>
                <div className={style.contenedorTitulo}>
                    <h1>Busca la evaluación que quieras realizar</h1>
                </div>

                <div className={style.contenedorTabla}>
                    {pruebas.length == 0 ? (
                        <div className={style.noHayPruebas}>
                            <h1>No hay pruebas</h1>
                            <Link href="/crear-evaluacion">Crear una Evaluación</Link>
                            <img src="/img/hutao-cyberpunk.png" />
                        </div>
                    ) : (
                        <table className={style.tabla}>
                            <thead>
                                <tr>
                                    <th>N° Prueba</th>
                                    <th>Dificultad</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>

                            <tbody>
                                {pruebas.map((prueba) => (
                                    <tr key={prueba.idPrueba}>
                                        <td>{prueba.idPrueba}</td>
                                        <td>{prueba.dificultad}</td>
                                        <td><Link href={`/evaluaciones/${prueba.idPrueba}`}>Realizar</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>


            <footer className={style.footer} />
        </main >
    )
}