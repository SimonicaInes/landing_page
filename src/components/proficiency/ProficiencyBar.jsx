import styles from "./proficiency.module.css";

function ProficiencyBar({proficiencyPercentage}){
    return (
        <div className={styles["proficiency-bar"]} style={{width: proficiencyPercentage}}>
        </div>
    );
}

export default ProficiencyBar;
