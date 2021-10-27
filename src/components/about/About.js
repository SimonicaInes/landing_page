import styles from "./about.module.css";

function About(){
    return (
        <div className={styles["about-me-container"]}>
            {/* <img src="./bannervid.gif" alt=""/> */}
            {/* <video width="100%" height="100%" controls> */}
                {/* <source src="./bannervid.mp4" type="video/mp4"/>
            </video> */}

            <img src="./ines.png" alt=""/>
            <div className={styles["about-me-desc"]}>about me</div>
        </div>
    )
}

export default About;
