import Link from 'next/link'

// Componentes
import Navbar from '../ui/Navbar'
import Signupform from '../ui/Signupform'
// Estilos
import '../css/globals.css'



export default function signup(){
    return (
        <div>
            <Navbar />
            <Signupform signup={false}/>
        </div>
    )
}