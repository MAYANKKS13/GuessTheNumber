import { Text, StyleSheet } from "react-native";

function Instructions({children, style}) {
     return (
        <Text style={[styles.heading, style]}>{children}</Text>
     );
}

const styles = StyleSheet.create({
    heading: {
        color: '#ffffff',
        fontSize: 15
    }
});

export default Instructions;