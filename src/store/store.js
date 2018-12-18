import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

var store = new vuex.Store({
	state: {
		indexData: [],
		activeData:[],
		detail: [],
		categoryId:[],
		detail: [],
		categoryId: 20,
		categoryTitle:'',
		isLogin:false,
		cartlist:[],
		count:0
	},
	mutations: {

	},
	actions: {

	}
})
export default store