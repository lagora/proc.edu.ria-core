import 'aframe';
import 'aframe-orbit-controls-component-2';
import React, { Component } from 'react';
import core from './core';
import utils from './utils';

export const colorMapping = {
    'primary': '#77f',
    'secondary': '#7f7',
    'tertiary': '#ff7',
    'quarternary': '#f77',
    'quinary': '#fff',
};

export const Box = props => props.height === 0 ? false : (
    <a-box
      {...props}
      position={core.utils.xyzToString(props)}
      width={props.scale * 0.9}
      depth={props.scale * 0.9}
      scale={1}
      material={`color: ${props.meta.sector ? colorMapping[props.meta.sector.type] : '#fff'}`}
    />
  );

export const Camera = ({ scale }) => (
  <React.Fragment>
    <a-entity id="target" />
    <a-entity
      id="camera"
      camera="fov: 80; zoom: 1;"
      position="0 2000 2000"
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
  </React.Fragment>
);

class App extends Component {
  constructor(props) {
    super(props);
    const hash = core.init();
    const scale = 1000;
    const data = core.map({ hash })(scale)(32);
    const demoLine = utils.pathFromPosition(data);
    // console.info('...', 'demoLine', demoLine);
    this.state = {
      camera: true,
      data,
      debug: true,
      demoLine,
      filters: {
        'primary': false,
        'secondary': false,
        'tertiary': false,
        'quarternary': false,
        'quinary': false,
      },
      hash,
      scale,
    };
    this.handleKey = this.handleKey.bind(this);
    this.filterData = this.filterData.bind(this);
  }
  filterData(data) {
    const filters = Object.keys(this.state.filters).filter(filter => this.state.filters[filter]).reduce((a, b) => a.concat(b), []);
    return filters.length ? this.state.data.filter(each => filters.includes(each.meta.sector.type)) : this.state.data;
  }
  handleKey({ key }) {
    console.info('...', key);
    if (key === 'd') {
      this.setState(previous => ({ ...previous, debug: !previous.debug }));
    } else if (key === 'c') {
      this.setState(previous => ({ ...previous, camera: !previous.camera }))
    } else if (['&', '1'].includes(key)) {
      this.setState(previous => ({ ...previous, filters: ({ ...previous.filters, primary: !previous.filters.primary }) }));
    } else if (['é', '2'].includes(key)) {
      this.setState(previous => ({ ...previous, filters: ({ ...previous.filters, secondary: !previous.filters.secondary }) }));
    } else if (['"', '3'].includes(key)) {
      this.setState(previous => ({ ...previous, filters: ({ ...previous.filters, tertiary: !previous.filters.tertiary }) }));
    } else if (["'", '4'].includes(key)) {
      this.setState(previous => ({ ...previous, filters: ({ ...previous.filters, quarternary: !previous.filters.quarternary }) }));
    } else if (['(', '5'].includes(key)) {
      this.setState(previous => ({ ...previous, filters: ({ ...previous.filters, quinary: !previous.filters.quinary }) }));
    }
  }
  componentWillMount() {
    document.addEventListener('keyup', this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }
  render() {
    return (
      <a-scene background="#000" stats={this.state.debug}>
        <a-entity scale="0.1 0.1 0.1">
          {this.filterData(this.state.data).map(data => <Box key={JSON.stringify(data)} {...data} scale={this.state.scale} />)}
        </a-entity>
        {this.state.camera ? <Camera scale={this.state.scale} /> : false}
        <React.Fragment>
          {this.state.demoLine.map(line => (
            <a-entity
              line={`start: ${utils.xyzToString(line[0])}; end: ${utils.xyzToString(line[1])}`}
              scale="0.1 0.1 0.1"
            />
          ))}
        </React.Fragment>
      </a-scene>
    );
  }
}

export default App;
