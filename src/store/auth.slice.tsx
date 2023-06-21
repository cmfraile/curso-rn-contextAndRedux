import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchComponent from "../components/fetch";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface user {id:number;email:string;first_name:string;last_name:string;avatar:string}
interface authState { isLoggedIn:boolean , user?:user }
const initialState:authState = {isLoggedIn:false}

import { loginRequestObject } from "../components/fetch";
import { takeUserObject } from "../components/fetch";

const promiseAsAsyncThunkPayloadCreator = new Promise<user>(async(rs) => {
    await fetchComponent(loginRequestObject)
    .then(() => {
        fetchComponent(takeUserObject)
        .then( (resp:any) => {
            const [user] = resp.data.filter( (x:user) => x.email == loginRequestObject.body.email );
            rs(user)
        })
    });
})

export const signInThunk = createAsyncThunk<user,void>('auth/signIn',async() => promiseAsAsyncThunkPayloadCreator);


const authSlice = createSlice({name:'auth',initialState,
    reducers:{
        logout:(state:authState) => ({isLoggedIn:false})
    },
    extraReducers:(builder) => {
        builder.addCase(signInThunk.fulfilled,(state,action) => ({
            isLoggedIn:true,
            user:action.payload
        }))
    },
});

export default authSlice

/*
export const signInThunk = createAsyncThunk<user,void>('auth/signIn',async() => {
    let returned:any = {}
    await fetchComponent(loginRequestObject)
    .then(() => {
        fetchComponent(takeUserObject)
        .then( (resp:any) => {
            const [user] = resp.data.filter( (x:user) => x.email == loginRequestObject.body.email );
            returned = user
        })
    });
});
*/

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