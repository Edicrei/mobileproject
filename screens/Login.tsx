import React from 'react';
import { Button, StyleSheet, View} from 'react-native';
import axios  from 'axios'
import InputTextField from '../components/InputTextField/index';

import ecommerce from '../api/ecommerce';

import { useNavigation } from '@react-navigation/core';

export default function Login (){

  const navigation = useNavigation();

  const [ login, setlogin ] = React.useState('');
  const [ password, setpassword ] = React.useState('');

  async function Login(){
    await ecommerce.post('/user/login', {        
      login:  login,      
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    navigation.navigate('Login')
  }



  return (
     <View style={styles.container}> 
         <InputTextField label="Email" value={login} onChange={setlogin} />     
             <InputTextField label="Senha" value={password} onChange={setpassword} />
             <View    style={styles.button}>
              <Button
                title="Login"
                onPress={() => Login()}
              />
              </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button:{
    marginTop: 10,
    width: 150,
    height: 30
  }
});

