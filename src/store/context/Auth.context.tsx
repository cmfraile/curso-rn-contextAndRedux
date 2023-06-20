import authHook from "../../hooks/authHook";
import { AuthContext } from "../../hooks/authHook";

const AuthProvider = ({children}:{children:JSX.Element}) => {

    const authHookItems = authHook();

    return(
        <AuthContext.Provider value={{...authHookItems}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider