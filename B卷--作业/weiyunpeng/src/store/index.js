import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:false,
  },
  getters: {
  },
  mutations: {
    screenFull(state,item){
          console.log(screenfull)
          if (!item.enabled) {
            // 如果不允许进入全屏，发出不允许提示
            this.$message({
              message: '不支持全屏',
              type: 'warning',
            });
            return;
          }
          screenfull.toggle(document.getElementById('app'));

        
    }
  },
  actions: {
  },
  modules: {
  }
})
