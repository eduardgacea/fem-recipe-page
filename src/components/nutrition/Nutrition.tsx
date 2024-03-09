import Linebreak from "../../ui/linebreak/Linebreak";
import styles from "./Nutrition.module.css";

function Nutrition() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Nutrition</h2>
            <p className={styles.description}>
                The table below shows nutritional values per serving without the additional fillings.
            </p>
            <ul className={styles.list}>
                <li>
                    <div className={styles.listItemName}>Calories</div>
                    <div className={styles.listItemValue}>277kcal</div>
                </li>
                <li>
                    <Linebreak />
                </li>
                <li>
                    <div className={styles.listItemName}>Carbs</div>
                    <div className={styles.listItemValue}>0g</div>
                </li>
                <li>
                    <Linebreak />
                </li>
                <li>
                    <div className={styles.listItemName}>Protein</div>
                    <div className={styles.listItemValue}>20g</div>
                </li>
                <li>
                    <Linebreak />
                </li>
                <li>
                    <div className={styles.listItemName}>Fat</div>
                    <div className={styles.listItemValue}>22g</div>
                </li>
            </ul>
        </section>
    );
}

export default Nutrition;
