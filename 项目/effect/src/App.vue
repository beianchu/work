<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
.box-login {
  .el-input__inner {
    border-radius: 10px !important;
  }
  .el-button--default {
    border-radius: 10px !important;
  }
}
.box-pwd {
  .el-input__inner {
    width: 60% !important;
  }
}
.el-dialog {
  border-radius: 10px !important;
}
.el-icon-arrow-down:before {
  color: white !important;
}
.search-box{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 70px;
p{
	margin-right:10px ;
}
}
</style>