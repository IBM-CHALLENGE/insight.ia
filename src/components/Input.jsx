import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input(props) {
  return (
    <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#555"
        secureTextEntry={props.password ?? false}
    >
        {props.children}
    </TextInput>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 5,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#000',
        width: '100%'
    }
})