import Vue from 'vue'
import Vuex from 'vuex'
import loginModules from "./loginModules"
import forgetPwd from "./forgetPwd"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		 dialogFormVisible: false,//忘记密码弹框
		 jobsFormVisible:false, //新增job弹框
		 addRankFormVisible:false,//新增职位弹窗
		 depmentFormVisible:false,//部门弹窗
		 MenupopupFormVisible:false,//菜单弹窗
		 
	},
  getters: {},
  mutations: {},
  actions: {},
	// 分模块化
  modules: {
loginModules, //登录模块名
forgetPwd,//忘记密码


	}
})
