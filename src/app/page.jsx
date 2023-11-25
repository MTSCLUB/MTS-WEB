// Componentes
import Navbar from './ui/Navbar'

// Estilos
import styles from './css/home.module.css'
import './css/home.module.css'
import './css/globals.css'

import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <img src="/images/home/static-waves.png" alt="" className={styles.waves} />
        <img src="/images/home/logo.png" alt="" className={styles.logo} />
      </div>
    </div>
  )
}
