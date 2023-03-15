import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    const navigation = useNavigation()
    return(
        <View styles={styles.screen}>
            <Text>This is the home screen</Text>
            <Button title="Move to detail" onPress={() => navigation.navigate('Event')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen