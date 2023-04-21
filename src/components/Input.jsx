import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input(props) {
  return (
    <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#555"
    >
        {props.children}
    </TextInput>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderStyle: 'none',
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 5,
        fontFamily: 'Roboto 700',
        fontWeight: 500,
        fontSize: '1rem',
        color: '#000'
    }
})