import styles from './css/page.module.css'
import './css/page.module.css'
import Navbar from './ui/Navbar'
import 'tailwindcss/tailwind.css'
import './css/globals.css'


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
