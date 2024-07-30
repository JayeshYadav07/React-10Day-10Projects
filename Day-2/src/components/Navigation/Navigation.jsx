import styles from "./Navigation.module.css";
const Navigation = () => {
    return (
        <nav className={`container ${styles.navigation}`}>
            <img src="/images/logo.png" alt="logo" />
            <div>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </div>
        </nav>
    );
};

export default Navigation;
