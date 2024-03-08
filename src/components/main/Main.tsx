import Instructions from "../instructions/Instructions";
import Ingredients from "../ingredients/Ingredients";
import Nutrition from "../nutrition/Nutrition";
import Preptime from "../preptime/Preptime";
import Title from "../title/Title";

function Main() {
    return (
        <main>
            <Title />
            <Preptime />
            <Ingredients />
            <Instructions />
            <Nutrition />
        </main>
    );
}

export default Main;
