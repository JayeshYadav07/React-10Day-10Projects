import { useState } from "react";
import SelectNumber from "./SelectNumber";
import Button from "./Button";
import Score from "./Score";
import RollDice from "./RollDice";
import Rules from "./Rules";

const PlayGame = () => {
    const [choice, setChoice] = useState(0);
    const [score, setScore] = useState(0);
    const [showRules, setShowRules] = useState(false);
    const [currentDice, setCurrentDice] = useState(1);
    function rollDice() {
        if (choice == 0) {
            alert("You have not selected any number");
            return;
        }
        const random = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(random);

        if (random == choice) setScore((prev) => prev + random);
        else setScore((prev) => prev - 2);
    }
    return (
        <div className="w-[90%] p-10 mx-auto">
            <div className="flex justify-between">
                <Score score={score} />
                <SelectNumber choice={choice} setChoice={setChoice} />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                <RollDice currentDice={currentDice} rollDice={rollDice} />
                <div className="flex flex-col max-w-max gap-5">
                    <Button
                        text={"Reset Score"}
                        outline={true}
                        onClick={() => setScore(0)}
                    />
                    <Button
                        text={showRules ? "Hide Rules" : "Show Rules"}
                        onClick={() => setShowRules(!showRules)}
                    />
                </div>
                {showRules && <Rules />}
            </div>
        </div>
    );
};

export default PlayGame;
