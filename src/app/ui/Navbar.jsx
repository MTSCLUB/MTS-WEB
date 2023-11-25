'use client'

import Link from 'next/link'
import styles from '../css/navbar.module.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';

const Navbar = () => {
    const [mostrarDropdown, setMostrarDropdown] = useState(false);

    const toggleDropdown = () => {
        setMostrarDropdown(!mostrarDropdown)
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <button className={styles.button} onClick={toggleDropdown}>{mostrarDropdown ? <HiOutlineXMark size={25}/> : < HiMiniBars3 size={25}/>}</button>
                <button className={styles.button}>Registrarme</button>
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