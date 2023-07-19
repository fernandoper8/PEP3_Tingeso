import Image from 'next/image'

import style from './page.module.css';

export default function index() {
    return (
        <main className={style.principal}>
            <h1>
                <span>cyber.py</span>
            </h1>

            <footer className={style.footer} />
        </main>
    )
}