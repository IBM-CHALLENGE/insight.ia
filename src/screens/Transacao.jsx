import React, { useCallback, useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Content from '../components/Content';
import Button from '../components/Button';
import ModalStyled from '../components/Modal';
import Input from '../components/Input';
import { useAuth } from '../hooks/useAuth';
import { cadastrarTransacao, transacoesByUser } from '../api/transacao';
import alert from '../components/Alert';
import { StyleSheet, Text, View } from 'react-native';

function Transacao(props) {

    const auth = useAuth()
    const [transacoes, setTransacoes] = useState([])
    const [modal, setModal] = useState(false)
    const [valor, setValor] = useState("")
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if (auth.token) {
            fetchTransacoes()
        }
    }, [update, auth.user])

    const fetchTransacoes = useCallback(async () => {
        const response = await transacoesByUser(auth.token)

        if (response.ok) {
            const json = await response.json()
            setTransacoes(json)
            
        }
        else {
            alert('Erro', 'Erro ao buscar mensagens')
        }
    })

    const handleAdd = async () => {
        console.log(valor)
        if(valor.trim().length > 0 && RegExp(/^\d+(?:\.\d{1,2})?$/).test(valor)){
            const data = {
                titulo: "Crédito Adicionado",
                valor: Number(valor),
                usuario: {
                    id: auth.user.id
                }
            }

            const response = await cadastrarTransacao(auth.token, data)

            if(response.ok){
                alert("Sucesso", "Crédito adicionado com sucesso")
                setValor("")
                setModal(false)
                setUpdate(!update)
                auth.updateUsuario()
            }else{
                alert("Erro", "Erro ao adicionar crédito")
            }
        }
    }

    return (
        <React.Fragment>
            <Menu navigation={props.navigation} />
            <Container>
                <Content>

                    <ModalStyled
                        visible={modal}
                        setVisible={setModal}
                        title="Adicionar Crédito"
                    >
                        <Input placeholder="Digite o valor" value={valor} onChange={setValor} keyboard="decimal"/>
                        <Button text="Adicionar" onPress={handleAdd}/>
                    </ModalStyled>

                    <Button text={"ADICIONAR CRÉDITO"} onPress={() => setModal(true)}/>

                    {
                        transacoes.map((transacao, index) => (
                            <View key={index} style={styles.transacao}>
                                <Text style={styles.title}>{transacao.titulo}</Text>
                                <Text style={styles.descricao}>{transacao?.descricao}</Text>
                                <Text style={styles.descricao}>{new Date(transacao.dataCadastro).toLocaleString()}</Text>
                                <Text style={[styles.valor, {color: transacao.valor<0 ? "#B91717" : "#3EB620"}]}>
                                
                                {transacao.valor.toFixed(2)}
                                </Text>
                            </View>
                        ))
                    }
                </Content>
            </Container>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    transacao: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        position: 'relative',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },

    title: {
        color: '#000',
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    },

    descricao: {
        color: '#555',
        fontSize: 16,
        fontFamily: 'Roboto-Regular'
    },

    valor: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        position: 'absolute',
        right: 10,
        bottom: 10
    }
})

export default Transacao;