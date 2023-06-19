import { createContext } from "react"

export interface authState {
    isLoggedIn:boolean,
    userName:string|undefined
}

export interface AuthContextProps {
    authState:authState,
    signIn:() => void
}

const authInitialState:authState = {
    isLoggedIn:false , 
    userName:undefined
}

const AuthContext = createContext( {} as AuthContextProps )

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    return (
    <AuthContext.Provider value={{
        authState:authInitialState,
        signIn:() => {}
    }}>
        {children}
    </AuthContext.Provider>
    )
}

export { authInitialState , AuthContext }