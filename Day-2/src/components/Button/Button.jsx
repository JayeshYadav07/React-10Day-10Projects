/* eslint-disable react/prop-types */
import style from "./Button.module.css";
const Button = ({ is_outline, text, icon }) => {
    return (
        <button
            className={`${is_outline ? style.outline_btn : style.primary_btn}`}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button;
