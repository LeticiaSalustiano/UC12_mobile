import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

//3 notícias com titulo e imagem


  class App extends Component{

    constructor(props){
   super(props);
   this.state = {titulo: 'Notícias'}
   this.entrar = this.entrar.bind(this)
    }

entrar(titulo){

this.setState({titulo:titulo})

}

    render(){
          
        return(
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={{margin: 50, fontSize: 30}}>{this.state.titulo}</Text> 
             <Button title='Entrar' onPress={ ()=> this.entrar('novo 1')}></Button>
             <Button title='Entrar' onPress={ ()=> this.entrar('novo 2')}></Button>
             <Button title='Entrar' onPress={ ()=> this.entrar('novo 3')}></Button>
          </View>
        );
    }
}

 export default App

class Cartao extends Component{
    render(){

       let imagem = 'https://www12.senado.leg.br/noticias/materias/2020/09/15/agravamento-de-incendios-em-mato-grosso-do-sul-mobiliza-senadores/fogo-pantanal-br-262-foto-chico-ribeiro-33-copia.jpg/mural/imagem_materia'

       return(
        <View  style={{}}>
          <Text style={{fontSize: 20, color: 'black', marginLeft: 20, marginTop: 20}}>{this.props.noticia}</Text>
          <Image source={{uri:imagem}} style={{alignSelf: 'center', width:this.props.altura, height:this.props.largura, marginTop: 50}}></Image>
        </View>
      );
    }
  }
  
