import {isMobile} from "../../utils/utils";
import "./Onboarding.css"
export function Onboarding(props){
    return <div className="onboarding">
        <div className="onboarding-text">{isMobile.any() ? "Управляйте роботом с помощь свайпа" : "Управляйте роботом клавишами A/D или стрелочками" }</div>
        <button disabled={props.isActive} onClick={props.startCallback}>Начать</button>
    </div>
}