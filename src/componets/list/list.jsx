import { Fragment } from 'react'
import s from './list.module.scss'
import ListItem from './listItem'
import Switch from '../switch/switch'

import { useContext,useState } from "react"
import { ViewContext } from "../../index"
const List = (props) => {
    const [viewType, setViewType] = useState(useContext(ViewContext))
    //console.log(useContext(ViewContext))
    const handleChangeView = (viewNewType) => {
        setViewType(viewNewType)
        localStorage.setItem('viewType', viewNewType)
    }
    let AutoCollections = []
    if (props.auto){
     AutoCollections = props.auto.map(autoItem => {
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
    }) } 
    return (
        <Fragment>
            <Switch
                handleChangeView={handleChangeView}
                viewType = {viewType}
            />
            <div className={`${s.main_products} ${viewType === 'list' && s.main_products_columns}`}>
                {AutoCollections}
            </div>
        </Fragment>
        
    )
}

export default List