// 头部组件
<template>
<div>
    <el-menu
      default-active="/students"
      class="el-menu-vertical-demo"
      router
     >
      
      <el-menu-item index="/students">
        <i class="el-icon-menu"></i>
        <span slot="title">学生管理</span>
      </el-menu-item>
      
      <el-menu-item index="/teacher">
        <i class="el-icon-setting"></i>
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="/assistant">
        <i class="el-icon-setting"></i>
        <span slot="title">助教管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.el-menu-vertical-demo{
    text-align: center;
}
</style>
