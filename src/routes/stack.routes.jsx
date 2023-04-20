import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from '../screens/Cadastro'
import Login from '../screens/Login'


export default function StackRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    )

}

