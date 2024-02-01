import GroceriesList from "./GroceriesList"
import Checkout from "./Checkout"
import CartSummary from './CartSummary'
import { selectIsOpen } from "../state/slice/PersonalDetailsSlice"
import { useAppSelector } from "../state/store"
import { Grid } from "@mui/material"



export default function GroceriesView(){

    const isOpen = useAppSelector(selectIsOpen)

    return (
        <div style={{overflow:"auto"}}>
            <GroceriesList/>
            {isOpen && <Checkout/>}
            <CartSummary/>
        </div>
    )
}