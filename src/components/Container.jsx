import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Container(props) {
    return (
        <View style={getStyle(props).container}>
            {props.children}
        </View>
    )
}

function getStyle(props) {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: props.background ? '#3A39E6' : '#EEE',
            padding: 20,
            height: '100%',
            width: '100%',
        }
    })
}