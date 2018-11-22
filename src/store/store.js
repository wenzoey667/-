import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

var store = new vuex.Store({
	state: {
		indexData: [],
		activeData:[],
		detail: [],
		cartlist:[],
		count:0
	},
	mutations: {

	}
})
export default store