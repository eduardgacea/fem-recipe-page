import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <img src="image-omelette.jpeg" alt="presentation image" />
        </header>
    );
}

export default Header;
