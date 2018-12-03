import * as d3 from 'd3';

const startYearScale = d3.scaleLinear().rangeRound([1900, 2000]);
const incomeScale = d3.scaleLinear().range([0, 100]);

export function createIncomeData() {
  const startYear = startYearScale(Math.random());
  
  return d3.range(20).map(i => ({
    year: startYear + i,
    income: incomeScale(Math.random())
  }));
}
