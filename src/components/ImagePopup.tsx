import { IUrlProps } from "../type/type";
import styles from "./ImagePopup.module.css";

export default function ImagePopup({ url, onImagePopupClick }: IUrlProps) {
    function onCloseClickHandler() {
        onImagePopupClick(false);
    }

    return (
        <div className={styles.image__popup__wrapper}>
            <div className={styles.image__popup__container}>
                <div onClick={onCloseClickHandler} style={{ cursor: "pointer" }}>
                    <img src="src/assets/icons/close.svg" alt="Close" />
                </div>
                <div className={styles.image__popup__content}>
                    <img src={url} alt="Detailed Image" />
                </div>
            </div>
        </div>
    );
}
