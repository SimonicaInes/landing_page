import styles from "./credits.module.css";

function Credits() {
    return (
        <div className={styles["credits"]}>
            <a href="https://fratiladaniel.github.io/LandingPage/" target="_blank" rel="noreferrer">©Daniel Fratila, {new Date().getFullYear()}</a>
        </div>
    )
}

export default Credits;