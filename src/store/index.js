import Vue from 'vue'
import Vuex from 'vuex'

//importing the source data as we have it in report_data.json file
// if we were getting data from REST API, we can dsipatch 
//  a vuex action (the beforeCreate hook of App or ChartViewer component)
//  to fetch and save data (using mutations) in vuex store 
import reportData from '@/report_data.json'

import getters from './getters'

Vue.use(Vuex)

export default  new Vuex.Store({
  state: reportData,
  getters
})
