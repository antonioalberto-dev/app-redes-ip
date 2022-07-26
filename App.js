import {Alert, Button, StatusBar, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default function App() {

  const [ip, setIp] = useState('');

  const verificarIP = () => {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja excluir este item?',
      // [
      //     {
      //     text: 'Não',
      //     onPress: () => console.log('Cancel Pressed'),
      //     style: 'cancel'
      //     },
      //     { text: 'Sim', onPress: () => console.log('deleted') }
      // ],
      // { cancelable: false }
      );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Image style={styles.image} source={require('./assets/img/server-bro.png')}/>
      <Text style={styles.textPrinc}>Endereço IP</Text>
      <TextInput placeholder='Endereço IP' style={styles.input}/>
      <TouchableOpacity style={styles.btnVerificar} onPress={() => verificarIP()}>
        <Text style={{color: '#FFF', fontFamily: 'Poppins-Medium',}}>Verificar</Text>
      </TouchableOpacity>
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
  textPrinc: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#004b76'
  }, 
  input: {
    height: 45,
    width: 250,
    paddingHorizontal: 30,
    marginTop: 15,
    fontSize: 14,
    borderColor: '#0f0',
    borderStyle: 'solid',
    borderRadius: 18,
    backgroundColor: '#c9e1ef',
    fontFamily: 'Poppins-Regular'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  btnVerificar: {
    marginVertical: 15,
    borderStyle: 'solid',
    borderColor: '#004b76',
    borderRadius: 18,
    backgroundColor: '#004b76',
    width: 250,
    height: 40,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  }
});
