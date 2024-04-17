import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors  from '../utilities/Colors';
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";

function StartGameScreen({onInputNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    function inputHandler(enteredValue){
        setEnteredNumber(enteredValue);
    }

    function confirmInput(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number', 'Number entered should be greater than 0', 
            [{text: 'Okay', style: 'destructive', onPress: resetNumber}]); 
            return;
        }
        onInputNumber(chosenNumber);
        // resetNumber();

    }

    function resetNumber(){
        setEnteredNumber('');
    }

    return (   
        <View>
            <View style={styles.main}>
                <Text style={styles.heading}>Guess the Number</Text>
            </View>
            
            <Card>
                <Instructions>Enter the Number</Instructions>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    onChangeText={inputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: 90        
    },
    heading: {
         paddingTop: 120,
         color: 'white',
         fontSize: 20,
         paddingHorizontal: 129,
         fontWeight: 'bold',
         marginTop: 50
    },
    inHeading: {
        color: '#ffffff',
        fontSize: 15
    },
    inputContainer: {
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 34,
       marginTop: 40,
       padding: 35,
       backgroundColor: '#69637b',
       borderRadius: 10
    },
    buttonContainer: {
        flex: 1  
     },
    buttonsContainer: {
       flexDirection: 'row'
       
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 30,
        borderBottomWidth: 2,
        borderBottomColor: Colors.globalText,
        color: Colors.globalText,
        fontWeight: 'bold',
        marginVertical: 6,
        textAlign: 'center'
    }
});

export default StartGameScreen;

