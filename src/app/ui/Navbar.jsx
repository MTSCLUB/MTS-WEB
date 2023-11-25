'use client'

import Link from 'next/link'
import styles from '../css/navbar.module.css'
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const [mostrarDropdown, setMostrarDropdown] = useState(false);

    const toggleDropdown = () => {
        setMostrarDropdown(!mostrarDropdown)
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <button className={styles.button} onClick={toggleDropdown}>{mostrarDropdown ? <FaTimes size={25}/> : < TiThMenu size={25}/>}</button>
                <Link href="/signup" className={styles.button}>Registrarme</Link>
            </nav>

            <div className={`${styles.dropdown} ${mostrarDropdown ? '' : styles.hide}`}>
                <button className={`${styles.button} ${styles.ddbutton}`}>Inicio</button>
                <button className={`${styles.button} ${styles.ddbutton}`}>Perfil</button>
                <button className={`${styles.button} ${styles.ddbutton}`}>Apps</button>
                <button className={`${styles.button} ${styles.ddbutton} `}>Admin</button>
            </div>
        </div>
    )
}

export default Navbar;