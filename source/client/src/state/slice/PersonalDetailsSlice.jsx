import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState  = {
    isOpen : false
}


export const PersonalDetailsSlice = createSlice({
    name: "personalDetails",
    initialState,
    reducers:{
       
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
})



export default PersonalDetailsSlice.reducer
export const selectIsOpen = (state) => state.personalDetails.isOpen;
export const {toggleIsOpen} = PersonalDetailsSlice.actions
