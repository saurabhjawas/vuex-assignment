<template>
<div>
  <h2>Assignment</h2>
  <select  @change="onChange">
    <option
      v-for="metric in yaxisMetrics"
      :key="metric"
      :value="metric"
    >{{ metric }}</option>
  </select>
  <ChartPane
    :title="selectedMetric"
    :dataSet="chartData"
  />
</div>
</template>

<script>
import ChartPane from './ChartPane'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // setting this property as blank.. will be updated
      //    in created hook by using a computed property
      selectedMetric: ''
    }
  },
  methods: {
    // to update the selectedMeterc value when a y metric is selected
    onChange(event) {
      this.selectedMetric = event.target.value
    }
  },
  computed: {
    // used the getters configured in vuex store as the computed properties
    ...mapGetters({
      yaxisMetrics: 'yaxisMetrics', // the list of y-axis metrics
      generateChartData: 'generateChartData' // function to generate dataset specific to a particular metric
    }),
    // using maped getter to prepare data for a selected metric
    chartData() {
      return this.generateChartData(this.selectedMetric)
    }
  },
  components: {
    ChartPane
  },
  created() {
    // to ensure that selected metric is set to a valid value for the very first time
    this.selectedMetric = this.yaxisMetrics ? this.yaxisMetrics[0] : ''
  }  
}
</script>
