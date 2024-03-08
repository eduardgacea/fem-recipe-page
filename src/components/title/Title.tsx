import styles from "./Title.module.css";

function Title() {
    return (
        <section>
            <h1 className={styles.title}>Simple Omelette Recipe</h1>
            <p className={styles.description}>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
                perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </section>
    );
}

export default Title;
