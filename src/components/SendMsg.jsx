import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { enviarMensagem } from '../api/chat';
import { useAuth } from '../hooks/useAuth';
import alert from './Alert';

function SendMsg(props) {

    const auth = useAuth()
    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')

    const handleSend = async () => {
        setSending(true)

        const data = {
            conteudo: msg,
            anuncio: {
                id: props.chat
            }
        }
        const response = await enviarMensagem(auth.token, data, props.chat)

        if(response.ok){
            setMsg('')
            setSending(false)
            props.update()
            auth.updateUsuario()
        }
        else{
            alert('Erro', 'Erro ao enviar mensagem')
            setSending(false)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="O que gostaria de ter no seu anúncio?"
                style={styles.input}
                onChangeText={setMsg}
                value={msg}
                numberOfLines={3}
                multiline={true}
                maxLength={250}
                placeholderTextColor="#555"
            />
            <Pressable style={styles.button} onPress={handleSend}>
                {
                    sending ?
                        <Feather name="loader" size={20} color="white" />
                        :
                        <Ionicons name="send" size={20} color="white" />
                }
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 5,
        marginTop: 10,
        maxWidth: 500,
    },

    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
    },

    button: {
        width: 50,
        height: "100%",
        backgroundColor: '#3A39E6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SendMsg;