import style from './styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className={style.navbar}>
          <div>
            <Link href="/"><p>Menu</p></Link>
            <Link href="/crear-evaluacion"><p>Crear Evaluación</p></Link>
            <Link href="/evaluaciones"><p>Ver Evaluaciones</p></Link>
          </div>
        </nav>
    )
}
