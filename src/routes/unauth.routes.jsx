import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'


export default function UnauthRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            {/* <Stack.Screen name="Recuperar" component={Recuperar}/> */}
        </Stack.Navigator>
    )

}

