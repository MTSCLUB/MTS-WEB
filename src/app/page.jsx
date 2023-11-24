import styles from './page.module.css'
import './globals.css'
import Navbar from './ui/Navbar'
import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <img src="/images/home/static-waves.png" alt="" className="logo" />
        <img src="/images/home/logo.png" alt="" className="waves" />
      </div>
    </div>
  )
}
