// getters for the vuex store
export default {
  // this returns a list of available y-axis metrics
  yaxisMetrics: (state) => {
    return Object.keys(state.records[0]).filter(metric => metric !== state.xaxis)
  },
  // this is a higher order funcion returning a function to generate data for a particular y-axis metric
  generateChartData: (state) => (yaxis) => {
    const headerSet = [[ state.xaxis, yaxis ]]
    const valueSet = state.records.map(record => [ record[state.xaxis], yaxis ? record[yaxis] : 0 ])
    return headerSet.concat(valueSet)
  }
}
