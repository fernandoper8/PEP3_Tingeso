import style from './evaluaciones.module.css'

export default function evaluaciones() {
    return(
        <main className={style.main}>
            <section className={style.section}>

                <div className={style.contenedorTitulo}>
                    <h1>Busca la evaluación que quieras realizar</h1>
                </div>

                <div className={style.contenedorTabla}>
                    {/* Hacer los ciclos y tal para la tabla */}
                    <table className={style.tabla}>

                        <thead>
                            <tr>
                                <th>N° Prueba</th>
                                <th>Dificultad</th>
                                <th>Accion</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Basica</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Intermedia</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Dificil</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Basica</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Intermedia</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Dificil</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Intermedia</td>
                                <td><button>Realizar</button></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Dificil</td>
                                <td><button>Realizar</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>


                
            </section>
            <footer className={style.footer}/>
        </main>
    )
}