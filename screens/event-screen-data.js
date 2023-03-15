import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const EventDetailScreen = () => {
    const navigation = useNavigation()
    return(
        <View styles={styles.screen}>
            <Text>This is the event detail screen</Text>
            <Button title="Move to home screen" onPress={()=>navigation.navigate('Home')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default EventDetailScreen