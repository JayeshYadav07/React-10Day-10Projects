/* eslint-disable react/prop-types */
const RollDice = ({ currentDice, rollDice }) => {
    
    return (
        <div className="mt-10" onClick={rollDice}>
            <img
                src={`/images/dice_${currentDice}.png`}
                className="h-[150px]"
            />
            <p className="text-center">Click on Dice to roll</p>
        </div>
    );
};

export default RollDice;
