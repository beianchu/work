
<template>
<div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="`未读消息(${tablist.length})`" name="1" @tab-click="changeTab">
      <el-table
      :data="tablist.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%">
      <el-table-column
        prop="title"
        >
      </el-table-column>
      <el-table-column
        prop="create_time"
      >
      </el-table-column>
      <el-table-column
        prop="flag">
        <template slot-scope="scope">
           <el-button @click="changeFlag(scope.row)">标为已读</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
      :current-page.sync="currentPage"
      :page-size="5"
      layout="prev, pager, next, jumper"
      :total="tablist.length">
    </el-pagination>
    </el-tab-pane>
    <el-tab-pane :label="`已读消息(${list.length})`" name="2">
        <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="title"
        >
      </el-table-column>
      <el-table-column
        prop="create_time"
      >
      </el-table-column>
      <el-table-column
        prop="flag">
        <template slot-scope="scope">
           <el-button @click="changeDel(scope.row)" type="warning">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>

    <el-tab-pane :label="`回收站(${delList.length})`" name="3">
       <el-table
      :data="delList"
      style="width: 100%">
      <el-table-column
        prop="title"
        >
      </el-table-column>
      <el-table-column
        prop="create_time"
      >
      </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
     <el-button type="primary" @click="changeDone">全部标为已读</el-button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  components: {},
  data () {
    return {
        activeName: '1',
        tablist:[],
        currentPage:1,
        pageSize:5,
        list:[],
        delList:[]
    }
  },
  created () { 
    this.getTabList()
  },
  mounted () { },
  methods: {
    changeDone(){
      
    },
    changeFlag(val){
      const cItem=this.list.find(item =>item.title==val.title)
      if(cItem) return alert('已添加')
      this.list.push(val)
      val.flag=true
      this.tablist=this.tablist.filter(item =>!item.flag)
      console.log(this.list);
    },
    getTabList(){
      axios.get('/text.json').then(res =>{
        console.log(res);
        this.tablist=res.data
      })
    },
    changeTab(val){
      console.log(val);
    },
    changeDel(val){
      console.log(val);
       const cItem=this.delList.find(item =>item.title==val.title)
      if(cItem) return alert('已移除')
      this.delList.push(val)
      val.flag=false
      this.list=this.list.filter(item =>item.flag)
    },
        handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style scoped lang='scss'>

</style>
