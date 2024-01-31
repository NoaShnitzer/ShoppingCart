import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
// import { useAppSelector, useAppDispatch} from "../store";



const initialState  = {
    isOpen : false
    // isOpen: true,
}



// export const onSendPS = createAsyncThunk(
//     'submit/onSendPS',
//     async (thunkAPI) => {
//         const resp = await axios.post('http://localhost:8000/orders', { data: personalDetails })
//         console.log(resp)
//         if(resp.data.status == "ERROR"){ //alert about error in BN number
//             //alert(resp.data.message);
//             console.log(resp.data.message);
//         }else{  
//             console.log("ההזמנה בוצעה בהצלחה" , resp.data);
//             return resp.data;
//             // searchFields.searchResults = resp.data;
//         }
//     }
// )





export const PersonalDetailsSlice = createSlice({
    name: "personalDetails",
    initialState,
    reducers:{
        // onchangeInput : (state, action) => {
        //     console.log("onchangeInput", "action", action.type, "payload" ,action.payload);
        //     switch (action.type) {
        //         case 'UPDATE_FIRST_NAME':
        //             state.personalDetails.firstName = action.payload.value ;                      
        //             break
        //         case 'UPDATE_LAST_NAME':
        //             state.personalDetails.lastName = action.payload.value ;                      
        //             break
        //         case 'UPDATE_ADDRESS':
        //             state.personalDetails.address = action.payload.value;                      
        //             break
        //         case 'UPDATE_EMAIL':
        //             state.personalDetails.email = action.payload.value ;                      
        //             break
        //         default:
        //     }
        // },
        // changeFormInput: (state, action: PayloadAction<{
        //     fileNumber: number,}>) => {
        //         state.recordFields = {
        //             fileNumber: action.payload.fileNumber,
        //         };      
        // },
        // clearInputs: (state) => {
        //     state.shoppingCart = []
        //     // state.isOpen = true;
        // },
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },

        // onSubmitOrder: (state) => {
        //     console.log("onSubmitOrder", state.personalDetails);
        // try{
        //     axios.post('http://localhost:8000/orders', state.personalDetails,{
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //       } ).then((resp) => 
        //     {
        //         console.log(resp)
        //         if(resp.data.status == "ERROR"){ //alert about error in BN number
        //             //alert(resp.data.message);
        //             console.log(resp.data);
        //         }else{  
        //             console.log("חיפוש בוצע בהצלחה" );
        //         }
        //         console.log(resp.data)
        //     })
        // } 
        // catch(err) {
        //     console.log(err)
        // }
        // },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(onSendPS.pending, (state, action) => {})
    //     builder.addCase(onSendPS.fulfilled, (state, action) => {
    //         state.personalDetails = action.payload;
    //         state.isTableOpen = !state.isTableOpen
    //         console.log("onSendPS.fulfilled", action.payload);
    //         // state.searches.push(action.payload);
    //     })
    //     builder.addCase(onSendPS.rejected, (state, action) => {
    //         console.log("onSendPS.rejected", action.payload);
    //     })
    // }
})



export default PersonalDetailsSlice.reducer
export const selectIsOpen = (state) => state.personalDetails.isOpen;
export const {toggleIsOpen} = PersonalDetailsSlice.actions
// export const {onchangeInput, onSubmitOrder} = PersonalDetailsSlice.actions;
