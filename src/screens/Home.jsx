import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../components/Menu';
import Container from '../components/Container';
import Content from '../components/Content';
import { useAuth } from '../hooks/useAuth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const auth = useAuth()

    return (
        <React.Fragment>
            <Menu navigation={navigation} />
            <Container>
                <Content center>
                    <View style={styles.section}>
                        <Text style={styles.title}>Olá! Seja bem-vindo(a)</Text>
                        <Text style={styles.subtitle}>
                            {auth?.user?.nome.split(" ")[0]}
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.title}>Crie anúncios</Text>
                        <Ionicons name="ios-megaphone" style={styles.subtitle} />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.title}>Gere insights</Text>
                        <MaterialCommunityIcons name="lightbulb-on-outline" style={styles.subtitle} />
                    </View>
                </Content>
            </Container>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 10,
    },

    title: {
        fontFamily: "Montserrat-Bold",
        color: "#555",
        fontSize: 30,
        textAlign: "center",
    },

    subtitle: {
        fontFamily: "Pacifico-Regular",
        color: "#9A30F2",
        fontSize: 40,
    },

})