import "./FloatingText.css"

const width = 300;
const height = 50;
export function FloatingText(props){
    return <div style={{
        width: width,
        height: height,
        left:`calc(${(1 -props.x) * 100}vw - ${width/2}px)`,
        top:`calc(${(1 - props.y) * 100}vh - ${height/2}px)`
    }} className="floating-text">
        {props.text}
    </div>
}