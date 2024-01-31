import { Grid, TextField, Button, Card} from "@mui/material";
// import {personalDetails, onSendPS, onSubmitOrder} from '../state/slice/PersonalDetailsSlice'
import { onchangePSInput, onSubmitOrder, personalDetails, shoppingCart} from '../state/slice/ShoppingCartSlice'
import { toggleIsOpen} from '../state/slice/PersonalDetailsSlice'
import { useAppSelector, useAppDispatch} from "../state/store";
import axios from 'axios';
// import {  } from "../state/slice/ShoppingCartSlice";

export default function Checkout(){


    const dispatch = useAppDispatch()
    const personDetails = useAppSelector(personalDetails)
    const shoppingCartSummary = useAppSelector(shoppingCart)

    function submitOrder(){
    dispatch(toggleIsOpen())
    console.log(personDetails)
    const newObject = {name: personDetails.firstName, address: personDetails.address,
         email: personDetails.email, orderDetails: JSON.stringify(shoppingCartSummary)}
    console.log("onSubmitOrder", shoppingCartSummary);
try{
    axios.post('http://localhost:8000/orders', newObject ,{headers: {
        'Content-Type': 'application/json',
      }},).then((resp) => 
    {
        console.log(resp)
        if(resp.data.status == "ERROR"){ //alert about error in BN number
            //alert(resp.data.message);
            console.log(resp.data.message);
        }else{  
            console.log("success")
        }
        console.log(resp.data)
    })
} 
catch(err) {
    console.log(err)
}
    }

    return (
        <div style={{width:"20%", justifyContent:"end"}}>
            {/* , borderRight:" solid black" */}
            <Card style={{minHeight:"100vh"}}>
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
                
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"שם פרטי"}
                        id='123'
                        onChange={(e) => dispatch(onchangePSInput({type:"UPDATE_FIRST_NAME", value:e.currentTarget.value}))}
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
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"שם משפחה"}
                        id='123'
                        onChange={(e) => dispatch(onchangePSInput({type:"UPDATE_LAST_NAME", value:e.currentTarget.value}))}
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
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"כתובת"}
                        id='123'
                        onChange={(e) => dispatch(onchangePSInput({type:"UPDATE_ADDRESS", value:e.currentTarget.value}))}
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
                <Grid item xs={12} md={12} >
                    <TextField
                        // className="form-input"
                        type="string"
                        label={"אימייל"}
                        id='123'
                        onChange={(e) => dispatch(onchangePSInput({type:"UPDATE_EMAIL", value:e.currentTarget.value}))}
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
                <Button style={{backgroundColor:"red", color:"white", marginTop:"25px"}}>ביטול</Button>
                <Button onClick={submitOrder} style={{backgroundColor:"green", color:"white", marginTop:"25px"}}>אישור הזמנה</Button>
            </Grid>
            </Card>
        </div>
    )
}