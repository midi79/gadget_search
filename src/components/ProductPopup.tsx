import { useEffect, useState } from "react";
import { IPopupProps } from "../type/type";
import styles from "./ProductPopup.module.css";
import ImagePopup from "./ImagePopup";
import useCartStore from "../store/cart";

export default function ProductPopup({ data, handlePopup }: IPopupProps) {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImageUrl, setCurrentImageUrl] = useState<string>("");
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const [productQuantity, setProductQuantity] = useState(0);

    const { getItemFromCart, addItemToCart, increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();

    function onCloseClickHandler() {
        handlePopup(false);
    }

    function onBackClickHandler() {
        setCurrentSlide(currentSlide === 0 ? imageUrls.length - 1 : currentSlide - 1);
    }

    function onForwardClickHandler() {
        setCurrentSlide(currentSlide === imageUrls.length - 1 ? 0 : currentSlide + 1);
    }

    function onDetailPopupHandler(target: string) {
        setCurrentImageUrl(target);
        setIsPopup(true);
    }

    function addToCart() {
        if (productQuantity === 0) {
            addItemToCart({ ...data, quantity: 1 });
        } else {
            increaseQuantity(data.id);
        }

        const product = getItemFromCart(data.id);
        if (product) {
            setProductQuantity(product.quantity);
        }
    }

    function removeFromCart() {
        if (productQuantity === 1) {
            removeItemFromCart(data.id);
        } else if (productQuantity !== 0) {
            decreaseQuantity(data.id);
        }

        const product = getItemFromCart(data.id);
        if (product) {
            setProductQuantity(product.quantity);
        } else {
            setProductQuantity(0);
        }
    }

    useEffect(() => {
        const product = getItemFromCart(data.id);
        if (product) {
            setProductQuantity(product.quantity);
        }
        setImageUrls(data.images);
    }, [data]);

    return (
        <div className={styles.popup__wrapper}>
            <div className={styles.popup__container}>
                <div className={styles.popup__title}>
                    <div>{data.title}</div>
                    <div className={styles.popup__title__close} onClick={onCloseClickHandler}>
                        <img src="src/assets/icons/close.svg" alt="Close" />
                    </div>
                </div>
                <div className={styles.popup__img}>
                    {imageUrls.length > 1 && (
                        <img
                            src="src/assets/icons/arrow_back.svg"
                            alt="Arrow Back"
                            onClick={onBackClickHandler}
                            className={styles.popup__img__arrow}
                        />
                    )}
                    {imageUrls &&
                        imageUrls.map((item, index) => (
                            <img
                                src={item}
                                alt={item}
                                className={
                                    currentSlide === index
                                        ? styles.popup__img__content
                                        : styles.popup__img__content__hidden
                                }
                                onClick={() => onDetailPopupHandler(item)}
                            />
                        ))}

                    {imageUrls.length > 1 && (
                        <img
                            src="src/assets/icons/arrow_forward.svg"
                            alt="Arrow Forward"
                            onClick={onForwardClickHandler}
                            className={styles.popup__img__arrow}
                        />
                    )}
                </div>
                <div className={styles.popup__detail}>
                    <div className={styles.popup__desc}>{data.description}</div>
                    <div className={styles.popup__price}>
                        <span>Price : </span>
                        <span>${data.price}</span>
                    </div>
                    <div className={styles.popup__rating}>
                        <span>Rating : </span>
                        <span>{data.rating}</span>
                    </div>
                    <div className={styles.popup__count}>
                        <span onClick={removeFromCart}>
                            <img src="src/assets/icons/remove.svg" alt="Add" />
                        </span>
                        <span>{productQuantity}</span>
                        <span onClick={addToCart}>
                            <img src="src/assets/icons/add.svg" alt="Remove" />
                        </span>
                    </div>
                </div>
                {isPopup && <ImagePopup url={currentImageUrl} onImagePopupClick={setIsPopup} />}
            </div>
        </div>
    );
}
