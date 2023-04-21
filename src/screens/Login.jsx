import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Container from "../components/Container";
import Content from "../components/Content";
import Logo from "../../assets/images/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login({navigation}) {
  return (
    <Container background>
      <Content>
        <View style={styles.head}>
          <Image source={Logo} style={styles.logo} />

          <Text style={styles.textContainer}>
            <Text style={styles.textInsight}>Insight</Text>
            <Text style={styles.textIa}>.ia</Text>
          </Text>
        </View>

        <View style={styles.inputs}>
            <Input placeholder='Email' />
            <Input placeholder='Senha' password />
            <Button text="Entrar" />
        </View>

        <View style={styles.links}>
          <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>Recuperar senha</Text>
          <Text style={styles.link}>Desejo me cadastrar</Text>
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

  inputs:{
    display: 'flex',
    gap: 20,
    marginBottom: 60
  },

  links:{
    display: 'flex',	
    gap: 15,
  },

  link:{
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
    textDecorationLine: 'underline',
  }
});
