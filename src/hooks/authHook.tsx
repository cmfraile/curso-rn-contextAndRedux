import { createContext } from "react";
import { useReducer } from "react";

interface authState { isLoggedIn:boolean , userName:string|undefined }

interface AuthContextProps {
    authState:authState,
    signIn:() => void
}

const authReducer = (state:authState,action:any):authState => {
    return state
}

const authHook = () => {

    const authInitialState:authState = {isLoggedIn:false,userName:undefined};
    const AuthContext = createContext( {} as AuthContextProps );

    const [ authState , dispatch ] = useReducer(authReducer,authInitialState);

    const authCRUD = {
        signIn:() => {}
    }

    return({AuthContext,authState,...authCRUD});

}

export default authHook