/* eslint-disable react/prop-types */
import SelectBtn from "./SelectBtn";
const SelectNumber = ({ choice, setChoice }) => {
    return (
        <div className="flex flex-col gap-5 items-end">
            <div className="flex gap-10">
                <SelectBtn choice={choice} setChoice={setChoice} number={1} />
                <SelectBtn choice={choice} setChoice={setChoice} number={2} />
                <SelectBtn choice={choice} setChoice={setChoice} number={3} />
                <SelectBtn choice={choice} setChoice={setChoice} number={4} />
                <SelectBtn choice={choice} setChoice={setChoice} number={5} />
                <SelectBtn choice={choice} setChoice={setChoice} number={6} />
            </div>
            <div className="text-xl font-bold ">Select Number</div>
        </div>
    );
};

export default SelectNumber;
