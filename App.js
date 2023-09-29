import { Text, View, StyleSheet, Button,Pressable} from 'react-native';
import {useState} from "react";
import CounterButton from "./components/CounterButton";

export default function App() {
  const[counter,setCounter]=useState(0);


  function onButtonClicked(){
    console.log("Button Clicked");
    console.log(`Before Pressing the counter was at ${counter}`);
    setCounter(counter +1);
  }

  function printEncouragingText(){
    if (counter >=20){
      return "Excellent";
      
    }
    else if (counter >=10){
      return "Keep Going" ;
    }
  }

  return (
    <View style={styles.container}>
      <Text> {counter} </Text>
      <CounterButton Text="Click Me" onPress={onButtonClicked}/>
      <Text style={styles.encouragingText}>{printEncouragingText()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText:{
    marginTop:50,
    color:"#AAAAAA",
  },

});