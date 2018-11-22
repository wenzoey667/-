import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

var store = new vuex.Store({
	state: {
		indexData: [],
		detailname: '',
		detailmoney: 0,
		activeData:[]
	},
	mutations: {

	}
})
export default store