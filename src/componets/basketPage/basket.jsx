import s from './basket.module.scss'
import ListItem from '../list/listItem';
import Form from '../orderForm/orderForm';
import { Fragment,useContext, useState } from "react";

import { ViewContext } from '../../index';
import Switch from '../switch/switch';

const Basket = (props) => {
    const [viewType, setViewType] = useState(useContext(ViewContext))
    //console.log(useContext(ViewContext))
    const handleChangeView = (viewNewType) => {
        setViewType(viewNewType)
        localStorage.setItem('viewType', viewNewType)
    }
    const autoBuy = props.auto.filter(autoItem => {
        if (props.basketList.indexOf(autoItem.id) !== -1){
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
         <h1 style={{textAlign:"center", display:"block", color:"#352F40"}}>Basket</h1>
        <div className={`${s.main_products} ${viewType === 'list' && s.main_products_columns}`}>
            {
                AutoCollections
            }
        </div>
        <Form 
            auto = {props.auto}
            basketList = {props.basketList}
        />
    </Fragment>
    )
}
export  default Basket