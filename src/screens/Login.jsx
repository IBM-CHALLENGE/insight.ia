import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Container from "../components/Container";
import Content from "../components/Content";
import Logo from "../../assets/images/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";
import { logar } from "../api/usuario";

export default function Login({ navigation }) {

  const auth = useAuth()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function validarCampos() {
    if (email === '' || senha === '') {
      alert('Erro', 'Preencha todos os campos')
      return false
    }

    if (senha.length < 5) {
      alert('Erro', 'A senha deve ter no mínimo 5 caracteres')
      return false
    }

    if (RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) === false) {
      alert('Erro', 'Email inválido')
      return false
    }

    return true
  }

  async function handleLogin() {
    if (validarCampos()) {

      const user = {
        email: email,
        senha: senha
      }

      const response = await logar(user)

      if (response.ok) {
        const json = await response.json()
        auth.login(json)
      }
      
      else if (response.status === 404) {
        alert('Erro', 'Email ou senha incorretos')
      } 
      
      else {
        alert('Erro', 'Erro ao realizar o login')
      }
    }
  }

  return (
    <Container background>
      <Content center>
        <View style={styles.head}>
          <Image source={Logo} style={styles.logo} />

          <Text style={styles.textContainer}>
            <Text style={styles.textInsight}>Insight</Text>
            <Text style={styles.textIa}>.ia</Text>
          </Text>
        </View>

        <View style={styles.inputs}>
          <Input placeholder='Email' value={email} onChange={setEmail} keyboard={'email'} />
          <Input placeholder='Senha' password value={senha} onChange={setSenha} />
          <Button text="Entrar" onPress={handleLogin}/>
        </View>

        <View style={styles.links}>

          {/* <Text
            style={styles.link}
            onPress={() => navigation.navigate('Recuperar')}
          >
            Recuperar senha
          </Text> */}

          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Cadastro')}
          >
            Desejo me cadastrar
          </Text>

        </View>

      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  head: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50
  },

  logo: {
    height: 150,
    width: 150,
  },

  textContainer: {
    textAlign: "center",
  },

  textInsight: {
    fontFamily: "Pacifico-Regular",
    fontSize: 60,
    color: "#FFF",
  },

  textIa: {
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    color: "#55AAFF",
    marginLeft: 3,
  },

  inputs: {
    display: 'flex',
    gap: 20,
    marginBottom: 60
  },

  links: {
    display: 'flex',
    gap: 15,
  },

  link: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
    textDecorationLine: 'underline',
  }
});
