import { Text, StyleSheet } from "react-native";
import Colors from "../../utilities/Colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>

    );
} 

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.globalText,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.globalText,
        padding: 12
    }
});

export default Title;