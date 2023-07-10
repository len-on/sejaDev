import Logo from '@/components/logo/logo'
import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

export default function Navbar () {
    return (
        <div className={styles.navbar}>
            <Logo />
            <input />
            <BsCart4 size={40} />
        </div>
    )
}