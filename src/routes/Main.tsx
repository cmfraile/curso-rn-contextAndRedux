import { DrawerContentScrollView , createDrawerNavigator , DrawerItem, DrawerContentComponentProps } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { Text , View } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../hooks/authHook";
import { AuthContextProps } from "../hooks/authHook";
import { Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Guest = () => <Text>GUEST SIDE</Text>
const User = () => <Text>USER SIDE</Text>

const DrawerInside = ({props,context}:{props:DrawerContentComponentProps,context:AuthContextProps}) => {

    const { navigate } = props.navigation
    const currentRouteName = props.navigation.getState().routeNames[props.navigation.getState().index]

    const UserView = () => 
        (context.authState.isLoggedIn)
        ?   <View>
                <Image 
                    style={{minWidth:'100%',height:100}}
                    source={{uri:context.authState.user?.avatar}}/>
                <Text style={{textAlign:'center',fontSize:50}}>{ context.authState.user?.first_name }</Text>
                <Text style={{textAlign:'center',fontSize:50}}>{ context.authState.user?.last_name }</Text>
            </View>
        :   <Text style={{textAlign:'center'}}>INVITADO</Text>
    
    const LogButton = () =>
        (context.authState.isLoggedIn)
        ?   <DrawerItem
                style={{backgroundColor:'red'}}
                onPress={() => { context.logOut() ; navigate('guest') }}
                label='LOG OUT'
            />
        :   <DrawerItem
                style={{backgroundColor:'blue'}}
                onPress={() => { context.signIn() ; navigate('user') }}
                label='LOGIN'
            />
    
    const NavigateButtons = () => {

        return(
            <View>
                <DrawerItem
                    style={{backgroundColor:(currentRouteName == 'guest') ? 'blue' : ''}}
                    label='invitados'
                    onPress={() => navigate('guest') }
                />
                {(context.authState.isLoggedIn) &&
                    <DrawerItem
                        style={{backgroundColor:(currentRouteName == 'user') ? 'blue' : ''}}
                        label='usuarios'
                        onPress={() => navigate('user') }
                    />
                }
            </View>
        )
    }

    return(
        <View style={{flex:1,justifyContent:'space-between',padding:20}} >
            <UserView/>
            <NavigateButtons/>
            <LogButton/>
        </View>
    )

}

const Main = () => {

    const context = useContext(AuthContext) ;

    return(
        <Drawer.Navigator
            initialRouteName="guest"
            drawerContent={(props) => <DrawerInside props={props} context={context} />}
        >
            <Drawer.Screen name="guest" component={Guest} />
            <Drawer.Screen name="user" component={User} />
        </Drawer.Navigator>
    )
    
}

export default Main