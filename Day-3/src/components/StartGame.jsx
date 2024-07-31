import Button from "./Button";

/* eslint-disable react/prop-types */
const StartGame = ({ setStartGame }) => {
    function handleClick() {
        setStartGame((prev) => !prev);
    }
    return (
        <div className="w-screen h-screen flex items-center justify-evenly">
            <img
                src="/images/hero_dice.png"
                alt="dice_img"
                className="h-[80%]"
            />
            <div className="flex flex-col gap-5 items-end">
                <h1 className="text-6xl font-extrabold">DICE GAME</h1>
                <Button text={"Play Now"} onClick={handleClick} />
            </div>
        </div>
    );
};

export default StartGame;
