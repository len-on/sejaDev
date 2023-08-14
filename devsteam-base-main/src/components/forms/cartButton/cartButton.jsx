import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cartState } from '@/atoms/cart';
import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu';

const CartButton = () => {
    const [open, setOpen] = useState()
    const cart = useRecoilValue(cartState)
    return (
        <div className={styles.cartButton} onClick={() => {setOpen(!open)}}>
            <BsCart4
                size={40} 
            />
            {cart.length !== 0 ? <div className={styles.quantity}>{cart.length}</div> : null}
                
            
            {open && <CartMenu />}
        </div>
    )
}
 
export default CartButton;