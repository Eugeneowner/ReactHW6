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
    it("Check render button countWish", () => {
        const countWish = 30 
        render(
            <BrowserRouter>
                <Buttons countWish={countWish}/>
            </BrowserRouter>
        )
        expect(screen.getByText(countWish)).toBeInTheDocument();
    })
    })
