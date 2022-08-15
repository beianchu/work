
<template>
  <div>
    <div class="box-top">
      <img src="../assets/logo.png" alt="" />
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
      </ul>
      <img class="admin" src="../assets/Snipaste_2022-08-15_19-25-33.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "head1",
  components: {},
  data() {
    return {
      arr: [
        "用户",
        "教学",
        "题库",
        "运营",
        "营销",
        "商品",
        "财务",
        "统计",
        "系统",
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.admin{
  position: absolute;
  right: 0;
}
* {
  margin: 0;
  padding: 0;
}
.box-top {
  position: relative;
  box-sizing: border-box;
  padding: 0 70px;
  width: 100%;
  height: 70px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
li {
  margin-left: 45px;
  list-style: none;
}
img {
  width: 60px;
  height: 40px;
}
ul {
  display: flex;
  justify-content: space-around;
}
</style>
