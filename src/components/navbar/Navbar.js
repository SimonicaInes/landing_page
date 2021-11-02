import styles from "./navbar.module.css";

function Navbar(){
    const scroll = (location) => document.getElementById(`#${location}`).scrollIntoView({block: "start", behavior: "smooth"});
    
    return (
        <nav>
            <ul>
                <li><a href="/#">CV</a></li>
                <li><a href="/#projects" onClick={() => scroll("projects")}>PROJECTS</a></li>
                <li><a href="/#contact" onClick={() => scroll("contact")}>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
