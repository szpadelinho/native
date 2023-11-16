import {Text, View, StyleSheet, FlatList} from 'react-native';

const KingsList = ({kingsList}) => {
    

    return(
        <View>
            <Text>Kings list</Text>
            <FlatList data = {kingsList} renderItem ={({item}) => <View><Text>id: {item.id}, name: {item.name}, panowanie: {item.rokStart} - {item.rokKoniec}</Text> </View>}/>
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