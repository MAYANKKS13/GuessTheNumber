import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({userNumber, roundNumber, startNewGame}) {
    return (
        <View style={styles.container}>
          {/* <Text style={styles.content}>Game Over!</Text> */}
          {/* <Title>Game Is Over</Title> */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/gameover.png')} />
          </View>
          <Text style={styles.content}>
            You needed <Text>{roundNumber}</Text> rounds to guess the number <Text>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={startNewGame}>PLAY AGAIN</PrimaryButton>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 250,
        height: 300,
        width: 300,
        borderRadius: 150,
        overflow: 'hidden',
       
    },
    image: {
        height: '100%',
        width: '100%'
    }
});

export default GameOverScreen;