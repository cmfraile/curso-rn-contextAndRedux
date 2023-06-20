import { createContext } from "react";
import { useReducer } from "react";
import fetchComponent, { loginRequestObject, takeUserObject } from "../components/fetch";

interface user {id:number;email:string;first_name:string;last_name:string;avatar:string}
interface authState { isLoggedIn:boolean , user:user|undefined }
interface AuthContextProps {
    authState:authState,
    signIn:() => void
}

type authActionTypes = 'signIn'|'logOut'
type authAction = { 
    type : authActionTypes
    payload : user
}

const authReducer = (state:authState,{type,payload}:authAction):authState => {
    switch(type){
        case 'logOut' : return state ;
        case 'signIn' : return state ;
        default : return state ;
    }
}

const authHook = () => {

    const authInitialState:authState = {isLoggedIn:false,user:undefined};
    const AuthContext = createContext( {} as AuthContextProps );

    const [ authState , dispatch ] = useReducer(authReducer,authInitialState);

    const authCRUD = {

        signIn:() => {
            fetchComponent(loginRequestObject)
            .then(() => {
                fetchComponent(takeUserObject)
                .then( (resp:any) => {
                    const [user] = resp.data.filter( (x:user) => x.email == loginRequestObject.body.email );
                    console.log(user)
                    dispatch({type:'signIn',payload:user});
                })
            })
        },

        
    }

    return({AuthContext,authState,...authCRUD});

}

export default authHook