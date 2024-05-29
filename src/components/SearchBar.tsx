import { useState } from "react";
import styles from "./SearchBar.module.css";
import useCategoryStore from "../store/search";
import usePageStore from "../store/page";
import Suggestion from "./Suggestion";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../util/http";
//import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    //const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    //const [autoSearchParam, setAutoSearchParam] = useState<string>("");
    const [filteredSearchTerm, setFilteredSearchTerm] = useState<string[]>([]);

    const { data } = useQuery({
        queryKey: ["category"],
        queryFn: getCategory,
    });

    const setCurrentCategory = useCategoryStore((state: any) => state.setCategory);
    const setPage = usePageStore((state: any) => state.setPage);

    function onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const query = event.target.value.toLowerCase();
        setSearchTerm(query);

        if (query.length > 2) {
            const filteredData = data && data.length ? data.filter((item: any) => item.indexOf(query) > -1) : [];
            setFilteredSearchTerm(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function onImgClickHandler() {
        setCurrentCategory(`/${searchTerm}`);
        setPage(1);
    }

    function onInputKeyDownHandler(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            if (searchTerm === "") {
                alert("Please input a search term!");
            } else {
                setCurrentCategory(`/${searchTerm}`);
                setPage(1);
            }
        }
    }

    function onWordClickHandler(event: any) {
        setShowDropdown(false);
        setSearchTerm(event.target.innerText);
        setFilteredSearchTerm([]);
    }

    return (
        <section className={styles.searchbar}>
            <div className={styles.searchbar__wrapper}>
                <input
                    type="text"
                    className={styles.wrapper__input}
                    placeholder="Please input for search item"
                    onChange={onInputChangeHandler}
                    onKeyDown={onInputKeyDownHandler}
                    value={searchTerm}
                />
                <img src="src/assets/icons/icon-search.svg" alt="SearchBar" onClick={onImgClickHandler} />
            </div>
            {showDropdown && <Suggestion data={filteredSearchTerm} onWordClick={onWordClickHandler} />}
        </section>
    );
}
