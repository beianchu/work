
<template>
  <div>
    <h4>{{ $route.meta.title }}</h4>
    <div class="cut-off-rule" />
    <!-- <h3>学员管理</h3> -->
    <el-row :gutter="24"  class="top-btn">
      <el-col :span="6" class="box">
        <p>学员状态</p>
        <p>
          <el-select v-model="value" placeholder="请选择" @change="changeSel">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </p>
      </el-col>
      <el-col :span="6" class="box">
        <p>学生名称</p>
        <p>
          <el-input
            v-model="searVal"
            placeholder="请输入学生关键字"
            @change="searchStu"
          ></el-input>
        </p>
      </el-col>
      <el-col :span="6" class="box">
        <p>手机号</p>
        <p>
          <el-input
            v-model="searchTel"
            placeholder="请输入手机号"
            @change="searchMobiel"
          ></el-input>
        </p>
      </el-col>
      <el-col :span="6">
        <el-button @click="search" icon="el-icon-search">搜索</el-button>
        <el-button @click="close" class="el-icon-edit">重置</el-button>
      </el-col>
    </el-row>
    <div class="center">
      <el-button type="primary">新增学员</el-button
      ><el-button type="primary">批量导入</el-button
      ><el-button type="primary">批量导出</el-button
      ><el-button type="primary">查看报表</el-button>
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
  // created() {
  //   axios.get("/list.json").then((res) => {
  //     this.$store.state.tableData = res.data;
  //     this.catchList = res.data;
  //   });
  // },
  mounted() {},
  filters: {
    time(value) {
      return new Date(parseInt(value) * 1000).toLocaleString();
    },
  },
  methods: {
    //   启用禁用状态选择
    changeSel(e) {
      this.flag = e;
      this.$store.state.tableData = this.$store.state.catchList.filter((item) => item.status == e);
    },
    // 搜索名称
    searchStu() {
      this.$store.state.tableData = this.$store.state.catchList.filter((item) =>
        item.nickname.includes(this.searVal)
      );
    },
    // 搜索手机号
    searchMobiel() {
      this.$store.state.tableData = this.$store.state.catchList.filter((item) =>
        item.mobile.includes(this.searchTel)
      );
    },
    // 重置
    close() {
      this.$store.state.tableData = this.$store.state.catchList;
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
      this.$store.state.tableData = this.$store.state.catchList.filter(
        (item) =>
          item.nickname.includes(this.searVal) &&
          item.mobile.includes(this.searchTel) &&
          item.status == this.flag
      );
    },
  },
};
</script>
<style scoped lang='scss'>
h4{
  margin-left:10px ;
}
.top-btn{
  margin: 15px;
}
* {
  margin: 0;
  padding: 0;
}
.cut-off-rule {
  border-bottom: 2px solid #000;
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
  margin: 20px 10px;
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
img {
  width: 20%;
}
</style>
