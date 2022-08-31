<!-- 菜单管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>菜单名称</p>
      &nbsp;&nbsp;
      <div class="search-box">
        <el-input v-model="valSearch" placeholder="请输入姓名" size="small" style="width: 200px"></el-input>
        &nbsp;&nbsp;&nbsp;

        <el-button class="el-icon-search">查询</el-button>
        <el-button class="el-icon-refresh-right">重置</el-button>
      </div>
      <p class="add-jobs" @click="add"><i class="el-icon-circle-plus-outline"></i> 新增菜单</p>
    </div>
    <!-- 以上是搜索 -->
    <div class="table-box">
      <div class="middle">
        <!-- 树形表格 -->

        <el-table
          :data="tableData2"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
                          <el-table-column prop="date" label="菜单名称" sortable width="180"> </el-table-column>
          <el-table-column prop="name" label="菜单路径" sortable width="180"> </el-table-column>
          <el-table-column prop="address" label="排序"> </el-table-column>
          <el-table-column prop="address" label="菜单图标"> </el-table-column>
          <el-table-column prop="address" label="菜单类型"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 以上是表格 -->
    <!-- 以下是分页 -->
    <div class="box-fenye">
      <div class="box-bottom">
        <div class="fenye-box">
          <span>总共20条</span> &nbsp;&nbsp; <el-button>上一页</el-button> &nbsp;&nbsp;2/5&nbsp;&nbsp;<el-button
            >下一页</el-button
          >
        </div>
      </div>
    </div>
    <!-- 菜单弹框 -->
    <menupopup v-if="MenupopupFormVisible" ref="MenupopupForm" @menuClick="noneMenu"></menupopup>
  </div>
</template>

<script>
/**菜单弹出窗 */
import menupopup from './Menu.vue'

export default {
  name: '',
  components: { menupopup },
  data() {
    return {
      MenupopupFormVisible: false,
      /**表格数据 */
      tableData2: [
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.MenupopupFormVisible = true
      this.$nextTick(() => {
        this.$refs.MenupopupForm.init()
      })
    },
    // 子传父的方法
    noneMenu() {
      this.MenupopupFormVisible = false
    },
    /** 点击编辑数据 */
    handleEdit(row) {
      console.log(row)
      // console.log(index, row)
      this.MenupopupFormVisible = true
      this.$nextTick(() => {
        this.$refs.MenupopupForm.backList(row)
      })
    },
    /**点击删除页面 */
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
.box-fenye {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>