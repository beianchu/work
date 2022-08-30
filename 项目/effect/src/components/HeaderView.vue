<!-- 头部组件 -->
<template>
  <div>
    <div class="header-box">
      <p><i class="el-icon-s-fold"></i></p>
      <div class="admin-box">
        <el-badge :value="12" class="item">
          <i class="el-icon-s-flag"></i>
        </el-badge>
        <el-badge :value="2" class="item" type="warning"> <i class="el-icon-message-solid"></i> </el-badge>

        <el-badge :value="12" class="item">
          <i class="el-icon-message"></i>
        </el-badge>
        <i class="el-icon-full-screen"></i>

        <div class="admin">
          <img src="../assets/admin.png" alt="" />
          超级管理员
        </div>
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
.header-box {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    i {
      font-size: 40px;
      color: #cecece;
    }
  }
  .admin-box {
    display: flex;
    align-items: center;
		i{
			font-size:20px ;
		}
    .item {
      font-size: 20px;
      margin-right: 15px;
      color: #cecece;
      margin-top: 10px;
      margin-right: 20px;
    }
    .admin {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        vertical-align: center;
      }
    }
  }
}
</style>