import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

export default function Menu({ navigation }) {

    const {user} = useAuth()

    return (
        <View style={styles.container}>
            <Feather name="menu" style={styles.icon} onPress={() => navigation.openDrawer()}/>

            <Text style={styles.textContainer}>
                <Text style={styles.textInsight}>Insight</Text>
                <Text style={styles.textIa}>.ia</Text>
            </Text>

            <Pressable style={styles.saldoContainer} onPress={() => navigation.navigate("Transações")}>
                <Text style={styles.saldoText}>Saldo (R$)</Text>
                <Text style={[styles.saldoText, styles.saldoValor]}>{user?.saldo.toFixed(2)}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#3A39E6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    icon:{
        color: "#FFF",
        fontSize: 30,
    },

    textContainer: {
        textAlign: "center",
    },

    textInsight: {
        fontFamily: "Pacifico-Regular",
        fontSize: 25,
        color: "#FFF",
    },

    textIa: {
        fontFamily: "Poppins-Bold",
        fontSize: 15,
        color: "#55AAFF",
        marginLeft: 3,
    },

    saldoContainer:{
        backgroundColor: '#9A30F2',
        padding: 5,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    saldoText:{
        color: '#FFF',
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    },

    saldoValor:{
        fontSize: 14,
        fontFamily: 'Roboto-Bold'
    }
})