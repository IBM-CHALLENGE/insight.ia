import React from 'react'
import {  Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button(props) {
  return (
    <TouchableOpacity
      style={getStyle(props).button}
      activeOpacity={0.8}
      onPress={props.onPress}
    >

      <Text style={getStyle(props).text}>
        {props.text}
      </Text>

    </TouchableOpacity>
  )
}

const stylesGenerics = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    textAlignVertical: 'center',
    width: "100%"
  },
  
  text: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Black',
    fontSize: 18,
    letterSpacing: 1.3,
    marginBottom: Platform.OS === 'android' ? -5 : 0
  }
})

function getStyle(props) {


  const primary = StyleSheet.create({
    button: {
      backgroundColor: '#55AAFF',
      ...stylesGenerics.button
    },

    text: {
      color: '#fff',
      ...stylesGenerics.text
    }
  })

  const danger = StyleSheet.create({
    button: {
      backgroundColor: '#dc3545',
      ...stylesGenerics.button
    },

    text: {
      color: '#fff',
      ...stylesGenerics.text
    }
  })

  const transparent = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      ...stylesGenerics.button
    },

    text: {
      color: '#777',
      ...stylesGenerics.text
    }
  })

  if (props.variation === 'primary') return primary
  if (props.variation === 'danger') return danger
  if (props.variation === 'transparent') return transparent

  return primary
}