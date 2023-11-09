import {Text, View, StyleSheet} from 'react-native';

const KingsList = ({kingsList}) => {
    const {id, name, rokStart, rokKoniec} = kingsList[0]

    return(
        <View>
            <Text>Kings list {id}, {name}, {rokStart} - {rokKoniec}</Text>
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

export default KingsList;