import {useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './componets/header/header';
import List from './componets/list/list';
import Modal from './componets/modal/modal';
import Wish from './componets/wishPage/wish';
import Basket from './componets/basketPage/basket';

const App = (props) => {
    useEffect(()=>{
        axios.get('/auto.json')
            .then(res=>{
                props.saveAuto(res.data)
            })
    }, [])
    const handleBuy = (idCandidate) => {
        props.addToBuy(idCandidate)
    }
    const handleWish = (idCandidate) => {
        props.addToWish(idCandidate)
    }
    const handleRemoveWish = (idCandidate) => {
       props.removeToBasket(idCandidate)
        localStorage.setItem('countWish', props.state.countWish);
        localStorage.setItem('wishList', JSON.stringify(props.state.wishList))
    }

    const handleRemoveBasket = (idCandidate) => {
       props.removeWish(idCandidate)
        localStorage.setItem('basketList', JSON.stringify(props.state.basketList))
        localStorage.setItem('countBuy',props.state.countBuy)
    }
    const confirmOrder = () => {
      props.confirmOrder()
        localStorage.setItem('countBuy', props.state.countBuy)
        localStorage.setItem('basketList', JSON.stringify(props.state.basketList))

    }

    const confirmAddWish = () => {
       props.confirmWish()
        localStorage.setItem('countWish', props.state.countWish);
        localStorage.setItem('wishList', JSON.stringify(props.state.wishList))
    }
    const handleBuyCancel = () =>{
       props.handelBuyCancel()
    } 
    
    const handleWishCancel = () =>{
       props.handelWishCancel()
    }
    const firstModal = {
        title : "Buy you Rolls-Royce",
        text : "BUY NOW..."
    }
    const secondModal = {
        title : "Wish list",
        text : "Confirm add to wish list"
    }
    return (
        <Fragment>
            <BrowserRouter>
                <Header 
                    countBuy = {props.state.countBuy}
                    countWish = {props.state.countWish}
                />

                <main>
                    {props.state.isBuy ?
                    <Modal
                    handleConfirm = {confirmOrder}
                    handleClickClose={handleBuyCancel}
                    title = {firstModal.title}
                    text = {firstModal.text}
                    />
                    : null}
                    
                    {props.state.isWish ?
                    <Modal
                    handleConfirm = {confirmAddWish}
                    handleClickClose={handleWishCancel}
                    title = {secondModal.title}
                    text = {secondModal.text}
                    />
                    : null}
                    <Routes>
                        <Route 
                            path='/'
                            element = {
                                <List 
                                handleBuy = {handleBuy}
                                handleWish = {handleWish}
                                handleRemoveWish= {handleRemoveWish}
                                handleRemoveBasket= {handleRemoveBasket}
                                auto={props.state.auto}
                                wishList={props.state.wishList}
                                basketList={props.state.basketList}
                                />
                            }
                        />
                        <Route path='/wishlist'
                            element = {
                                <Wish
                                    handleBuy = {handleBuy}
                                    handleWish = {handleWish}
                                    handleRemoveWish= {handleRemoveWish}
                                    handleRemoveBasket= {handleRemoveBasket}
                                    auto={props.state.auto}
                                    wishList={props.state.wishList}
                                    basketList={props.state.basketList}
                                />

                            }
                        />
                        <Route path='/basket'
                        element = {
                            <Basket
                                handleBuy = {handleBuy}
                                handleWish = {handleWish}
                                handleRemoveWish= {handleRemoveWish}
                                handleRemoveBasket= {handleRemoveBasket}
                                auto={props.state.auto}
                                wishList={props.state.wishList}
                                basketList={props.state.basketList}
                            />
                        }
                        
                        />
                    </Routes>
                    
                </main>
            </BrowserRouter>
        </Fragment>
    )
}
export default App