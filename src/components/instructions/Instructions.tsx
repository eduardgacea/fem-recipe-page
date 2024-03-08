import styles from "./Instructions.module.css";

function Instructions() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Instructions</h2>
            <ol className={styles.list}>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they
                        are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt
                        the pan to ensure the eggs evenly coat the surface.
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still
                        slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold
                        it over the fillings. Let it cook for another minute, then slide it onto a plate.
                    </span>
                </li>
                <li>
                    <span className={styles.listItemContent}>
                        <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                    </span>
                </li>
            </ol>
        </section>
    );
}

export default Instructions;
