
<template>
  <div>
  
    <el-row>
      <el-col :span="6">
        <el-button type="primary" icon="el-icon-delete" @click="delAll"
          >删除选中</el-button
        ></el-col
      >
      <el-col :span="8">
        <el-select v-model="value" placeholder="地址" clearable @change="changeSel">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="10">
        <el-input placeholder="请输入内容" clearable v-model="searchVal" @input="search(searchVal)"> </el-input
      ></el-col>
    </el-row>

    <el-table
      ref="multipleTable"
      :data="
        $store.state.tableData
      "
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="ID" width="120"> </el-table-column>
      <el-table-column prop="name" label="用户名" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="price" label="账户余额" width="120">
      </el-table-column>
      <el-table-column label="头像(查看大图)" width="120">
        <template slot-scope="scope">
          <el-image
            class="pic"
            style="width: 40px; height: 40px"
            :src="scope.row.img"
            :preview-src-list="[scope.row.img]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="120">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="120">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state ? 'success' : 'warning'">{{
            scope.row.state ? "成功" : "失败"
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="注册时间" width="120">
        <template slot-scope="scope">{{ scope.row.create_time }}</template>
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editMsg">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Mock from "mockjs"
import axios from "axios";
// 引入辅助函数
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
  name: "",
  components: {},
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      searchVal:'',
      options: [
        {
          value: "广东",
          label: "广东",
        },
        {
          value: "山东",
          label: "山东",
        },
        {
          value: "湖南",
          label: "湖南",
        },
        {
          value: "福建",
          label: "福建",
        },
        {
          value: "河南",
          label: "河南",
        },
      ],
      value: "",

      tableData: [],
      catchData:[],
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        id:"",
        name: "",
        address: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    
    //请求mockjs‘数据
    axios.get("/getServeData").then(res=>{
      console.log(res)
    })
    this.getTableList();
  },
  mounted() {},
  methods: {
    // 辅助函数 语法糖
    ...mapMutations(['changeSel','handleSelectionChange','delAll','search','handleDelete']),
    // 搜索地址
      // changeSel(val){
      //     console.log(val);
      //   $store.state.tableData=$store.state.catchData.filter(item =>item.address.includes(val))
      // },
    //   获取数据
    getTableList() {
      axios.get("/getServeData").then((res) => {
        this.$store.state.tableData = res.data.list;
     this.$store.state.catchData=res.data.list
      });
    },
    // 选中删除
    // handleSelectionChange(val) {
    //   this.multipleSelection = val.map((item) => item.id);
    // },
    // delAll() {
    //   $store.state.tableData = $store.state.tableData.filter(
    //     (item) => !this.multipleSelection.includes(item.id)
    //   );
    // },
    // 编辑回显
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form.id=row.id
      this.form.name = row.name;
      this.form.address = row.address;
      console.log(this.form.id,row.id);
    },
    // 搜索用户名
    // search(){
    //     $store.state.tableData=$store.state.catchData.filter(item =>item.name.includes(this.searchVal))
    // },
    // 编辑成功
    editMsg() {
      const cItem=this.$store.state.tableData.find(item =>item.id==this.form.id)
      if(cItem){
        cItem.name=this.form.name
        cItem.address=this.form.address
        this.dialogFormVisible=false
      }
    },
    // 单个删除
    // handleDelete(index, row) {
    //   this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //     $store.state.tableData=$store.state.tableData.filter(item =>item.name!=row.name)
    //       this.$message({
    //         type: "success",
    //         message: "删除成功!",
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除",
    //       });
    //     });
    // },
  },
};
</script>
<style scoped lang='scss'>
.el-image__inner {
  width: 30px;
  height: 30px;
}
</style>
