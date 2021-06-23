import React from 'react';
import { Button, StyleSheet,  View, Alert  } from 'react-native';
import axios  from 'axios'
import InputTextField from '../components/InputTextField';

import ecommerce from '../api/ecommerce';

import { useNavigation } from '@react-navigation/core';

export default function Register() {

  const navigation = useNavigation();
  const [ name, setName ] = React.useState('');
  const [ age, setAge ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ address, setAddress ] = React.useState('');
  const [ userPassword, setUserPassword ] = React.useState('');

  async function postUser(){
   await ecommerce.post('/user/customer/add', {
      address: address,
      age:  parseInt(age),
      name: name,      
      email:  email,      
      userPassword: userPassword,
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('Login')
    })
    .catch(function (error) {
      console.log(error);

       Alert.alert('É permitido apenas maior de 18 anos !!')
    });

    //
  }

  
 

  return (
    <View style={styles.container}>
      <InputTextField label="Nome" value={name} onChange={setName} />
        <InputTextField label="Idade" value={age} onChange={setAge} />
         <InputTextField label="Email" value={email} onChange={setEmail} />
          <InputTextField label="Endereço" value={address} onChange={setAddress} />
             <InputTextField label="Senha" value={userPassword} onChange={setUserPassword} />
             <View    style={styles.button}>
              <Button
                title="Register"
                onPress={() => postUser()}
              />
              </View>
    </View>
  );
}

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
