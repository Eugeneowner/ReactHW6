
import s from "./switch.module.scss"
import SwitchBtn from "./switchBtn"
const Switch = (props) => {
    
    return <div className={s.switch} >
            <SwitchBtn 
                handleClick = {props.handleChangeView}
                text="List"
                activeBtn = {props.viewType === 'list' ? s.switch_btn_active : null}
                />
            <SwitchBtn 
                handleClick = {props.handleChangeView}
                text="Table"
                activeBtn = {props.viewType === 'table' ? s.switch_btn_active : null}
            />
          </div>
}
export default Switch