import styles from "./navbar.module.css";

function Navbar(){
    const scroll = (location) => document.getElementById(`#${location}`).scrollIntoView({block: "start", behavior: "smooth"});
    
    return (
        <nav>
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1wGXj99yfBwQBjwJjfzVR6yMsSe-KAhFT/view?fbclid=IwAR1OvZYHrKOnPkuZxo9S9VtafdaGO2Kr2cLUj8J71F96rBD920TRLcodEPs">CV</a></li>
                <li><a href="#projects" onClick={() => scroll("projects")}>PROJECTS</a></li>
                <li><a href="#contact" onClick={() => scroll("contact")}>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
