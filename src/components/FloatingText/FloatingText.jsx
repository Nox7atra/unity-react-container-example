import "./FloatingText.css"

const width = 100;
const height = 50;
export function FloatingText(props){
    return <div style={{
        width: width,
        height: height,
        left:`calc(${props.x * 100}vw - ${width/2}px)`,
        top:`calc(${props.y * 100}vh - ${height/2}px)`
    }} className="floating-text">
        {props.text}
    </div>
}