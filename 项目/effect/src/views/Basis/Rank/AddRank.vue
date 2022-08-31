<!-- rank 添加职级弹框！ -->
<template>
  <div>
    <el-dialog :title="isFlag?'新增职级':'编辑职级'" :visible.sync="flag" @close="closePop">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="职级名称" prop="name">
          <el-input v-model="ruleForm.name" style="width: 60%"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" style="width: 60%" placeholder="说明...."></el-input>
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button class="submit" @click="submitForm('ruleForm')">新增</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: '',
  components: {},
  data() {
    return {
			isFlag:null,
      flag: false,
      ruleForm: {
        desc: '',
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入岗位名称', trigger: 'blur' },
          { min: 3, max: 36, message: '长度在 3 到 36 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  // 监听父亲的状态

  methods: {
    // 新增
    addList() {
			this.isFlag=true
      this.flag = true
    },
    // 编辑回显
    backList(row) {
			this.isFlag=false
      this.flag = true
      this.ruleForm = row
    },
    // 点击x关闭
    closePop() {
      this.flag = false
      this.$emit('rankClick')
    },
    // 确认添加
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.flag = false
          this.$emit('rankClick')
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重置数据
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.btn-box {
  display: flex;
  justify-content: flex-end;
  .submit {
    background: #b886f8;
  }
}
</style>
