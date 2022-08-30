<!-- 职级管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>职级名换</p>
      <searchBtn></searchBtn>
      <p class="add-jobs" @click="$store.state.addRankFormVisible = true">
        <i class="el-icon-circle-plus-outline"></i> 新增职级
      </p>
    </div>
    <!-- 以上是表单 -->
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column type="index" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="date" label="职级名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="备注" width="380" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 以上是表格内容 -->
    <!-- 以下是分页 -->
    <div class="box-fenye">
      <pages></pages>
    </div>
    <!-- 以下是弹框 -->
    <addRank></addRank>
  </div>
</template>

<script>
import addRank from '../components/AddRank.vue'
import pages from '../components/PagesView.vue'
import searchBtn from '../components/SearchBtn.vue'
export default {
  name: '',
  components: { searchBtn, pages, addRank },
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
.box-fenye {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.fenye-page-jobs {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>