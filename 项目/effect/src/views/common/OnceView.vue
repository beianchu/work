<template>
  <div>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="200px">
        <leftNav class="nav"></leftNav>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <Myhead></Myhead>
        </el-header>
        <hr style="background: #f2f2f2; border: 1px solid gainsboro" />
        <!-- 身体部分 -->
        <el-main>
          <!-- 接收路由 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
	/**引入头部组件 */

import Myhead from '../../components/HeaderView.vue'
/**左侧导航栏组件 */
import leftNav from '../../components/leftNav.vue'
export default {

  components: { leftNav, Myhead },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-header {
  height: 60px;
  background-color: white;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh;
  background: #7aabf6;
}

.el-main {
  background-color: white;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>