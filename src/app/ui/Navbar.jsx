import Link from 'next/link'
import styles from '../css/navbar.module.css'
import { HiMiniBars3 } from "react-icons/hi2";
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <button className={styles.button}><HiMiniBars3 size={25}/></button>
            <button className={styles.button}>Registrarme</button>
        </nav>
    )
}

export default Navbar;