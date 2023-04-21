import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function Content(props) {
    return (
        <ScrollView
            style={getStyle(props).container}
            contentContainerStyle={getStyle(props).content}
        >
            {props.children}
        </ScrollView>
    )
}

function getStyle(props) {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            maxWidth: 500,
            position: 'relative',
        },

        content: {
            flexGrow: props.center ? 1 : 0, 
            justifyContent: props.center ? 'center' : 'flex-start',
        }
    })
}