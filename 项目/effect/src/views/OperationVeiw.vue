<template>
  <!-- 操作日志 -->
  <div>
    <serch></serch>
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column type="index" label="id" align="center"> </el-table-column>
        <el-table-column prop="date" label="操作人" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作路径" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作动作" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作时间" align="center"> </el-table-column>
      </el-table>
    </div>
    <!-- 以下是分页 -->
    <div class="box-bottom">
      <div class="txt-box">
        <p>时间戳：{{ new Date().toLocaleString() }}</p>
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
import serch from '../components/SearchView.vue'
export default {
  name: '',
  components: { serch },
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
  margin-top: 30px;
}
.box-bottom {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
