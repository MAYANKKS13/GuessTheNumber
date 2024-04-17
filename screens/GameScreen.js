import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";
import { Ionicons } from '@expo/vector-icons';

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber == exclude){
        return generateRandomNumber(min, max, exclude);
    }
    else{
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, gameIsOver}){
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const[guess, setGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(guess === userNumber){
           gameIsOver();
        }
    }, [guess, userNumber, gameIsOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if((direction === 'lower' && guess < userNumber) || (direction === 'greater' && guess > userNumber)){
            Alert.alert("Don't lie", 'You know that it is wrong',[{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = guess;
        }
        else {
            minBoundary = guess + 1;
        } 
        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, guess);   
        setGuess(newRandomNumber);    
        setGuessRounds(prevGuessRounds => [newRandomNumber,...prevGuessRounds]);
    }
     
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <Instructions style={styles.instruction}>Higher or Lower</Instructions>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-circle" size={25} color="white" />
                      </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-circle" size={25} color="white" />
                      </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.details}>
                <Text style={styles.guessList}>List of Opponent's Guesses</Text>
                <FlatList 
                   data={guessRounds} 
                   renderItem={(itemData) => <Text style={styles.log}>{itemData.item}</Text>} 
                   keyExtractor={(item) => item}
                />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 70,
        marginTop: 100,
        alignItems: 'center'
    },
    details: {
        marginTop: 25,
        alignItems: 'center'
    },
    guessList: {
        color: '#ffffff',
        fontSize: 22
    },
    log: {
        color: '#ffffff',
        padding: 4
    },
    buttonContainer: {
        flex: 1  
     },
    buttonsContainer: {
       flexDirection: 'row'
       
    }
});

export default GameScreen;