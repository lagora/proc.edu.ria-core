import 'aframe';
import 'aframe-orbit-controls-component-2';
import React, { Component } from 'react';
import core from './core';

export const Box = props => props.height === 0 ? false : (
    <a-box
      {...props}
      position={core.utils.xyzToString(props)}
      width={props.scale * 0.9}
      depth={props.scale * 0.9}
      scale={1}
    />
  );

class App extends Component {
  render() {
    const hash = core.init();
    const scale = 100;
    return (
      <a-scene background="#000">
        {core.map({ hash })(scale)(16).map(data => <Box key={JSON.stringify(data)} {...data} scale={scale} />)}
        <a-entity id="target" />
        <a-entity
          id="camera"
          camera="fov: 80; zoom: 1;"
          position="0 2000 1000"
          orbit-controls={`
              autoRotate: true;
              target: #target;
              enableDamping: true;
              dampingFactor: 1;
              rotateSpeed:0.125;
              minDistance:3;
              maxDistance: ${scale * 20};
              `}
          mouse-cursor="" />
      </a-scene>
    );
  }
}

export default App;
