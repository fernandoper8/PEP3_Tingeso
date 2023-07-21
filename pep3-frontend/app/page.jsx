import Link from 'next/link'
import style from './page.module.css';

export default function index() {
    return (
        <main className={style.principal}>
            <img className={style.imagenLanding} src="/img/V-landing.webp" />
            
            <div className={style.contenedorIzquierda}/>
            <div className={style.contenedorDerecha}>

                <div className={style.titulo}>
                    <span>cyber . py</span>
                </div>
                
                <div className={style.botones}>
                    <Link href="/crear-evaluacion">Crear Evaluación</Link>
                    <Link href="/">Ver Evaluaciones</Link>
                </div>
                
                <h2>¿Como funciona?</h2>


            </div>

            <footer className={style.footer} />
        </main>
    )
}