<!-- 菜单管理 -->
<template>
  <div>
    <div class="jobs-serach">
      <p>菜单名称</p>
      <serchBtn></serchBtn>
      <p class="add-jobs" @click="$store.state.MenupopupFormVisible = true">
        <i class="el-icon-circle-plus-outline"></i> 新增菜单
      </p>
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
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </el-table-column>
                     
        </el-table>
               
      </div>
    </div>
    <!-- 以上是表格 -->
    <!-- 以下是分页 -->
    <div class="box-fenye">
      <pages></pages>
    </div>
    <!-- 菜单弹框 -->
    <menupopup></menupopup>
  </div>
</template>

<script>
import menupopup from '../components/Menu.vue'
import pages from '../components/PagesView.vue'
import serchBtn from '../components/SearchBtn.vue'
export default {
  name: '',
  components: { serchBtn, pages, menupopup },
  data() {
    return {
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
      ],
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
.box-fenye {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>