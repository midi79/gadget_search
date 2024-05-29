import { NavLink, useLocation } from "react-router-dom";
import { navData } from "../data/navigation";
import styles from "./Navigator.module.css";
import useCategoryStore from "../store/search";
import { useEffect } from "react";
import usePageStore from "../store/page";

export default function Navigator() {
    const currentCategory = useLocation();
    const setCurrentCategory = useCategoryStore((state: any) => state.setCategory);
    const setPage = usePageStore((state: any) => state.setPage);

    useEffect(() => {
        setCurrentCategory(currentCategory.pathname);
        setPage(1);
    }, [currentCategory]);

    return (
        <nav className={styles.nav__wrapper}>
            {navData.map((item) => (
                <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? styles.nav__menu__active : styles.nav__menu)}
                    key={item.id}
                >
                    {item.title}
                </NavLink>
            ))}
        </nav>
    );
}
