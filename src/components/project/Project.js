import { useReducer } from "react";
import styles from "./project.module.css";

const initialState = {activeImageIndex: 0};

function reducer(state, action){
    switch(action.type){
        case "previous": {
            if(state.activeImageIndex){
                return {activeImageIndex: state.activeImageIndex - 1}
            }
            else{
                return {activeImageIndex: action.numberOfImages - 1}
            }
        }
        case "next": return {activeImageIndex: (state.activeImageIndex + 1) % action.numberOfImages};
        default: console.log("error");
    }
}

function Project(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const NUMBER_OF_IMAGES = props.images.length;
    return (
        <div className={styles["project-container"]}>
            <h3>{props.title}</h3>
            
            <div className={styles["work-container"]}>
                {NUMBER_OF_IMAGES > 1 ? 
                    <button onClick={() => dispatch({type: "previous", numberOfImages: NUMBER_OF_IMAGES})}>{"<"}</button>
                    : null
                }
                {props.images[state.activeImageIndex]}
                {NUMBER_OF_IMAGES > 1 ? 
                    <button onClick={() => dispatch({type: "next", numberOfImages: NUMBER_OF_IMAGES})}>{">"}</button>
                    : null
                }
            </div>
            <div className={styles["description"]}>
                <h4>Description</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );    
}

export default Project;
