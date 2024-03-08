import styles from "./Ingredients.module.css";

function Ingredients() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Ingredients</h2>
            <ul className={styles.list}>
                <li>
                    <span className={styles.listItemContent}>2-3 large eggs</span>
                </li>
                <li>
                    <span className={styles.listItemContent}>Salt, to taste</span>
                </li>
                <li>
                    <span className={styles.listItemContent}>Pepper, to taste</span>
                </li>
                <li>
                    <span className={styles.listItemContent}>1 tablespoon of butter</span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        Optional fillings: cheese, diced vegetables, cooked meats, herbs
                    </span>
                </li>
            </ul>
        </section>
    );
}

export default Ingredients;
