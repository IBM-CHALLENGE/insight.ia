import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";
import { buscar } from "../api/usuario";
import alert from "../components/Alert";

export const AuthContext = createContext({
    user: null,
    token: null,
    login: () => { },
    logout: () => { },
    fetchUsuario: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        async function getUser() {
            let token = await AsyncStorage.getItem('@token');
            if (token)
                setToken(JSON.parse(token));
            else
                setToken(null);
        }

        getUser()

    }, []);

    useEffect(() => {
        if (token) {
            fetchUsuario()
        }
    }, [token])

    const fetchUsuario = useCallback(async () => {
        const response = await buscar(token)
        if (response.ok) {
            const json = await response.json()
            setUser(json)
        }
    })

    async function login(token) {
        try {
            await AsyncStorage.setItem('@token', JSON.stringify(token));
            setToken(token);
        } catch (error) {
            setToken(null);
            alert('Erro', 'Erro ao efetuar login')
        }
    }

    async function logout() {
        try {
            await AsyncStorage.removeItem('@token');
            setToken(null);
        } catch (error) {
            alert('Erro', 'Erro ao efetuar logout')
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}