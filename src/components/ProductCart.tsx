import useCartStore from "../store/cart";
import { IProductCartProps } from "../type/type";
import styles from "./ProductCart.module.css";
import ProductCartItem from "./ProductCartItem";

export default function ProductCart({ handlePopup }: IProductCartProps) {
    const { cartItems } = useCartStore();

    return (
        <div className={styles.cart__popup__wrapper}>
            <div className={styles.cart__popup__container}>
                <div className={styles.cart__popup__title}>
                    <span>Cart</span>
                    <div className={styles.popup__title__close} onClick={() => handlePopup(false)}>
                        <img src="src/assets/icons/close.svg" alt="Close" />
                    </div>
                </div>
                <div className={styles.cart__popup__content}>
                    {cartItems && cartItems.length < 1 && (
                        <div className={styles.cart_popup_noItem}>No item in cart</div>
                    )}
                    {cartItems?.map((item, index) => (
                        <ProductCartItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
