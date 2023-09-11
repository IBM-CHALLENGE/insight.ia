
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
import Perfil from '../screens/Perfil';


export default function AuthRoutes() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>

    );
}