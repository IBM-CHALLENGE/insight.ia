import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Content from '../components/Content';
import { useAuth } from '../hooks/useAuth';
import Input from '../components/Input';
import Button from '../components/Button';
import alert from '../components/Alert';
import { atualizar, deletar } from '../api/usuario';

export default function Perfil({ navigation }) {

    const auth = useAuth()
    const [nome, setNome] = useState(auth.user.nome ?? '');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleLogout = () => {
        alert('Deslogar', 'Deseja realmente sair?', [
            {
                text: 'Confirmar',
                onPress: () => auth.logout(),
                style: 'default',
            },
            {
                text: 'Cancelar',
                onPress: () => { },
                style: 'cancel',
            },
        ])
    }

    const handleDelete = () => {
        alert('Apagar conta', 'Deseja realmente apagar sua conta?', [
            {
                text: 'Confirmar',
                onPress: async () => {
                    const response = await deletar(auth.token)
                    if(response.ok){
                        alert('Sucesso', 'Conta apagada com sucesso')
                        auth.logout()
                    }
                },
                style: 'default',
            },
            {
                text: 'Cancelar',
                onPress: () => { },
                style: 'cancel',
            },
        ])
    }

    const handleEdit = async () => {
        if(validarCampos()){
            const user = {
                nome: nome.trim(),
                senha: senha,
                email: auth?.user?.email
            }

            const response = await atualizar(auth.token, user)

            if(response.ok){
                alert('Sucesso', 'Perfil atualizado com sucesso')  
                setSenha('')
                setConfirmarSenha('') 
                auth.fetchUsuario()
            }

            else{
                alert('Erro', 'Erro ao atualizar o perfil')
            }
        }
    }

    function validarCampos(){

        if(nome.length < 3){
            alert('Erro', 'O nome deve ter no mínimo 3 caracteres')
            return false
        }

        if(senha.length > 0 && senha.length < 5){
            alert('Erro', 'A senha deve ter no mínimo 5 caracteres')
            return false
        }

        if(senha !== confirmarSenha){
            alert('Erro', 'As senhas não coincidem')
            return false
        }

        return true
    }



    return (
        <React.Fragment>
            <Menu navigation={navigation} />
            <Container>
                <Content>
                    <View style={styles.inputs}>
                        <Input placeholder='Nome' value={nome} onChange={setNome} />
                        <Input placeholder='Email' value={auth?.user.email} disabled />
                        <Input placeholder='Senha' password value={senha} onChange={setSenha} />
                        <Input placeholder='Confirmar Senha' password value={confirmarSenha} onChange={setConfirmarSenha} />
                        
                        <Button text="Editar Perfil" onPress={handleEdit}/>
                        <Button variation="danger" text="Desativar Conta" onPress={handleDelete} />
                        <Button variation="transparent" text="Sair" onPress={handleLogout}/>
                    </View>
                </Content>
            </Container>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    inputs: {
        display: 'flex',
        gap: 30,
        marginBottom: 60
    },
})