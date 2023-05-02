import React from 'react'
import {  StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#55AAFF',
        padding: 8,
        borderRadius: 5
      },
      
      text:{
        textAlign: 'center',
        color: '#FFF',
        textTransform: 'uppercase',
        fontFamily: 'Poppins-Black',
        fontSize: 18,
        letterSpacing: 1.3,
    }
})