import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {ShoppingCartSlice} from './slice/ShoppingCartSlice'



export const store = configureStore({
    reducer: {
        shoppingCart: ShoppingCartSlice.reducer,
    },
    devTools: true,
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = ReturnType<typeof store.dispatch>