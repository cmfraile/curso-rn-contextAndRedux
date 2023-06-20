/*
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type navigate = 'main'|'newgame'|'tutorial'|'reports'|'credits&donations'|'languaje'|'sandbox'
export interface languaje { flag:string , languaje:string } ;
export interface menu { languaje:languaje|null , navigate:navigate }

const initialState:menu = { languaje:null,navigate:'languaje' }

const menuSlice = createSlice({name:'menu',initialState,
    reducers:{
        setPointer:(state:menu,action:PayloadAction<navigate>) => { return {...state,navigate:action.payload} },
        setLanguaje:(state:menu,action:PayloadAction<languaje>) => { return {...state,languaje:action.payload} },
    }
});

export default menuSlice
*/