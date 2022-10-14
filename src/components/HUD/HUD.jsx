import "./HUD.css"

export function HUD(props){
    return <div className="hud">
        <div className="hud-score">Счёт {props.score}</div>
        <button className="hud-pause-button" onClick={props.pauseCallback}>Пауза</button>
    </div>
}