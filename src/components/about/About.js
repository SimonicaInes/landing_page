import styles from "./about.module.css";

function About(){
    return (
        <div className={styles["about-me-container"]}>
            <img src="./ines.png" alt=""/>
            <div className={styles["about-me-desc"]}>
                <p id={styles["p1"]}>Hello!</p>
                <p id={styles["p2"]}>My name is Ines Simonica. I am 24 years old, I am a 3D designer and video games enthustiast. My hobbies are painting, plant growing and reading.</p>
            </div>
        </div>
    )
}

export default About;
