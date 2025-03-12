/* 
   Desafio Banco
 Abertura da conta 

 nome e logo fixo na parte superior

 dados pra abertura da conta

 nome (textInput)
 idade (textInput)
 sexo (Picker)  (masculino, feminino ou prefiro não opinar)
 seu limite (slider)
 estudante (switch)

 botão para abrir a conta
 mostrar os dados e um alert, não pode ter dados em branco ou mostrar na tela e confirmar a abertura da conta
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, Slider, Switch, Button, Alert } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 'masculino',
      limite: 0,
      estudante: false,
    };
  }

  handleSubmit = () => {
    const { nome, idade, sexo, limite, estudante } = this.state;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !idade) {
      Alert.alert('Erro', 'Nome e idade são obrigatórios!');
    } else {
      // Exibe os dados preenchidos e confirma a abertura da conta
      Alert.alert(
        'Confirmar Abertura de Conta',
        `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`,
        [
          {
            text: 'Confirmar',
            onPress: () => {
              // Aqui você pode adicionar qualquer lógica adicional para abrir a conta
              Alert.alert('Conta aberta com sucesso!');
            },
          },
          { text: 'Cancelar' },
        ]
      );
    }
  };

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.logo}>Banco Para Todos</Text>

        {/* Formulário para abrir a conta */}
        <View style={estilos.formContainer}>
          <TextInput
            style={estilos.input}
            placeholder="Nome"
            onChangeText={(text) => this.setState({ nome: text })}
            value={this.state.nome}
          />

          <TextInput
            style={estilos.input}
            placeholder="Idade"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ idade: text })}
            value={this.state.idade}
          />

          <Text>Sexo</Text>
          <Picker
            selectedValue={this.state.sexo}
            style={estilos.picker}
            onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          >
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Feminino" value="feminino" />
            <Picker.Item label="Prefiro não opinar" value="prefiro_nao_opinar" />
          </Picker>

          <Text>Limite de Crédito</Text>
          <Slider
            style={estilos.slider}
            minimumValue={250}
            maximumValue={5000}
            step={100}
            value={this.state.limite}
            onValueChange={(value) => this.setState({ limite: value })}
          />
          <Text>R${this.state.limite.toFixed(2)}</Text>

          <View style={estilos.switchContainer}>
            <Text>Estudante</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(value) => this.setState({ estudante: value })}
            />
          </View>

          {/* Botão para abrir a conta */}
          <Button title="Abrir Conta" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default App;
