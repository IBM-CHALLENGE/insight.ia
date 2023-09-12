import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText} >Anúncios</Text>
                <Ionicons name="ios-close" style={styles.titleIcon} onPress={() => props.navigation.closeDrawer()} />
            </View>

            <View style={styles.buttonContainer}>
                <Button text={"Novo Anúncio"} />
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <Pressable style={styles.configContainer} onPress={() => props.navigation.navigate("Perfil")}>
                <View style={styles.line} />
                <View style={styles.configButton}>
                    <Ionicons name='ios-settings-sharp' style={styles.configIcon} />
                    <Text style={styles.configText}>Configurações</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },

    titleText: {
        color: "#3A39E6",
        fontSize: 25,
        fontFamily: "Montserrat-Black",
    },

    titleIcon: {
        color: "#333",
        fontSize: 25,
    },

    buttonContainer: {
        padding: 10
    },

    line: {
        width: "100%",
        borderTopColor: "#ddd",
        borderTopWidth: 2,
        width: "100%",
        marginVertical: 15,
    },

    configContainer: {
        width: "100%",
        padding: 15,
        position: "absolute",
        bottom: 0,
        left: 0,
    },

    configButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },

    configText: {
        color: "#333",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
    },

    configIcon: {
        color: "#333",
        fontSize: 16,
    },
})