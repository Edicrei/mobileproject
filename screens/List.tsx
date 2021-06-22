import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';


import ecommerce from '../api/ecommerce';

export default class List extends React.Component {
  state = {
    data: []
  }

  async componentDidMount() {
    await ecommerce.get(`/product/list`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })

    
  }


 
  render() {
  return (
    <View style={styles.container}> 

    
        <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <View>
                  
                  <Text> {item.name} </Text>
                  <Text> {item.price} </Text>

                </View>
              )}
              />
    
    </View>
  );
  }
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
