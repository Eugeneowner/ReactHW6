import mainReduser, {
    addToBuy,
    addToWish,
    removeToBasket,
    removeWish,
    confirmOrder,
    confirmWish,
    handelBuyCancel,
    handelWishCancel,
    clearBasket
    
    

} from "../redux/mainReduser"
const initialState = {
    auto: [],
    isBuy: false,
    isWish : false,
    buyCandidate: null,
    wishCandidate: null,
    basketList: [],
    wishList: [],
    countBuy: 0,
    countWish: 0

}
describe("Bll", () => {
    it("Check add to buy", ()=>{
        const id = 1
        const newState = mainReduser(initialState, addToBuy(id))
        expect(newState.isBuy).toBe(true)
        expect(newState.buyCandidate).toBe(id)
    })
    it("Check add to wish", ()=>{
        const id = 1
        const newState = mainReduser(initialState, addToWish(id))
        expect(newState.isWish).toBe(true)
        expect(newState.wishCandidate).toBe(id)
    })
    it("Check remove basket", ()=>{
        const id = 1
        const tempState = {
            ...initialState,
            basketList:[id],
            countBuy:1
        }
        const newState = mainReduser(tempState, removeToBasket(id))
        const isInBasket = newState.basketList.indexOf(id)
        expect(isInBasket).toBe(-1)
        expect(newState.countBuy).toBe(0)
    })

    it("Check remove wish", ()=>{
        const id = 1
        const tempState = {
            ...initialState,
            wishList:[id],
            countWish:1
        }
        const newState = mainReduser(tempState, removeWish(id))
        const isInWish = newState.wishList.indexOf(id)
        expect(isInWish).toBe(-1)
        expect(newState.countWish).toBe(0)
    })
    it("Check confirm order", () => { 
        const id = 1
        const tempState = {
            ...initialState,
            buyCandidate: id,
            isBuy: true
        }
        const newState = mainReduser(tempState, confirmOrder(id))
        const isInBasket = newState.basketList.indexOf(id)
        expect(isInBasket).not.toBe(-1)
    })
    it("Check confirm wish list", () => {
        const id = 1
        const tempState = {
            ...initialState,
            wishCandidate: id,
            isWish: true
        }
        const newState = mainReduser(tempState, confirmWish (id))
        const isInWish = newState.wishList.indexOf(id)
        expect(isInWish).not.toBe(-1)
    })

    // it("Check handel buy cancel", () => {
    //     const id = 1
    //     const newState = mainReduser(initialState, handelBuyCancel (id))
    //     expect(newState.isBuy).toBe(true)
    //     expect(newState.buyCandidate).toBe(id)
    // })
}) 


//   case ADD_TO_WISH: return ({
//             ...state,
//             isWish: true,
//             wishCandidate: action.idCandidate
            
//    it("Check add to wish", ()=>{
//         const id = 1
//         const newState = mainReduser(initialState, handelBuyCancel (id))
//         expect(newState.isWish).toBe(true)
//         expect(newState.wishCandidate).toBe(id)
//     })

