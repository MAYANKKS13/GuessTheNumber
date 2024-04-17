import { View, StyleSheet } from "react-native";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 34,
        marginTop: 40,
        padding: 35,
        backgroundColor: '#69637b',
        borderRadius: 10
     }
});

export default Card;