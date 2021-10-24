import styles from "./experience.module.css";

function Experience(props){
    return (
        <div className={styles["grid"]}>
            {props.names.map((value) => {return <div>{value}</div>})}
        </div>
    );
}

export default Experience;
