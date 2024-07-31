const Rules = () => {
    return (
        <div className="bg-red-100 p-2 rounded-lg">
            <p className="text-xl font-bold">How to play dice game</p>
            <div className="list-none flex flex-col gap-1">
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>
                    After click on dice if selected number is equal to dice
                    number you will get same point as dice
                </li>
                <li>If you get wrong guess then 2 point will be deducted</li>
            </div>
        </div>
    );
};

export default Rules;
