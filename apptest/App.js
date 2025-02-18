import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

/*export default function App(){
  return(
    <View>
       <Text>Olá mundo</Text>
    </View>
  )
}*/

class App extends Component{
  render(){
     let nome = 'Aurora'
     let imagem = 'https://cdn-icons-png.flaticon.com/512/1596/1596580.png'

    return(
      <View>
        <Text style={{fontSize: 30, color: 'violet', textAlign:'center', marginTop: 100 }}>{nome}</Text>
        <Image source={{uri:imagem}} 
        style={{width:400, height:400, marginTop: 50 }}>
        </Image>
      </View>
    );
  }
}

export default App


