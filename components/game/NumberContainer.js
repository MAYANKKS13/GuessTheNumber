import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utilities/Colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       borderWidth: 2,
       borderColor: '#a79898',
       padding: 15,
       borderRadius: 8,
       margin: 24,
       alignItems: 'center',
       justifyContent: 'center'
    },
    numberText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#a79898'         

    }
});

export default NumberContainer;