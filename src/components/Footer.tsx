import { useEffect, useState } from "react";
import usePageStore from "../store/page";
import styles from "./Footer.module.css";
import useCategoryStore from "../store/search";

export default function Footer() {
    const [step, setStep] = useState(0);

    const page: number = usePageStore((state: any) => state.page);
    const setPage = usePageStore((state: any) => state.setPage);
    const totalProductCount: number = usePageStore((state: any) => state.totalProductCount);
    const category: string = useCategoryStore((state: any) => state.category);

    useEffect(() => {
        setStep(0);
    }, [category]);

    const pageArray: number[] = Array.from({ length: Math.floor(totalProductCount / 10) + 1 }, (_, i) => i + 1);
    const arrayLength = pageArray.length;
    const divideCount: number = Math.floor(arrayLength / 10) + Math.floor(arrayLength % 10) > 0 ? 1 : 0;
    const resArray: Array<number>[] = [];

    for (let i = 0; i <= divideCount; i++) {
        resArray.push(pageArray.splice(0, 10));
    }

    const onLeftClickHandler = () => {
        console.log("Step in onLeftClickHandler : " + step);
        if (step === 0) return;
        else {
            setStep(step - 1);
            setPage(resArray[step - 1][0]);
        }
    };

    const onRightClickHandler = () => {
        // console.log("Step onRightClickHandler : " + step);
        // console.log("resArray[step] : " + resArray[step]);
        // console.log("resArray[step + 1] : " + resArray[step + 1]);
        if (resArray[step + 1] === undefined || resArray[step + 1].length < 1) {
            alert("No more page!");
            return;
        } else {
            setStep(step + 1);
            setPage(resArray[step + 1][0]);
        }
    };

    const onPageClickHandler = (pageNumber: number) => {
        console.log("pageNumber", pageNumber);
        console.log("step", step);
        setPage(pageNumber);
    };

    console.log("Step in Footer : " + step);

    return (
        <footer className={styles.footer__wrapper}>
            <span className={styles.footer__arrow} onClick={onLeftClickHandler}>
                <img src="src/assets/icons/arrow_circle_left.svg" alt="Left Arrow" />
            </span>

            {resArray[step] &&
                resArray[step].map((item: number, index: number) => {
                    if (item < 11) {
                        return (
                            <span
                                className={index === page - 1 ? styles.footer__number__active : styles.footer__number}
                                key={item}
                                onClick={() => onPageClickHandler(item)}
                            >
                                {item}
                            </span>
                        );
                    } else {
                        return (
                            <span
                                className={
                                    index === page - 1 - step * 10
                                        ? styles.footer__number__active
                                        : styles.footer__number
                                }
                                key={item}
                                onClick={() => onPageClickHandler(item)}
                            >
                                {item}
                            </span>
                        );
                    }
                })}

            <span className={styles.footer__arrow} onClick={onRightClickHandler}>
                <img src="src/assets/icons/arrow_circle_right.svg" alt="Right Arrow" />
            </span>
        </footer>
    );
}
