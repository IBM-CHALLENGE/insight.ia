import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ModalStyled(props) {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.visible}
            presentationStyle='fullScreen'
        >
            <View style={styles.layer}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>{props.title}</Text>
                        <Ionicons name="ios-close" style={styles.titleIcon} onPress={() => props.setVisible(false)} />
                    </View>
                    {props.children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    layer: {
        backgroundColor: "#000000aa",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    content: {
        backgroundColor: "#eee",
        width: "95%",
        maxWidth: 500,
        zIndex: 2,
        padding: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    titleText: {
        color: "#3A39E6",
        fontSize: 20,
        fontFamily: "Montserrat-Black",
    },

    titleIcon: {
        color: "#333",
        fontSize: 25,
    },
})

export default ModalStyled;