/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" }
    this.calcular = this.calcular.bind(this);
  }

  calcular() {

    var imc = this.state.massa / Math.pow(this.state.altura, 2);

    var s = this.state;
    s.resultado = imc;

    if (s.resultado < 16) {
      s.resultadoText = "Magreza Leve";

    } else if (s.resultado < 17) {
      s.resultadoText = "Magreza Moderada";

    } else if (s.resultado < 18.5) {
      s.resultadoText = "Magreza Leve";

    } else if (s.resultado < 25) {
      s.resultadoText = "Saudavel";

    } else if (s.resultado < 30) {
      s.resultadoText = "Sobrepeso";

    } else if (s.resultado < 35) {
      s.resultadoText = "Obesidade Grau I";

    } else if (s.resultado < 40) {
      s.resultadoText = "Obesidade Grau II (Severa)";

    } else {
      s.resultadoText = "Obesidade Grau III (Mórbida)";

    }

    this.setState(s);

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) => { this.setState({ massa }) }} />
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => { this.setState({ altura }) }} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>
          {this.state.resultado.toFixed(2)}
        </Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24
  },
  button: {
    backgroundColor: "#89ffa5"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold"
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15
  }
});
