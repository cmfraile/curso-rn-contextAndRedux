import { SafeAreaView } from "react-native"
import AuthProvider from "./store/context/Auth.context"
import Main from "./routes/Main"
import { NavigationContainer } from "@react-navigation/native"

const App = () =>
  <NavigationContainer>
    <AuthProvider>
        <Main/>
    </AuthProvider>
  </NavigationContainer>

export default App