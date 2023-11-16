import {View, Text, Button} from "react-native";

const KingChild = ({onDataReceiver}) => {

    function sendChildToApp(){
        const data = "I am a king child"
        onDataReceiver(data)
    }

    return(
        <View>
            <Text>Jestem KingChild</Text>
            <Button title="Wyślij dziecko do App.js" onPress={sendChildToApp}></Button>
        </View>
    )
}

export default KingChild