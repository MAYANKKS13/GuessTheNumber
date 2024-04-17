import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from '../../utilities/Colors';

function PrimaryButton({children, onPress}){

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} style={styles.buttonInnerContainer} android_ripple={{color: '#6d6781'}} >
                <Text style={styles.buttonText}>{children}</Text>         
            </Pressable>
        </View>
    );   
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 16,
        margin: 4,
        marginTop: 20,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#000000', /*'#3f3c47'*/
        paddingHorizontal: 15,
        paddingVertical: 8,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default PrimaryButton;