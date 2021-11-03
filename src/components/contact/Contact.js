import styles from "./contact.module.css";
import Credits from "./Credits";

function Contact(){
    return (
        <footer>
            <div className={styles["contact-container"]} id="#contact">
                <p>You can contact me anytime via email or LinkedIn:</p> 
                <div id={styles["email"]}><img src="./email.png" alt="Email"/>simonica.ines@gmail.com</div>
                <div id={styles["linkedin"]}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ines-simonica-1b9222217/?fbclid=IwAR1GyPtp0iYfuV4i4Y1qS-hx4BILmal3BtuPgt5GQgi_hxyUI9fXOj97BTI"><img src="linkedin.png" alt="LinkedIn"/></a></div>
                <Credits/>
            </div>
        </footer>
    );
}

export default Contact;
