import styles from './cartMenu.module.css'
import CartOption from '@/components/cartOption/cartOption';

const CartMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                <CartOption />
                <CartOption />
                <CartOption />
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$99,90</h2>
            </div>
        </div>
    );
}
 
export default CartMenu;