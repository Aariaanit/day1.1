import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bubu e don Dudu 100%!</Text>
      <Button color="red" title='Google' onPress={()=>{Linking.openURL('https://google.com')}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    fontSize:'25px',
    justifyContent:'center',
  }

});
