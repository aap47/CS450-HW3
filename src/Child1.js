import React, { Component } from "react"
import * as d3 from "d3"

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.svg = d3.select(".child1_svg").attr("width", this.props.dimensions.width).attr("height", this.props.dimensions.height)
    this.chart = this.svg.select(".chart1").attr("transform", `translate(${this.props.dimensions.margin.left}, ${this.props.dimensions.margin.top})`);
    this.chart.append("text").attr("x",this.props.dimensions.innerWidth/2).attr("y",0).text("Total Bill vs. Tips").attr("text-anchor", "middle");
  }

  componentDidUpdate() {
    const xScale = d3.scaleLinear().domain([0, d3.max(this.props.data, d => d.total_bill)]).range([0, this.props.dimensions.innerWidth]);
    const yScale = d3.scaleLinear().domain([0, d3.max(this.props.data, d => d.tip)]).range([this.props.dimensions.innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    this.chart.selectAll(".x-axis").data([null]) // Just a placeholder for the axis, as we're not using dynamic data for it.
    .join("g").attr('class','x-axis') //we have to assign the class we use for selection
    .attr("transform", `translate(0, ${this.props.dimensions.innerHeight})`)
    .call(xAxis);
    
    this.chart.selectAll(".y-axis").data([null]) // Similarly, just a placeholder for the axis.
    .join("g").attr('class','y-axis') //we have to assign the class we use for selection
    .call(yAxis);
    
    this.chart.selectAll("circle").data(this.props.data).join("circle").attr("r", 5).attr("fill", "#69b3a2")
    .attr("cx", d => xScale(d.total_bill)).attr("cy", d => yScale(d.tip))

    d3.select(".y-axis").append("text").attr("x",0).attr("y",this.props.dimensions.innerHeight/2).attr("transform",`rotate(-90, -20,${this.props.dimensions.innerHeight/2})`).attr("fill", "black").text("Tips").attr("text-anchor", "middle");
    d3.select(".x-axis").append("text").attr("x",this.props.dimensions.innerWidth/2).attr("y",30).attr("fill", "black").text("Total Bill").attr("text-anchor", "middle");
    // d3.select(".y-axis").selectAll(".tick line").attr("x2", this.props.dimensions.innerWidth).attr("stroke-dasharray", "2,2").attr("stroke", "lightgray");
    // d3.select(".x-axis").selectAll(".tick line").attr("y1", -this.props.dimensions.innerHeight).attr("stroke-dasharray", "2,2").attr("stroke", "lightgray");
  }
  render() {
    return (
    <svg className = "child1_svg">
        <g className="chart1"> </g>
    </svg>
    )
  }
}

export default Child1;