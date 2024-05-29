import styles from "./Suggestion.module.css";

export default function Suggestion({ data, onWordClick }: any) {
    console.log("Suggestion data", data);
    return (
        <div className={styles.suggest__wrapper}>
            {data && data.length
                ? data.map((word: any, index: number) => (
                      <li className={styles.suggest__wrapper__category} key={index} onClick={onWordClick}>
                          {word}
                      </li>
                  ))
                : null}
        </div>
    );
}
