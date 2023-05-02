import React from 'react';
import Container from '../components/Container';
import Content from '../components/Content';
import Back from '../components/Back';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Recuperar({navigation}) {
    return (
        <Container background>
            <Content>
                <Back onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Recuperar</Text>

                <View style={styles.inputs}>
                    <Input placeholder='Email' />
                    <Button text="Recuperar Senha" />
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