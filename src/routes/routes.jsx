
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import UnauthRoutes from './unauth.routes';
import { useAuth } from '../hooks/useAuth';
import AuthRoutes from './auth.routes';

export default function Routes() {

    const {token} = useAuth()

    return (
        <NavigationContainer>
            {
                token === null ? <UnauthRoutes /> : <AuthRoutes />
            } 
        </NavigationContainer>
    )
}