import s from './wish.module.scss' 
import ListItem from '../list/listItem'
import { Fragment, useContext, useState } from "react"
import { ViewContext } from '../../index'
import Switch from '../switch/switch'
const Wish = (props) => {
    const [viewType, setViewType] = useState(useContext(ViewContext))
    //console.log(useContext(ViewContext))
    const handleChangeView = (viewNewType) => {
        setViewType(viewNewType)
        localStorage.setItem('viewType', viewNewType)
    }
     const autoBuy = props.auto.filter(autoItem => {
        if (props.wishList.indexOf(autoItem.id) !== -1){
            return autoItem
        }
    })
        const AutoCollections = autoBuy.map(autoItem => {
        return (
            <ListItem
                key = {autoItem.id}
                handleBuy = {props.handleBuy}
                handleWish = {props.handleWish}
                handleRemoveBasket = {props.handleRemoveBasket}
                handleRemoveWish = {props.handleRemoveWish}
                id = {autoItem.id} 
                img={autoItem.img} 
                name={autoItem.name}
                price={autoItem.price}
                wishList = {props.wishList}
                basketList = {props.basketList}
            />
        )
    }) 
    return (
     <Fragment>
        <Switch
        handleChangeView = {handleChangeView}
        viewType = {viewType}
        />
         <h1 style={{textAlign:"center", display:"block", color:"#352F40"}}>Favourite list</h1>
         <div className={`${s.main_products} ${viewType === 'list' && s.main_products_columns}`}>
            {
                AutoCollections
            }
        </div>
    </Fragment>
    )
}

export default Wish