import { IProduct } from "../type/type";
import { getProduct } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import Header from "./Header";
import styles from "./MainPage.module.css";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";
import useCategoryStore from "../store/search";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import usePageStore from "../store/page";
import ProductPopup from "./ProductPopup";
import ProductCart from "./ProductCart";
import useCartStore from "../store/cart";

export default function MainPage() {
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const [popupProduct, setPopupProduct] = useState<IProduct>();

    const category: string = useCategoryStore((state: any) => state.category);
    const page: number = usePageStore((state: any) => state.page);
    const setTotalProductCount = usePageStore((state: any) => state.setTotalProductCount);
    const { isCartPopup, updateIsCartPopup } = useCartStore();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products", { searchItem: category, pageNum: page }],
        queryFn: () => getProduct({ category, page }),
    });

    useEffect(() => {
        if (data && data.total) {
            setTotalProductCount(data.total);
        }
    }, [data]);

    return (
        <div>
            <Header />
            <Navigator />
            <section className={styles.content__wrapper}>
                <p className={styles.content__wrapper__desc__top}>Welcome to GadgetSearch.com</p>
                <p className={styles.content__wrapper__desc__bottom}>Find all your stuff!</p>
                <SearchBar />
            </section>
            <main className={styles.main__wrapper}>
                {isError && <div>Something wrong! {error.message}</div>}
                {isLoading && <div>Loading data....</div>}
                {!isLoading &&
                    data.products &&
                    data.products.length > 0 &&
                    data.products.map((item: IProduct) => (
                        <Product data={item} key={item.id} handlePopup={setIsPopup} setProduct={setPopupProduct} />
                    ))}
            </main>
            <Footer />
            {isPopup && popupProduct && <ProductPopup data={popupProduct} handlePopup={setIsPopup} />}
            {isCartPopup && <ProductCart handlePopup={updateIsCartPopup} />}
        </div>
    );
}
