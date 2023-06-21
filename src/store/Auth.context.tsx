import { Provider } from "react-redux";
import { authHookInRedux } from "../hooks/authHook";
import { AuthContext } from "../hooks/authHook";
import { store } from "./Auth.redux";

const AuthProvider = ({children}:{children:JSX.Element}) => {

    const authHookItems = authHookInRedux()

    return(
        <AuthContext.Provider value={{...authHookItems}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider