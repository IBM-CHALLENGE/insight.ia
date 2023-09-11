import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';
import Content from '../components/Content';
import Input from '../components/Input';
import Button from '../components/Button';
import Back from '../components/Back';
import alert from '../components/Alert';
import { cadastrar } from '../api/usuario';

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function validarCampos(){
        if(nome === '' || email === '' || senha === '' || confirmarSenha === ''){
            alert('Erro', 'Preencha todos os campos')
            return false
        }

        if(nome.length < 3){
            alert('Erro', 'O nome deve ter no mínimo 3 caracteres')
            return false
        }

        if(senha.length < 5){
            alert('Erro', 'A senha deve ter no mínimo 5 caracteres')
            return false
        }

        if(senha !== confirmarSenha){
            alert('Erro', 'As senhas não coincidem')
            return false
        }

        if(RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) === false){
            alert('Erro', 'Email inválido')
            return false
        }

        return true
    }

    async function handleCadastrar(){
        if(validarCampos()){

            const user = {
                nome: nome,
                email: email,
                senha: senha
            }

            const response = await cadastrar(user)

            if(response.ok){
                alert('Sucesso', 'Cadastro efetuado com sucesso')
                navigation.goBack()
            }

            else if(response.status === 409){
                alert('Erro', 'Email já cadastrado')
            }

            else if(response.status === 400){
                alert('Erro', 'Campos inválidos')
            }

            else{
                alert('Erro', 'Erro ao efetuar cadastro')
            }
        }
    }

    return (
        <Container background>
            <Content>
                <Back onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Cadastro</Text>

                <View style={styles.inputs}>
                    <Input placeholder='Nome' value={nome} onChange={setNome}/>
                    <Input placeholder='Email' value={email} onChange={setEmail} keyboard={'email'}/>
                    <Input placeholder='Senha' password value={senha} onChange={setSenha}/>
                    <Input placeholder='Confirmar Senha' password value={confirmarSenha} onChange={setConfirmarSenha}/>
                    <Button text="Cadastrar" onPress={handleCadastrar} />
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