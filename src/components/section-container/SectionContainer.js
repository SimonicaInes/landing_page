import styles from "./section-container.module.css";

function SectionContainer(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

export default SectionContainer;
