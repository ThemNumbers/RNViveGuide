import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

const ARScene = require('./source/ViveCard');

export default class App extends React.Component {
  render() {
    return (
      <ViroARSceneNavigator
        initialScene={{scene: ARScene}} 
      />
    )
  }
}
