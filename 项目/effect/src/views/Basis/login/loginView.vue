<template>
  <!-- 登录页面 -->
  <div>
    <div class="box-img">
      <div class="box-login">
        <h4>OA系统登录</h4>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名">
              <i slot="prefix" class="el-icon-user-solid"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="ruleForm.pwd" placeholder="请输入密码">
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
            <p class="pwd-to" @click="dialogFormVisible = true">忘记密码?</p> </el-form-item
          ><br />

          <el-form-item prop="verify">
            <div class="tell-login">
              <el-input v-model="ruleForm.verify" class="mauyan" placeholder="验证码"> </el-input>
              <el-button><span>返送验证码</span></el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('ruleForm')" class="subitm">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-bottom">
        <span class="cpy-txt">@2022美团版权所有京ICP证070791号京公网安备110105020225545号</span>
      </div>
      <!-- 以上是登陆弹框 -->
      <!-- 忘记密码弹框 -->
      <changPwd :data="dialogFormVisible" @loginClick="noneLogin"></changPwd>
    </div>
    <!-- 以上是登陆页面 -->
  </div>
</template>

<script>
import axios from 'axios'
import changPwd from '../../../components/forgetPwd/ChnagePowarssd.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('loginModules')
export default {
  name: '',
  components: { changPwd },
  data() {
    return {
			/**父亲的状态 */
			dialogFormVisible:false,
      /**登录表单数据 */
      ruleForm: {
        name: '', //用户名
        pwd: '', //密码
        verify: '' //验证码
      },

      /**正则效验 */
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6到 10 个字符', trigger: 'blur' }
        ],
        verify: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
		// 子传父的接受的方法
		noneLogin(){
			this.dialogFormVisible=false
		},
    /**点击确定登录 */
    submitForm(formName) {
      this.$router.push('/Once')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.box-rad {
  border-radius: 10px;
}
.box-img {
  width: 100%;
  height: 100vh;
  background: url('../../../assets/login.png');
  background-size: 100% 100%;

  position: relative;
  .forget-box {
    .box-for {
      border-radius: 10px;
    }
    .submit {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .demo-ruleForm {
      width: 100%;
      .confirm {
        background: #b886f8;
        color: white;
      }
    }
  }
  .box-bottom {
    width: 100%;
    height: 200px;
    position: absolute;

    bottom: 0;
    .cpy-txt {
      display: block;
      width: 580px;
      margin: 80px auto;
      text-align: center;
      font-size: 13px;
    }
  }
  .box-login {
    // flex: 12;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 40px;
    width: 380px;
    min-height: 300px;
    background: white;
    border-radius: 10px;
    margin: 0;

    .pwd-to {
      display: block;
      height: 30px;
      position: absolute;
      right: 0;
      top: 30px;
      color: gold;
    }
    .tell-login {
      margin-top: -20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 20px;
      }

      .mauyan {
        width: 50%;
      }
    }
    h4 {
      margin: 10px 0;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }
  }
}
.subitm {
  width: 100%;
  height: 100%;
  background: #d3bef6;
  border-radius: 10px;
  color: white;
}
</style>