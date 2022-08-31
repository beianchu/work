<!-- 岗位管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>岗位名称</p>
      &nbsp;&nbsp;
      <div class="search-box">
        <el-input v-model="valSearch" placeholder="请输入姓名" size="small" style="width: 200px"></el-input>
        &nbsp;&nbsp;&nbsp;

        <el-button class="el-icon-search">查询</el-button>
        <el-button class="el-icon-refresh-right">重置</el-button>
      </div>
      <p class="add-jobs" @click="add"><i class="el-icon-circle-plus-outline"></i> 新增岗位</p>
    </div>
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column type="index" label="id" width="180" align="center"> </el-table-column>
        <el-table-column prop="date" label="岗位名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="备注" width="380" align="center"> </el-table-column>
        <el-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.row)">删除</el-button>
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
    <addJobs v-if="jobsFormVisible" ref="jobsForm" @jobClick="nonePop"></addJobs>
  </div>
</template>

<script>
/**添加工作弹框 */
import addJobs from './Jobspopup.vue'

export default {
  name: '',
  components: { addJobs },
  data() {
    return {
      /**父亲要传给表单的状态 */
      jobsFormVisible: false,
      valSearch: '',
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
    /**点击添加数据新增 */
    add() {
      this.jobsFormVisible = true
      this.$nextTick(() => {
        this.$refs.jobsForm.init()
      })
    },
    /** 子传过来的方法*/
    nonePop() {
      this.jobsFormVisible = false
    },
    /** 点击编辑数据*/
    handleEdit(row) {
console.log(111);
      this.jobsFormVisible = true
      this.$nextTick(() => {
        this.$refs.jobsForm.backList(row)
      })
    },
    /** 点击删除页面*/
    handleDelete(row) {
      console.log(row)
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