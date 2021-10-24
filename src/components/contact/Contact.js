import styles from "./contact.module.css";
import Credits from "./Credits";

function Contact(){
    return (
        <footer>
            <div className={styles["contact-container"]} id="#contact">
                <p>You can contact me anytime via email or LinkedIn:</p> 
                <p id={styles["email"]}>ines@gmail.com</p>
                <p id={styles["linkedin"]}><a href="/#">LinkedIn: <img src="" alt="LinkedIn"/></a></p>
                <Credits/>
            </div>
        </footer>
    );
}

export default Contact;
