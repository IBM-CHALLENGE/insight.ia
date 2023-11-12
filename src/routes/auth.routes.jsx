
import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
import Perfil from '../screens/Perfil';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { deletar, listarPorUsuario } from '../api/anuncio';
import { useAuth } from '../hooks/useAuth';
import alert from '../components/Alert';
import Anuncio from '../screens/Anuncio';


export default function AuthRoutes() {

    const auth = useAuth()
    const Drawer = createDrawerNavigator();
    const [anuncios, setAnuncios] = useState([])

    const fetchAnuncios = async () => {
        const response = await listarPorUsuario(auth.token)

        if (response.ok) {
            const json = await response.json()
            setAnuncios(json)
        }
    }

    useEffect(() => {
        if (auth.token) {
            fetchAnuncios()
        }
    }, [auth.user])

    const handleDelete = async (id) => {
        const response = await deletar(auth.token, id)

        if (response.ok) {
            alert('Sucesso', 'Anúncio deletado com sucesso')
            fetchAnuncios()
        }
        else {
            alert('Erro', 'Erro ao deletar anúncio')
        }
    }

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{
                drawerItemStyle: { display: 'none' }
            }} />
            
            <Drawer.Screen name="Perfil" component={Perfil} options={{
                drawerItemStyle: { display: 'none' }
            }} />


            {
                anuncios.map(anuncio => (
                    <Drawer.Screen
                        key={anuncio.id}
                        name={`Anuncio ${anuncio.descricao} (${anuncio.id})`}
                        component={Anuncio}
                        initialParams={{id: anuncio.id}}
                        options={{
                            drawerLabel: () => null,
                            drawerActiveBackgroundColor: '#ddd',
                            drawerIcon: ({ focused, size }) => (
                                <View style={styles.option}>
                                    <View style={styles.label}>
                                        <Ionicons name="ios-megaphone" size={size} color={"#555"} />
                                        <Text style={styles.labelText}>{anuncio.descricao}</Text>
                                    </View>
                                    {
                                        focused && 
                                        <Pressable onPress={async(e) => { e.preventDefault(); await handleDelete(anuncio.id) }}>
                                            <FontAwesome5 
                                                name="trash" 
                                                size={size - 3} 
                                                color={"#dc3545"}
                                            />
                                        </Pressable>
                                    }
                                </View>
                            )
                        }} />
                ))
            }

        </Drawer.Navigator>

    );
}

const styles = StyleSheet.create({
    option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },

    label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    labelText: {
        color: '#555',
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    }
})