
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BemVindo from './src/scenes/BemVindo'
import Nome from './src/scenes/Nome'
import Game from './src/scenes/Game'
import Rank from './src/scenes/Rank'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: BemVindo, navigationOptions: { title: 'Jogo da memória' } },
    Nome: { screen: Nome, navigationOptions: { title: 'Insira seu nome' } },
    Game: { screen: Game, navigationOptions: { title: 'Jogo da memória' } },
    Rank: { screen: Rank, navigationOptions: { title: 'Rank' } }
  },
  { initialRouteName: 'Home' }
)

export default createAppContainer(AppNavigator)
