import Instructions from "../instructions/Instructions";
import Ingredients from "../ingredients/Ingredients";
import Nutrition from "../nutrition/Nutrition";
import Preptime from "../preptime/Preptime";
import Title from "../title/Title";

import styles from "./Main.module.css";
import Linebreak from "../../ui/linebreak/Linebreak";

function Main() {
    return (
        <main className={styles.main}>
            <Title />
            <Preptime />
            <Ingredients />
            <Linebreak />
            <Instructions />
            <Linebreak />
            <Nutrition />
        </main>
    );
}

export default Main;
