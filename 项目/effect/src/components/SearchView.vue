<!-- 搜索组件 -->
<template>
  <div>
    <div class="search-box">
      <span>账号名称</span>&nbsp;
      <el-input v-model="valSearch" placeholder="请输入姓名" size="small" style="width: 200px"></el-input>
      &nbsp;&nbsp;&nbsp;
      <span>时间 &nbsp;&nbsp;&nbsp;时间组件</span>
    </div>
    <div class="btn-box">
      <el-button class="el-icon-search">查询</el-button>
      <el-button class="el-icon-refresh-right">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      valSearch: ''
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.search-box {
  display: flex;
  align-items: center;
  width: 100%;
	padding: 10px;
  span {
  }
  .el-input__inner {
    width: 30%;
  }
  .btn-box {
  }
}
</style>