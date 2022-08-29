// 表格和分页
<template>
  <div>
    <el-table
      class="table"
      header-algin="center"
      border
      stripe
      ref="multipleTable"
      :data="
        $store.state.tableData.slice((page - 1) * pageSize, page * pageSize)
      "
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55" class="ok" align="center">
      </el-table-column>
      <el-table-column label="学生名称" align="center">
        <template slot-scope="scope">
          <div class="pic">
            <img :src="scope.row.avatar" alt="" />
            <span>{{ scope.row.nickname }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" align="center">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status == 0">禁用</span>
          <span v-else>启用</span>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
        <template slot-scope="scope" align="center">
          {{ scope.row.created_at | time }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini">详情</el-button>
          <el-button type="text" size="mini">编辑—</el-button>
          <el-button type="text" size="mini">禁用</el-button>
          <el-button type="text" size="mini">删除</el-button>
          <el-button type="text" size="mini">重置密码</el-button>
        </template></el-table-column
      >
    </el-table>

    <div class="bottom">
      <div><el-button type="text">导出所选</el-button></div>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="$store.state.tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      options: [
        {
          value: "0",
          label: "禁用",
        },
        {
          value: "1",
          label: "启用",
        },
      ],
      value: "",
      flag: "",
      tableData: [],
      catchList: [],
      searVal: "",
      searchTel: "",
      page: 1,
      pageSize: 5,
    };
  },
  created() {
    axios.get("/list").then((res) => {
      console.log(res);
      this.$store.state.tableData = res.data.list;
      this.$store.state.catchList = res.data.list;
    });
  },
  mounted() {},
  filters: {
    time(value) {
      return new Date(parseInt(value) * 1000).toLocaleString();
    },
  },
  methods: {
    //   启用禁用状态选择
    changeSel(e) {
      console.log(e);
      this.flag = e;
      this.tableData = this.catchList.filter((item) => item.status == e);
    },
    // 搜索名称
    searchStu() {
      this.tableData = this.catchList.filter((item) =>
        item.nickname.includes(this.searVal)
      );
    },
    // 搜索手机号
    searchMobiel() {
      fn(this.searchTel);
      
    },
    fn(a) {
      this.tableData = this.catchList.filter((item) => item.mobile.includes(a));
    },
    // 重置
    close() {
      this.tableData = this.catchList;
      this.searchTel = "";
      this.searVal = "";
      this.value = "";
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.page = val;
    },
    // 联合搜索
    search() {
      this.tableData = this.catchList.filter(
        (item) =>
          item.nickname.includes(this.searVal) &&
          item.mobile.includes(this.searchTel) &&
          item.status == this.flag
      );
    },
  },
};
</script>
<style scoped lang="scss">
.ok {
  display: flex;
  justify-content: center;
}
.pic {
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
}
h3 {
  margin: 10px 0;
  border-bottom: 1px solid #eee;
  display: block;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.box {
  display: flex;
  align-items: center;
  p {
    font-size: 10px;
  }
}
.center {
  margin: 20px 0;
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
img {
  width: 20%;
}
.table {
  // display: flex;
  // justify-content: center;
  // text-align: center;
  margin: 10px;
}
</style>