import Logo from '@/components/logo/logo'
import styles from './navbar.module.css'
import CartButton from '@/components/forms/cartButton/cartButton'
import Input from '@/components/forms/input/input'


export default function Navbar ({ cart, onRemove }) {
    return (
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
            <Input type="text" placeholder="Buscar" fullwidth/>
            </div>
            <CartButton 
                cart={cart}
                onRemove={onRemove}
            />
        </div>
    )
}