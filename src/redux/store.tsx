import { configureStore, createSlice,PayloadAction } from "@reduxjs/toolkit" 
import sidebarReducer from './sidebarSlice'

interface MenuState{
    activeMenu:number | null;
}

const initialState : MenuState={
    activeMenu: null ,
}

const menuSlice=createSlice({
    name:'menu',
    initialState,
    reducers:{
        toggleMenu:(state,action:PayloadAction<number>)=>{
            if(state.activeMenu === action.payload){
                state.activeMenu=null
            }else{
                state.activeMenu=action.payload
            }
        }
    }
})

export const {toggleMenu}=menuSlice.actions

export default menuSlice.reducer

const store=configureStore({
    reducer:{
        menu:menuSlice.reducer,
        sidebar: sidebarReducer
    }
})

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch

export {store}