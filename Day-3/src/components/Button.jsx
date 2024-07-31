/* eslint-disable react/prop-types */
const Button = ({ text, outline, ...rest }) => {
    return (
        <button
            {...rest}
            className={
                outline
                    ? "border border-black text-black px-5 py-2 rounded-md"
                    : "bg-black text-white px-5 py-2 rounded-md"
            }
        >
            {text}
        </button>
    );
};

export default Button;
