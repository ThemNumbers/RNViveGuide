import React from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro';

export class ViveCard extends React.Component {
  state = {
    runAnimation: false,
    step: 0,
  }

  renderHeadViveScene = () => (
    <ViroARImageMarker target={"headVive"}
      onAnchorFound={() => {
        console.warn('object found')
        this.setState({runAnimation: true})
      }}
      onAnchorRemoved={() => {
        console.warn('object lose')
        this.setState({runAnimation: false})
      }}
    >
      <ViroNode
        opacity={0} position={[0, -0.02, 0]}
        animation={{
          name:'animateView',
          run: this.state.runAnimation,
          onClick: () => this.setState({step: 1})
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={{
            flexDirection: 'column',
            backgroundColor: this.state.step === 0 ? 'white' : 'green'
          }}
        >
          <ViroText
            textClipMode="None"
            text="Vive Head"
            scale={[.015, .015, .015]}
            style={styles.titleTextStyle}
          />
          <ViroText
            textClipMode="None"
            text="1. Instalation guide"
            scale={[.015, .015, .015]}
            style={styles.textStyle}
          />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  )

  renderBaseStationScene = () => (
    <ViroARImageMarker target={"baseStation"}
      onAnchorFound={() => this.setState({runAnimation: true})}
      onAnchorRemoved={() => this.setState({runAnimation: false})}
    >
      <ViroNode
        opacity={0} position={[0, -0.02, 0]}
        animation={{
          name:'animateView',
          run: this.state.runAnimation
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={styles.card}
        >
          <ViroText
            textClipMode="None"
            text="Vive Base Station"
            scale={[.015, .015, .015]}
            style={styles.textStyle}
          />
          <ViroText
            textClipMode="None"
            text="1. Instalation guide"
            scale={[.015, .015, .015]}
            style={styles.textStyle}
          />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  )

  renderControllerScene = () => (
    <ViroARImageMarker target={"controller"}
      onAnchorFound={() => this.setState({runAnimation: true})}
      onAnchorRemoved={() => this.setState({runAnimation: false})}
    >
      <ViroNode
        opacity={0} position={[0, -0.02, 0]}
        animation={{
          name:'animateView',
          run: this.state.runAnimation
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={styles.card}
        >
          <ViroText
            textClipMode="None"
            text="Vive Controller"
            scale={[.015, .015, .015]}
            style={styles.textStyle}
          />
          <ViroText
            textClipMode="None"
            text="1. Instalation guide"
            scale={[.015, .015, .015]}
            style={styles.textStyle}
          />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  )

  render() {
    return (
      <ViroARScene>
        <ViroNode>
          {this.renderBaseStationScene()}
          {this.renderHeadViveScene()}
          {this.renderControllerScene()}
        </ViroNode>
      </ViroARScene>
    );
  }
}

var styles = StyleSheet.create({
  titleTextStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#000000',
    textAlignVertical: 'top',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'red',
    textAlignVertical: 'top',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroARTrackingTargets.createTargets({
  "baseStation" : {
    source : require('./res/base-station.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  },
  "controller" : {
    source : require('./res/controller.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  },
  "headVive" : {
    source : require('./res/head-vive.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  animateView:{
    properties:{
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
});

module.exports = ViveCard;