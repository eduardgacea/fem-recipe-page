import styles from "./Preptime.module.css";

function Preptime() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Preparation time</h2>
            <ul className={styles.list}>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Total:</span> Approximately 10 minutes
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Preparation:</span> 5 minutes
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Cooking:</span> 5 minutes
                    </span>
                </li>
            </ul>
        </section>
    );
}

export default Preptime;
