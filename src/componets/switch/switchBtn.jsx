import s from "./switch.module.scss"
const SwitchBtn = (props) => {
    return(
        <button
        onClick={()=>{props.handleClick(props.text.toLowerCase())}} 
        className={`${s.switch_btn} ${props.activeBtn}`}>
            {props.text}
        </button>
    )
}

export default SwitchBtn