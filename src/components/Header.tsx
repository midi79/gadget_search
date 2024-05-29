import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import useCartStore from "../store/cart";

export default function Header() {
    const navigate = useNavigate();
    const { updateIsCartPopup } = useCartStore();

    function onClickCartHandler() {
        updateIsCartPopup(true);
    }

    function onClickLogoHandler() {
        navigate("/");
    }

    return (
        <header className={styles.header__main}>
            <div className={styles.header__left}>
                <img src="src/assets/icons/devices_wearables.svg" alt="wearables" onClick={onClickLogoHandler} />
                <p onClick={onClickLogoHandler}>GadgetSearch.com</p>
            </div>
            <div className={styles.header__right}>
                <button onClick={onClickCartHandler}>Cart</button>
                <p>midi279@gmail.com</p>
            </div>
        </header>
    );
}
