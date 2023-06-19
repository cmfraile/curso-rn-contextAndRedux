import { SafeAreaView } from "react-native"
import { AuthProvider } from "./store/context/Auth.context"
import Main from "./routes/Main"
import { NavigationContainer } from "@react-navigation/native"

const App = () =>
  <NavigationContainer>
    <AuthProvider>
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <Main/>
      </SafeAreaView>
    </AuthProvider>
  </NavigationContainer>

export default App