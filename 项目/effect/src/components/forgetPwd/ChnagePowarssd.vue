<template>
  <!-- 忘记密码弹框 -->
  <div>
    <div class="box-pwd">
      <el-dialog title="修改密码" :visible.sync="flag" @close="closePop">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.password2" autocomplete="off"></el-input>
          </el-form-item>

          <div class="box-submit">
            <el-button class="su-btn" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: '',
  components: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password2 !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        password2: '',
        account: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        account: [{ validator: checkAge, trigger: 'blur' }]
      },
      flag: false
    }
  },
  created() {},
  mounted() {},
	// 监听父
  watch: {
    data: function (newVal) {
      this.flag = newVal
    }
  },
  methods: {
		// 点击x
    closePop() {
      this.flag = false
      this.$emit('loginClick')
    },
    // 点击确认修改密码
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.flag = false
          this.$emit('loginClick')
          alert('submit')


        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 点击取消
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.box-submit {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .su-btn {
    background: #b886f8;
    color: white;
  }
}
::v-deep .el-dialog {
  width: 600px;
  border-radius: 10px;
  .el-input__inner {
    border-radius: 10px;
  }
}
</style>