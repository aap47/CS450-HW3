import React, { Component } from "react"
import * as d3 from "d3"

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.svg = d3.select(".child2_svg").attr("width", this.props.dimensions.width).attr("height", this.props.dimensions.height);
    //.attr("viewBox", `${0} ${this.props.dimensions.height} ${this.props.dimensions.width} ${this.props.dimensions.height}`)
    this.chart = this.svg.select(".chart2").attr("transform", `translate(${this.props.dimensions.margin.left}, ${this.props.dimensions.margin.top})`);
    this.chart.append("text").attr("x",this.props.dimensions.innerWidth/2).attr("y",0).text("Average Tip by Day").attr("text-anchor", "middle");
  }

  componentDidUpdate() {

    const average_data = new Map();
    
    this.props.data.forEach((entry) => {
        if (average_data.has(entry.day)) {
            var value = average_data.get(entry.day);
            value.average = ((value.average * value.length) + entry.tip ) / (value.length + 1)
            value.length += 1
            average_data.set(entry.day, value)
        }
        else {
            average_data.set(entry.day, {average: entry.tip, length: 1})
        }
    });

    let averages = []
    let average_tips = []
    average_data.forEach((values,day) => {
        averages.push({day:day, average: values.average});
        average_tips.push(values.average);
    });
    console.log(averages);

    const xScale = d3.scaleBand().domain(average_data.keys()).range([this.props.dimensions.innerWidth - this.props.dimensions.margin.right, this.props.dimensions.margin.left]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, d3.max(average_tips)]).range([0, this.props.dimensions.innerHeight]);
    const yLabelScale = d3.scaleLinear().domain([0, d3.max(average_tips)]).range([this.props.dimensions.innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yLabelScale);

    this.chart.selectAll(".x-axis2").data([null]) // Just a placeholder for the axis, as we're not using dynamic data for it.
    .join("g").attr('class','x-axis2') //we have to assign the class we use for selection
    .attr("transform", `translate(0, ${this.props.dimensions.innerHeight})`)
    .call(xAxis);
    
    this.chart.selectAll(".y-axis2").data([null]) // Similarly, just a placeholder for the axis.
    .join("g").attr('class','y-axis2') //we have to assign the class we use for selection
    .call(yAxis);
    
    this.chart.selectAll("rect").data(averages).join("rect").attr("fill", "#69b3a2")
    .attr("x", d => xScale(d.day)).attr("height", d => yScale(d.average) ).attr("width",xScale.bandwidth()).attr("y", d => (yScale.range()[1] - yScale(d.average)) + yScale.range()[0])

    d3.select(".y-axis2").append("text").attr("x",0).attr("y",this.props.dimensions.innerHeight/2).attr("transform",`rotate(-90, -30,${this.props.dimensions.innerHeight/2})`).attr("fill", "black").text("Average Tip").attr("text-anchor", "middle");
  }
  render() {
    return (
    <svg className = "child2_svg">
        <g className="chart2"> </g>
    </svg>
    )
  }
}

export default Child2;