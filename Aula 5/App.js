import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.pegar = this.pegar.bind(this);
  }

  pegar(texto){
    if(texto.length > 0){
    this.setState({nome: 'Olá, seja bem vindo(a)! ' + texto});
  } else{
  this.setState({nome: ''})
  }
}

  render(){

    return(
      <View style={estilos.container}>
        <TextInput style={estilos.caixa} placeholder='Digite seu nome' 
        onChangeText={this.pegar}></TextInput>
        <Button title='Entrar' onPress={() => this.pegar(this.state.nome)} style={estilos.btn}><Text>{this.state.nome}</Text></Button>
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
     container:{
      flex: 1,

     },

     caixa:{
      width: 370,
      marginTop: 50,
      borderStyle: 'solid',
      borderWidth: 0.2,
      borderColor: 'black',
      margin: 10
     },

     texto:{
      padding: 25,
      fontSize: 20,
      textAlign: 'center'
     },

     btn:{
      
     }
});

export default App



