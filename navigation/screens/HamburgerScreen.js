import * as React from 'react';
import { View, Text } from 'react-native';

export default function HamburgerScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Hamburger menu" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Account Screen</Text>
        </View>
    );
}