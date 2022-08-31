<!-- 导航栏组价 -->
<template>
  <div>
    <div class="box-nav">
      <div class="OA-icon">
        <img src="../assets/v2_rgsxtp.png" alt="" />
        <span>OA系统管理</span>
      </div>
      <!-- 以下是导航栏 nav栏 -->
      <div class="nav-tabr">
        <el-menu
          router
          default-active="/One"
          class="el-menu-vertical-demo"
          background-color="#7aabf6"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/One">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting" style="color: white"></i>
              <span>基础配置</span>
            </template>
            <el-menu-item index="/menu">
              <span slot="title">菜单管理</span>
            </el-menu-item>
            <el-menu-item index="/loginText">
              <span slot="title">登录日志</span>
            </el-menu-item>
            <el-menu-item index="/operation">
              <span slot="title">操作日志</span>
            </el-menu-item>
            <el-menu-item index="/jobs">
              <span slot="title">岗位管理</span>
            </el-menu-item>
            <el-menu-item index="/rank">
              <span slot="title">职级管理</span>
            </el-menu-item>
            <el-menu-item index="/department">
              <span slot="title">部门管理</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
	
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.box-nav {
  width: 100%;
  height: 90vh;
  color: white;
  .OA-icon {
    width: 137px;
    height: 10px;
    margin: 20px auto;
    font-size: 17px;
    img {
      width: 36px;
      height: 36px;
      vertical-align: middle;
    }
    span {
      margin-left: 5px;
    }
  }
  .nav-tabr {
    margin-top: 60px;
    .el-menu-item.is-active {
      background-color: #f4c438 !important;
    }
  }
}
i {
  color: white;
}
</style>