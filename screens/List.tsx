import React from 'react';
import {  StyleSheet, Text, View,  FlatList } from 'react-native';


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

      console.log(this.state.data)
  }


 
  render() {
  return (
    <View style={styles.container}> 

    
        <FlatList
              data={this.state.data}
             
              renderItem={({ item }) => (
                <View style={styles.list}>
                  
                  <Text> Nome: {item.name} </Text>
                  <Text> Preço: {item.price} </Text>
                  <Text> Quantidade :{item.amount} </Text>
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
  },
  list:{
    alignContent: 'center', 
    marginTop: 50,
    borderColor: '#000',
    borderEndWidth: 0.5,
    borderStartWidth:  0.5,
    borderBottomWidth:  0.5,
    borderTopWidth:  0.5,
  }
});
