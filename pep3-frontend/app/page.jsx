import style from './page.module.css';

export default function index() {
    return (
        <main className={style.principal}>
            <h1>Menú</h1>

            <div className={style.botones}>
                <button>crear prueba</button>
                <button>evaluarse</button>
            </div>
        </main>
    )        
}