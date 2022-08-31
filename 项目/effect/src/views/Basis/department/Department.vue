<!-- 部门管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>部门名称</p>
      &nbsp;&nbsp;&nbsp;
      <div class="search-box">
        <el-input v-model="valSearch" placeholder="请输入姓名" size="small" style="width: 200px"></el-input>
        &nbsp;&nbsp;&nbsp;

        <el-button class="el-icon-search">查询</el-button>
        <el-button class="el-icon-refresh-right">重置</el-button>
      </div>
      &nbsp;&nbsp;&nbsp;
      <p class="add-jobs" @click="add()"><i class="el-icon-circle-plus-outline"></i> 新增部门</p>
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
    <div class="fenye-page-jobs">
      <div class="box-bottom">
        <div class="fenye-box">
          <span>总共20条</span> &nbsp;&nbsp; <el-button>上一页</el-button> &nbsp;&nbsp;2/5&nbsp;&nbsp;<el-button
            >下一页</el-button
          >
        </div>
      </div>
    </div>
    <!-- 添加职位弹窗 -->
    <depment v-if="depmentFormVisible" ref="depmentForm" @ok="depment"></depment>
  </div>
</template>

<script>
/**添加职位天窗 */
import depment from './depment.vue'

/**分页组件 */

export default {
  name: '',
  components: { depment },
  data() {
    return {
      valSearch: '',
      depmentFormVisible: false,

      /**表格数据 */
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
    add() {
      this.depmentFormVisible = true
      this.$nextTick(() => {
        this.$refs.depmentForm.init()
      })
    },
    /**子传过来的方法 */
    depment() {
      this.depmentFormVisible = false
    },
    /** 点击编辑数据*/
    handleEdit(index, row) {
      this.depmentFormVisible = true
      this.$nextTick(() => {
        this.$refs.depmentForm.backList(row)
      })
      console.log(index, row)
    },
    /** 点击删除页面*/
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