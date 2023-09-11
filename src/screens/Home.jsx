import React from 'react';
import { Text } from 'react-native';
import Menu from '../components/Menu';

export default function Home({navigation}) {
    return (
        <>
        <Menu navigation={navigation} />
        <Text>Home</Text>
        </>
    );
}