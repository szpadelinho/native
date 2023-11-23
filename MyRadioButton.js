import {useState} from "react";
import {View, Text, Switch} from "react-native";
import {RadioButton} from "react-native-paper";

const MyRadioButton = ({value, checked, onValueChange, label}) => {

    //const [userChoice, setUserChoice] = useState("");

    return(
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <RadioButton value={value} status={checked === value ? "checked" : "unchecked"} onPress={() => onValueChange(value)}/>
            <Text>{label}</Text>
        </View>
    )
}

export default MyRadioButton;