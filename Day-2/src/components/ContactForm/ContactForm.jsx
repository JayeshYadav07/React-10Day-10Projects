import { useState } from "react";
import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { FaRegMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }
    return (
        <div className={`${style.container}`}>
            <div className={`${style.form_container}`}>
                <div className={`${style.btn_container}`}>
                    <Button text={"VIA SUPPORT CHAT"} icon={<FaRegMessage />} />
                    <Button text={"VIA CALL"} icon={<IoCall />} />
                </div>
                <Button
                    is_outline={true}
                    text={"VIA EMAIL FORM"}
                    icon={<FaRegMessage />}
                />
                <form
                    onSubmit={handleSubmit}
                    className={`${style.form_section}`}
                >
                    <div className={`${style.form_controller}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={`${style.form_controller}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={`${style.form_controller}`}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={4}></textarea>
                    </div>
                    <Button text={"Submit"} />
                </form>
                <div>
                    {name} {email} {text}
                </div>
            </div>
            <div>
                <img src="/images/Service.svg" alt="" />
            </div>
        </div>
    );
};

export default ContactForm;
