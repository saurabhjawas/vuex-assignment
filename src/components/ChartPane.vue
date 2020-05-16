<template>
  <GChart
    type="LineChart"
    :data="dataSet"
    :options="chartOptions"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  // two props : * dataset (with  headers and values) * title of the chart
  props: {
    dataSet: {
      required: true,
      type: Array
    },
    title: {
      type: String
    }
  },
  components: {
    GChart
  },
  computed: {
    //chart specific properties
    chartOptions() {
      return {
        title: this.title,
        legend: { position: 'top', alignment: 'center' },
        width: 900,
        height: 400,
        pointSize: 5
      }
    }
  }
}
</script>

