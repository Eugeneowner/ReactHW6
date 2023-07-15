import Buttons from "../componets/header/buttons/buttons";
import {render, screen} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
describe("Header buttons component", () => {
    it("Check render button basket", () => {
        const countBuy = 20
        render(
            <BrowserRouter>
             <Buttons countBuy={countBuy}/>
            </BrowserRouter>
            
            )
        expect(screen.getByText(countBuy)).toBeInTheDocument();

    })
    it("Create snapshot button basket", () => {
        const countBuy = 20
        const btn = render(
            <BrowserRouter>
             <Buttons countBuy={countBuy}/>
            </BrowserRouter>
        )
            expect(btn).toMatchSnapshot()
    })
    it("Check render button countWish", () => {
        const countWish = 30 
        render(
            <BrowserRouter>
                <Buttons countWish={countWish}/>
            </BrowserRouter>
        )
        expect(screen.getByText(countWish)).toBeInTheDocument();
    })
    it("Create snapshot count wish", () => {
        const countWish = 30
        const btnWish = render(
            <BrowserRouter>
                <Buttons countWish={countWish}/>
            </BrowserRouter>
        )
        expect(btnWish).toMatchSnapshot();
    })
    })
