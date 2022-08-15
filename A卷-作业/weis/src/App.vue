<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 头部组件 -->
        <head1 class="top-box"> </head1>
      </el-header>
      <el-container>
        <el-aside>
          <!-- 的左侧导航栏 -->
          <navLeft></navLeft>
        </el-aside>
        <el-main>
          <!-- 公共搜索部分 -->
          <titTxt></titTxt>
          <!-- router-view 接受路由坑 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 要引入组件
import head1 from "./components/Header.vue";
import navLeft from "./components/Nav.vue";
import titTxt from "./components/Search.vue";
export default {
  components: { head1, navLeft, titTxt },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.top-box {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 20px 0 !important;
}
</style>
