import React, { useCallback, useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Content from '../components/Content';
import { useAuth } from '../hooks/useAuth';
import { mensagensByChat } from '../api/chat';
import alert from '../components/Alert';
import { StyleSheet, Text, View } from 'react-native';
import ImgError from '../../assets/images/img-error.jpg'
import FallbackImage from '../components/FallbackImage';
import SendMsg from '../components/SendMsg';

function Anuncio(props) {

    const auth = useAuth()
    const [mensagens, setMensagens] = useState([])
    const [updateChat, setUpdateChat] = useState(false)
    

    useEffect(() => {
        if (auth.token) {
            fetchMensagens()
        }
    }, [updateChat])

    const fetchMensagens = useCallback(async () => {
        const response = await mensagensByChat(auth.token, props?.route?.params?.id)

        if (response.ok) {
            const json = await response.json()
            setMensagens(json)
            
        }
        else {
            alert('Erro', 'Erro ao buscar mensagens')
        }
    })

    return (
        <React.Fragment>
            <Menu navigation={props.navigation} />
            <Container>
                <Content chat>
                    <View style={styles.msgsContainer}>
                        {
                            mensagens.map((msg, index) => {
                                const myMsg = msg.tipoMensagem === "Comando"

                                return (
                                    <View
                                        key={index}
                                        style={[
                                            styles.msgLine,
                                            { justifyContent: myMsg ? "flex-end" : "flex-start" }
                                        ]}
                                    >
                                        <View
                                            style={[
                                                styles.msg,
                                                myMsg ? styles.myMsg : styles.otherMsg

                                            ]}
                                        >
                                            {
                                                !myMsg &&
                                                <FallbackImage
                                                    source={msg.imagem}
                                                    style={styles.msgImg}
                                                    fallbackSource={ImgError}
                                                />
                                            }
                                            <Text
                                                style={[
                                                    styles.msgText,
                                                    { color: myMsg ? "#000" : "#fff" }
                                                ]}
                                            >
                                                {msg.conteudo.trim()}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Content>
                <SendMsg chat={props?.route?.params?.id} update={() => {setUpdateChat(!updateChat)}}/>
            </Container>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({

    msgsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        gap: 15,
    },

    msgLine: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
    },

    msg: {
        maxWidth: "80%",
        borderRadius: 5,
        padding: 10,
    },

    myMsg: {
        backgroundColor: "#fff",
    },

    otherMsg: {
        backgroundColor: "#9A30F2",
    },

    msgText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        textAlign: "auto",
    },

    msgImg: {
        width: "100%",
        aspectRatio: 1,
        marginBottom: 10,
        borderRadius: 5,
    },
})

export default Anuncio;