import React, { Component } from 'react';
import * as d3 from 'd3';
import { createIncomeData } from './data';
import LineGraph from './LineGraph';

class App extends Component {
  state = {
    curves: [
      d3.curveLinear,
      d3.curveMonotoneX,
      d3.curveBasis,
      d3.curveStepAfter,
    ],
    data: createIncomeData(),
  };

  render() {
    const { curves, data } = this.state;

    return (
      <div className="App">
        {curves.map((curve, index) => (
          <LineGraph
            key={index}
            width="400"
            height="400"
            curve={curve}
            data={data}
          />
        ))}
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.handleClick} style={{ fontSize: '2em' }}>Shuffle</button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      data: createIncomeData(),
    });
  }
}

export default App;
