import {Text, View, StyleSheet} from "react-native";

const PolishKing = ({name, rokStart, rokKoniec}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>Polish king - {name};<br/> Lata panowania: {rokStart} - {rokKoniec}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#abc111",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
    },

    textContainer: {
        color: 'white',
        fontWeight: "700",
        textAlign: "center",
        textShadow: "0px 0px 1px black"
    }
})

export default PolishKing;