import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input({placeholder, password, value, onChange, keyboard, defaultValue, disabled, children}) {
  return (
    <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#555"
        secureTextEntry={password ?? false}
        value = {value}
        onChangeText={onChange}
        inputMode={keyboard ?? 'none'}
        defaultValue={defaultValue}
        editable={!disabled}
    >
        {children}
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