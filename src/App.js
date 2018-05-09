import 'aframe';
import 'aframe-orbit-controls-component-2';
import React, { Component } from 'react';
import core from './core';

export const Box = props => (
    <a-box
      {...props}
      position={core.utils.xyzToString(props)}
      width={0.9}
      depth={0.9}
    />
  );

class App extends Component {
  render() {
    const hash = core.init();
    return (
      <a-scene background="#000">
        {core.map({ hash })(1)(16).map(data => <Box key={JSON.stringify(data)} {...data} />)}
        <a-entity id="target" />
        <a-entity
          id="camera"
          camera="fov: 80; zoom: 1;"
          position="0 20 10"
          orbit-controls="
              autoRotate: true;
              target: #target;
              enableDamping: true;
              dampingFactor: 1;
              rotateSpeed:0.125;
              minDistance:3;
              maxDistance:100;
              "
          mouse-cursor="" />
      </a-scene>
    );
  }
}

export default App;
