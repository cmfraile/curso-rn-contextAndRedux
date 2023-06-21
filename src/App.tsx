import { SafeAreaView } from "react-native"
import AuthProvider from "./store/Auth.context"
import Main from "./routes/Main"
import { NavigationContainer } from "@react-navigation/native"
import { store } from "./store/Auth.redux"
import { Provider } from "react-redux"

const App = () =>
  <Provider store={store}>
    <NavigationContainer>
      <AuthProvider>
          <Main/>
      </AuthProvider>
    </NavigationContainer>
  </Provider>

export default App