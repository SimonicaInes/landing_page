import styles from "./proficiency.module.css";
import ProficiencyBar from "./ProficiencyBar";
import {SizeMe} from "react-sizeme";

const LEVEL_BREAK_WIDTH = 350;
const LANGUAGE_BREAK_WIDTH = 500;

function ProficiencyLevels(props){
    return (
        <SizeMe>{({size}) => { 
            return <div className={styles["language-section-container"]}>        
                <div className={size.width < LEVEL_BREAK_WIDTH ? styles["language-bar-legend"] : styles["language-bar-legend-wide"]}>
                    {props.levels.map((element, index) => {
                        return (
                            <span key={index}>
                                {size.width < LEVEL_BREAK_WIDTH ? element.alternative : element.level}
                            </span>
                        );
                    })}
                </div>      

                {props.proficiencies.map((element, index) => {
                    return (
                        <div key={index} className={styles["grid-language"]} style={{gridRow: index + 2}}>
                            {size.width < LANGUAGE_BREAK_WIDTH? element.alternative : element.skill} 
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
            }}
        </SizeMe>
    );
}

export default ProficiencyLevels;
