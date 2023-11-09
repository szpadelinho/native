import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolishKing'
import KingsList from './KingsList'

export default function App() {
  let kings = [
    {id: 1, name: "Bolesław Chrobry", rokStart: 992, rokKoniec: 1025},
    {id: 2, name: "Bolesław Chrobry", rokStart: 1025, rokKoniec: 1031},
    {id: 3, name: "Bolesław Śmiały", rokStart: 1058, rokKoniec: 1079},
    {id: 4, name: "Przemysław II", rokStart: 1295, rokKoniec: 1296},
  ]
  return (
    <View>
      {/* <PolishKing name="Król" rokStart={1999} rokKoniec={2000}/> */}
      <Text>Lista królów</Text>
      <KingsList kingsList={kings}/>
    </View>
  )
};
