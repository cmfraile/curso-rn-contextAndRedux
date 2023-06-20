import { createContext } from "react";
import { useReducer } from "react";
import fetchComponent, { loginRequestObject, takeUserObject } from "../components/fetch";

interface user {id:number;email:string;first_name:string;last_name:string;avatar:string}
interface authState { isLoggedIn:boolean , user?:user }
export interface AuthContextProps {
    authState:authState,
    signIn:() => void
    logOut:() => void
}

type authActionTypes = 'signIn'|'logOut'
type authAction = { 
    type : authActionTypes
    payload ?: user
}

const authReducer = (state:authState,{type,payload}:authAction):authState => {
    switch(type){
        case 'logOut' : return {isLoggedIn:false} ;
        case 'signIn' : return {isLoggedIn:true,user:payload} ;
        default : return state ;
    }
}

export const AuthContext = createContext( {} as AuthContextProps );
const authHook = () => {

    const authInitialState:authState = {isLoggedIn:false,user:undefined};
    
    const [ authState , dispatch ] = useReducer(authReducer,authInitialState);

    const authCRUD = {

        signIn:() => {
            fetchComponent(loginRequestObject)
            .then(() => {
                fetchComponent(takeUserObject)
                .then( (resp:any) => {
                    const [user] = resp.data.filter( (x:user) => x.email == loginRequestObject.body.email );
                    dispatch({type:'signIn',payload:user});
                })
            })
        },

        logOut:() => dispatch({type:'logOut'})

        
    }

    return({authState,...authCRUD});

}

export default authHook