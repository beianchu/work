<template>
  <div id="app">
    <el-container>
      <!-- 头部组件 -->
      <el-header>
        <head1></head1>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="$store.state.isCollapse ? '60px' : '200px'">
          <navLfet></navLfet>
        </el-aside>
        <el-main>
          <el-tag @click="$router.push('/table')" closable type="''">
            表格
          </el-tag>
          <el-tag @click="$router.push('/tab')" class="tag" closable type="''">
            table选项卡
          </el-tag>
          <!-- 公共部分 -->
          <!-- 路由接受 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navLfet from "./components/LeftNav.vue";
import head1 from "./components/Header.vue"
export default {
  components: { head1, navLfet },
};
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.tag {
  margin-left: 10px;
}
</style>
