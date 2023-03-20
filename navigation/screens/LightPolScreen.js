import * as React from 'react';
import { View, Text } from 'react-native';

export default function LightPolScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Light Pollution" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Light Pollution Screen</Text>
        </View>
    );
}