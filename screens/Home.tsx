import React from "react";
import { View, Button, StyleSheet, Image} from "react-native";
import { useNavigation } from '@react-navigation/core';

export default function Home(){

  const navigation = useNavigation();

  return (
    <View style={styles.center}>
       <Image style={styles.logo} source={require('../assets/logo.png')}/>
      <View    style={styles.button}>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
     </View>
     
     <View    style={styles.button}>
     <Button
        title="Register"
     
        onPress={() => navigation.navigate("Register")}
      />
      </View>

     
     
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button:{
    marginTop: 10,
    width: 150,
    height: 30
  },
  text:{
    fontSize: 28,
  },
  logo: {
    width: 100,
    height: 100
  }
});

