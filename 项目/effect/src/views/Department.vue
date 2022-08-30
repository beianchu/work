<!-- 部门管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>部门名称</p>
      <serchBtn></serchBtn>
      <p class="add-jobs" @click="$store.state.depmentFormVisible = true">
        <i class="el-icon-circle-plus-outline"></i> 新增部门
      </p>
    </div>
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="date" label="部门名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="备注" width="380" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页组件 -->
    <div class="fenye-page-jobs"><pages></pages></div>
    <!-- 添加职位弹窗 -->
    <depment></depment>
  </div>
</template>

<script>
import depment from '../components/depment.vue'
import serchBtn from '../components/SearchBtn.vue'
import pages from '../components/PagesView.vue'
export default {
  name: '',
  components: { serchBtn, pages, depment },
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
  methods: {
    // 点击编辑数据
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 点击删除页面
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped lang="scss">
.jobs-serach {
  display: flex;
  align-items: center;
  .add-jobs {
    background: #c2c2fb;
    border-radius: 5px;
    padding: 5px;
    color: white;
  }
}
.fenye-page-jobs {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>