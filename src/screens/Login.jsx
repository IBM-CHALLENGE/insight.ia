import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Container from "../components/Container";
import Content from "../components/Content";
import Logo from "../../assets/images/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
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
            <Input placeholder='Senha' />
            <Button text="Entrar" />
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
    fontFamily: "Pacifico",
    fontSize: "3rem",
    color: "#FFF",
  },

  textIa: {
    fontFamily: "Poppins 700",
    fontSize: "2rem",
    color: "#55AAFF",
    fontWeight: 700,
    marginLeft: 3,
  },

  inputs:{
    display: 'flex',
    gap: 20
  }
});
