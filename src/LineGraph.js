import React from 'react';
import * as d3 from 'd3';

function LineGraph(props) {
  const { curve, data, width, height } = props;

  const margin = {
    top: 15,
    right: 15,
    bottom: 30,
    left: 30,
  };

  const x = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([margin.left, width - margin.right])

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.income)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const line = d3
    .line()
    .curve(curve)
    .x(d => x(d.year))
    .y(d => y(d.income));

  const xAxis = d3.axisBottom(x)
    .tickFormat(d3.format("d"));

  const yAxis = d3.axisLeft(y);

  return (
    <svg width={width} height={height}>
      <path
        d={line(data)}
        stroke="black"
        strokeWidth="1"
        fill="none"
        style={{ transition: 'd 400ms' }}
      />
      <g ref={call(xAxis)} transform={`translate(0, ${height - margin.bottom})`} />
      <g ref={call(yAxis)} transform={`translate(${margin.left}, 0)`} />
    </svg>
  );
}

function call(callback) {
  return ref => d3.select(ref).call(callback);
}

export default LineGraph;
