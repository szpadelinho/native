import {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import PolishKing from './PolishKing';
import KingsList from './KingsList';
//import KingChild from './KingChild';
import MyRadioButton from './MyRadioButton';

export default function App() {
  // let kings = [
  //   {id: 1, name: "Bolesław Chrobry", rokStart: 992, rokKoniec: 1025},
  //   {id: 2, name: "Bolesław Chrobry", rokStart: 1025, rokKoniec: 1031},
  //   {id: 3, name: "Bolesław Śmiały", rokStart: 1058, rokKoniec: 1079},
  //   {id: 4, name: "Przemysław II", rokStart: 1295, rokKoniec: 1296},
  // ]

  // const [childData, setChildData] = useState(null)

  // function childDataHandler(dataFromChild){
  //   setChildData(dataFromChild);
  // }
  //const [priority, setPriority] = useState("")
  const [isEnabled, setIsEnabled] = useState(false)
  function toggleSwitch(){

  }
  return (
    <View style={styles.container}>
      {/* <PolishKing name="Król" rokStart={1999} rokKoniec={2000}/>
      <KingsList kingsList={kings}/>
      <KingChild onDataReceiver={childDataHandler}/>
      <Text style={{marginTop: 30}}>Dane otrzymane od rodzica</Text>
      <Text>Dane: {childData}</Text> */}
      {/* <MyRadioButton value="Kwestia bardzo pilna" checked={priority} onValueChange={setPriority} label="Kwestia bardzo pilna"/>
      <MyRadioButton value="Kwestia mniej pilna" checked={priority} onValueChange={setPriority} label="Kwestia mniej pilna"/> */}
      <Switch trackColor={{false: "#767577", true: "#81b097"}} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChage={toggleSwitch}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isEnabled ? "black" : "white", //fix isEnabled
    alignItems: "center",
    justifyContent: "center"
  }
})