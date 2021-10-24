import styles from "./navbar.module.css";

function Navbar(){
    const scroll = () => document.getElementById('#contact').scrollIntoView({block: "end", behavior: "smooth"});
    
    return (
        <nav>
            <ul>
                <li><a href="/#">HOME</a></li>
                <li><a href="/#">CV</a></li>
                <li><a href="/#contact" onClick={scroll}>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
