/* eslint-disable react/prop-types */
const Score = ({ score }) => {
    return (
        <div>
            <h1 className="text-7xl font-extrabold text-center">{score}</h1>
            <h2 className="text-xl font-bold">Total Score</h2>
        </div>
    );
};

export default Score;
