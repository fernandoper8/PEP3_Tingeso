'use client'

import Link from 'next/link'
import style from './realizarEvaluacion.module.css'
import React, { useEffect, useState } from 'react'

import PruebaService from '../../services/pruebaService'
import CodigoService from '../../services/codigoService'
import EvaluacionPregunta from '../../../components/evaluacionPregunta'
import Footer from '../../../components/footer'

export default function crearEvaluacion({ params }) {
    const [prueba, setPrueba] = useState([]);

    const [codigoPregunta1, setCodigoPregunta1] = useState([]);
    const [condicionPregunta1, setCondicionPregunta1] = useState(false);

    const [codigoPregunta2, setCodigoPregunta2] = useState([]);
    const [condicionPregunta2, setCondicionPregunta2] = useState(false);

    const [codigoPregunta3, setCodigoPregunta3] = useState([]);
    const [condicionPregunta3, setCondicionPregunta3] = useState(false);

    const [codigoPregunta4, setCodigoPregunta4] = useState([]);
    const [condicionPregunta4, setCondicionPregunta4] = useState(false);

    const [flagRespondido, setFlagRespondido] = useState(false);

    const id = params.id;

    let preguntasCorrectas = 0;
    let preguntasIncorrectas = 0;

    const comprobarRespuesta = (respuestaUsuario, respuestaReal, cambiarCondicion) => {
        if(respuestaUsuario == respuestaReal){
            cambiarCondicion(true);
            preguntasCorrectas += 7;
        }else{
            preguntasIncorrectas += 1;
        }
    }

    const revisarRespuesta = () => {
        comprobarRespuesta(localStorage.getItem("respuesta1"), codigoPregunta1.respuesta, setCondicionPregunta1);
        comprobarRespuesta(localStorage.getItem("respuesta2"), codigoPregunta2.respuesta, setCondicionPregunta2);
        comprobarRespuesta(localStorage.getItem("respuesta3"), codigoPregunta3.respuesta, setCondicionPregunta3);
        comprobarRespuesta(localStorage.getItem("respuesta4"), codigoPregunta4.respuesta, setCondicionPregunta4);

        setFlagRespondido(true);
        const promedio = (preguntasCorrectas+preguntasIncorrectas) / 4;

        preguntasCorrectas = 0;
        preguntasIncorrectas = 0;

        alert("El promedio de las respuestas fue de: " + promedio);
    }


    useEffect(() => {
        const pruebasExistentes = [];

        
        console.log("id de la prueba: " + id);

        PruebaService.getPruebaById(id)
            .then((res) => {
                setPrueba(res.data);
                CodigoService.getCodigoById(res.data.idCodigo1)
                .then((res) => {
                    setCodigoPregunta1(res.data);
                    });

                CodigoService.getCodigoById(res.data.idCodigo2)
                    .then((res) => {
                        setCodigoPregunta2(res.data);
                    });

                CodigoService.getCodigoById(res.data.idCodigo3)
                    .then((res) => {
                        setCodigoPregunta3(res.data);
                    });

                CodigoService.getCodigoById(res.data.idCodigo4)
                    .then((res) => {
                        setCodigoPregunta4(res.data);
                    });
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <main className={style.main}>
            <section className={style.section}>

                <div className={style.izquierda}>
                    <div className={style.contenedorPreguntas}>
                        <EvaluacionPregunta
                            id="Pregunta1"
                            numeroPregunta="1"
                            pregunta={codigoPregunta1.pregunta}
                            texto={codigoPregunta1.contenido}
                            respuestaReal={codigoPregunta1.respuesta}

                            flag={flagRespondido}
                            setFlag={setFlagRespondido}

                            condicion={condicionPregunta1}
                            setCondicion={setCondicionPregunta1}
                        />

                        <EvaluacionPregunta
                            id="Pregunta2"
                            numeroPregunta="2"
                            pregunta={codigoPregunta2.pregunta}
                            texto={codigoPregunta2.contenido}
                            respuestaReal={codigoPregunta2.respuesta}

                            flag={flagRespondido}
                            setFlag={setFlagRespondido}

                            condicion={condicionPregunta2}
                            setCondicion={setCondicionPregunta2}
                        />

                        <EvaluacionPregunta
                            id="Pregunta3"
                            numeroPregunta="3"
                            pregunta={codigoPregunta3.pregunta}
                            texto={codigoPregunta3.contenido}
                            respuestaReal={codigoPregunta3.respuesta}

                            flag={flagRespondido}
                            setFlag={setFlagRespondido}

                            condicion={condicionPregunta3}
                            setCondicion={setCondicionPregunta3}
                        />

                        <EvaluacionPregunta
                            id="Pregunta4"
                            numeroPregunta="4"
                            pregunta={codigoPregunta4.pregunta}
                            texto={codigoPregunta4.contenido}
                            respuestaReal={codigoPregunta4.respuesta}

                            flag={flagRespondido}
                            setFlag={setFlagRespondido}

                            condicion={condicionPregunta4}
                            setCondicion={setCondicionPregunta4}
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
                        <button onClick={revisarRespuesta}>Finalizar Prueba</button>
                    </div>

                </div>

            </section>
            <Footer />
        </main>
    )
}