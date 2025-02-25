import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo: 'Brasil Notícias',
      imagem: 'https://cdn.pixabay.com/video/2022/03/27/112034-692839342_tiny.jpg',
      noticia: 'Notícias',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(titulo, imagem, noticia) {
    this.setState({ titulo, imagem, noticia });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{this.state.titulo}</Text>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 1', 'https://imagens.ebc.com.br/AYxGxkogz-1PWAls2_l1vtoGkXI=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/_ja_2165_0.jpg?itok=ZXtrpUXD', 'Incêndio no Pantanal')} />
        <Text style={styles.text}></Text>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 2', 'https://services.meteored.com/img/article/desmatamento-na-amazonia-cresce-pelo-5-mes-seguido-com-o-para-liderando-o-ranking-de-degradacao-1732733824825_512.png', 'Desmatamento na Amazônia')} />
        <Text style={styles.text}></Text>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 3', 'https://wwfbrnew.awsassets.panda.org/img/original/certaf.jpg', 'Crise de Água no Brasil')} />

        <ScrollView style={styles.noticia}>
          <Cartao
            noticia={this.state.noticia}
            imagem={this.state.imagem}
            altura={250}
            largura={300}
          />
        </ScrollView>
      </View>
    );
  }
}

class Cartao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text2}>
          {this.props.noticia}
        </Text>
        <Image source={{ uri: this.props.imagem }} style={styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20
  },

  titulo:{
    margin: 50, 
    fontSize: 30
  },

  text:{
    marginTop: 1,      
  },

  noticia:{
    marginTop: 20
  },

  text2:{
    fontFamily: 'arial', 
    fontSize: 25, 
    color: 'black', 
    margin: 20, 
    marginTop: 20, 
    textAlign: 'center' 
  },

  img:{
    alignSelf: 'center', 
    width: 300, 
    height: 250, 
    marginTop: 30 
  }

});

export default App


  //3 notícias com titulo e imagens diferentes ao clicar os botoes

