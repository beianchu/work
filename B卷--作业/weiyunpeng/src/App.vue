<template>
  <div id="app">
    <el-container>
      <!-- 头部组件 -->
  <el-header>
    <head1></head1>
  </el-header>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :width="$store.state.isCollapse?'60px':'200px'">
<navLfet></navLfet>
    </el-aside>
    <el-main>
      <el-tag
 @click="$router.push('/table')"
  closable
  type="''">
  表格
</el-tag>
   <el-tag
   @click="$router.push('/tab')"
 class="tag"
  closable
  type="''">
  table选项卡
</el-tag>
      <!-- 公共部分 -->
     
      <router-view/>
    </el-main>
  </el-container>
</el-container>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import ta from "./components/Common.vue"
import navLfet from "./components/LeftNav.vue"
import head1 from "./components/Header.vue"
export default {
 components:{head1,navLfet,}
}
</script>
<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;

  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100vh;
    text-align: center;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  
  }
  .tag{
    margin-left: 10px;
  }
</style>
