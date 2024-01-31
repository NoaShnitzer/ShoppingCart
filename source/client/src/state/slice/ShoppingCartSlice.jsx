import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
// import { state } from '../../../../server/db';
// import { state } from '../../../../server/db';




const initialState  = {
    shoppingCart:  [
        {
            name:"",
            category:""
        }
    ], 
    // isOpen: false,
    // searchInput:"",
    totalItems: 0,
    personalDetails:  
        {
            firstName:"",
            lastName:"",
            address:"",
            email:""
        }
}


export const ShoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers:{
        addToCategory : (state, action) => {
            // console.log("addToCategory", "action", action.type, "payload" ,action.payload);
            // state.shoppingCart.push({category: action.payload.type, name: action.payload.value})
            // console.log("state.shoppingCart in slice",state.shoppingCart)
            state.shoppingCart = [...state.shoppingCart, {category: action.payload.type, name: action.payload.value}]
            console.log("state.shoppingCart in slice",state.shoppingCart)

        },
        addToCart: (state) => {
            state.totalItems ++
        },
        clearInputs: (state) => {
            state.shoppingCart = []
            // state.isOpen = true;
        },
        // toggleIsOpen: (state) => {
        //     console.log("toggleIsOpen", state.isOpen);
        //     state.isOpen = !state.isOpen;
        // },
        onchangeInputReducer : (state, action) => {
            switch (action.payload.type) {
                case ' UPDATE_SEARCH':   
                    state.searchFields.term = action.payload.value;
                    break
            }
        },
        onchangePSInput : (state, action) => {
            console.log("onchangeInput", "action", action.type, "payload" ,action.payload);
            switch (action.payload.type) {
                case 'UPDATE_FIRST_NAME':
                    state.personalDetails.firstName = action.payload.value ;               
                    break
                case 'UPDATE_LAST_NAME':
                    state.personalDetails.lastName = action.payload.value ;                      
                    break
                case 'UPDATE_ADDRESS':
                    state.personalDetails.address = action.payload.value;                      
                    break
                case 'UPDATE_EMAIL':
                    state.personalDetails.email = action.payload.value ;                      
                    break
                default:
            }
        },
        // toggleIsSummaryOpen: (state) => {
        //     console.log("toggleIsOpen", state.isOpen);
        //     state.isOpen = !state.isOpen;
        // },
        onSubmitOrder: (state) => {
            console.log(state.personalDetails)
            const newObject = {name: state.personalDetails.firstName, address: state.personalDetails.address,
                 email: state.personalDetails.email, orderDetails: JSON.stringify(state.shoppingCart)}
            console.log("onSubmitOrder", state.shoppingCart);
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
        },
    }
})



export default ShoppingCartSlice.reducer
export const totalItems = (state) => state.shoppingCart.totalItems;
export const searchInput = (state) => state.shoppingCart.searchInput;
export const shoppingCart = (state) => state.shoppingCart.shoppingCart;
export const personalDetails =  (state) => state.shoppingCart.personalDetails
export const { onSubmitOrder, onchangePSInput, onSearchRecord, clearInputs, onchangeInputReducer, addToCart, addToCategory } = ShoppingCartSlice.actions;
// , deleteRecord, 