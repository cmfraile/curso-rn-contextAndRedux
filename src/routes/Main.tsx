import { DrawerContentScrollView , createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text , View } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const Guest = () => <Text>GUEST SIDE</Text>

const Main = () => {

    NavigationContainer

    return(
        <Drawer.Navigator
            initialRouteName="guest"
            drawerContent={(props) => <Text>Hola mundo</Text>}
        >
            <Drawer.Screen name="guest" component={Guest} />
        </Drawer.Navigator>
    )
    
}

export default Main