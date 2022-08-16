// 头部组件
<template>
<div>
   <div id="full-screen">
      <h2 @click="screenFull" >
          <i
            class="el-icon-s-fold"
           
            @click="$store.state.isCollapse = !$store.state.isCollapse"
          ></i>
          <i
            class="el-icon-s-unfold"
            v-show="isCollapse"
            @click="isCollapse = !isCollapse"
          ></i>
          后台管理系统
         
        </h2>
      <h4 @click="screenFull">全屏</h4>   
   </div>
</div>
</template>

<script>

import screenfull from 'screenfull';

export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {
     screenFull() {
      //这里建议打印一下screenfull看看属性名称是不是enabled
      console.log(screenfull)
      if (!screenfull.isEnabled) {
        // 如果不允许进入全屏，发出不允许提示
        this.$message({
          message: '不支持全屏',
          type: 'warning',
        });
        return;
      }
      screenfull.toggle(document.getElementById('full-screen'));
     }
  }

}
</script>
<style scoped lang='scss'>
#full-screen{
  
}
</style>
