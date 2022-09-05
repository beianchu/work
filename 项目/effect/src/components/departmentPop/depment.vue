<!-- depment 部门弹窗 -->
<template>
  <div>
    <el-dialog :title="isFlag?'新增部门':'编辑部门'" :visible.sync="flag" @close="closePop">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="ruleForm.name" style="width: 60%"></el-input>
        </el-form-item>
        <el-form-item label="部门层级" prop="listData">
          <el-tree :data="ruleForm.listData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" style="width: 60%"></el-input>
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button class="submit" @click="submitForm('ruleForm')">新增</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
			flag:false,
      isFlag: null,
      ruleForm: {
        desc: '',
        name: '',
        listData: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [
                  {
                    label: '三级 1-1-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 2',
            children: [
              {
                label: '二级 2-1',
                children: [
                  {
                    label: '三级 2-1-1'
                  }
                ]
              },
              {
                label: '二级 2-2',
                children: [
                  {
                    label: '三级 2-2-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 3',
            children: [
              {
                label: '二级 3-1',
                children: [
                  {
                    label: '三级 3-1-1'
                  }
                ]
              },
              {
                label: '二级 3-2',
                children: [
                  {
                    label: '三级 3-2-1'
                  }
                ]
              }
            ]
          }
        ]
      },

      defaultProps: {
        children: 'children',
        label: 'label'
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
  /**监听付传过来的状态 */

  methods: {
    // 点击添加数据子组件的状态
    init() {
      this.isFlag = true
      this.flag = true
    },
    // 点击数据回显
    back(row) {
      this.isFlag = false
      this.flag = true
      this.ruleForm = row
    },
    // 点击X
    closePop() {
      this.flag = false
      this.$emit('ok')
    },
    // 树形控件
    handleNodeClick(data) {
      console.log(data)
    },

    // 点击确定提交数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.flag = false
          this.$emit('ok')
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