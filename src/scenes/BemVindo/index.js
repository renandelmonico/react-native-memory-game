import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const style = StyleSheet.create({
  viewPrincipal: {
    flexDirection: 'column',
    flex: 1
  },
  viewTitulo: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitulo: {
    fontSize: 20
  },
  viewButtons: {
    flex: .5,
    padding: 10
  },
  touchable: {
    marginTop: 10
  }
})

export default class BemVindo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.viewPrincipal}>
        <View style={style.viewTitulo}>
          <Text style={style.textTitulo}>Bem-vindo ao jogo da memória</Text>
        </View>
        <View style={style.viewButtons}>
          <TouchableOpacity style={style.touchable}>
            <Button title="Jogar" onPress={() => this.goToScene('Nome')} />
          </TouchableOpacity>
          <TouchableOpacity style={style.touchable}>
            <Button title="Top 10" onPress={() => this.goToScene('Rank')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  goToScene(scene) {
    this.props.navigation.navigate(scene)
  }
}
