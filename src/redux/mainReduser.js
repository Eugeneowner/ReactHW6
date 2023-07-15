const ADD_TO_BUY = 'ADD-TO-BUY'
const ADD_TO_WISH = 'ADD-TO-WISH'
const REMOVE_BASKET = 'REMOVE-BASKET '
const REMOVE_WISH = 'REMOVE-WISH'
const CONFIRM_ORDER = 'CONFIRM_ORDER'
const CONFIRM_WISH = 'CONFIRM_WISH'
const HANDEL_BUY_CANCEL = 'HANDEL_BUY_CANCEL'
const HANDEL_WISH_CANCEL = 'HANDEL_WISH_CANCEL'
const SAVE_AUTO = 'SAVE_AUTO'
const CLEAR_BASKET = 'CLEAR_BASKET'
const initialState = {
    auto: [],
    isBuy: false,
    isWish : false,
    buyCandidate: null,
    wishCandidate: null,
    basketList: JSON.parse(
        localStorage.getItem('basketList') 
    ),
    wishList: JSON.parse(
        localStorage.getItem('wishList')
    ),
    countBuy: parseInt(localStorage.getItem('countBuy')),
    countWish: parseInt(localStorage.getItem('countWish'))
}

const mainReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BUY: return ({
            ...state,
            isBuy: true,
            buyCandidate: action.idCandidate
        })
        case ADD_TO_WISH: return ({
            ...state,
            isWish: true,
            wishCandidate: action.idCandidate
        })
        case REMOVE_BASKET: return ({
            ...state,
            basketList: state.basketList.filter((id) => id !== action.idCandidate),
            countBuy: state.countBuy -1
            
        })
        case REMOVE_WISH: return ({
            ...state,
            wishList: state.wishList.filter((id) => id !== action.idCandidate),
            countWish: state.countWish -1
        })
        case CONFIRM_ORDER: return ({
            ...state,
            basketList: [
                ...state.basketList,
                state.buyCandidate 
            ],
            countBuy: state.countBuy +1,
            buyCandidate: action.idCandidate, 
            isBuy: false
        })
        case CONFIRM_WISH: return ({
            ...state,
            wishList: [
                ...state.wishList,
                state.wishCandidate 
            ],
            countWish: state.countWish + 1,
            wishCandidate: action.idCandidate, 
            isWish: false
        })
        case HANDEL_BUY_CANCEL: return ({
            ...state,
            isBuy: false,
            buyCandidate: null
        })
        case HANDEL_WISH_CANCEL: return ({
            ...state,
            isWish: false,
            wishCandidate: null
        })
        case SAVE_AUTO: return ({
            ...state,
            auto: [
                ...action.auto
            ]
        })
        case CLEAR_BASKET: return ({
            ...state,
            basketList: [],
            countBuy:0
        })
        default: return state
    }
}

export const saveAuto = (auto) => ({type: SAVE_AUTO, auto})
export const addToBuy = (idCandidate) => ({type: ADD_TO_BUY, idCandidate})
export const addToWish = (idCandidate) => ({type: ADD_TO_WISH, idCandidate})
export const removeToBasket = (idCandidate) => ({type: REMOVE_BASKET, idCandidate})
export const removeWish = (idCandidate) => ({type: REMOVE_WISH, idCandidate})
export const confirmOrder = () => ({type:CONFIRM_ORDER})
export const confirmWish = () => ({type: CONFIRM_WISH})
export const handelBuyCancel = () => ({type:HANDEL_BUY_CANCEL})
export const handelWishCancel = () => ({type: HANDEL_WISH_CANCEL})
export const clearBasket = () => ({type: CLEAR_BASKET})
/**!
 * const sum = (a,b) => {
    * return a+b
    * }
    * const sum =(a,b) => (a+b)
    ACTIONS
    ADD_TO_BUY -> IDCANDIDATE
    ADD_TO_WISH -> IDCANDIDATE
    REMOVE_WISH -> IDCANDIDATE
    REMOVE_BASKET -> IDCANDIDATE
    CONFIRM_ORDER -> NULL
    CONFIRM_WISH -> NULL
    HANDEL_WISH_CANCEL -> NULL
    HANDEL_BUY_CANCEL -> NULL

*/

export default mainReduser