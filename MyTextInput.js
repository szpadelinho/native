import {View, Text, TextInput} from "react-native";

const MyTextInput = ({label, value, placeholder, onChangeText, multiline = false, numberOfViewLine = 1}) => {
    return(
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: 15, marginRight: 5}}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} multiline={multiline} numberOfLines={numberOfViewLine} style={{height: 40, borderColor: "grey", borderWidth: 1, marginBottom: 10, padding: 10}}>

            </TextInput>
        </View>
    )
}

export default MyTextInput;