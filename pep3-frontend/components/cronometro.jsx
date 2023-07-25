import style from './styles/cronometro.module.css'

import { useEffect, useState } from 'react'

export default function cronometro(props) {
    const { flag, setFlag } = props;

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    useEffect(() => {
        let cronometroID;
    
        if (!flag) {
            cronometroID = setInterval(() => {
                setSegundos(segundos => segundos + 1);
            }, 1000);
        }
    
        return () => {
            clearInterval(cronometroID);
        };
    }, [flag]);

    useEffect(() => {
        if (segundos >= 60) {
            setSegundos(0);
            setMinutos(minutos => minutos + 1);
        }
    }, [segundos]);

    useEffect(() => {
        if (minutos >= 60) {
            setMinutos(0);
            setHoras(horas => horas + 1);
        }
    }, [minutos]);

    // guardar en localStorage
    // useEffect(() => {
    //     localStorage.setItem("tiempoCronometro", JSON.stringify({ horas, minutos, segundos }));
    // }, [horas, minutos, segundos]);

    // localStorage.setItem("segundos", segundos);
    // localStorage.setItem("minutos", minutos);
    // localStorage.setItem("horas", horas);

    const formatoTiempo = valor => {
        return valor < 10 ? `0${valor}` : valor;
    }

    return (
        <>
            {
                flag ? (
                    <div className={style.contenidoCronometro} >
                        <h1>Prueba finalizada!</h1>
                        <h2>{`${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`}</h2>
                    </div>
                ) : (
                    <div className={style.contenidoCronometro}>
                        <h2>{`${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`}</h2>
                    </div>
                )
            }
        </>
    )
}