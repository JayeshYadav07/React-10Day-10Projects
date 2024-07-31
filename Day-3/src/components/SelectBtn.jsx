/* eslint-disable react/prop-types */
const SelectBtn = ({ number, choice, setChoice }) => {
    function handleClick() {
        setChoice(number);
    }
    return (
        <div
            onClick={handleClick}
            className={
                choice == number
                    ? "border-2 bg-black text-white border-black h-[60px] w-[60px] flex justify-center items-center cursor-pointer"
                    : "border-2 border-black h-[60px] w-[60px] flex justify-center items-center cursor-pointer hover:bg-gray-100"
            }
        >
            {number}
        </div>
    );
};

export default SelectBtn;
