import CartSummary from "./Checkout"
import { useState } from "react"
import { TextField , Grid, Box, Button, ButtonGroup} from "@mui/material"
import ShoppingCartSlice from "../state/slice/ShoppingCartSlice"
import {searchInput, onchangeInputReducer, addToCart, addToCategory} from '../state/slice/ShoppingCartSlice'
import { useAppDispatch } from "../state/store"
// import  '../../src/css/styles.scss'
import "../css/styles.css"

export default function GroceriesList(){

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
        <Box direction="rtl" className="inputs"
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
                <Grid item xs={12} md={12} style={{margin:"auto", alignItems:"center",display:"flex", flexDirection:"column", marginBottom:"20px"}}>
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
                    <Button onClick={(e) =>changeselectedCategory(e, 1, "FRUITS_AND_VEGGIES")} style={{backgroundColor: seleceted? "blue":"green"}} >ירקות ופירות</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 2, "DAIRY")} className={seleceted ===2? "selectedButton":"notSelectedButton"} >מוצרי חלב</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 3, "MEAT_AND_FISH")} className={seleceted ===3? "selectedButton":"notSelectedButton"} >בשר ודגים</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 4, "CLEANING_TOOLS")} className={seleceted ===4? "selectedButton":"notSelectedButton"} >מוצרי ניקיון</Button>
                    <Button onClick={(e) =>changeselectedCategory(e, 5, "PASTRIES")} className={seleceted ===5? "selectedButton":"notSelectedButton"} >מאפים</Button>
                </ButtonGroup>
            </Grid>
            {/* <CartSummary/> */}
            <Button onClick={add} variant="contained" color="success" style={{marginTop:"20px"}}>הוסף לעגלה</Button>
        </Box>
    )
}