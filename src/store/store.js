import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

var store = new vuex.Store({
	state: {
		indexData: [],
		activeData:[],
		detail: [],
		categroyId:20
	},
	mutations: {

	}
})
export default store