import React from 'react'
import {  StyleSheet, Text, TouchableHighlight } from 'react-native'

export default function Button(props) {
  return (
    <TouchableHighlight style={styles.button} activeOpacity={0.6}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#55AAFF',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5
    },

    text:{
        color: '#FFF',
        textTransform: 'uppercase',
        fontFamily: 'Poppins 900',
        fontWeight: '900',
        fontSize: '1rem',
        letterSpacing: 1.1,
    }
})