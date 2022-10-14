import "./GameOver.css"
export function GameOver(props){

    return <div className="game-over">
        <div className="game-over-text">Ваш счёт {props.score}!</div>
        <button className="game-over-button" onClick={props.restartCallback}>Перезапустить</button>
    </div>
}