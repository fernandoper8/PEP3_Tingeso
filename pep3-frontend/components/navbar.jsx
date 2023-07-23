import style from './styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className={style.navbar}>
          <div>
            <Link className={style.homeLink} href="/"><p>Menu</p></Link>
          </div>
        </nav>
    )
}
