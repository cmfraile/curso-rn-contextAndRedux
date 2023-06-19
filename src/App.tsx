import { SafeAreaView } from "react-native"
import { AuthProvider } from "./store/context/Auth.context"
import Main from "./routes/Main"

const App = () =>
  <AuthProvider>
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Main/>
    </SafeAreaView>
  </AuthProvider>

export default App