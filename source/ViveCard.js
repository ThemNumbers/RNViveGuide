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
    showHeadImage: false,
    showControllerImage: false,
    showStationImage: false
  };

  renderHeadViveScene = () => (
    <ViroARImageMarker
      target={"headVive"}
      onAnchorUpdated={(anchor) => {
        if (anchor.trackingMethod == "lastKnownPose") {
          this.setState({ runAnimation: false, showHeadImage: false });
        }
        if (anchor.trackingMethod == "tracking") {
          this.setState({ runAnimation: true, showHeadImage: true });
        }
      }}
      visible={this.state.showHeadImage}
    >
      <ViroNode
        opacity={0}
        position={[0, -0.02, 0]}
        animation={{
          name: "animateView",
          run: this.state.runAnimation,
        }}
      >
        <ViroFlexView
          rotation={[-90, 0, 0]}
          height={0.05}
          width={0.05}
          style={styles.card}
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
      onAnchorUpdated={(anchor) => {
        if (anchor.trackingMethod == "lastKnownPose") {
          this.setState({ runAnimation: false, showStationImage: false });
        }
        if (anchor.trackingMethod == "tracking") {
          this.setState({ runAnimation: true, showStationImage: true });
        }
      }}
      visible={this.state.showStationImage}
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
          <ViroImage
            height={0.07}
            width={0.05}
            source={require("./res/base-station-text.jpg")}
          />
        </ViroFlexView>
      </ViroNode>
    </ViroARImageMarker>
  );

  renderControllerScene = () => (
    <ViroARImageMarker
      target={"controller"}
      onAnchorUpdated={(anchor) => {
        if (anchor.trackingMethod == "lastKnownPose") {
          this.setState({ runAnimation: false, showControllerImage: false });
        }
        if (anchor.trackingMethod == "tracking") {
          this.setState({ runAnimation: true, showControllerImage: true });
        }
      }}
      visible={this.state.showControllerImage}
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
          <ViroImage
            height={0.07}
            width={0.05}
            source={require("./res/controller-text.jpg")}
          />
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
  card: {
    flexDirection: "column",
    backgroundColor: "white",
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
