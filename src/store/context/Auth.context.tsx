import authHook from "../../hooks/authHook";

const AuthProvider = ({children}:{children:JSX.Element}) => {

    const { AuthContext , ...restAuthHook } = authHook();

    return(
        <AuthContext.Provider value={{...restAuthHook}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider