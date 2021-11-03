import styles from "./proficiency.module.css";
import ProficiencyBar from "./ProficiencyBar";

function ProficiencyLevels(props){
    return (
        <div className={styles["language-section-container"]}>        
            <div className={styles["language-bar-legend-wide"]}>
                {props.levels.map((element, index) => {
                    return (
                        <span key={index}>
                            {element.level}
                        </span>
                    );
                })}
            </div>      

            {props.proficiencies.map((element, index) => {
                return (
                    <div key={index} className={styles["grid-language"]} style={{gridRow: index + 2}}>
                        {element.skill} 
                    </div>
                );
            })}

            {props.proficiencies.map((element, index) => {
                return (
                    <div key={index} className={styles["grid-proficiency"]} style={{gridRow: index + 2}}>
                        <ProficiencyBar proficiencyPercentage={element.proficiency}/> 
                    </div>
                );
            })}
        </div>
    );
}

export default ProficiencyLevels;
