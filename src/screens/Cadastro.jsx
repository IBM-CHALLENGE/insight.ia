import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';
import Content from '../components/Content';
import Input from '../components/Input';
import Button from '../components/Button';
import Back from '../components/Back';

export default function Cadastro({navigation}) {
    return (
        <Container background>
            <Content center>
                <Back onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Cadastro</Text>

                <View style={styles.inputs}>
                    <Input placeholder='Nome' />
                    <Input placeholder='Email' />
                    <Input placeholder='Senha' password />
                    <Input placeholder='Confirmar Senha' password />
                    <Button text="Cadastrar" />
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({

    title: {
        fontFamily: 'Montserrat-Black',
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30
    },

    inputs: {
        display: 'flex',
        gap: 30,
        marginBottom: 60
    },
});