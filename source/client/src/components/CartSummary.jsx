import { Grid, TextField, Button, Card, Divider, List, ListItem} from "@mui/material";
import { onchangeInput } from '../state/slice/PersonalDetailsSlice'
import { useAppSelector, useAppDispatch} from "../state/store";
import { shoppingCart } from "../state/slice/ShoppingCartSlice";
import { useEffect, useState } from "react";

export default function CartSummary(){


    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(shoppingCart)
    const [fruitsVeggies, setFruitsVeggies] = useState([])
    const [cleaningTools, setCleaningTools] = useState([])
    const [dairy, setDairy] = useState([])
    const [meatFish, setMeatFish] = useState([])
    const [pastries, setPastries] = useState([])

    console.log(cleaningTools)

    
    // const [fruitsVeggies, setFruitsVeggies] = useState(cartItems.find(item) => item.category == "FRUITS_AND_VEGGIES")
    
   

    useEffect(() =>{
        console.log(cartItems)
        let fruitsAndVeggies = cartItems.filter(item => item.category === "FRUITS_AND_VEGGIES" )
        setFruitsVeggies([...fruitsAndVeggies])
        console.log("fruitsVeggies", fruitsVeggies)

        let cleaning = cartItems.filter(item => item.category === "CLEANING_TOOLS")
        setCleaningTools([...cleaning])
        console.log("cleaning tools", cleaningTools)

        
        let dairyStuff = cartItems.filter(item => item.category === "DAIRY")
        setDairy([...dairyStuff])

        let meatAndFish = cartItems.filter(item => item.category === "MEAT_AND_FISH")
        setMeatFish([...meatAndFish])

        let newPastries = cartItems.filter(item => item.category === "PASTRIES")
        setPastries([...newPastries])

    },[cartItems]) 



    return (
        <div >

            <Grid item xs={12} md={6} style={{marginTop:"73px"}}>
                <Divider>:סיכום הקניה</Divider>
            </Grid>
            <Grid 
                container 
                // spacing={2} 
                rowSpacing={3}
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                dir="rtl"
                sx={{
                    margin: 'auto',
                    maxWidth: 1100,
                    flexGrow: 1,
                    }}>
            {/* return results.map((result: { id: Key | null | undefined; name: any; value: any; }) => (
            console.log("result.value" , result.value),
            result.value?
            <span key={result.id} style={{backgroundColor:"#ede7f6"}}>
                  {result.name} : {result.value},{" "}
                {/* {result.name &&  ":" && result.value && ","}  */}
            {/* </span> */}
            {/* :"" */} 
                

            {/* {cartItems.map((item)  => {
                <Grid key={item.categort}>
                    {item.name}
                </Grid>
            })
            } */}


                <Grid container item xs={12} md={2} spacing={2}>מוצרי ניקיון
                    <List item xs={12} md={2} spacing={2}>
                        {cleaningTools.map((item, index) => {
                            return( 
                                <ListItem key={index}>
                                    {item.name}
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                <Grid container item xs={12} md={2} spacing={2}>גבינות
                        <List item xs={12} md={2} spacing={2}>
                            {dairy.map((d, index) => {
                                return(
                                   <ListItem key={index}>{d.name}</ListItem> 
                                )
                            })}
                        </List>
                </Grid>
                <Grid container item xs={12} md={2} spacing={2}>ירקות ופירות
                    <List item xs={12} md={2} spacing={2}>
                        {fruitsVeggies.map((d, index) => {
                            return(
                                <ListItem key={index}>{d.name}</ListItem> 
                            )
                        })}
                    </List>
                </Grid>
                <Grid container item xs={12} md={2} spacing={2}>בשר ודגים
                    <List item xs={12} md={2} spacing={2}>
                        {meatFish.map((d, index) => {
                            return(
                                <ListItem key={index}>{d.name}</ListItem> 
                            )
                        })}
                    </List>
                </Grid>
                <Grid container item xs={12} md={2} spacing={2}>מאפים
                    <List item xs={12} md={2} spacing={2}>
                        {pastries.map((d, index) => {
                            return(
                                <ListItem key={index}>{d.name}</ListItem> 
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
                
            {/* </Card> */}
        </div>
    )
}