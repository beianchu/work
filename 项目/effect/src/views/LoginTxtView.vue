<!-- 登录日志 -->
<template>
  <div>
    <searchVal></searchVal>
    <!-- 以上是搜索组件 -->
    <!-- 以下是表格数据展示 -->
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column type="index" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="date" label="登录IP" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="账号名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="登录设备" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="登录地点" width="180" align="center"> </el-table-column>
        <el-table-column prop="address" label="登陆时间" align="center"> </el-table-column>
      </el-table>
    </div>
		<br>
		<!-- 以下是分页 -->
    <div class="box-bottom">
      <div class="txt-box">
        <p>账号名称：点击跳转至用户详情，并且</p>
        <p>查询出来</p>
        <br />
        <p>地点：ip地址转换，第三方库</p>
      </div>
      <div class="fenye-box">
        <span>总共20条</span> &nbsp;&nbsp; <el-button>上一页</el-button> &nbsp;&nbsp;2/5&nbsp;&nbsp;<el-button
          >下一页</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import searchVal from '../components/SearchView.vue'
export default {
  name: '',
  components: { searchVal },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.table-box {
  margin-top: 40px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.box-bottom{
	display: flex;
	justify-content: space-between;
	align-items: center;

}
</style>