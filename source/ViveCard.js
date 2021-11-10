import React from "react";
import { StyleSheet } from "react-native";

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
  ViroQuad,
  ViroScene,
} from "react-viro";

export class ViveCard extends React.Component {
  state = {
    runAnimation: false,
    step: 0,
  };

  renderHeadViveScene = () => (
    <ViroARImageMarker
      target={"headVive"}
      onAnchorFound={() => {
        console.warn("object found");
        this.setState({ runAnimation: true });
      }}
      onAnchorRemoved={() => {
        console.warn("object lose");
        this.setState({ runAnimation: false });
      }}
    >
      <ViroNode
        opacity={0}
        position={[0, -0.02, 0]}
        animation={{
          name: "animateView",
          run: this.state.runAnimation,
          onClick: () => this.setState({ step: 1 }),
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={{
            flexDirection: "column",
            backgroundColor: this.state.step === 0 ? "white" : "green",
          }}
        >
          <ViroImage
            height={0.07}
            width={0.05}
            source={require("./res/head1.jpg")}
          />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  );

  renderBaseStationScene = () => (
    <ViroARImageMarker
      target={"baseStation"}
      onAnchorFound={() => this.setState({ runAnimation: true })}
      onAnchorRemoved={() => this.setState({ runAnimation: false })}
    >
      <ViroNode
        opacity={0}
        position={[0, -0.02, 0]}
        animation={{
          name: "animateView",
          run: this.state.runAnimation,
          onClick: () => this.setState({ step: 1 }),
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={styles.card}
        >
          <ViroImage source={require("./res/base-station-text.jpg")} />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  );

  renderControllerScene = () => (
    <ViroARImageMarker
      target={"controller"}
      onAnchorFound={() => this.setState({ runAnimation: true })}
      onAnchorRemoved={() => this.setState({ runAnimation: false })}
    >
      <ViroNode
        opacity={0}
        position={[0, -0.02, 0]}
        animation={{
          name: "animateView",
          run: this.state.runAnimation,
          onClick: () => this.setState({ step: 1 }),
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={styles.card}
        >
          <ViroImage source={require("./res/controller-text.jpg")} />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  );

  render() {
    return (
      <ViroARScene>
        {this.renderBaseStationScene()}
        {this.renderHeadViveScene()}
        {this.renderControllerScene()}
      </ViroARScene>
    );
  }
}

var styles = StyleSheet.create({
  titleTextStyle: {
    flex: 0.5,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#000000",
    textAlignVertical: "top",
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    flex: 0.5,
    fontFamily: "Roboto",
    fontSize: 20,
    color: "red",
    textAlignVertical: "top",
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  cardWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0.001,
    flex: 0.5,
  },
  subText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 0.5,
  },
});

ViroARTrackingTargets.createTargets({
  baseStation: {
    source: require("./res/base-station.jpg"),
    orientation: "Up",
    physicalWidth: 0.05, // real world width in meters
  },
  controller: {
    source: require("./res/controller.png"),
    orientation: "Up",
    physicalWidth: 0.05, // real world width in meters 
  },
  headVive: {
    source: require("./res/head-vive.png"),
    orientation: "Up",
    physicalWidth: 0.05, // real world width in meters
  },
});

ViroAnimations.registerAnimations({
  animateView: {
    properties: {
      opacity: 1.0,
    },
    easing: "Bounce",
    duration: 500,
  },
});

module.exports = ViveCard;
