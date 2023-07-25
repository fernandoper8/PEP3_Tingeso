import style from './styles/cronometro.module.css'

import { useEffect, useState } from 'react'

export default function cronometro(props) {
    const { flag, setFlag } = props;

    let segundosFinal = 0;
    let minutosFinal = 0;
    let horasFinal = 0;

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);


    // useEffect(() => {
    //     const cronometroID = setInterval(() => {
    //         setSegundos(segundos => segundos + 1);
    //     }, 1000);


    //     return () => {
    //         clearInterval(cronometroID);
    //     };

    // }, []);

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
    }, [flag]); // Agregar flag como dependencia

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
    useEffect(() => {
        localStorage.setItem("tiempoCronometro", JSON.stringify({ horas, minutos, segundos }));
    }, [horas, minutos, segundos]);

    localStorage.setItem("segundos", segundos);
    localStorage.setItem("minutos", minutos);
    localStorage.setItem("horas", horas);

    const reiniciarCronometro = () => {
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
    }

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