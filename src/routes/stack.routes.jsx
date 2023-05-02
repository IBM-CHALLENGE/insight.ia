import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from '../screens/Cadastro'
import Login from '../screens/Login'
import Recuperar from '../screens/Recuperar'


export default function StackRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Recuperar" component={Recuperar}/>
        </Stack.Navigator>
    )

}

