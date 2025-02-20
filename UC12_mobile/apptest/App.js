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

    let castelo = 'Nárnia'
    
    return(
      <View>
        <Text style={{fontSize: 30, textAlign:'center', marginTop: 30}}>{castelo}</Text>
        <Cartao nome='Aurora' altura={60} largura={70}></Cartao>
        <Cartao nome='Bella' altura={50} largura={60}></Cartao>
        <Cartao nome='Sophia' altura={40} largura={50}></Cartao>
        
      </View>
    );
  }
}

export default App


class Cartao extends Component{
  render(){
    let imagem = 'https://cdn-icons-png.flaticon.com/512/1596/1596580.png'

    return(
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: 'violet', textAlign:'center', marginTop: 40}}>{this.props.nome}</Text>
        <Image source={{uri:imagem}} style={{width:this.props.altura, height:this.props.largura}}></Image>
      </View>
    );
  }
}
