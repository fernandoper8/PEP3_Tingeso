import Image from 'next/image'

import style from './page.module.css';

export default function index() {
    return (
        <main className={style.principal}>
            <div className={style.contenedorPrincipal}>

                <h1>
                    <span>cyber.py</span>
                </h1>
                
                
                <div className={style.contenedorCentral}>

                    <div className={style.imagen}>
                         <Image
                            src="/img/VPRUEBAPE.webp"
                            width="1100"
                            height="1100"
                        >
                        </Image> 
                    </div>

                    <div className={style.contenedorBotones}>
                        <button>Crea una evaluación</button>
                        <button>Ver evaluaciones</button>
                    </div>
                </div>

                <footer className={style.footer}>
                </footer>

            </div>

        </main>
    )
}