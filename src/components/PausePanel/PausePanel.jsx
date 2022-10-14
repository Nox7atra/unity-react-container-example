import "./PausePanel.css"
export function PausePanel(props){
    return <div className="pause-panel">
        <button className="pause-panel-resume-button" onClick={props.resumeCallback}>Продолжить</button>
    </div>
}