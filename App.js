import React, {Component} from 'react'
import { createAppContainer } from "react-navigation";

import AppNavigator from './src/navigation/AppNavigator'

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}

const AppContainer = createAppContainer(AppNavigator)