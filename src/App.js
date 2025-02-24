import './App.css';
import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import * as d3 from 'd3'
import tips from './tips.csv'

class App extends Component {
  constructor(props) {
    super(props);
    const margin = { top: 40, right: 50, bottom: 50, left: 50 };
    const width = 600;
    const height = 400;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    this.state = {
      data:[],
      dimensions: {
        margin:margin,
        width: width,
        height: height,
        innerWidth: innerWidth,
        innerHeight: innerHeight,
      },
    };
  }
  componentDidMount() {
    var self=this;
    d3.csv(tips, function(d){
      return {
        tip:parseFloat(d.tip),
        total_bill:parseFloat(d.total_bill),
        day:d.day
      };
    }).then(function(csv_data){
      self.setState({data:csv_data})
    }).catch(function(err){console.log(err)});
  }

  render() {
    return (
      <div className="parent">
        <div className="child1">
          <Child1 data={this.state.data} dimensions={this.state.dimensions}></Child1>
        </div>
        <div className="child2">
          <Child2 data={this.state.data} dimensions={this.state.dimensions}></Child2>
        </div>
      </div>
    );
  }
}

export default App;
