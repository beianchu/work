<template>
	<div>
		<!--  系统管理-----》 角色管理 -->
		<div class="header">
			<div class="head">
				姓名:
				<el-input placeholder="请输入姓名"></el-input>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
				<el-button type="primary" icon="el-icon-circle-plus-outline" class="userAdd" @click="flag = true"
					>新增角色</el-button
				>
			</div>
		</div>

		<div class="aside">
			<template>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column type="index" label="id"> </el-table-column>
					<el-table-column prop="name" label="用户名称"> </el-table-column>
					<el-table-column prop="name" label="账号"> </el-table-column>
					<el-table-column prop="name" label="手机号"> </el-table-column>
					<el-table-column prop="name" label="所属角色"> </el-table-column>
					<el-table-column prop="name" label="所属职级"> </el-table-column>
					<el-table-column prop="name" label="所属部门"> </el-table-column>
					<el-table-column prop="name" label="操作" width="300px">
						<template slot-scope="scope">
							<el-button size="mini" icon="el-icon-edit" type="success" @click="xiugai(scope.row)">修改</el-button>
							<el-button size="mini" icon="el-icon-delete-solid" type="danger">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<roles :dialogFormVisible="flag" @close="flag = false"></roles>
		<rolesxiu v-if="dialogFormVisible" ref="dialogForm"></rolesxiu>
	</div>
</template>

<script>
import roles from './roles.vue'
import rolesxiu from './rolesxiu.vue'
export default {
	components: {
		roles,
		rolesxiu
	},
	data() {
		return {
			dialogFormVisible: false,
			/**点击新增出现的标识符 */
			flag: false,
			/**表格的数据 */
			tableData: [
				{
					name: '123123'
				}
			]
		}
	},

	mounted() {},

	methods: {
		xiugai(row) {
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs.dialogForm.init(row)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	.head {
		display: flex;
		height: 40px;
		line-height: 40px;
		font-size: 18px;

		.el-input {
			margin-left: 10px;
			width: 222px;
			margin-right: 20px;
		}
	}
}
</style>
