// import CartSummary from "./Checkout"
import { useState } from "react"
import { TextField , Grid, Box, Button, ButtonGroup} from "@mui/material"
import { useAppSelector, useAppDispatch} from "../state/store";
// import ShoppingCartSlice from "../state/slice/ShoppingCartSlice"
import {searchInput, onchangeInputReducer, addToCart, addToCategory} from '../state/slice/ShoppingCartSlice'
import { selectIsOpen } from "../state/slice/PersonalDetailsSlice"
// import  '../../src/css/styles.scss'
import "../css/styles.css"

export default function GroceriesList(){
    const isOpen = useAppSelector(selectIsOpen)

    const dispatch = useAppDispatch()
    const searchValue = useAppDispatch(searchInput)
    const [seleceted, setSelected] = useState(0)
    const [categoryType, setCategoryType] = useState("")
    const [searchVal, setSearchVal] = useState("")

    console.log(seleceted)
    


    function onchangeInput(value){
        setSearchVal(value)
    }


    // const[isPaymentOpen, setIsPaymentOpen] = useState(false)
    function changeselectedCategory (e, number, type){
        console.log("changeselectedCategory", number)
        setSelected(number)
        setCategoryType(type)
    }

    function add(){
        console.log("add", "categoryType:", categoryType,"searchVal:", searchVal )
        dispatch(addToCart())
        dispatch(addToCategory({type:categoryType, value:searchVal}))
    }

    return (
        <Box direction="rtl" className={isOpen? "inputsopen":"inputs"}
        // style={{ width: isOpen? "80%":"100%", justifyContent:isOpen?"start":"center"}}
            // style={{margin:"auto", alignItems:"center",display:"flex", flexDirection:"column"}}
        >
            {/* <TextField/> */}
            {/* Groceries List */}
            <Grid 
            container 
            spacing={2} 
            rowSpacing={4}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
            sx={{   
                margin: 'auto',
                maxWidth: 1100,
                flexGrow: 1,
                }}>
                <Grid item xs={12} md={12} style={{margin:"auto", alignItems: isOpen? "end": "center",display:"flex", flexDirection:"column", marginBottom:"20px"}}>
                    <TextField
                        dir="rtl"
                        type="text"
                        value={searchVal}
                        id='document_id'
                        label={"הוסף פריט לעגלה"}
                        onChange={(e) => onchangeInput(e.target.value)}
                        // onChange={(e) => dispatch(onchangeInputReducer({type:"UPDATE_SEARCH", value:e.currentTarget.value}))}
                        sx={{
                            "& label": {
                                left: "unset",
                                right: "1.75rem",
                                transformOrigin: "right",
                                fontSize: "0.8rem",
                            },
                            "& legend": {
                                textAlign: "right",
                                fontSize: "0.6rem",
                            },
                        }}/>
                </Grid>
            </Grid>
            <Grid>
                <h3 className="inputs">אנא בחר את קטגוריית המוצר</h3>
                {/* <Grid style={{justifyContent:"center"}}>אנא בחר את קטגוריית המוצר</Grid> */}
                <ButtonGroup >
                    <Button onClick={(e) =>changeselectedCategory(e, 1, "FRUITS_AND_VEGGIES")} style={{backgroundColor: seleceted===1? "#e3f2fd":"white"}} >ירקות ופירות</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 2, "DAIRY")} style={{backgroundColor: seleceted===2? "#e3f2fd":"white"}} >מוצרי חלב</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 3, "MEAT_AND_FISH")} style={{backgroundColor: seleceted===3? "#e3f2fd":"white"}} >בשר ודגים</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 4, "CLEANING_TOOLS")} style={{backgroundColor: seleceted===4? "#e3f2fd":"white"}} >מוצרי ניקיון</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 5, "PASTRIES")} style={{backgroundColor: seleceted===5? "#e3f2fd":"white"}} >מאפים</Button>
                </ButtonGroup>
            </Grid>
            {/* <CartSummary/> */}
            <Button onClick={add} variant="contained" color="success" style={{marginTop:"20px"}}>הוסף לעגלה</Button>
        </Box>
    )
}