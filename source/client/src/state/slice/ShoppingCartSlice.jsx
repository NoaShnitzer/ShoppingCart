import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';




const initialState  = {
    shoppingCart:  [
        {
            name:"",
            price:""
        }
    ]    
    // isOpen: true,
}


export const ShoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers:{
        onchangeInputReducer : (state, action) => {
            // console.log("onchangeInputReducer", "action", action.type, "payload" ,action.payload);
            // console.log("action", action.type)
            // console.log("payload", action.payload)
            // switch (action.type) {
            //     case 'UPDATE_FILE_NUMBER':
            //         // state.searchFields.term = action.payload.value ;                      
            //         state.recordFields = { ...state.recordFields, fileNumber: action.payload.value };                      
            //         break
            //     default:
            //     }
        },
        // changeFormInput: (state, action: PayloadAction<{
        //     fileNumber: number,}>) => {
        //         state.recordFields = {
        //             fileNumber: action.payload.fileNumber,
        //         };      
        // },
        clearInputs: (state) => {
            state.shoppingCart = []
            // state.isOpen = true;
        },
        toggleIsOpen: (state) => {
            console.log("toggleIsOpen", state.isOpen);
            state.isOpen = !state.isOpen;
        },

        onSearchRecord: (state) => {
            console.log("onSearch", state.shoppingCart);
        try{
            axios.post('/api/getProduct', { data: state }).then((resp) => 
            {
                console.log(resp)
                if(resp.data.status == "ERROR"){ //alert about error in BN number
                    //alert(resp.data.message);
                    console.log(resp.data.message);
                }else{  
                    console.log("חיפוש בוצע בהצלחה" + resp.data.results.requestNumber);
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
export const shoppingCart = (state) => state.shoppingCart;
export const selectIsOpen = (state)=> state.shoppingCart.isOpen;
export const { onSearchRecord, toggleIsOpen, clearInputs } = ShoppingCartSlice.actions;
// , deleteRecord