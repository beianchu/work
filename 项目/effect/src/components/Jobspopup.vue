<!-- 新增岗位弹窗 -->
<template>
  <div>
    <el-dialog title="新增岗位" :visible.sync="$store.state.jobsFormVisible">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="岗位名称" prop="name">
          <el-input v-model="ruleForm.name" style="width: 60%"></el-input>
        </el-form-item>
        <el-form-item label="岗位名称" prop="listData">
          <el-tree :data="ruleForm.listData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" style="width: 60%"></el-input>
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
  name: '',
  components: {},
  data() {
    return {
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
  methods: {
    // 点击树形控件参数
    handleNodeClick(data) {
      console.log(data)
    },
    // 点击确定提交数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.state.jobsFormVisible=false
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
::deep.el-input__inner {
  width: 60% !important;
}
.btn-box {
  display: flex;
  justify-content: flex-end;
  .submit {
    background: #b886f8;
  }
}
// ::deep.el-textarea__inner {
//   width: 60% !important;
// }
</style>