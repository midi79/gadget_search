import { IProductProps } from "../type/type";
import styles from "./Product.module.css";

export default function Product({ data, handlePopup, setProduct }: IProductProps) {
    function onProductClickHandler() {
        handlePopup(true);
        setProduct(data);
    }

    return (
        <div className={styles.product__main} onClick={onProductClickHandler}>
            <img src={data.thumbnail} alt={data.title} />
            <p key={data.id}>{data.title}</p>
        </div>
    );
}
