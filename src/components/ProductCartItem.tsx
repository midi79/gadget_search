import useCartStore from "../store/cart";
import { ICartPopupProductProps } from "../type/type";
import styles from "./ProductCartItem.module.css";

export default function ProductCartItem({ item }: ICartPopupProductProps) {
    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();

    function subtractFromCart() {
        if (item.quantity !== 0) {
            decreaseQuantity(item.id);
        }
    }

    function addToCart() {
        increaseQuantity(item.id);
    }

    function removeFromCart() {
        removeItemFromCart(item.id);
    }

    return (
        <div className={styles.cart__item__wrapper}>
            <div className={styles.cart__item__image}>
                <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className={styles.cart__item__content}>
                <div className={styles.cart__item__content__left}>
                    <div className={styles.cart__item__title}>{item.title}</div>
                    <div className={styles.cart__item__price}>Price : ${item.price}</div>
                    <div className={styles.cart__item__price}>
                        Total Price : ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
                <div className={styles.cart__item__content__right}>
                    <div className={styles.cart__item__count}>
                        <span onClick={subtractFromCart}>
                            <img src="src/assets/icons/remove.svg" alt="Add" />
                        </span>
                        <span>{item.quantity}</span>
                        <span onClick={addToCart}>
                            <img src="src/assets/icons/add.svg" alt="Remove" />
                        </span>
                    </div>
                    <div className={styles.cart__item__remove}>
                        <button onClick={removeFromCart}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
