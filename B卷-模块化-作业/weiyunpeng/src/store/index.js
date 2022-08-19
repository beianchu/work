import Vue from 'vue'
import Vuex from 'vuex'
// 安装插件
Vue.use(Vuex)
import moduleA from "@/store/moduleA"
export default new Vuex.Store({
  state: {
    isCollapse:false,
    tableData:[],
    catchData:[],
    multipleSelection:[]
  },
  getters: {
  },
  mutations: {
    // 搜索地址
    changeSel(state,val){
      state.tableData = state.catchData.filter(item => item.address.includes(val))
    },
    // 选中
    handleSelectionChange(state,val){
     state.multipleSelection = val.map((item) => item.id);
    },
    // 选中删除
    delAll(state){
    state.tableData = state.tableData.filter(
              (item) => !state.multipleSelection.includes(item.id)
            );
    },
    // 搜索名字
    search(state,val){
   state.tableData = state.catchData.filter(item => item.name.includes(val))
    },
    // 单个删除
    handleDelete(state,obj){
      // console.log(item);
     let a = confirm('此操作将永久删除该文件, 是否继续?')
     if(a){
        state.tableData = state.tableData.filter(item => item.name != obj.name)
     }
//  this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
//            confirmButtonText: "确定",
//            cancelButtonText: "取消",
//            type: "warning",
//          })
//            .then(() => {
          
//            })
//            .catch(() => {
//              this.$message({
//                type: "info",
//                message: "已取消删除",
//              });
//            });
       
    }
    
  },
  actions: {
  },
  modules: {
 moduleA,
  }
})
