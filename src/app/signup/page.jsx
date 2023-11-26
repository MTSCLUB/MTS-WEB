import Link from 'next/link'

// Componentes
import Navbar from '../ui/Navbar'
import Signupform from '../ui/Signupform'
// Estilos
import '../css/globals.css'
import styles from '../css/signuppage.module.css'



export default function signup(){
    return (
        <div>
            <Navbar />
            <Signupform/>
        </div>
    )
}