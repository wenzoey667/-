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
		isLogin:false
	},
	mutations: {

	}
})
export default store